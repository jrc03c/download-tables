const papa = require("papaparse")
const fs = pseudoRequire("fs")
const path = pseudoRequire("path")
const jsdom = pseudoRequire("jsdom")

function pseudoRequire(thing) {
  try {
    return require(thing)
  } catch (e) {
    return null
  }
}

function leftPad(x, n) {
  let out = x.toString()
  while (out.length < n) out = "0" + out
  return out
}

function saveTextFile(text, filename) {
  // browser
  if (typeof window !== "undefined") {
    let a = document.createElement("a")
    a.href = "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    a.download = filename
    a.dispatchEvent(new MouseEvent("click"))
  }

  // node
  else {
    const dir = process.cwd()
    fs.writeFileSync(path.join(dir, filename), text, "utf8")
  }
}

function extractTables(raw, prefix) {
  prefix = prefix || ""

  const doc = (() => {
    if (!raw) {
      return document
    }

    try {
      const doctype = document.implementation.createDocumentType("html", "", "")
      const doc = document.implementation.createDocument("", "html", doctype)
      doc.documentElement.innerHTML = raw
      return doc
    } catch (e) {}

    try {
      const dom = new jsdom.JSDOM(raw)
      return dom.window.document
    } catch (e) {}

    return null
  })()

  if (!doc) {
    throw new Error(
      "In Node (but not necessarily in the browser), an HTML string must be passed into the `extractTables` function!"
    )
  }

  const tables = Array.from(doc.getElementsByTagName("table"))
  const savedFiles = []

  tables.forEach((table, i) => {
    const rows = Array.from(table.getElementsByTagName("tr"))

    const out = rows.map(row => {
      return Array.from(row.children).map(child => child.textContent)
    })

    const settings = {
      quotes: true,
      quoteChar: '"',
      escapeChar: '"',
      delimiter: ",",
      header: true,
      newline: "\r\n",
      skipEmptyLines: false,
      columns: null,
    }

    const savedFile =
      prefix + "table-" + leftPad(i, tables.length.toString().length) + ".csv"

    saveTextFile(papa.unparse(out, settings), savedFile)
    savedFiles.push(savedFile)
  })

  return savedFiles
}

if (typeof module !== "undefined") {
  module.exports = extractTables
}

if (typeof window !== "undefined") {
  window.extractTables = extractTables
}

const papa = require("papaparse")
const fs = pseudoRequire("fs")
const path = pseudoRequire("path")

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

function downloadText(text, filename) {
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

function downloadTables(doc) {
  doc = typeof window !== "undefined" ? document : doc

  if (!doc) {
    throw new Error(
      "In Node (but not in the browser), a JSDOM document — specifically the `dom.window.document` object — must be passed into the `downloadTables` function!"
    )
  }

  const tables = Array.from(doc.getElementsByTagName("table"))

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

    downloadText(
      papa.unparse(out, settings),
      leftPad(i, tables.length.toString().length) + ".csv"
    )
  })
}

if (typeof module !== "undefined") {
  module.exports = downloadTables
}

if (typeof window !== "undefined") {
  window.downloadTables = downloadTables
}

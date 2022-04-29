#!/usr/bin/env node
const path = require("path")
const extractTables = require("./index.js")
const fs = require("fs")

const helpMessage = `
  Syntax:

    \x1b[1m\x1b[33mextract-tables <pattern>\x1b[0m

  The pattern argument selects the HTML files to read. It can be a single file
  name or a glob pattern. Use \`extract-tables --help\` to show this
  message again.
`

if (process.argv.length < 3 || process.argv.indexOf("--help") > -1) {
  console.log(helpMessage)
  process.exit()
}

const files = process.argv.slice(2).map(f => path.resolve(f))

files.forEach(file => {
  const parts = file.split("/")
  const filename = parts[parts.length - 1]
  const prefix = filename.split(".")[0] + "-"
  const raw = fs.readFileSync(file, "utf8")
  const savedFiles = extractTables(raw, prefix)

  savedFiles.forEach(savedFile => {
    console.log("SAVED:", savedFile)
  })
})

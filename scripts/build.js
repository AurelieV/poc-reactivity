#! /usr/bin/env node

const fs = require('fs')
const path = require('path')

const TARGET_DIR = path.join(__dirname, '../dist')
const EDITOR_DIR = path.join(__dirname, '../dist-editor')
const WEBSITE_DIR = path.join(__dirname, '../dist-website')

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true })
} else {
  emptyDir(TARGET_DIR)
}

copy(EDITOR_DIR, TARGET_DIR)
copy(WEBSITE_DIR, path.join(TARGET_DIR, '_website'))

function copy(src, dest) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  } else {
    fs.copyFileSync(src, dest)
  }
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true })
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}

function emptyDir(dir) {
  if (!fs.existsSync(dir)) {
    return
  }
  for (const file of fs.readdirSync(dir)) {
    const abs = path.resolve(dir, file)
    if (fs.lstatSync(abs).isDirectory()) {
      emptyDir(abs)
      fs.rmdirSync(abs)
    } else {
      fs.unlinkSync(abs)
    }
  }
}

#!/usr/bin/env node
const { readdirSync } = require('fs');
const { join } = require('path');
const liveServer = require("live-server");

const projectNumber = process.argv[2];
if (projectNumber == null) {
  console.log(
    `---------- ERROR ---------
☠️  Project number required
Example: "./run.js 01"
--------------------------`)
  process.exit(1);
}

const projects = readdirSync(__dirname);

const project = projects.find((dir) => dir.startsWith(projectNumber))
const projectDir = join(__dirname, project);

liveServer.start({
  port: 8080,
  host: 'localhost',
  root: projectDir,
  open: true,
  ignore: undefined,
  file: "index-FINISHED.html",
  logLevel: 0,
});
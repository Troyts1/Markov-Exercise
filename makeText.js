
const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");


function generateNewText(text) {
  let mm = new markov.MarkovMachine(text);
  console.log(mm.makeText());
}

function makeText(path) {
  fs.readFile(path, "utf8", function cb(err, data) {
    if (err) {
      console.error(`Cannot read file: ${path}: ${err}`);
      process.exit(1);
    } else {
      generateNewText(data);
    }
  });
}

async function makeURLText(url) {
  let resp;
  try {
    resp = await axios.get(url);
  } catch (error) {
    console.error(`Cannot read URL: ${url} : ${error}`);
    process.exit(1);
  }
  generateNewText(resp.data);
}

let[method, path] = process.argv.slice(2);

if (method === "file"){
  makeText(path);
}

else if (method === "url") {
  makeURLText(path);
}

else {
  console.error(`Unknown method: ${method}`);
  process.exit(1);
}







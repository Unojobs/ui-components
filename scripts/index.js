const shell = require('./shellHelper');
const path = require('path');
const { readdirSync } = require('fs');
var fs = require('fs');
const { spawn, exec } = require('child_process');
let exportedComp;
let template =
  'import React from "react";import { Button as NBButton } from "native-base";export const Button = ({ ...props }: any) => {return <NBButton {...props}></NBButton>;};';

cloneNB();
function cloneNB() {
  shell.series(
    [
      'ls -a',
      // "git clone git@github.com:GeekyAnts/NativeBase.git"
    ],
    async function(err) {
      if (err) {
        console.log('Build Failed', err);
        reject(err);
      } else {
        let storiesPath = 'NativeBase/src/components/primitives/';
        let dir = getDirectories(storiesPath);
        // console.log(dir);
        exportedComp = getExportedStories('NativeBase/src/index.tsx');
        exportedComp = manipulateArr();
        console.log(exportedComp);
        await createFiles(dir);
      }
    }
  );
}

function manipulateArr() {
  const finalArr = [];
  let i = 0;
  while (i < exportedComp.length) {
    if (exportedComp[i] == 'import') {
      i++;
    }
    if (exportedComp[i] == "} from './components/composites'") i++;
    if (exportedComp[i] == "} from './components/primitives'") break;
    finalArr.push(exportedComp[i]);
    i++;
  }
  return finalArr;
}

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true }).map(dirent => {
    if (dirent.isDirectory()) {
      return getDirectories(source + dirent.name + '/');
    } else {
      return source + dirent.name + '/';
    }
  });

function getExportedStories(path) {
  let finalArray = [];
  try {
    const data = fs.readFileSync(path, 'utf8');
    let finalData = removeCommentsFromTSXFile(data);
    let exportedData = finalData.split('\n');
    for (let i = 0; i < exportedData.length; i++) {
      if (
        exportedData[i].slice(0, -1) !== '' &&
        !exportedData[i].slice(0, -1).includes('Props')
      ) {
        finalArray.push(exportedData[i].slice(0, -1).trim());
      }
    }
    return finalArray;
  } catch (err) {
    console.error(err);
  }
}
var getDirName = require('path').dirname;
const removeCommentsFromTSXFile = file => {
  return file.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '');
};

function checkIfPathIsExported(exportedComp, currentPath) {
  for (let i = 0; i < exportedComp.length; i++) {
    if (currentPath.includes(exportedComp[i])) {
      return true;
    }
  }
  return false;
}

async function createFiles(dir, flag) {
  return new Promise(async (resolve, reject) => {
    let path;
    for (let i = 0; i < dir.length; i++) {
      if (Array.isArray(dir[i])) {
        await createFiles(dir[i], 1);
      } else {
        if (checkIfPathIsExported(exportedComp, dir[i])) {
          if (!dir[i].includes('Tab')) {
            // continue;
            await createFileSync(dir[i]);
          }
        }
      }
    }
    resolve('All files created!');
  });
}

async function createFileSync(dir) {
  return new Promise((resolve, reject) => {
    // let path = dir.replace(
    //  "/NativeBase/example/storybook/stories",
    // );

    try {
      let regex = /\/primitives(.*)\.tsx/g;
      let regex1 = /\/primitives(.*)\.ts/g;

      let compName;
      if (dir.includes('.tsx')) compName = dir.match(regex)[0];
      else compName = dir.match(regex1)[0];
      // console.log(getModifiedData(compName, dir));

      writeFile('src/components' + compName, getModifiedData(compName, dir));
      // const data = fs.readFileSync(dir.slice(0, -1), "utf8");
      // if (dir.includes("index.tsx")) {
      //   let fileName = dir.split("/");
      //   fileName.pop();
      //   writeFile(
      //     path.replace(
      //       "index.tsx",
      //       fileName[fileName.length - 2] + ".stories.tsx"
      //     ),
      //     getModifiedData(data, dir)
      //   );
      // } else {
      //   writeFile(path, getData(data), () => {});
      // }
      resolve('Files created');
    } catch (err) {
      console.error(err);
      resolve('Files not created');
      reject(err);
    }
  });
}

function getModifiedData(compName, dir) {
  let data = '';
  if (
    // compName.includes('index') ||
    compName.includes('types') ||
    compName.includes('utils')
  ) {
    data = fs.readFileSync(dir.slice(0, -1), 'utf8');
  } else {
    // console.log(
    //   compName.split("/")[compName.split("/").length - 1].split(".")[0]
    // );
    data = template.replaceAll(
      'Button',
      compName.split('/')[compName.split('/').length - 1].split('.')[0]
    );
  }
  return data;
}
async function writeFile(path, contents) {
  // console.log(path);
  try {
    fs.mkdirSync(getDirName(path), { recursive: true });
    if (!fs.existsSync(path)) fs.writeFileSync(path, contents);
  } catch (err) {
    throw 'Parameter is not a number!';
  }
}

import "./lib/uncaught-handler";
import { AUTO } from "jimp";
import { ArgumentParser } from "argparse";
import { createInterface } from "readline";
import * as fs from "fs";
import { colored, optimizer } from "./lib";

const parser = new ArgumentParser({
  description: "Phoptimizator is a simple image optimizator from -cli.",
});

const cli = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const SUPPORTED_TYPES = ["jpg", "jpeg", "png", "tif", "gif", "bmp"];

parser.add_argument("-v", "--version", {
  action: "version",
  version: require("./../package.json").version,
});
parser.add_argument("-f", "--file", {
  help: "Image name on current path. Example: xxx.jpg",
  default: "ALL",
});
parser.add_argument("-p", "--path", {
  help: "Image path destination. Default: process.cwd()",
  default: process.cwd(),
});
parser.add_argument("-q", "--quality", {
  help: "Image quality. Default: 70",
  default: 70,
});
parser.add_argument("-he", "--height", {
  help: "Image height. Default: AUTO",
  default: AUTO,
});
parser.add_argument("-w", "--width", {
  help: "Image width. Default: 1920",
  default: 1920,
});
parser.add_argument("-o", "--overwrite", {
  help: "Overwrite. If you set this option, optimized image overwrites original file with same name.",
  default: false,
});

const options = parser.parse_args();

(async () => {
  const questionString =
    Object.keys(options).reduce((acc, key) => {
      return acc + `${key}: ${options[key]}` + "\n";
    }, `Options: \n`) + `\nAre you sure you want to continue? (y/n)`;

  cli.question(questionString, async (answer) => {
    if (answer.toLowerCase() === "y") {
      let optimizeFiles: string[] = [];

      if (options.file === "ALL") {
        const files = await fs.promises.readdir(options.path);

        optimizeFiles = files.filter((file) => {
          const splittedFile = file.split(".");
          const extension = splittedFile[splittedFile.length - 1];

          return SUPPORTED_TYPES.includes(extension);
        });

        console.log(optimizeFiles);
      } else {
        optimizeFiles.push(options.file);
      }

      for (let i = 0; i < optimizeFiles.length; i++) {
        const file = optimizeFiles[i];
        console.log(
          colored(
            `Optimizing ${file}... [${i + 1}/${optimizeFiles.length}]`,
            "info"
          )
        );

        await optimizer(
          options.path,
          file,
          options.overwrite,
          options.width,
          options.height,
          options.quality
        );
      }

      console.log(colored("Optimization completed!", "success"));
      process.exit(5);
    } else {
      console.log(colored("Optimization canceled!", "error"));
      process.exit(13);
    }
  });
})();

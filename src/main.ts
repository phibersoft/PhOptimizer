import * as Jimp from "jimp";
import {ArgumentParser} from "argparse";
import {createInterface} from "readline";
import * as chalk from "chalk";
import cliSpinners from "cli-spinners";
import * as fs from "fs";
const logUpdate = require('log-update');

const parser = new ArgumentParser({
    description: 'Phoptimizator is a simple image optimizator from -cli.',
});

parser.add_argument('-v', '--version', {action: 'version', version: require('./../package.json').version});
parser.add_argument('-f', '--file', {help: 'Image name on current path. Example: xxx.jpg', default: 'ALL' });
parser.add_argument('-p', '--path', {help: 'Image path destination. Default: process.cwd()', default: process.cwd()});
parser.add_argument('-q', '--quality', {help: 'Image quality. Default: 70', default: 70});
parser.add_argument('-he', '--height', {help: 'Image height. Default: AUTO', default: Jimp.AUTO});
parser.add_argument('-w', '--width', {help: 'Image width. Default: 1920', default: 1920});
parser.add_argument('-o', '--overwrite', {help: 'Overwrite. If you set this option, optimized image overwrites original file with same name.', default: false});

const opts = parser.parse_args();
const supported_types = ['jpg', 'jpeg', 'png', 'tif', 'gif', 'bmp'];


const optimizer = async (path: string, imageName: string, overwrite: boolean, width: number, height = Jimp.AUTO, quality: number) => {
    var img = await Jimp.read(`${path}\\${imageName}`);
    var _height = height === Jimp.AUTO ? Jimp.AUTO : Number(height);
    await img.resize(width, _height);
    await img.quality(quality);

    if(overwrite === false){
        const splt = imageName.split(".");
        const realImageName = splt.slice(0, splt.length - 1).join(".");
        const newPath = `${path}\\${realImageName}_optimized.jpeg`;
        await img.writeAsync(newPath);
    } else {
        await img.writeAsync(`${path}\\${imageName}`);
    }
};

const throwError = (msg: string) => {
    console.log(["\n", chalk.redBright(msg), "\n"].join(''));
    process.exit();
}

(async () => {
    try{
        var questionString = `Options: \n`;
        questionString += Object.keys(opts).map((k) => chalk.cyanBright(`${k} = ${opts[k]}`)).join('\n');
        questionString += `\nDo you confirm (y/n)? `;

        const q1 = createInterface({
            input: process.stdin,
            output: process.stdout
        });

        q1.question(questionString, async (a) => {
            if(a == "y" || a === "Y"){
                if(opts.file === 'ALL'){
                    fs.readdir(opts.path, async (err, files) => {
                        var will_use_files:string[] = [];
                        for(var j = 0; j < files.length; j++){
                            const file = files[j]; // example.tsx
                            const splt = file.split("."); // [example, tsx]
                            const extension = splt[splt.length - 1]; // example.tsx
                            if(supported_types.includes(extension)){
                                will_use_files.push(file);
                            }
                        }
                        if(will_use_files.length === 0){
                            throwError(`No files found with type: ${supported_types.join(',')}`);
                        }

                        const questionString = `\nFiles:\n` + chalk.blueBright(will_use_files.join('\n')) + `\nDo you confirm(y/n)? `;

                        q1.question(questionString, async (b) => {
                            if(b.startsWith('y') || b.startsWith('Y')){
                                const spinner = cliSpinners.dots;
                                let i = 0;

                                for(var x = 0; x < will_use_files.length; x++){
                                    const file = will_use_files[x];
                                    const consoleText = ` Optimizing (${x + 1}/${will_use_files.length}) : ${file}`;

                                    const processing = setInterval(() => {
                                        const {frames} = spinner;
                                        logUpdate(frames[i = ++i % frames.length] + chalk.yellowBright(consoleText));
                                    }, spinner.interval);

                                    await optimizer(opts.path, file, opts.overwrite, Number(opts.width), opts.height, Number(opts.quality));

                                    clearInterval(processing);
                                }

                                console.log(chalk.greenBright('Process finished.'));
                                process.exit(1);
                            } else {
                                throwError('User cancelled process');
                            }
                        })
                    });
                } else {
                    const spinner = cliSpinners.dots;
                    let i = 0;

                    const processing = setInterval(() => {
                        const {frames} = spinner;
                        logUpdate(frames[i = ++i % frames.length] + `Optimizing ${chalk.yellowBright(opts.file)}`);
                    }, spinner.interval);

                    await optimizer(opts.path, opts.file, opts.overwrite, Number(opts.width), opts.height, Number(opts.quality));

                    clearInterval(processing);
                    console.log(chalk.greenBright(`Process finished.`));
                    process.exit();
                }
            } else{
                throwError('User cancelled process.');
            }
        })
    }catch(e){
        console.log(chalk.redBright(`Unexpected Error: ${e.message}`));
        process.exit(1);
    }

})()
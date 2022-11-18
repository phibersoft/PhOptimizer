# PhOptimizer
This package optimizes images on localdisk via command line.

## Usage

### Installation
```bash
npm install -g phoptimizer
```
### Story
You have a example.jpg in current command line directory. <br />
Example.jpg is (4,752px X 3,168px) and 1.95MB.
### Command
```bash
phoptimizer --file example.jpg
```
### Result
In current path we have a 2 images now. "example.jpg" , "example_optimised.jpg". <hr />
Example.jpg is still (4,752px X 3,168px) and 1.95mB. <br />
Example_optimised.jpg is (1920px X 1280px) and 351kB.

## Args
|     Arg     | Alias |  Type   |                  Description                   |           Default            |       Example       |
|:-----------:|:-----:|:-------:|:----------------------------------------------:|:----------------------------:|:-------------------:|
|   --file    |  -f   | string  |                   File Name                    |         ALL in path          |     example.jpg     |
|   --path    |  -p   | string  |                   Path Name                    | Current path (process.cwd()) | C:/users/phibersoft |
| --overwrite |  -o   | boolean | Optimized image will overwrite original image. |            false             |        true         |
|   --width   |  -w   | number  |                  Image width                   |             1920             |        2400         |
|  --height   |  -he  | number  |                  Image height                  |        Auto by width         |        1080         |
|  --quality  |  -q   | number  |                 Image Quality                  |              70              |         100         |

## Examples
### Specific file with custom configuration
```bash
phoptimizer -f example.jpeg --height 1080 --width 1920 --quality 95 --overwrite
```

### Specific path (All Files)
```bash
phoptimizer -p C:\\users\\spirn\\images
```

### Specific path (Single File)
```bash
phoptimizer -p C:\\users\\spirn\\images -f example.jpeg
```


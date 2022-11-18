import { AUTO, read } from "jimp";

export const optimizer = async (
  path: string,
  imageName: string,
  overwrite: boolean,
  width: number,
  height = AUTO,
  quality = 80
) => {
  const image = await read(path);

  await image.contain(width, height);
  await image.quality(quality);

  if (overwrite) {
    await image.writeAsync(`${path}\\${imageName}`);
  } else {
    const imageNameSplitted = imageName.split(".");
    const imageNameWithoutExtension = imageNameSplitted
      .slice(0, imageNameSplitted.length - 1)
      .join(".");
    const imageExtension = imageNameSplitted[imageNameSplitted.length - 1];

    await image.writeAsync(
      `${path}\\${imageNameWithoutExtension}-optimized.${imageExtension}`
    );
  }
};

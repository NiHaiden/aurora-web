export const getImageName = (
  hardwareExtended: boolean,
  primaryGPU: string,
  devEdition: string,
) => {
  let imageName: string = "";

  imageName += isDevEdition(devEdition) ? "aurora-dx" : "aurora";
  imageName += hardwareExtended ? "-hwe" : "";
  switch (primaryGPU) {
    case "nvidia-legacy":
      imageName += "-nvidia-stable";
      break;
    case "nvidia":
      imageName += "-nvidia-open-stable";
      break;
    default:
      imageName += "-stable";
      break;
  }


  return imageName;
};

const isDevEdition = (devEdition: string) => {
  return devEdition === "yes";
};

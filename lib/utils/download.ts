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
      if(hardwareExtended) {
        imageName += "-nvidia-latest";
        break;
      }
      imageName += "-nvidia-stable";
      break;
    case "nvidia":
      if(hardwareExtended) {
        imageName += "-nvidia-open-latest";
        break;
      }
      imageName += "-nvidia-open-stable-x86_64";
      break;
    default:
      if(hardwareExtended) {
        imageName += "-latest";
        break;
      }
      imageName += "-stable-x86_64";
      break;
  }


  return imageName;
};

const isDevEdition = (devEdition: string) => {
  return devEdition === "yes";
};

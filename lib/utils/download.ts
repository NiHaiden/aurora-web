export const getImageName = (
  hardware: string,
  primaryGPU: string,
  devEdition: string,
) => {
  let imageName: string = "";

  imageName += isDevEdition(devEdition) ? "aurora-dx" : "aurora";
  switch (hardware) {
    case "desktop":
      if (primaryGPU === "nvidia") {
        imageName += "-nvidia-stable";
      } else imageName += "-stable";
      break;
    case "asus":
      if (primaryGPU === "nvidia") imageName += "-asus-nvidia-latest";
      else imageName += "-asus-latest";
      break;
    case "surface":
      if (primaryGPU === "nvidia") imageName += "-surface-nvidia-latest";
      else imageName += "-surface-latest";
      break;
    case "framework":
      imageName += "-stable";
      break;
  }

  return imageName;
};

const isDevEdition = (devEdition: string) => {
  return devEdition === "yes";
};

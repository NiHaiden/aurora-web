export const getImageName = (hardware: string, primaryGPU: string, devEdition: string) => {
    let imageName: string = "";

    imageName += (isDevEdition(devEdition) ? "aurora-dx": "aurora")
    switch (hardware) {
        case "desktop":
            break;
        case "asus":
            imageName += "-asus"
            break;
        case "surface":
            imageName += "-surface"
            break;
        case "framework":
            break;
    }

    if (primaryGPU === "nvidia" && hardware !== "framework") {
        imageName += "-nvidia"
    }

    return imageName;
}


const isDevEdition = (devEdition: string) => {
    return devEdition === "yes";
}
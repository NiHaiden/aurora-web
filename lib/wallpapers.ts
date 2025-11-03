import fs from "fs";
import path from "path";

export interface WallpaperMetadata {
  id: string;
  title: string;
  description: string;
  filename: string;
  author: string;
  date: string;
  tags: string[];
  resolution: string;
  fileSize: string;
}

export interface Wallpaper extends WallpaperMetadata {
  path: string;
  url: string;
}

export async function getWallpapers(): Promise<Wallpaper[]> {
  try {
    const wallpapersDir = path.join(process.cwd(), "public", "wallpapers");
    const wallpaperFolders = fs.readdirSync(wallpapersDir);

    const wallpapers: Wallpaper[] = [];

    for (const folder of wallpaperFolders) {
      const folderPath = path.join(wallpapersDir, folder);
      const stat = fs.statSync(folderPath);

      if (stat.isDirectory()) {
        const metadataPath = path.join(folderPath, "metadata.json");

        if (fs.existsSync(metadataPath)) {
          try {
            const metadataContent = fs.readFileSync(metadataPath, "utf-8");
            const metadata: WallpaperMetadata = JSON.parse(metadataContent);

            const wallpaper: Wallpaper = {
              ...metadata,
              path: path.join(folderPath, metadata.filename),
              url: `/wallpapers/${folder}/${metadata.filename}`,
            };

            wallpapers.push(wallpaper);
          } catch (error) {
            console.error(`Error reading metadata for ${folder}:`, error);
          }
        }
      }
    }

    // Sort by date (newest first)
    return wallpapers.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  } catch (error) {
    console.error("Error loading wallpapers:", error);
    return [];
  }
}

export async function getWallpaperById(id: string): Promise<Wallpaper | null> {
  const wallpapers = await getWallpapers();
  return wallpapers.find((wallpaper) => wallpaper.id === id) || null;
}

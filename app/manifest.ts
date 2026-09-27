import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Oskar Pajka — Full-Stack Developer",
    short_name: "Oskar Pajka",
    description:
      "Portfolio of Oskar Pajka, a Full-Stack Developer building clean, fast, and accessible web applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

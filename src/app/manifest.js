export default function manifest() {
  return {
    background_color: "#11191f",
    description: "5,000 most commonly used Spanish vocabulary",
    display: "standalone",
    icons: [
      {
        sizes: "192x192",
        src: "/logo192.png",
        type: "image/png",
      },
      {
        sizes: "512x512",
        src: "/logo512.png",
        type: "image/png",
      },
    ],
    name: "Spanish Vocab",
    orientation: "portrait",
    short_name: "Spanish Vocab",
    start_url: "/",
    theme_color: "#11191f",
  };
}

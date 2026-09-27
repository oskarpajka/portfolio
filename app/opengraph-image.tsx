import { ImageResponse } from "next/og";

export const alt = "Oskar Pajka — Full-Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffd500",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ffffff",
            border: "8px solid #000000",
            boxShadow: "16px 16px 0 #000000",
            padding: "56px 72px",
          }}
        >
          <div
            style={{
              fontSize: 100,
              fontWeight: 900,
              lineHeight: 1,
              color: "#000000",
              letterSpacing: "-2px",
            }}
          >
            Oskar Pajka
          </div>
          <div
            style={{
              marginTop: 20,
              display: "flex",
              backgroundColor: "#000000",
              color: "#ffd500",
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: "4px",
              padding: "12px 24px",
              textTransform: "uppercase",
            }}
          >
            Full-Stack Developer
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

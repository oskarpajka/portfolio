import { ImageResponse } from "next/og";

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
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            border: "8px solid #000000",
            backgroundColor: "#facc15",
            padding: "48px 64px",
            boxShadow: "16px 16px 0px 0px #000000",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "120px",
              height: "120px",
              backgroundColor: "#000000",
              color: "#facc15",
              fontSize: "72px",
              fontWeight: 900,
            }}
          >
            O
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "64px", fontWeight: 900, color: "#000000" }}>
              Oskar Pajka
            </div>
            <div style={{ fontSize: "32px", fontWeight: 700, color: "#000000", opacity: 0.7 }}>
              Full-Stack Developer
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

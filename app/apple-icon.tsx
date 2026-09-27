import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "132px",
            height: "132px",
            border: "6px solid #ffffff",
            color: "#facc15",
            fontSize: "84px",
            fontWeight: 900,
          }}
        >
          O
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

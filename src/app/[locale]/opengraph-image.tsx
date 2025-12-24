import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Duy Nguyen | Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        {/* Developer Icons Grid */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "60px",
            left: "60px",
            gap: "30px",
            opacity: 0.15,
          }}
        >
          {/* Terminal Icon */}
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>

          {/* Code Icon */}
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>

          {/* Braces Icon */}
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
            <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
          </svg>
        </div>

        {/* Bottom Right Icons */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "60px",
            right: "60px",
            gap: "30px",
            opacity: 0.15,
          }}
        >
          {/* Git Branch Icon */}
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="6" y1="3" x2="6" y2="15" />
            <circle cx="18" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M18 9a9 9 0 0 1-9 9" />
          </svg>

          {/* Database Icon */}
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14a9 3 0 0 0 18 0V5" />
            <path d="M3 12a9 3 0 0 0 18 0" />
          </svg>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
          }}
        >
          {/* Large Terminal Prompt */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            <span
              style={{
                fontSize: "72px",
                fontWeight: "bold",
                color: "#06b6d4",
                fontFamily: "monospace",
              }}
            >
              &gt;_
            </span>
            <span
              style={{
                fontSize: "72px",
                fontWeight: "bold",
                background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
                backgroundClip: "text",
                color: "transparent",
                fontFamily: "monospace",
              }}
            >
              Duy Nguyen
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "48px",
              fontWeight: "600",
              color: "#e5e7eb",
              marginBottom: "20px",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Software Engineer
          </div>

          {/* Tech Stack Pills */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            {["React", "TypeScript", "Node.js", "AWS"].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "rgba(6, 182, 212, 0.1)",
                  border: "2px solid #06b6d4",
                  borderRadius: "8px",
                  color: "#06b6d4",
                  fontSize: "24px",
                  fontWeight: "500",
                  fontFamily: "monospace",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Code-like footer */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "20px",
            color: "#4b5563",
            fontFamily: "monospace",
          }}
        >
          // 5+ years of experience | Full-stack Developer
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

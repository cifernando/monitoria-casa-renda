"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import html2canvas from "html2canvas-pro";

interface StoryButtonProps {
  studentName: string;
  feedback: string;
  photo: string;
  gender: "m" | "f";
}

export function StoryButton({ studentName, feedback, photo, gender }: StoryButtonProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const cachedFile = useRef<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const fileName = `monitoria-casa-renda-${studentName.toLowerCase().replace(/\s+/g, "-")}.png`;

  // Pre-generate the story image on mount so sharing is instant on tap
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;

    const timer = setTimeout(async () => {
      el.style.display = "flex";
      const canvas = await html2canvas(el, {
        width: 1080,
        height: 1920,
        scale: 1,
        useCORS: true,
        backgroundColor: null,
      });
      el.style.display = "none";

      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((b) => resolve(b!), "image/png");
      });
      cachedFile.current = new File([blob], fileName, { type: "image/png" });
    }, 500);

    return () => clearTimeout(timer);
  }, [fileName]);

  const shareStory = useCallback(async () => {
    if (isGenerating) return;
    setIsGenerating(true);

    try {
      // Generate if not pre-cached yet
      if (!cachedFile.current) {
        const el = canvasRef.current;
        if (!el) return;
        el.style.display = "flex";
        const canvas = await html2canvas(el, {
          width: 1080,
          height: 1920,
          scale: 1,
          useCORS: true,
          backgroundColor: null,
        });
        el.style.display = "none";
        const blob = await new Promise<Blob>((resolve) => {
          canvas.toBlob((b) => resolve(b!), "image/png");
        });
        cachedFile.current = new File([blob], fileName, { type: "image/png" });
      }

      const file = cachedFile.current;

      let shared = false;
      if (navigator.share) {
        try {
          await navigator.share({ files: [file] });
          shared = true;
        } catch (err) {
          if ((err as DOMException).name === "AbortError") {
            shared = true;
          }
        }
      }

      if (!shared) {
        const link = document.createElement("a");
        link.download = fileName;
        link.href = URL.createObjectURL(file);
        link.click();
        URL.revokeObjectURL(link.href);
      }
    } finally {
      setIsGenerating(false);
    }
  }, [fileName, isGenerating]);

  const firstName = studentName.split(" ")[0];

  return (
    <>
      <button
        onClick={shareStory}
        disabled={isGenerating}
        className="w-full bg-turquesa hover:bg-turquesa/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-sm uppercase tracking-[0.15em] cursor-pointer disabled:opacity-60 disabled:cursor-wait"
      >
        {isGenerating ? "Gerando..." : "Compartilhar no Stories"}
      </button>

      {/* Hidden story art — rendered offscreen for html2canvas */}
      <div
        ref={canvasRef}
        style={{
          display: "none",
          width: 1080,
          height: 1920,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(170deg, #FFF8F0 0%, #F5EDE3 35%, #FFF8F0 65%, #F5EDE3 100%)",
          position: "fixed",
          top: -9999,
          left: -9999,
          fontFamily: "Lato, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Top decorative border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "linear-gradient(90deg, #2A9D8F, #8B0020, #E76F51)",
          }}
        />

        {/* Subtle corner accents — top left */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            width: 80,
            height: 80,
            borderTop: "2px solid rgba(139, 0, 32, 0.15)",
            borderLeft: "2px solid rgba(139, 0, 32, 0.15)",
          }}
        />

        {/* Subtle corner accents — top right */}
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            width: 80,
            height: 80,
            borderTop: "2px solid rgba(139, 0, 32, 0.15)",
            borderRight: "2px solid rgba(139, 0, 32, 0.15)",
          }}
        />

        {/* Subtle corner accents — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 40,
            width: 80,
            height: 80,
            borderBottom: "2px solid rgba(139, 0, 32, 0.15)",
            borderLeft: "2px solid rgba(139, 0, 32, 0.15)",
          }}
        />

        {/* Subtle corner accents — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            width: 80,
            height: 80,
            borderBottom: "2px solid rgba(139, 0, 32, 0.15)",
            borderRight: "2px solid rgba(139, 0, 32, 0.15)",
          }}
        />

        {/* Decorative dots — top */}
        <div
          style={{
            display: "flex",
            gap: 20,
            marginBottom: 50,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#2A9D8F" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#8B0020" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#E76F51" }} />
        </div>

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-casa-renda.png"
          alt=""
          width={100}
          height={125}
          style={{ marginBottom: 40, objectFit: "contain" }}
        />

        {/* Badge */}
        <div
          style={{
            background: "#8B0020",
            color: "#FFF8F0",
            padding: "18px 56px",
            borderRadius: 50,
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            marginBottom: 40,
          }}
        >
          {gender === "m" ? "APROVADO" : "APROVADA"}
        </div>

        {/* Name */}
        <div
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: 90,
            fontWeight: 700,
            color: "#8B0020",
            textAlign: "center" as const,
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          {firstName}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 30,
            color: "#6B5B50",
            textAlign: "center" as const,
            marginBottom: 40,
            fontWeight: 300,
            letterSpacing: "0.05em",
          }}
        >
          Monitoria Casa Rendá 2026
        </div>

        {/* Student photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo}
          alt=""
          width={280}
          height={280}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #8B0020",
            marginBottom: 40,
            width: 280,
            height: 280,
          }}
        />

        {/* Elegant divider with dot */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 1,
              background: "linear-gradient(90deg, transparent, #8B0020)",
            }}
          />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#E76F51" }} />
          <div
            style={{
              width: 80,
              height: 1,
              background: "linear-gradient(90deg, #8B0020, transparent)",
            }}
          />
        </div>

        {/* Feedback */}
        <div
          style={{
            fontSize: feedback.length > 200 ? 24 : 28,
            color: "#6B5B50",
            textAlign: "center" as const,
            fontStyle: "italic",
            lineHeight: 1.7,
            maxWidth: 860,
            marginBottom: 24,
            padding: "0 60px",
          }}
        >
          &ldquo;{feedback}&rdquo;
        </div>

        <div
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: 24,
            color: "#8B0020",
            marginBottom: 60,
          }}
        >
          — Clara Guimarães
        </div>

        {/* Bottom branding */}
        <div
          style={{
            display: "flex",
            flexDirection: "column" as const,
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: 28,
              color: "#8B0020",
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            Casa Rendá
          </div>
          <div style={{ fontSize: 18, color: "#6B5B50", letterSpacing: "0.15em" }}>
            Arte que Entrelaça
          </div>
        </div>

        {/* Bottom decorative border */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "linear-gradient(90deg, #E76F51, #8B0020, #2A9D8F)",
          }}
        />
      </div>
    </>
  );
}

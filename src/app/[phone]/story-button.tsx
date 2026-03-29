"use client";

import { useRef, useCallback } from "react";
import html2canvas from "html2canvas-pro";

interface StoryButtonProps {
  studentName: string;
  feedback: string;
}

export function StoryButton({ studentName, feedback }: StoryButtonProps) {
  const canvasRef = useRef<HTMLDivElement>(null);

  const generateStory = useCallback(async () => {
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

    const link = document.createElement("a");
    link.download = `monitoria-casa-renda-${studentName.toLowerCase().replace(/\s+/g, "-")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, [studentName]);

  const firstName = studentName.split(" ")[0];

  return (
    <>
      <button
        onClick={generateStory}
        className="w-full bg-turquesa hover:bg-turquesa/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-sm uppercase tracking-[0.15em] cursor-pointer"
      >
        Compartilhar no Stories
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
          background: "linear-gradient(180deg, #FFF8F0 0%, #F5EDE3 40%, #FFF8F0 100%)",
          padding: 80,
          position: "fixed",
          top: -9999,
          left: -9999,
          fontFamily: "Lato, sans-serif",
        }}
      >
        {/* Top decorative dots */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginBottom: 60,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#2A9D8F" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#8B0020" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#E76F51" }} />
        </div>

        {/* Badge */}
        <div
          style={{
            background: "#8B0020",
            color: "#FFF8F0",
            padding: "16px 48px",
            borderRadius: 50,
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            marginBottom: 50,
          }}
        >
          APROVADO(A)
        </div>

        {/* Name */}
        <div
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: 80,
            fontWeight: 700,
            color: "#8B0020",
            textAlign: "center" as const,
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          {firstName}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: "#6B5B50",
            textAlign: "center" as const,
            marginBottom: 60,
            fontWeight: 300,
          }}
        >
          Monitoria Casa Rendá 2026
        </div>

        {/* Divider */}
        <div
          style={{
            width: 160,
            height: 2,
            background: "linear-gradient(90deg, transparent, #8B0020, transparent)",
            marginBottom: 60,
          }}
        />

        {/* Quote */}
        <div
          style={{
            fontSize: 34,
            color: "#6B5B50",
            textAlign: "center" as const,
            fontStyle: "italic",
            lineHeight: 1.6,
            maxWidth: 800,
            marginBottom: 20,
          }}
        >
          &ldquo;A dança é feita de encontros, e que alegria ter encontrado você nesse caminho.&rdquo;
        </div>

        <div
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: 28,
            color: "#8B0020",
            marginBottom: 80,
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
            gap: 12,
          }}
        >
          <div style={{ fontSize: 24, color: "#8B0020", fontWeight: 700 }}>
            Casa Rendá
          </div>
          <div style={{ fontSize: 18, color: "#6B5B50" }}>
            Arte que Entrelaça
          </div>
        </div>
      </div>
    </>
  );
}

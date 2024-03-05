"use client";
// components/QRCodeGenerator.tsx
import { useRef, useState } from "react";

const QRCodeGenerator = () => {
  const [text, setText] = useState<string>("");
  const [logo, setLogo] = useState<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQRCode = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Generate QR code
    const qrCodeSize = 200;
    const qrCode = new Image();
    {
      /*    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=${qrCodeSize}x${qrCodeSize}&data=${encodeURIComponent(
      text
    )}`;
  */
    }
    qrCode.onload = () => {
      // Draw QR code on canvas
      context.drawImage(qrCode, 0, 0, qrCodeSize, qrCodeSize);

      // Add logo to the center
      if (logo) {
        const logoSize = 50; // Adjust the size as needed
        const centerX = (canvas.width - logoSize) / 2;
        const centerY = (canvas.height - logoSize) / 2;
        context.drawImage(logo, centerX, centerY, logoSize, logoSize);
      }
    };
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const logoImage = new Image();
      logoImage.src = reader.result as string;
      setLogo(logoImage);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="z-10 text-black">
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text"
      />
      <input type="file" onChange={handleLogoChange} accept="image/*" />
      <button onClick={generateQRCode}>Generate QR Code</button>
      <canvas ref={canvasRef} width={200} height={200}></canvas>
    </div>
  );
};

export default QRCodeGenerator;

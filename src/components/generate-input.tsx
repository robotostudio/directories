import { useState } from "react";

export function GenerateInput({
  value,
  setValue,
  onSubmit,
  isLoading,
}: {
  value: string;
  setValue: (value: string) => void;
  onSubmit: (packageJson?: string) => void;
  isLoading: boolean;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const placeholder =
    "Search for a rule or MCP server, or drag and drop your package.json";

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file?.name?.endsWith("package.json")) {
      const text = await file.text();

      setValue("package.json");
      onSubmit(text);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSubmit();
    setValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto h-[60px] bg-[#121212] border border-[#2C2C2]">
      <form
        className="h-full w-full"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onSubmit={handleSubmit}
      >
        <div className="relative h-full">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full text-[#585858] text-xs bg-transparent p-4 resize-none focus:outline-none"
          />

          {!value && (
            <div className="absolute top-4 left-4 pointer-events-none">
              {placeholder.split("").map((char, index) => (
                <span
                  key={index.toString()}
                  style={{
                    display: "inline-block",
                    opacity: 0,
                    color: "#585858",
                    animation: `fadeIn 0.02s ease forwards ${0.2 + index * 0.002}s`,
                    fontSize: "14px",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
          )}
        </div>
      </form>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            filter: blur(2px);
          }
          to {
            opacity: 1;
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  );
}

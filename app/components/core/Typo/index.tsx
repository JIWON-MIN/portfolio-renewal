import { ReactElement } from "react";

interface TypoProps {
  variant?: string;
  color?: string;
  display?: "box" | "inline";
  style?: object;
  children: React.ReactNode;
}

export default function Typo(props: TypoProps) {
  const { variant = "t2", color = "black", display = "inline", style, children } = props;
  // 18 24 30 36
  // 48 60 120
  const renderSize = (variant: string) => {
    switch (variant) {
      case "t1":
        return "18px";
      case "t2":
        return "24px";
      case "t3":
        return "30px";
      case "h1":
        return "48px";
      case "h2":
        return "60px";
      case "h3":
        return "120px";
      default:
        return variant;
    }
  };

  return (
    <div
      style={{
        display: display === "inline" ? "block" : "inline",
        fontSize: renderSize(variant),
        color: color,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

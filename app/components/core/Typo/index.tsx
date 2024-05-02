interface TypoProps {
  variant?: string;
  color?: string;
  display?: "box" | "inline";
  style?: object;
  className?: string;
  bold?: boolean;
  children: React.ReactNode;
}

export default function Typo(props: TypoProps) {
  const { variant = "t2", color = "black", display = "inline", style, bold, className, children } = props;
  // 18 24 30 36
  // 48 60 120
  const renderSize = (variant: string) => {
    switch (variant) {
      case "t1":
        return "36px";
      case "t2":
        return "30px";
      case "t3":
        return "24px";
      case "h1":
        return "120px";
      case "h2":
        return "60px";
      case "h3":
        return "48px";
      case "caption1":
        return "18px";
      case "caption2":
        return "12px";
      default:
        return variant;
    }
  };

  const renderColor = (color: string) => {
    switch (color) {
      case "gray1":
        return "#b7b7b7";
      default:
        return color;
    }
  };

  return (
    <div
      style={{
        // hover 효과 등은 각 사용처에서 정의 후 style로 전달해야 함
        display: display === "inline" ? "block" : "inline",
        fontSize: renderSize(variant),
        color: renderColor(color),
        fontWeight: bold ? "700" : "400",
        lineHeight: 1.5,
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
}

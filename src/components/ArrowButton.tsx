import { ArrowRight } from "lucide-react";

const ArrowButton = ({
  label,
  variant = "primary",
}: {
  label: string;
  variant?: "primary" | "light" | "muted";
}) => {
  const bgClass =
    variant === "primary"
      ? "bg-primary"
      : variant === "light"
      ? "bg-background"
      : "bg-secondary";

  const textClass =
    variant === "primary"
      ? "text-primary-foreground"
      : "text-foreground";

  const iconBg =
    variant === "primary"
      ? "bg-background"
      : "bg-primary";

  const iconColor =
    variant === "primary"
      ? "text-primary"
      : variant === "light"
      ? "text-secondary"
      : "text-secondary";

  return (
    <button
      className={`inline-flex items-center gap-4 ${bgClass} rounded-full border border-foreground/10 h-[50px] pl-[20px] pr-[8px] group hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out`}
    >
      <span className={`text-sm font-bold ${textClass}`}>{label}</span>
      <span
        className={`flex items-center justify-center w-10 h-10 rounded-full ${iconBg} transition-transform duration-300 group-hover:translate-x-1`}
      >
        <ArrowRight className={`w-5 h-5 ${iconColor}`} />
      </span>
    </button>
  );
};

export default ArrowButton;

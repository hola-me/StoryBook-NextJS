import * as React from "react";
import { Badge as ShadcnBadge } from "@/components/ui/badge";

export interface BadgeProps {
  label: string;
  variant?: "default" | "secondary" | "success" | "warning" | "destructive";
  size?: "sm" | "md" | "lg";
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = "default",
  size = "md",
}) => {
  const variantClasses: Record<string, string> = {
    default: "bg-gray-100 text-gray-800",
    secondary: "bg-gray-200 text-gray-900",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    destructive: "bg-red-100 text-red-800",
  };

  const sizeClasses: Record<string, string> = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  return (
    <ShadcnBadge
      className={`rounded-full font-medium ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {label}
    </ShadcnBadge>
  );
};

import * as React from "react";
import {
  Alert as ShadcnAlert,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/alert";

export interface AlertProps {
  title: string;
  description: string;
  variant?: "default" | "success" | "destructive" | "warning";
}

export const Alert: React.FC<AlertProps> = ({
  title,
  description,
  variant = "default",
}) => {
  const variantClasses = {
    default: "bg-gray-100 text-gray-800 border border-gray-300",
    success: "bg-green-100 text-green-800 border border-green-300",
    destructive: "bg-red-100 text-red-800 border border-red-300",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-300",
  };

  return (
    <ShadcnAlert className={`p-4 rounded-md ${variantClasses[variant]}`}>
      <AlertTitle className="font-semibold">{title}</AlertTitle>
      <AlertDescription className="text-sm">{description}</AlertDescription>
    </ShadcnAlert>
  );
};

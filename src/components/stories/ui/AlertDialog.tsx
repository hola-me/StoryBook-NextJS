import * as React from "react";
import {
  AlertDialog as ShadcnAlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

export interface AlertDialogProps {
  title: string;
  description: string;
  triggerLabel: string;
  actionLabel: string;
  cancelLabel?: string;
  onConfirm: () => void;
  variant?: "default" | "destructive" | "success"; // optional style variants
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
  title,
  description,
  triggerLabel,
  actionLabel,
  cancelLabel = "Cancel",
  onConfirm,
  variant = "default",
}) => {
  // Map variants to Tailwind classes for the action button
  const actionClasses = {
    default: "bg-blue-500 hover:bg-blue-600 text-white",
    destructive: "bg-red-500 hover:bg-red-600 text-white",
    success: "bg-green-500 hover:bg-green-600 text-white",
  };

  return (
    <ShadcnAlertDialog>
      <AlertDialogTrigger className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
        {triggerLabel}
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-lg font-semibold">{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-600">{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <div className="mt-4 flex justify-end gap-2">
          <AlertDialogCancel className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
            {cancelLabel}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className={`px-4 py-2 rounded-md ${actionClasses[variant]}`}
          >
            {actionLabel}
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </ShadcnAlertDialog>
  );
};

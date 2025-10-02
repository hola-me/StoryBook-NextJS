import { Meta, StoryObj } from "@storybook/react";
import { AlertDialog, AlertDialogProps } from "./AlertDialog";

const meta: Meta<AlertDialogProps> = {
  title: "UI/AlertDialog",
  component: AlertDialog,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "destructive", "success"],
    },
    triggerLabel: { control: "text" },
    actionLabel: { control: "text" },
    cancelLabel: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<AlertDialogProps>;

// Default story
export const Default: Story = {
  args: {
    title: "Delete Item",
    description: "Are you sure you want to delete this item? This action cannot be undone.",
    triggerLabel: "Show Dialog",
    actionLabel: "Confirm",
    cancelLabel: "Cancel",
    variant: "destructive",
    onConfirm: () => alert("Confirmed!"),
  },
};

// Success variant story
export const Success: Story = {
  args: {
    title: "Save Changes",
    description: "Do you want to save the changes?",
    triggerLabel: "Save",
    actionLabel: "Confirm",
    cancelLabel: "Cancel",
    variant: "success",
    onConfirm: () => alert("Saved!"),
  },
};

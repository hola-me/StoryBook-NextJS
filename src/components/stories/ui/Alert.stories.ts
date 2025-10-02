import { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertProps } from "./Alert";

const meta: Meta<AlertProps> = {
  title: "UI/Alert",
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "success", "destructive", "warning"],
    },
    title: { control: "text" },
    description: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<AlertProps>;

export const Default: Story = {
  args: {
    title: "Default Alert",
    description: "This is a default alert message.",
    variant: "default",
  },
};

export const Success: Story = {
  args: {
    title: "Success Alert",
    description: "Your action was successful!",
    variant: "success",
  },
};

export const Destructive: Story = {
  args: {
    title: "Error Alert",
    description: "Something went wrong.",
    variant: "destructive",
  },
};

export const Warning: Story = {
  args: {
    title: "Warning Alert",
    description: "Be careful with this action.",
    variant: "warning",
  },
};

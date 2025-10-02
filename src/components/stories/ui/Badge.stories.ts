import { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeProps } from "./Badge";

const meta: Meta<BadgeProps> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "secondary", "success", "warning", "destructive"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: {
    label: "Default",
    variant: "default",
    size: "md",
  },
};

export const Success: Story = {
  args: {
    label: "Success",
    variant: "success",
    size: "sm",
  },
};

export const Warning: Story = {
  args: {
    label: "Warning",
    variant: "warning",
    size: "lg",
  },
};

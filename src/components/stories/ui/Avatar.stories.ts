import { Avatar, AvatarProps } from "@/components/stories/ui/Avatar";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<AvatarProps> = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    src: { control: "text" },
    fallback: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<AvatarProps>;

export const Default: Story = {
  args: {
    src: "https://github.com/shadcn.png",
    alt: "User Avatar",
    fallback: "JD",
    size: "md",
  },
};

export const WithFallback: Story = {
  args: {
    src: "",
    fallback: "AB",
    size: "lg",
  },
};

import { Breadcrumb, BreadcrumbProps } from "@/components/stories/ui/BreadCrumb";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<BreadcrumbProps> = {
  title: "UI/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<BreadcrumbProps>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "/?path=/docs/ui-breadcrumb--docs" },
      { label: "Products", href: "/?path=/docs/ui-breadcrumb--docs" },
      { label: "Shoes", href: "/?path=/docs/ui-breadcrumb--docs" },
      { label: "Nike Air Max" },
    ],
  },
};

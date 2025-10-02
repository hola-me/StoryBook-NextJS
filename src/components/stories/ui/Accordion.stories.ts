import { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionProps } from "./Accordion";

const meta: Meta<AccordionProps> = {
  title: "UI/Accordion",
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["single", "multiple"],
    },
  },
};

export default meta;
type Story = StoryObj<AccordionProps>;

export const Default: Story = {
  args: {
    type: "single",
    items: [
      { title: "Section 1", content: "Content for section 1" },
      { title: "Section 2", content: "Content for section 2" },
      { title: "Section 3", content: "Content for section 3" },
    ],
  },
};

export const MultipleOpen: Story = {
  args: {
    type: "multiple",
    items: [
      { title: "Item A", content: "Details for item A" },
      { title: "Item B", content: "Details for item B" },
      { title: "Item C", content: "Details for item C" },
    ],
  },
};

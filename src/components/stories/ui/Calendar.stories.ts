import { Meta, StoryObj } from "@storybook/react";
// Import the Calendar component and its full CalendarProps union type
import { Calendar, CalendarProps } from "./Calendar";
// Import the necessary DateRange type for the 'range' story args
import { type DateRange } from "react-day-picker";

// --- 1. Define the Meta Object ---
const meta: Meta<CalendarProps> = {
  title: "UI/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {
    // This is correct: Storybook can visually select the mode
    mode: {
      control: "select",
      options: ["single", "multiple", "range"],
    },
    // Keep 'selected' as a generic 'object' control for Storybook's UI
    selected: { control: "object" },
    // Keep 'onSelect' and 'disabled' as-is
    onSelect: { action: "onSelect" },
  },
};

export default meta;
// The base Story type remains the same
type Story = StoryObj<CalendarProps>;

// --- 2. Stories with Type Assertions for Mode Safety ---

export const Default: Story = {
  args: {
    // mode: "single" is the disciminant
    mode: "single",
    selected: new Date(),
    onSelect: (date) => console.log('Selected single:', date),
  },
};

export const Range: Story = {
  args: {
    // 1. Explicitly set the mode
    mode: "range",
    // 2. Define the 'selected' range value.
    // 3. Cast the args object as the specific RangeModeProps type to satisfy TS.
    selected: {
      from: new Date(2025, 9, 5),
      to: new Date(2025, 9, 12),
    } as DateRange, // Assert the object shape as DateRange
    onSelect: (range) => console.log('Selected range:', range),
  }, // Assert the entire args object is valid
};

export const Multiple: Story = {
  args: {
    mode: "multiple",
    selected: [new Date(2025, 9, 7), new Date(2025, 9, 14)], // Array of Dates
    onSelect: (dates) => console.log('Selected multiple:', dates),
  },
};

export const DisabledDates: Story = {
  args: {
    mode: "single",
    selected: new Date(2025, 9, 15), // Set a date that is NOT disabled
    disabled: (date: Date) =>
      date < new Date(2025, 9, 1) || date > new Date(2025, 9, 20),
  },
};
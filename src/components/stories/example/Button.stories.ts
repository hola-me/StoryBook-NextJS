import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';
import type { ButtonProps } from './Button'; // Import the props for better type checking

// --- 1. Meta Definition (Default Export) ---
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Note: TypeScript now recognizes these controls because we imported ButtonProps
    backgroundColor: { control: 'color' },
    primary: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  // Default args applied to ALL stories
  args: {
    label: 'Button Label', // Default label
    onClick: fn(),        // Default action spy
    primary: false,       // Default state is Secondary
    size: 'medium',       // Default size
  },
} satisfies Meta<ButtonProps>;

export default meta;

// Define the Story type based on the Meta props
type Story = StoryObj<typeof meta>;

// --- 2. Stories ---

/**
 * The default Primary button style.
 */
export const Primary: Story = {
  args: {
    // Only set what changes from the default meta.args (which is primary: false)
    primary: true,
  },
};

/**
 * The default Secondary button style.
 */
export const Secondary: Story = {
  // No args needed here as primary: false and size: 'medium' are inherited from meta.args
  args: {}, 
};

/**
 * The large-sized Primary button.
 */
export const Large: Story = {
  args: {
    primary: true,
    size: 'large',
  },
};

/**
 * The small-sized Secondary button.
 */
export const Small: Story = {
  args: {
    size: 'small',
  },
};

/**
 * Custom color button demonstrating the 'backgroundColor' argType control.
 */
export const CustomColor: Story = {
  args: {
    label: 'Custom Color',
    backgroundColor: '#ff69b4', // Hot pink
    primary: true, // Use primary text color
  },
};

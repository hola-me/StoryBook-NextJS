import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Cards } from './Card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Card',
  component: Cards,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'danger', 'warning'],
    },
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Cards>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    // primary: true,
    label: 'Card',
    content: 'This is content in the box.'
  },
};

// export const Secondary: Story = {
//     args: {
//         label: 'Card',
//         content: 'This is content in the box.'
//     },
// };

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Card',
        content: 'This is content in the box.'
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        label: 'Card',
        content: 'This is content in the box.'
  },
};

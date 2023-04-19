import type { Meta, StoryObj } from '@storybook/react';

import Button from './MyButton';

export default {
  title: 'Components/MyButton',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'New button',
    variant: 'dark',
  }
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Dark: Story = {};
export const Light: Story = {
  args: {
    variant: 'light',
  },
};
import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header'
import { DarkModeProvider } from '@shared-client/providers/darkmode'

const meta: Meta<typeof Header> = {
  title: 'Widgets/Header',
  component: Header,
  parameters: {
    layout: 'padded', // 전체 화면 너비 사용
    viewport: {
      defaultViewport: 'desktop', // 데스크톱 뷰포트 사용
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900">
        <DarkModeProvider>
          <Story />
        </DarkModeProvider>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {} 
}

export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

export const Tablet: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}
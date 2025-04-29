import type { Meta, StoryObj } from '@storybook/react';
import PostCard from './PostCard';

const meta: Meta<typeof PostCard> = {
  title: 'Entities/Post/PostCard',
  component: PostCard,
  parameters: {
    layout: 'centered', // 화면 중앙 정렬
  },
};

export default meta;

type Story = StoryObj<typeof PostCard>;

export const postCard: Story = {
  args: {
    title: '스토리북 테스트용 제목',
    group: 'React',
    createDate: '2025-04-23',
    pageId: 'test-id-123',
    state: '진행 중',
    tags: ['Next', 'TypeScript', 'TailwindCSS'],
    thumbnail: "defaultThumbnail.png", // 혹시 썸네일을 이미지로 보여주고 싶다면 이쪽도 업데이트 필요
  },
};
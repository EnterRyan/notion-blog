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
    title: '스토리북 테스트용 글',
    group: 'React',
    createDate: '2025-04-23',
    pageId: 'test-id-123',
    state: '진행 중',
    tags: ['Next.js', 'Notion API', 'TailwindCSS'],
    thumbnail: "https://prod-files-secure.s3.us-west-2.amazonaws.com/fd2ed4e4-c9f3-4a9b-8f46-bef66589958f/a662da25-f4cc-4dea-af04-e773887d6988/image.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q54F2W7J%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIEO8AedofRcww5UzvrPj%2BZNKCrcy2Pe2%2BRTcZY5jvH2TAiBP6avVJvyVqnt%2FGeEL9pdnq%2FAjPSl%2BH21MM1mgtLXXVSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2xrnQjc1hP0BP0gHKtwD1ndnl0LVrysR5n3rl8I8%2Bw13%2FozFk5%2BYyZMJRkMT1%2FMX6Fvvb5V6py9fN4mVeXahmk9%2FlBro75CxVHrYG4rejoceuwSbapcRV5WkXEaeGBrHgHJkbIVA9lmLqqYyQmLmMWfb7rKPPVr5oGDtniCrL7ySq4DZk%2BVC%2Bm%2FzUv05MQLW6fnJfVh9ZoioABoa9B%2FOLIfdF45wWN7SlaLeFY%2Bkpf7d8RyYk26lYzkAX7EWymO%2BzE3U7PLtXtUMXPS%2BshWJJq1PioSLda%2BOqwcQC5J1OgPOUp3flNjr4DtAaHlwyRDuzAMVlysgEqgVuMuBqmSVv7TwYtXbK7kl%2BatrNkOj1M3xsi9yhXscjdPkGcRKrqnVaZblbaSia6xgu52FXOhyt%2BsDqr8gTQSWpc%2FAhh9tOFgR96lewlJvWExSYUxq%2FKzlWXKsqg422kmnVxX44AUndVmvFXbkfmTxJJOlM%2FhpIrOtGm%2BY1Eyt2icXVFUZ18ub3ZZ444fnLdrDSpSyly1jtCz2xpBg0iXH5WpKcePYoIJOroGP54FRmxWLVvVhrly79ShOflq1I4fiRtjwY6JUH4rxwregARZIF0j5p7BOIa3wEv%2FFCYH51Z4cvvxkaflNRK9h0mVfip2H34AwlZ6iwAY6pgEGZDwRpUFR1Kzm1QmTO5HAa%2FDsEO6k2zUt1dtaOl0wNdiodhqhrsD%2BSp8FXQWvNIaaPTW1qrjSfioXPPFEeKLtoJku%2FkZL%2FJjxY0RkKlCFTsV%2B%2FEaCwMhHBzbFX%2BAoDXxHBD2mU%2FEXPDI7KGKcoAzMlt1KrfDvZsGTZ3i8K0HkMW02EyoAU9a7CX90nUm5ZX2YzIp1bEsOROViZm6Wb7aIEbolddg7&X-Amz-Signature=03288debdc5cd184e89b21d82ba2009ec872ca5ff37bc284ac17711920c2106d&X-Amz-SignedHeaders=host&x-id=GetObject", // 혹시 썸네일을 이미지로 보여주고 싶다면 이쪽도 업데이트 필요
  },
};
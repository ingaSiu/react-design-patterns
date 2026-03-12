import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import type { Post } from '../../../types/posts'; // Adjusted import based on your snippet
import PostList from './PostList';

const createMockPost = (overrides: Partial<Post> = {}): Post => ({
  id: '1',
  userId: 'u1',
  title: 'Default Title',
  content: 'Default Content',
  excerpt: 'Excerpt',
  createdAt: '2026-03-11T00:00:00Z',
  updatedAt: '2026-03-11T00:00:00Z',
  likes: 0,
  comments: 0,
  tags: [],
  published: true,
  readTime: '5 min',
  ...overrides,
});

describe('PostList Component', () => {
  it('renders the correct number of posts and count in heading', () => {
    const posts = [createMockPost({ id: '1' }), createMockPost({ id: '2' })];
    render(<PostList posts={posts} />);

    expect(screen.getByRole('heading', { name: /recent posts \(2\)/i })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(2);
  });

  it('truncates content to 150 characters', () => {
    const longContent = 'A'.repeat(200);
    const posts = [createMockPost({ content: longContent })];
    render(<PostList posts={posts} />);

    const paragraph = screen.getByText(/AAAAA/);
    // 150 chars + '...' = 153
    expect(paragraph.textContent).toHaveLength(153);
    expect(paragraph.textContent).toContain('...');
  });

  it('formats the ISO date string to a local date', () => {
    const posts = [createMockPost({ createdAt: '2026-03-11T12:00:00Z' })];
    render(<PostList posts={posts} />);

    // This regex matches common date formats like 3/11/2026 or 11/03/2026
    expect(screen.getByText(/11/)).toBeInTheDocument();
    expect(screen.getByText(/2026/)).toBeInTheDocument();
  });
});

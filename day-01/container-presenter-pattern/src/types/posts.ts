export type Post = {
  id: string;
  userId: string;
  title: string;
  content: string;
  excerpt: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  comments: number;
  tags: string[];
  published: boolean;
  readTime: string;
};

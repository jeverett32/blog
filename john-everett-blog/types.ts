export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  thumbnail: string;
  author: string;
  isFeatured?: boolean;
}

export type ArticleVariant = 'hero' | 'standard' | 'sidebar' | 'compact' | 'opinion';
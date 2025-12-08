import { BlogPost } from '../types';

const MOCK_POSTS: BlogPost[] = [
  {
    slug: 'scaling-systems-2025',
    title: 'The Architecture of Scalability: Lessons form the Field',
    description: 'Exploring the intricacies of building distributed systems that can handle millions of requests without compromising consistency.',
    date: '2025-05-12',
    readTime: '8 min read',
    tags: ['System Design', 'Architecture'],
    thumbnail: 'https://picsum.photos/800/600?random=1',
    author: 'John Everett',
    isFeatured: true
  },
  {
    slug: 'ai-driven-analytics',
    title: 'When Data Meets Intelligence',
    description: 'How Gemini and other LLMs are reshaping the landscape of business intelligence and data visualization dashboards.',
    date: '2025-04-28',
    readTime: '6 min read',
    tags: ['AI', 'Data Analytics'],
    thumbnail: 'https://picsum.photos/800/600?random=2',
    author: 'John Everett'
  },
  {
    slug: 'react-server-components',
    title: 'Rethinking the Frontend Stack',
    description: 'A deep dive into React Server Components and why they matter for the next generation of web applications.',
    date: '2025-04-15',
    readTime: '5 min read',
    tags: ['React', 'Web Dev'],
    thumbnail: 'https://picsum.photos/800/600?random=3',
    author: 'John Everett'
  },
  {
    slug: 'sql-optimization',
    title: 'The Art of the Query',
    description: 'Advanced SQL optimization techniques for reducing latency in high-throughput PostgreSQL databases.',
    date: '2025-03-30',
    readTime: '10 min read',
    tags: ['Database', 'SQL'],
    thumbnail: 'https://picsum.photos/800/600?random=4',
    author: 'John Everett'
  },
  {
    slug: 'data-engineering-pipeline',
    title: 'Pipelines that Don\'t Break',
    description: 'Best practices for robust ETL processes using Python and AWS Glue.',
    date: '2025-03-10',
    readTime: '7 min read',
    tags: ['Data Engineering', 'AWS'],
    thumbnail: 'https://picsum.photos/800/600?random=5',
    author: 'John Everett'
  },
  {
    slug: 'ui-ux-minimalism',
    title: 'Minimalism is Not Just Less',
    description: 'Why white space is the most important element in your design system.',
    date: '2025-02-22',
    readTime: '4 min read',
    tags: ['Design', 'UX'],
    thumbnail: 'https://picsum.photos/800/600?random=6',
    author: 'John Everett'
  },
  {
    slug: 'gemini-api-guide',
    title: 'Mastering the Gemini API',
    description: 'A comprehensive guide to integrating multimodal AI into your React applications.',
    date: '2025-02-01',
    readTime: '12 min read',
    tags: ['AI', 'Gemini'],
    thumbnail: 'https://picsum.photos/800/600?random=7',
    author: 'John Everett'
  },
  {
    slug: 'future-of-work',
    title: 'Remote Work: A Retrospective',
    description: 'Analyzing productivity trends in distributed teams over the last five years.',
    date: '2025-01-15',
    readTime: '5 min read',
    tags: ['Career', 'Lifestyle'],
    thumbnail: 'https://picsum.photos/800/600?random=8',
    author: 'John Everett'
  }
];

export const getPosts = async (): Promise<BlogPost[]> => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_POSTS);
    }, 600);
  });
};
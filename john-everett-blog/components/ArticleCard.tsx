import React from 'react';
import { BlogPost, ArticleVariant } from '../types';

interface ArticleCardProps {
  post: BlogPost;
  variant: ArticleVariant;
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post, variant, className = '' }) => {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  // Hero Style (Large Top Story)
  if (variant === 'hero') {
    return (
      <article className={`group cursor-pointer flex flex-col gap-4 ${className}`}>
        <div className="overflow-hidden border border-gray-200">
          <img 
            src={post.thumbnail} 
            alt={post.title} 
            className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[10%] group-hover:grayscale-0"
          />
        </div>
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex items-center gap-2 text-xs font-bold font-[Plus Jakarta Sans] tracking-widest uppercase text-[#D4AF37]">
            {post.tags[0]}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-gray-900 group-hover:text-[#666666] transition-colors">
            {post.title}
          </h2>
          <p className="text-lg text-gray-600 font-[Plus Jakarta Sans] leading-relaxed font-light line-clamp-3">
            {post.description}
          </p>
          <div className="flex items-center text-xs text-gray-400 mt-2 font-[Plus Jakarta Sans] uppercase tracking-wide">
            <span>By <span className="text-gray-900 font-bold">{post.author}</span></span>
            <span className="mx-2">•</span>
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </article>
    );
  }

  // Standard Style (Grid Items)
  if (variant === 'standard') {
    return (
      <article className={`group cursor-pointer flex flex-col gap-3 py-4 ${className}`}>
        <div className="overflow-hidden border border-gray-100 mb-2">
            <img 
              src={post.thumbnail} 
              alt={post.title} 
              className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
            />
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold font-[Plus Jakarta Sans] tracking-widest uppercase text-gray-400">
            {post.tags[0]}
        </div>
        <h3 className="text-xl font-serif font-bold leading-snug text-gray-900 group-hover:text-[#D4AF37] transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 font-[Plus Jakarta Sans] leading-relaxed line-clamp-3">
          {post.description}
        </p>
        <span className="text-xs text-gray-400 font-[Plus Jakarta Sans] mt-1">{post.readTime}</span>
      </article>
    );
  }

  // Sidebar / Compact Style (Right Column)
  if (variant === 'sidebar') {
    return (
      <article className={`group cursor-pointer flex flex-row gap-4 py-4 border-b border-gray-100 last:border-0 ${className}`}>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-bold font-[Plus Jakarta Sans] tracking-widest uppercase text-[#D4AF37] mb-1">
                {post.tags[0]}
            </div>
            <h4 className="text-md font-serif font-semibold leading-tight text-gray-800 group-hover:text-gray-500 transition-colors">
              {post.title}
            </h4>
          </div>
          <span className="text-[10px] text-gray-400 mt-2 uppercase">{formatDate(post.date)}</span>
        </div>
        <div className="w-20 h-20 flex-shrink-0 overflow-hidden border border-gray-100">
           <img 
              src={post.thumbnail} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
        </div>
      </article>
    );
  }
  
    // Opinion/Text Only Style
  if (variant === 'opinion') {
    return (
      <article className={`group cursor-pointer py-4 border-b border-gray-200 last:border-0 ${className}`}>
         <div className="flex items-center gap-2 mb-2">
            <div className="h-px w-4 bg-[#D4AF37]"></div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{post.tags[0]}</span>
         </div>
         <h3 className="text-lg font-serif font-medium italic text-gray-900 group-hover:text-[#D4AF37] transition-colors mb-2">
            {post.title}
         </h3>
         <p className="text-xs text-gray-500 font-[Plus Jakarta Sans] line-clamp-2">{post.description}</p>
      </article>
    );
  }

  return null;
};

export default ArticleCard;
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleCard from './components/ArticleCard';
import { getPosts } from './services/blogService';
import { BlogPost } from './types';

function App() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Filter posts based on search
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Layout Logic
  const heroPost = filteredPosts.find(p => p.isFeatured) || filteredPosts[0];
  const sidePosts = filteredPosts.filter(p => p !== heroPost).slice(0, 4); // Next 4 for sidebar
  const standardPosts = filteredPosts.filter(p => p !== heroPost && !sidePosts.includes(p)); // Rest for main grid

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] font-[Plus Jakarta Sans]">
      <Header />

      <main className="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Search Bar - styled minimally */}
        <div className="flex justify-end mb-8 border-b border-gray-200 pb-2">
            <div className="relative group w-full max-w-xs">
                 <input 
                    type="text" 
                    placeholder="Search the archives..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent text-sm py-2 pl-0 pr-8 border-b border-transparent focus:border-black focus:outline-none transition-colors placeholder:text-gray-400 text-right"
                 />
                 <svg className="w-4 h-4 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
        </div>

        {loading ? (
           <div className="flex flex-col items-center justify-center py-32">
              <div className="w-16 h-1 bg-black animate-pulse mb-4"></div>
              <p className="font-serif italic text-gray-400">Loading today's edition...</p>
           </div>
        ) : filteredPosts.length === 0 ? (
           <div className="text-center py-20">
               <h2 className="text-2xl font-serif">No articles found matching "{searchTerm}"</h2>
               <p className="text-gray-500 mt-2">Try searching for different keywords.</p>
           </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-t border-black">
            
            {/* Left Column (Main Content) - Spans 8 or 9 columns */}
            <div className="lg:col-span-9 lg:border-r border-gray-200 pr-0 lg:pr-8 pt-6">
                
                {/* Hero Section */}
                {heroPost && (
                    <div className="mb-12 border-b border-gray-200 pb-12">
                        <ArticleCard post={heroPost} variant="hero" />
                    </div>
                )}

                {/* Secondary Grid (Below Hero) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 mb-12">
                   {standardPosts.map((post) => (
                       <ArticleCard key={post.slug} post={post} variant="standard" />
                   ))}
                </div>

            </div>

            {/* Right Column (Sidebar/Trending) - Spans 3 or 4 columns */}
            <div className="lg:col-span-3 lg:pl-8 pt-6">
                <div className="sticky top-24">
                    <h3 className="font-[Plus Jakarta Sans] font-bold text-xs uppercase tracking-widest border-t-2 border-black pt-2 mb-6">
                        Trending & Recent
                    </h3>
                    
                    <div className="flex flex-col gap-2">
                        {sidePosts.map((post, index) => (
                            <React.Fragment key={post.slug}>
                                {/* Mix Sidebar styles and Opinion styles for variety */}
                                <ArticleCard 
                                    post={post} 
                                    variant={index % 2 === 0 ? 'sidebar' : 'opinion'} 
                                />
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="mt-12 bg-gray-100 p-6 border border-gray-200">
                        <h4 className="font-serif font-bold text-xl mb-2 text-gray-900">Weekly Newsletter</h4>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                            Get the latest insights on system architecture and data engineering delivered to your inbox every Sunday.
                        </p>
                        <div className="flex flex-col gap-2">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="w-full px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:border-black"
                            />
                            <button className="w-full bg-black text-white text-xs font-bold uppercase tracking-widest py-3 hover:bg-[#D4AF37] transition-colors">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-3 text-center">No spam, just quality content.</p>
                    </div>
                </div>
            </div>

          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}

export default App;
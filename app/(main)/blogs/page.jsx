'use client';

import BlogCard from './BlogCard'; // Import BlogCard component
import blogsContent from '@/data/blogsContent';

const BlogsPage = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogsContent.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;

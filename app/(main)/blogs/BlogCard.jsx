'use client';

import Link from 'next/link';

const BlogCard = ({ blog }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-all duration-300">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-black-600 mb-2">{blog.title}</h2>
        <p className="text-gray-600 line-clamp-3 mb-4">
          {blog.content.slice(0, 100)}...
        </p>
        <Link href={`/blogs/${blog.id}`} passHref>
          <button className="text-blue-600 bg-transparent hover:text-blue-800 font-semibold">
            Read More &gt;&gt;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

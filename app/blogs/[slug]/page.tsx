"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import blogContentData from "@/data/blogContent.json";

type ContentBlock = {
  type: string;
  text?: string;
  language?: string;
  content?: string;
};

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  authorRole: string;
  authorImage: string;
  image: string;
  tag: string;
  excerpt: string;
  content: ContentBlock[];
};

const BlogPost = () => {
  const params = useParams();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = params.slug as string;
    const post = blogContentData.find((post) => post.slug === slug);

    if (post) {
      setBlogPost(post as BlogPost);
    }

    setLoading(false);
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black-100">
        <div className="w-8 h-8 border-t-2 border-purple rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black-100 px-4">
        <h1 className="text-3xl font-bold text-white mb-4">
          Blog Post Not Found
        </h1>
        <p className="text-gray-400 mb-8">
          The blog post you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Link
          href="/#blogs"
          className="px-6 py-3 bg-purple text-white rounded-lg hover:bg-purple/80 transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black-100 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back to blogs */}
        <Link
          href="/#blogs"
          className="inline-flex items-center text-purple hover:text-purple/80 mb-8 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to blogs
        </Link>

        {/* Blog header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-purple/10 text-purple text-sm font-medium rounded-full mb-4">
            {blogPost.tag}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {blogPost.title}
          </h1>
          <div className="flex items-center">
            <Image
              src={blogPost.authorImage}
              alt={blogPost.author}
              width={40}
              height={40}
              className="rounded-full mr-3"
            />
            <div>
              <p className="text-white font-medium">{blogPost.author}</p>
              <p className="text-gray-400 text-sm flex items-center">
                <span>{blogPost.authorRole}</span>
                <span className="mx-2">•</span>
                <span>{blogPost.date}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="w-full h-[300px] md:h-[400px] bg-gray-800 rounded-xl overflow-hidden mb-10 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${blogPost.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        {/* Blog content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {blogPost.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p key={index} className="text-gray-300 mb-6">
                    {block.text}
                  </p>
                );
              case "heading":
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold text-white mt-10 mb-4"
                  >
                    {block.text}
                  </h2>
                );
              case "code":
                return (
                  <div
                    key={index}
                    className="bg-[#1a1a2e] rounded-lg p-4 my-6 overflow-x-auto"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">
                        {block.language}
                      </span>
                      <button
                        className="text-gray-400 hover:text-white text-sm"
                        onClick={() =>
                          navigator.clipboard.writeText(block.content || "")
                        }
                      >
                        Copy code
                      </button>
                    </div>
                    <pre className="text-gray-300 font-mono text-sm">
                      <code>{block.content}</code>
                    </pre>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>

        {/* Share and tags section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <p className="text-white font-medium mb-2">Share this article</p>
              <div className="flex space-x-3">
                <button className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-white hover:bg-purple/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-white hover:bg-purple/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-white hover:bg-purple/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-4 md:mt-0">
              <p className="text-white font-medium mb-2">Tags</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#1a1a2e] text-gray-300 text-sm rounded-full">
                  {blogPost.tag}
                </span>
                <span className="px-3 py-1 bg-[#1a1a2e] text-gray-300 text-sm rounded-full">
                  Web Development
                </span>
                <span className="px-3 py-1 bg-[#1a1a2e] text-gray-300 text-sm rounded-full">
                  Programming
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

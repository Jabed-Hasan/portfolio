"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data";

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="blogs" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple/5 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-32 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>

      <h1 className="heading">
        Latest
        <span className="text-purple"> Blog Posts</span>
      </h1>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0% {
            transform: scale(1);
          }
          33% {
            transform: scale(1.1);
          }
          66% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite alternate;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .card-animate {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .zoom-in-out {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .shine-effect {
          position: relative;
          overflow: hidden;
        }

        .shine-effect::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -60%;
          width: 20%;
          height: 200%;
          opacity: 0;
          transform: rotate(30deg);
          background: rgba(255, 255, 255, 0.13);
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.13) 0%,
            rgba(255, 255, 255, 0.13) 77%,
            rgba(255, 255, 255, 0.5) 92%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        .shine-effect:hover::after {
          opacity: 1;
          left: 130%;
          transition: all 0.7s ease-in-out;
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className={`bg-[rgb(4,7,29)] rounded-xl overflow-hidden border border-slate-800 flex flex-col shine-effect 
              hover:translate-y-[-8px] hover:shadow-[0_10px_20px_rgba(125,90,255,0.15)] transition-all duration-300 shadow-lg
              ${isVisible ? "card-animate" : ""}`}
            style={{
              animationDelay: `${index * 150}ms`,
              opacity: 0,
            }}
          >
            {/* Blog Image */}
            <div className="h-48 relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-gradient-to-br from-purple/20 to-blue-900/20 z-10 
                group-hover:from-purple/30 group-hover:to-blue-900/30 transition-all duration-300"
              />

              <Image
                src={post.image || "/blog-placeholder.svg"}
                alt={post.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                width={500}
                height={300}
                onError={(e) => {
                  // Fallback image on error
                  // @ts-ignore - target typing issue
                  e.target.src = "/blog-placeholder.svg";
                }}
              />

              <div className="absolute top-4 right-4 z-20">
                <span
                  className="px-3 py-1 bg-purple/80 text-white text-xs font-medium rounded-full
                  transform transition-transform duration-300 hover:scale-105 hover:bg-purple"
                >
                  {post.tag}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-gray-400">{post.title}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 hover:text-purple transition-colors duration-300">
                {post.name}
              </h3>

              <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
                {post.quote}
              </p>

              {/* Author info */}
              <div className="flex items-center mt-2 mb-4 group">
                <img
                  src={post.authorImage || "/profile.svg"}
                  alt={post.author}
                  className="w-8 h-8 rounded-full mr-2 transition-transform duration-300 group-hover:scale-110"
                />
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-purple transition-colors duration-300">
                    {post.author}
                  </p>
                  <p className="text-gray-400 text-xs">{post.authorRole}</p>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-800/50">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="inline-flex items-center gap-2 text-purple hover:text-purple-400 font-medium 
                    transition-all duration-300 group relative"
                >
                  <span>Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;

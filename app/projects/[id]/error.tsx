"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black-100 py-12 px-4 sm:px-6 flex flex-col items-center justify-center">
      <div className="max-w-md w-full bg-[#13162D] p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-400 mb-8">
          We couldn&apos;t load the project details. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => reset()}
            className="bg-purple hover:bg-purple/80 text-white px-6 py-3 rounded-lg transition-all duration-300 flex-1 text-center"
          >
            Try again
          </button>
          <Link
            href="/#projects"
            className="border border-purple text-purple hover:bg-purple/10 px-6 py-3 rounded-lg transition-all duration-300 flex-1 text-center flex items-center justify-center"
          >
            <span className="transform rotate-180 mr-2">
              <FaLocationArrow />
            </span>
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

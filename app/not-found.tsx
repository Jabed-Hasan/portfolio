import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black-100 py-12 px-4">
      <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
      <p className="text-lg mb-8">The page you are looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/" className="bg-purple hover:bg-purple/80 text-white px-6 py-3 rounded-lg transition-all duration-300">
        Return Home
      </Link>
    </div>
  );
} 
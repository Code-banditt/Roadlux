import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-2xl mt-4 text-gray-700">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href="/">
        <a className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
          Go Back to Home
        </a>
      </Link>
    </div>
  );
};

export default Custom404;

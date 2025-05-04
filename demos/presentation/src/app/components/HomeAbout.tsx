import Link from "next/link";

export const HomeAbout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 py-12 max-w-6xl mx-auto">
      
      {/* Left Box */}
      <div className="bg-[var(--light-brown)] text-white flex items-center justify-center text-3xl font-semibold p-8 rounded-lg shadow-lg">
        Cooking for your moments
      </div>

      {/* Right Box */}
      <div className="bg-white text-[var(--light-brown)] p-8 rounded-lg shadow-lg flex flex-col justify-between">
        <div>
          <h4 className="text-2xl font-bold mb-2">About Us</h4>
          <h5 className="text-lg italic mb-4">
            We cook with love so you can be close to the people in your life — family, friends, and those you cherish.
          </h5>
        </div>
        <Link
          href="/about"
          className="mt-4 text-sm font-medium underline hover:text-black transition-colors duration-300"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
};

export const Footer = () => {
    return (
      <footer className="bg-[var(--light-brown)] text-white py-10 px-6 md:px-20">
        <div className="text-center text-sm mt-10 border-t border-white/30 pt-6">
          &copy; {new Date().getFullYear()} Jasmine Catering. All rights reserved.
        </div>
      </footer>
    );
  };
  
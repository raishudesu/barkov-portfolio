const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold">@barkov_dev</span>
            </div>
            <p className="text-sm">Barysh Nikov Bacaltos</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; 2025 Barkov. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a
              href="https://x.com/barkov_dev"
              target="_blank"
              className="hover:text-white transition"
            >
              Twitter
            </a>
            <a
              href="https://github.com/raishudesu"
              target="_blank"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/baryshbacaltos/"
              target="_blank"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

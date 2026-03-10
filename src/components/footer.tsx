const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12 px-4 text-foreground sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold">@barkov_dev</span>
            </div>
            <p className="text-sm">Barysh Nikov Bacaltos</p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col items-center justify-between text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Barkov. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a
              href="https://x.com/barkov_dev"
              target="_blank"
              className="transition hover:text-foreground"
            >
              Twitter
            </a>
            <a
              href="https://github.com/raishudesu"
              target="_blank"
              className="transition hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/baryshbacaltos/"
              target="_blank"
              className="transition hover:text-foreground"
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

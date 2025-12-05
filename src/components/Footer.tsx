import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gradient">GU</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">Data Analyst</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Sanskaruttarwar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/giteshuttarwar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:uttarwargitesh@gmail.com"
              className="p-2 rounded-lg hover:bg-secondary hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Gitesh Uttarwar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

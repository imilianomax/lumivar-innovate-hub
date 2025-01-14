export const Footer = () => {
  return (
    <footer className="bg-background py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Lumivar</h3>
            <p className="text-sm text-muted-foreground">
              Innovating the future of digital experiences.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm text-muted-foreground hover:text-primary">Home</a></li>
              <li><a href="#what-we-do" className="text-sm text-muted-foreground hover:text-primary">What We Do</a></li>
              <li><a href="#process" className="text-sm text-muted-foreground hover:text-primary">Process</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/imprint" className="text-sm text-muted-foreground hover:text-primary">Imprint</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lumivar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
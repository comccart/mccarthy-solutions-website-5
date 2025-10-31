import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Menu, ExternalLink } from "lucide-react";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import chevronLogo from "@/assets/chevron-logo.png";

const Legal = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Set page title and meta description
    document.title = "Legal — McCarthy Solutions (Privacy, Terms, Cookies)";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Read McCarthy Solutions' Privacy Policy, Terms of Service, and Cookie Policy.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Read McCarthy Solutions' Privacy Policy, Terms of Service, and Cookie Policy.";
      document.head.appendChild(meta);
    }

    // Smooth scroll to anchor if present in URL
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState({}, "", `#${sectionId}`);
    }
  };

  const tocItems = [
    { id: "privacy-policy", label: "Privacy Policy" },
    { id: "terms-of-service", label: "Terms of Service" },
    { id: "cookie-policy", label: "Cookie Policy" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src={chevronLogo} alt="McCarthy Solutions" className="w-8 h-8" />
              <div className="text-2xl font-bold text-foreground">McCarthy Solutions</div>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link to="/#services" className="text-foreground hover:text-accent transition-colors">Services</Link>
              <Link to="/#process" className="text-foreground hover:text-accent transition-colors">Process</Link>
              <Link to="/#results" className="text-foreground hover:text-accent transition-colors">Results</Link>
              <Link to="/#testimonials" className="text-foreground hover:text-accent transition-colors">Testimonials</Link>
              <Link to="/case-studies" className="text-foreground hover:text-accent transition-colors">Case Studies</Link>
            </div>

            <div className="flex items-center gap-4">
              <Button 
                variant="default" 
                size="lg" 
                className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg" 
                onClick={() => window.open('https://calendar.app.google/PaVwZ8ZxYX5SVBJT8', '_blank')}
              >
                Book free intro call
              </Button>
              
              <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Menu</DrawerTitle>
                  </DrawerHeader>
                  <div className="flex flex-col gap-4 p-4">
                    <Link to="/#services" className="text-lg text-foreground hover:text-primary transition-colors py-2">
                      Services
                    </Link>
                    <Link to="/#process" className="text-lg text-foreground hover:text-primary transition-colors py-2">
                      Process
                    </Link>
                    <Link to="/#results" className="text-lg text-foreground hover:text-primary transition-colors py-2">
                      Results
                    </Link>
                    <Link to="/#testimonials" className="text-lg text-foreground hover:text-primary transition-colors py-2">
                      Testimonials
                    </Link>
                    <Link to="/case-studies" className="text-lg text-foreground hover:text-primary transition-colors py-2">
                      Case Studies
                    </Link>
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg mt-4" 
                      onClick={() => {
                        window.open('https://calendar.app.google/PaVwZ8ZxYX5SVBJT8', '_blank');
                        setMobileMenuOpen(false);
                      }}
                    >
                      Book free intro call
                    </Button>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 px-6">
        <div className="container mx-auto max-w-4xl py-12">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Legal</h1>

          {/* Mini Table of Contents - Desktop (Horizontal Pills) */}
          <nav 
            className="hidden md:flex gap-4 mb-12 pb-8 border-b border-border" 
            aria-label="Legal page quick navigation"
          >
            {tocItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mini Table of Contents - Mobile (Dropdown) */}
          <div className="md:hidden mb-8 pb-8 border-b border-border">
            <label htmlFor="section-select" className="block text-sm font-medium mb-2 text-foreground">
              Jump to section
            </label>
            <Select onValueChange={(value) => scrollToSection(value)}>
              <SelectTrigger id="section-select" className="w-full">
                <SelectValue placeholder="Select a section" />
              </SelectTrigger>
              <SelectContent>
                {tocItems.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Privacy Policy Section */}
          <section id="privacy-policy" className="mb-16 scroll-mt-24">
            <div className="group">
              <h2 className="text-3xl font-bold mb-2 text-foreground flex items-center gap-2">
                Privacy Policy
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.origin + "/legal#privacy-policy");
                  }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
                  aria-label="Copy link to Privacy Policy"
                  title="Copy link"
                >
                  <ExternalLink className="w-5 h-5" />
                </button>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Last Updated: [Date Placeholder]</p>
            <div className="prose prose-lg max-w-none">
              <div className="p-8 rounded-lg bg-muted/30 border border-border text-muted-foreground italic">
                <p className="leading-relaxed">Paste Privacy Policy here…</p>
                <p className="mt-4 leading-relaxed">
                  This section will contain your complete privacy policy, including information about data collection,
                  usage, storage, user rights, and compliance with applicable privacy laws.
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <hr className="my-12 border-border" />

          {/* Terms of Service Section */}
          <section id="terms-of-service" className="mb-16 scroll-mt-24">
            <div className="group">
              <h2 className="text-3xl font-bold mb-2 text-foreground flex items-center gap-2">
                Terms of Service
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.origin + "/legal#terms-of-service");
                  }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
                  aria-label="Copy link to Terms of Service"
                  title="Copy link"
                >
                  <ExternalLink className="w-5 h-5" />
                </button>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Last Updated: [Date Placeholder]</p>
            <div className="prose prose-lg max-w-none">
              <div className="p-8 rounded-lg bg-muted/30 border border-border text-muted-foreground italic">
                <p className="leading-relaxed">Paste Terms of Service here…</p>
                <p className="mt-4 leading-relaxed">
                  This section will contain your complete terms of service, including user obligations, service
                  limitations, intellectual property rights, dispute resolution, and other legal agreements between
                  you and your clients.
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <hr className="my-12 border-border" />

          {/* Cookie Policy Section */}
          <section id="cookie-policy" className="mb-16 scroll-mt-24">
            <div className="group">
              <h2 className="text-3xl font-bold mb-2 text-foreground flex items-center gap-2">
                Cookie Policy
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.origin + "/legal#cookie-policy");
                  }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground"
                  aria-label="Copy link to Cookie Policy"
                  title="Copy link"
                >
                  <ExternalLink className="w-5 h-5" />
                </button>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Last Updated: [Date Placeholder]</p>
            <div className="prose prose-lg max-w-none">
              <div className="p-8 rounded-lg bg-muted/30 border border-border text-muted-foreground italic">
                <p className="leading-relaxed">Paste Cookie Policy here…</p>
                <p className="mt-4 leading-relaxed">
                  This section will contain your complete cookie policy, including information about what cookies
                  are used, their purpose, how users can manage cookie preferences, and compliance with cookie
                  consent regulations.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={chevronLogo} alt="McCarthy Solutions" className="w-8 h-8" />
                <div className="text-xl font-bold text-foreground">McCarthy Solutions</div>
              </div>
              <p className="text-muted-foreground">
                AI consultancy for professionals who want to work smarter, not harder.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/#services" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
                <Link to="/#process" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Process
                </Link>
                <Link to="/case-studies" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Case Studies
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
              <div className="space-y-2">
                <Link to="/legal#privacy-policy" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/legal#terms-of-service" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
                <Link to="/legal#cookie-policy" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} McCarthy Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Legal;

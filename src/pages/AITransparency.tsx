import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import chevronLogo from "@/assets/chevron-logo.png";

const AITransparency = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                    <Link to="/#services" className="text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                      Services
                    </Link>
                    <Link to="/#process" className="text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                      Process
                    </Link>
                    <Link to="/#results" className="text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                      Results
                    </Link>
                    <Link to="/#testimonials" className="text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                      Testimonials
                    </Link>
                    <Link to="/case-studies" className="text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
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
      <main className="container mx-auto px-4 py-12 max-w-4xl" style={{ paddingTop: '120px' }}>
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-foreground">AI Transparency Notice</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Purpose</h2>
              <p className="text-muted-foreground leading-relaxed">
                At <strong>McCarthy Solutions</strong>, we use artificial intelligence (AI) responsibly to enhance how we deliver <strong>training, strategy, and implementation</strong> services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This notice explains how and where AI is used in our work, how human oversight is maintained, and how we protect your data and trust.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our goal is simple: use AI to <strong>amplify human expertise, not replace it.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. How We Use AI</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use AI tools in limited, clearly defined ways to support:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Content drafting and ideation</strong> (e.g., workshop materials, reports, email templates)</li>
                <li><strong>Data analysis and insight generation</strong> for client projects</li>
                <li><strong>Process automation</strong> to streamline internal operations (e.g., document management, scheduling)</li>
                <li><strong>Prototype development</strong> of AI-powered tools or dashboards during implementation projects</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All outputs are <strong>reviewed, edited, and validated by humans</strong> before being shared or deployed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Human Oversight</h2>
              <p className="text-muted-foreground leading-relaxed">
                AI supports our work — it does not make decisions on behalf of clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every deliverable, recommendation, or model output is <strong>reviewed by qualified consultants</strong> before it reaches you.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We maintain:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Human-in-the-loop review for all AI-assisted materials</li>
                <li>Internal documentation of AI use within each project</li>
                <li>Version control and audit logs for AI-generated content where relevant</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Data Protection and Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We never input <strong>personal, confidential, or sensitive client data</strong> into third-party AI tools unless:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>We have your explicit consent, and</li>
                <li>The tool provider meets GDPR and equivalent international data protection standards</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We favour <strong>local, privacy-respecting tools</strong> or enterprise integrations that keep your data secure.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For more details, please see our <Link to="/legal#privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. AI Risk Management</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                McCarthy Solutions conducts <strong>lightweight AI impact reviews</strong> at the start of relevant projects.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These reviews consider:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Whether AI use could introduce bias or misleading outputs</li>
                <li>How human review mitigates reputational or ethical risk</li>
                <li>Whether the project changes our overall AI risk classification</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our work currently falls under <strong>"low-risk" AI usage</strong> as defined by the <strong>EU AI Act</strong>, since:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>We do not deploy AI in high-risk sectors (e.g., employment screening, public safety)</li>
                <li>We do not use biometric, surveillance, or fully automated decision systems</li>
                <li>AI is used only as a <strong>support tool</strong> under human supervision</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Governance and Accountability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                McCarthy Solutions maintains clear internal practices to ensure that all AI use remains ethical, transparent, and compliant.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Accountability sits with <strong>the lead consultant on each engagement</strong>, who is responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Reviewing how AI tools are selected and applied</li>
                <li>Ensuring human review of all AI-assisted outputs before delivery</li>
                <li>Verifying that no personal or confidential data is entered into AI systems</li>
                <li>Staying informed about evolving best practice and regulation</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Where projects involve collaborators or subcontractors</strong>, they must follow the same <strong>AI governance and privacy standards</strong> that guide McCarthy Solutions — including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Responsible use of AI under human review</li>
                <li>Respect for client confidentiality and data protection laws</li>
                <li>No unauthorised use of client materials in third-party AI tools</li>
                <li>Alignment with the ethical principles outlined in this Transparency Notice and our Privacy Policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Review and Continuous Improvement</h2>
              <p className="text-muted-foreground leading-relaxed">
                This transparency notice is reviewed <strong>twice per year</strong> or whenever our use of AI materially changes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We regularly monitor updates to the <strong>EU AI Act</strong> and other regulatory frameworks to ensure compliance and best practice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Questions or Concerns</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about how AI is used in our work, please contact:
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <a href="mailto:ai-governance@mccarthy-solutions.com" className="text-primary hover:underline font-semibold">
                  ai-governance@mccarthy-solutions.com
                </a>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We welcome questions, audits, and discussions about ethical AI - transparency builds trust, and trust builds great work.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border" style={{ backgroundColor: '#F5F1ED' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={chevronLogo} alt="McCarthy Solutions" className="w-7 h-7" />
                <div className="text-xl font-bold text-foreground">McCarthy Solutions</div>
              </div>
              <p className="text-muted-foreground text-sm">AI consultant for consultants and SME leaders.</p>
              <p className="text-muted-foreground text-sm italic mt-3">"The illiterate of the 21st century will be those who cannot learn, unlearn, and relearn." - Alvin Toffler</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/#services" className="hover:text-accent transition-colors">AI Training</Link></li>
                <li><Link to="/#services" className="hover:text-accent transition-colors">Strategy & Advisory</Link></li>
                <li><Link to="/#services" className="hover:text-accent transition-colors">Implementation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/#process" className="hover:text-accent transition-colors">Process</Link></li>
                <li><Link to="/#results" className="hover:text-accent transition-colors">Results</Link></li>
                <li><Link to="/#testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
                <li><Link to="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/legal#privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                <li><Link to="/legal#terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link></li>
                <li><Link to="/legal#cookie-policy" className="hover:text-accent transition-colors">Cookie Policy</Link></li>
                <li><Link to="/ai-transparency-notice" className="hover:text-accent transition-colors">AI Transparency Notice</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 McCarthy Solutions. All rights reserved. Built with 💚 in Dublin. <a href="mailto:conor@mccarthy-solutions.com" className="hover:text-accent transition-colors underline">Get in touch</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AITransparency;

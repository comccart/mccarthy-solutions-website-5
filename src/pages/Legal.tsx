import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
        // Decode the hash to handle %2523cookie-policy → #cookie-policy
        const decodedHash = decodeURIComponent(hash);
        const element = document.querySelector(decodedHash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Handle both "cookie-policy" and "#cookie-policy" formats
    const id = sectionId.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState({}, "", `#${id}`);
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
            <p className="text-sm text-muted-foreground mb-6">Last Updated: October 30th 2025</p>
            <div className="prose prose-lg max-w-none text-foreground">
              <h3 className="text-2xl font-semibold mb-4">1. Overview</h3>
              <p className="mb-6">
                McCarthy Solutions ("we", "our", or "us") provides AI consultancy services including <strong>training, strategy, and implementation</strong> for individuals and organisations.
              </p>
              <p className="mb-6">
                We respect your privacy and are committed to protecting your personal data in line with the <strong>EU General Data Protection Regulation (GDPR)</strong> and Irish data protection laws.
              </p>
              <p className="mb-6">
                This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">2. Information We Collect</h3>
              <p className="mb-6">We collect and process the following types of information:</p>

              <h4 className="text-xl font-semibold mb-3">a) Information You Provide Directly</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Contact details</strong> (name, email, phone, organisation, job title)</li>
                <li><strong>Workshop or consultation information</strong> (such as attendance, feedback, or session notes)</li>
                <li><strong>Billing and payment details</strong> (for paid services)</li>
                <li><strong>Project-related data</strong> (documents, prompts, AI workflows, or strategic materials you share during engagements)</li>
              </ul>

              <h4 className="text-xl font-semibold mb-3">b) Information Collected Automatically</h4>
              <p className="mb-4">When you visit our website or digital platforms:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>IP address, browser type, and pages visited</li>
                <li>Date and time of access</li>
                <li>Cookies and similar technologies (see <em>Cookie Policy</em> below)</li>
              </ul>

              <h4 className="text-xl font-semibold mb-3">c) Information From Third Parties</h4>
              <p className="mb-4">We may receive limited data from trusted third parties such as:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Event registration platforms (e.g., Eventbrite)</li>
                <li>Payment processors (e.g., Stripe)</li>
                <li>Collaboration tools (e.g., Zoom, Notion, Slack)</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">3. How We Use Your Information</h3>
              <p className="mb-4">We process personal data only where necessary and lawful, including to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Deliver and improve our consultancy, training, and AI implementation services</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Send updates, resources, and newsletters (only if you've opted in)</li>
                <li>Comply with legal or tax obligations</li>
                <li>Analyse service usage to improve our offerings and user experience</li>
              </ul>
              <p className="mb-6">
                We do <strong>not</strong> sell or rent personal data. Any AI models, workflows, or analytics we use are governed by strict confidentiality and data-handling standards.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">4. Legal Bases for Processing</h3>
              <p className="mb-4">We process your data on the following legal bases:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Contractual necessity</strong> — to perform our obligations under client agreements</li>
                <li><strong>Consent</strong> — where you've opted in (e.g., marketing emails)</li>
                <li><strong>Legitimate interest</strong> — for business development, training delivery, or service improvement</li>
                <li><strong>Legal obligation</strong> — for compliance with accounting or tax laws</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">5. Data Retention</h3>
              <p className="mb-4">We keep personal data only for as long as necessary to fulfil the purposes for which it was collected:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Client records: 7 years (for legal and tax compliance)</li>
                <li>Marketing data: until you unsubscribe or withdraw consent</li>
                <li>Workshop and training data: retained for up to 2 years for quality improvement, then anonymised or deleted</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">6. Data Sharing</h3>
              <p className="mb-4">We may share limited personal data with:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Service providers</strong> (e.g., payment processors, email platforms, cloud storage providers)</li>
                <li><strong>Subcontractors or partners</strong> working under strict confidentiality agreements</li>
                <li><strong>Legal authorities</strong> where required by law</li>
              </ul>
              <p className="mb-6">We ensure all third-party processors meet GDPR standards.</p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">7. International Data Transfers</h3>
              <p className="mb-6">
                Where data is transferred outside the European Economic Area (EEA), we ensure adequate safeguards, such as <strong>EU Standard Contractual Clauses (SCCs)</strong>.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">8. Your Rights</h3>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Access your personal data</li>
                <li>Request correction or deletion</li>
                <li>Object to or restrict processing</li>
                <li>Withdraw consent at any time</li>
                <li>Request data portability</li>
              </ul>
              <p className="mb-6">
                To exercise these rights, contact: <a href="mailto:privacy@mccarthy-solutions.com" className="text-primary hover:underline">privacy@mccarthy-solutions.com</a>
              </p>
              <p className="mb-6">
                If you believe your data protection rights have been violated, you can lodge a complaint with the <strong>Data Protection Commission (DPC)</strong> in Ireland.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">9. Security Measures</h3>
              <p className="mb-4">We take data security seriously and implement:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Encrypted storage (cloud and local)</li>
                <li>Access controls for all team members and subcontractors</li>
                <li>Regular security and compliance reviews</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">10. Updates to This Policy</h3>
              <p className="mb-6">
                We may update this Privacy Policy periodically. The latest version will always be available at <strong>mccarthy-solutions.com/legal</strong>.
              </p>
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
            <p className="text-sm text-muted-foreground mb-6">Last Updated: 30th October 2025</p>
            <div className="prose prose-lg max-w-none text-foreground">
              <h3 className="text-2xl font-semibold mb-4">1. Introduction</h3>
              <p className="mb-6">
                Welcome to McCarthy Solutions ("we", "our", or "us").
              </p>
              <p className="mb-6">
                We provide <strong>AI consultancy, training, strategy, and implementation services</strong> for individuals and organisations.
              </p>
              <p className="mb-6">
                By engaging with our services or accessing our website (mccarthy-solutions.com), you agree to comply with and be bound by these Terms of Service.
              </p>
              <p className="mb-6">
                If you do not agree, please refrain from using our site or services.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">2. Services Provided</h3>
              <p className="mb-4">We offer professional services including but not limited to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>AI consultancy and advisory work</li>
                <li>AI-related training and workshops</li>
                <li>AI implementation projects and technical development</li>
                <li>Strategic guidance, audits, and documentation support</li>
              </ul>
              <p className="mb-6">
                All services are delivered under agreed scopes of work, proposals, or statements of work shared before engagement.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">3. Use of Our Website</h3>
              <p className="mb-4">You agree to use our website only for lawful purposes and in a way that does not:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Infringe the rights of others</li>
                <li>Restrict or inhibit anyone else's use of the site</li>
                <li>Introduce viruses, malicious code, or harmful content</li>
              </ul>
              <p className="mb-6">
                We may update or withdraw access to parts of our site at any time without notice.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">4. Client Responsibilities</h3>
              <p className="mb-4">When engaging McCarthy Solutions, you agree to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide accurate and timely information necessary for the delivery of our services</li>
                <li>Respect agreed timelines and payment terms</li>
                <li>Obtain any necessary internal approvals before sharing data, content, or access credentials</li>
                <li>Comply with all applicable laws when using AI systems developed or implemented by us</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">5. Intellectual Property</h3>
              <p className="mb-4">Unless otherwise agreed in writing:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>All <strong>pre-existing intellectual property</strong> (IP) belonging to either party remains their property.</li>
                <li>Any <strong>AI tools, frameworks, or materials</strong> developed by McCarthy Solutions during an engagement remain our IP, though clients receive a <strong>perpetual licence</strong> to use outputs for internal business purposes.</li>
                <li>Clients retain full ownership of their <strong>data, prompts, and confidential materials</strong>.</li>
              </ul>
              <p className="mb-6">
                You may not reproduce or redistribute training materials or digital assets without written permission.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">6. Fees and Payments</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Fees are set out in the agreed proposal, invoice, or statement of work.</li>
                <li>Payments are due according to the terms specified on the invoice (typically <strong>within 14 days</strong>).</li>
                <li>Late payments may incur interest at the statutory rate in accordance with the <strong>European Communities (Late Payment in Commercial Transactions) Regulations 2012</strong>.</li>
                <li>All fees are exclusive of VAT unless otherwise stated.</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">7. Confidentiality</h3>
              <p className="mb-6">
                We maintain strict confidentiality with all client data and materials.
              </p>
              <p className="mb-6">
                Both parties agree not to disclose any confidential information to third parties without written consent, except where required by law.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">8. Use of AI Systems</h3>
              <p className="mb-4">When using AI tools or outputs developed, configured, or recommended by McCarthy Solutions:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Clients are responsible for <strong>reviewing and validating</strong> AI-generated outputs before use in decision-making.</li>
                <li>AI models and third-party platforms are governed by their respective providers' terms.</li>
                <li>We make no guarantees regarding the accuracy or performance of third-party AI systems.</li>
              </ul>
              <p className="mb-6">
                We support responsible, transparent, and human-in-the-loop AI adoption.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">9. Limitation of Liability</h3>
              <p className="mb-4">To the maximum extent permitted by law:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>McCarthy Solutions is <strong>not liable</strong> for any indirect, incidental, or consequential damages arising from the use or inability to use our services or website.</li>
                <li>Our total liability for any claim shall not exceed the total amount paid by the client for the relevant engagement.</li>
                <li>We are not responsible for losses arising from misuse or unauthorised reliance on AI systems or tools.</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">10. Cancellations and Termination</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Either party may terminate a service engagement with written notice if the other party breaches these Terms and fails to remedy the breach within a reasonable timeframe.</li>
                <li>For workshops or events, cancellations made <strong>within 7 days</strong> of the scheduled date may incur a partial or full fee.</li>
                <li>Upon termination, clients remain liable for work completed to date.</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">11. Data Protection</h3>
              <p className="mb-6">
                All data shared with us is handled in accordance with our <strong>Privacy Policy</strong> and <strong>Cookie Policy</strong>.
              </p>
              <p className="mb-6">
                We adhere to GDPR and Irish data protection laws in all engagements.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">12. Governing Law</h3>
              <p className="mb-6">
                These Terms of Service are governed by the laws of <strong>Ireland</strong>.
              </p>
              <p className="mb-6">
                Any disputes arising from or relating to these terms shall be subject to the exclusive jurisdiction of the Irish courts.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">13. Contact</h3>
              <p className="mb-6">
                For any questions about these Terms, contact: <a href="mailto:legal@mccarthy-solutions.com" className="text-primary hover:underline">legal@mccarthy-solutions.com</a>
              </p>
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
            <p className="text-sm text-muted-foreground mb-6">Last Updated: 30th October 2025</p>
            <div className="prose prose-lg max-w-none text-foreground">
              <h3 className="text-2xl font-semibold mb-4">1. Overview</h3>
              <p className="mb-6">
                McCarthy Solutions ("we", "our", or "us") uses cookies and similar technologies on <strong>mccarthy-solutions.com</strong> to provide a better browsing experience, improve website performance, and analyse traffic.
              </p>
              <p className="mb-6">
                This Cookie Policy explains what cookies are, how we use them, and how you can manage your preferences.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">2. What Are Cookies?</h3>
              <p className="mb-6">
                Cookies are small text files placed on your device when you visit a website.
              </p>
              <p className="mb-6">
                They help the site remember your actions and preferences (such as login details, language, and display settings) and enable certain features like analytics or embedded content.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">3. Types of Cookies We Use</h3>
              <div className="my-6 rounded-lg border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Type</TableHead>
                      <TableHead className="font-semibold">Purpose</TableHead>
                      <TableHead className="font-semibold">Examples</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Essential Cookies</TableCell>
                      <TableCell>Required for the site to function properly. These cannot be disabled.</TableCell>
                      <TableCell>Session cookies, form submissions, navigation preferences</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Performance & Analytics Cookies</TableCell>
                      <TableCell>Help us understand how visitors use the website so we can improve it.</TableCell>
                      <TableCell>Google Analytics, Squarespace Analytics</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Functional Cookies</TableCell>
                      <TableCell>Enable enhanced functionality or personalisation (e.g., remembering preferences).</TableCell>
                      <TableCell>Embedded media, third-party integrations</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Marketing Cookies</TableCell>
                      <TableCell>Used to deliver relevant content or measure campaign performance (only if applicable).</TableCell>
                      <TableCell>LinkedIn Insight Tag, Meta Pixel (if used)</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <p className="mb-6">
                We may occasionally update this list as tools or platforms change.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">4. Third-Party Cookies</h3>
              <p className="mb-4">Some cookies are placed by third-party services we use to deliver certain functionality, such as:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Squarespace</strong> (hosting, analytics, performance)</li>
                <li><strong>Google Analytics</strong> (traffic analysis)</li>
                <li><strong>Zoom, Eventbrite, Stripe</strong> (for event bookings and payments)</li>
                <li><strong>LinkedIn or X.com</strong> (if we run advertising or tracking campaigns)</li>
              </ul>
              <p className="mb-6">
                These providers have their own privacy and cookie policies, which govern how they use your data.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">5. Managing Your Cookie Preferences</h3>
              <p className="mb-6">
                When you first visit our site, you'll see a <strong>cookie consent banner</strong> allowing you to accept or reject non-essential cookies.
              </p>
              <p className="mb-4">You can also manage cookies at any time by adjusting your browser settings:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Google Chrome:</strong> Manage cookies</li>
                <li><strong>Firefox:</strong> <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Manage cookies</a></li>
                <li><strong>Safari:</strong> Manage cookies</li>
                <li><strong>Edge:</strong> Manage cookies</li>
              </ul>
              <p className="mb-6">
                Blocking certain cookies may affect how the website functions.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">6. Data Retention</h3>
              <p className="mb-4">Cookies are stored for varying lengths of time:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Session cookies:</strong> deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> remain until they expire or you delete them manually</li>
              </ul>
              <p className="mb-6">
                Analytics and marketing cookies typically expire within 6–24 months.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">7. Updates to This Policy</h3>
              <p className="mb-6">
                We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements.
              </p>
              <p className="mb-6">
                The latest version will always be available at <strong>mccarthy-solutions.com/legal</strong>.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">8. Contact</h3>
              <p className="mb-6">
                If you have any questions about our use of cookies, please contact: <a href="mailto:privacy@mccarthy-solutions.com" className="text-primary hover:underline">privacy@mccarthy-solutions.com</a>
              </p>
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
                <button 
                  onClick={() => scrollToSection('privacy-policy')} 
                  className="block text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => scrollToSection('terms-of-service')} 
                  className="block text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => scrollToSection('cookie-policy')} 
                  className="block text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  Cookie Policy
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} McCarthy Solutions. All rights reserved. Built with 💚 in Dublin. <a href="mailto:conor@mccarthy-solutions.com" className="hover:text-accent transition-colors underline">Get in touch</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Legal;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, ExternalLink, Star, CheckCircle2, TrendingUp, Users, Target, BarChart3, Shield, Award, Clock, ArrowRight, Sparkles, Bot, GraduationCap, Workflow, LineChart, Puzzle, Rocket, Menu } from "lucide-react";
import { useState } from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import chevronLogo from "@/assets/chevron-logo.png";
import iwaiLogo from "@/assets/iwai-logo-new.png";
import huggingfaceLogo from "@/assets/huggingface-logo.png";
import altmbaLogo from "@/assets/altmba-logo.jpg";
import gdpLogo from "@/assets/gdp-logo.jpg";
import iipLogo from "@/assets/inclusion-intelligence-logo.png";
import safelifeLogo from "@/assets/safelife-logo.jpg";
import techstarsLogo from "@/assets/techstars-logo.svg";
import ineffableLogo from "@/assets/ineffable-logo.jpg";
import akimboLogo from "@/assets/akimbo-logo.svg";
import sethGodinImage from "@/assets/seth-godin.jpg";
import ramonRayImage from "@/assets/ramon-ray.jpg";
import bernadetteJiwaImage from "@/assets/bernadette-jiwa.jpg";
import marcusImage from "@/assets/marcus.jpeg";
import waseemImage from "@/assets/waseem.jpg";
import chrisImage from "@/assets/chris.jpeg";
import aimLogo from "@/assets/aim-logo.jpg";
import enterpriseIrelandLogo from "@/assets/enterprise-ireland-logo.png";
import euLogo from "@/assets/eu-logo.jpg";
const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logos = [{
    name: "AltMBA",
    image: altmbaLogo
  }, {
    name: "Global Diversity Practice",
    image: gdpLogo
  }, {
    name: "Inclusion Intelligence",
    image: iipLogo
  }, {
    name: "SafeLife",
    image: safelifeLogo
  }, {
    name: "Techstars",
    image: techstarsLogo
  }, {
    name: "Ineffable Music",
    image: ineffableLogo
  }, {
    name: "Akimbo",
    image: akimboLogo
  }, {
    name: "AIM",
    image: aimLogo
  }, {
    name: "Enterprise Ireland",
    image: enterpriseIrelandLogo
  }, {
    name: "EU",
    image: euLogo
  }];
  const services = [{
    icon: GraduationCap,
    title: "Learn AI with confidence",
    description: "Training and literacy programs that help you, your team and your clients understand AI without the overwhelm.",
    benefits: ["Practical Learning", "No Jargon", "Real-World Applications"]
  }, {
    icon: Workflow,
    title: "Make AI part of your work, not a distraction",
    description: "Advisory and strategy services that integrate AI into your workflows seamlessly.",
    benefits: ["Strategic Planning", "Seamless Integration", "Focused Implementation"]
  }, {
    icon: Sparkles,
    title: "See results with practical AI tools",
    description: "Implementation and automation that deliver measurable outcomes for your business.",
    benefits: ["Time Savings", "Improved Delivery", "Scalable Systems"]
  }];
  const processSteps = [{
    number: "01",
    title: "Understand your work.",
    description: "We listen. We learn what you do and where AI could help."
  }, {
    number: "02",
    title: "Build your strategy.",
    description: "Clear plan. Practical steps. No tech jargon."
  }, {
    number: "03",
    title: "Implement with care.",
    description: "Tools that fit your workflow. Training that makes sense."
  }, {
    number: "04",
    title: "Measure what matters.",
    description: "Track real results. Adjust as you grow."
  }];
  const results = [{
    client: "Global medical business",
    metric: "10+ hours",
    description: "Saved weekly on CXO admin tasks",
    industry: "Healthcare"
  }, {
    client: "Marketing consultant",
    metric: "3x",
    description: "Content creation scaled",
    industry: "Marketing"
  }, {
    client: "Leadership Coach",
    metric: "Faster",
    description: "Client delivery systems",
    industry: "Coaching"
  }];
  const testimonials = [{
    quote: "Working with Conor helped me cut through the noise and hype surrounding AI and focus on what truly matters. Rather than chasing every new tool, we zeroed in on how AI could drive meaningful outcomes in my day-to-day work—like improving how I lead meetings, make decisions, and build teams. More importantly, our collaboration helped me shape a clearer roadmap for how AI fits into my broader leadership journey. I now use AI in a way that feels intuitive and grounded, and I feel confident in modeling and exploring that mindset with others. If you're a leader looking to make AI not just accessible but transformative, I can’t recommend Conor enough.",
    author: "Marcus M.",
    role: "CIO, Safe Life",
    rating: 5,
    image: marcusImage
  }, {
    quote: "Conor brings a refreshing and incredibly insightful approach to understanding the way we do business, and uses that knowledge to suggest creative applications for artificial intelligence to enhance our ways of working. His deep expertise in AI coupled with an enthusiastic ‘can-do’ attitude have been instrumental in accelerating our digital transformation at Global Diversity Practice. From co-developing AI tools and advising on AI strategy, Conor has played a pivotal role in embedding AI-first thinking across our practices. This has helped us to streamline internal processes - freeing up valuable time for our team to prioritise the work that actually matters.",
    author: "Waseem I.",
    role: "Head of Digital, Global Diversity Practice",
    rating: 5,
    image: waseemImage
  }, {
    quote: "Conor is nothing short of a genius when it comes to AI. His unique ability to demystify complex concepts and explain them in a way that’s both engaging and easy to understand sets him apart from the crowd. His work helping us create our AI course was exceptional plus he's a joy to work with. His rare combination of academic depth and practical expertise makes him the go-to person for any AI-driven project. If you are looking for an invaluable partner to help you leverage AI for your business success, then Conor is your man.",
    author: "Chris R.",
    role: "CEO, 42Courses",
    rating: 5,
    image: chrisImage
  }];
  const faqs = [{
    question: "I'm not technical. Can I still use AI?",
    answer: "Yes. AI is a life skill, not a tech stack. I teach it in plain language."
  }, {
    question: "How long until I see results?",
    answer: "Most clients save time within the first week. Bigger projects take 4-8 weeks."
  }, {
    question: "Do you work with solo consultants?",
    answer: "Absolutely. I work with solo consultants, small teams, and SME leaders."
  }, {
    question: "What if I've tried AI and it didn't work?",
    answer: "That's common. Most AI implementations fail because they're too complex. I keep it simple and practical."
  }];
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={chevronLogo} alt="McCarthy Solutions" className="w-8 h-8" />
              <div className="text-2xl font-bold text-foreground">McCarthy Solutions</div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
              <a href="#process" className="text-foreground hover:text-accent transition-colors">Process</a>
              <a href="#results" className="text-foreground hover:text-accent transition-colors">Results</a>
              <a href="#testimonials" className="text-foreground hover:text-accent transition-colors">Testimonials</a>
              <Link to="/case-studies" className="text-foreground hover:text-accent transition-colors">Case Studies</Link>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="default" size="lg" className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg" onClick={() => window.open('https://calendar.app.google/PaVwZ8ZxYX5SVBJT8', '_blank')}>
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
                    <a href="#services" className="text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                      Services
                    </a>
                    <a href="#process" className="text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                      Process
                    </a>
                    <a href="#results" className="text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                      Results
                    </a>
                    <a href="#testimonials" className="text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                      Testimonials
                    </a>
                    <Link to="/case-studies" className="text-lg text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                      Case Studies
                    </Link>
                    <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg mt-4" onClick={() => {
                    window.open('https://calendar.app.google/PaVwZ8ZxYX5SVBJT8', '_blank');
                    setMobileMenuOpen(false);
                  }}>
                      Book free intro call
                    </Button>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-24 px-6" style={{
      paddingTop: '128px',
      paddingBottom: '100px'
    }}>
        <div className="container mx-auto max-w-6xl">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-start gap-6 mb-12">
            <div className="flex flex-col items-start gap-3">
              <img src={iwaiLogo} alt="Innovating with AI" className="h-12" />
              <span className="text-base font-semibold text-muted-foreground">IWAI Certified</span>
            </div>
            <div className="flex flex-col items-start gap-3">
              <img src={huggingfaceLogo} alt="Hugging Face AI Agents Fundamentals" className="h-12" />
              <span className="text-base font-semibold text-muted-foreground">AI Agents Certified</span>
            </div>
          </div>

          {/* Hero Text - Left Aligned */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-left mb-8 leading-tight text-foreground">
            <span className="inline-block">Less admin. More impact.</span>
            <br />
            <span className="text-primary">Powered by AI.</span>
          </h1>

          <p className="text-xl text-muted-foreground text-left max-w-3xl mb-4">
            I help consultants and SME leaders dramatically improve performance, client delivery, and confidence by integrating AI that sticks.
          </p>
          
          <p className="text-2xl font-semibold text-left text-foreground mb-4">
            Change the way you work.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-start gap-4 mb-16">
            <Button size="lg" variant="default" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => window.open('https://calendar.app.google/PaVwZ8ZxYX5SVBJT8', '_blank')}>
              Book free intro call
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="text-left text-muted-foreground mb-8">
            Trusted by Consultants and SME Leaders
          </p>

          {/* Logo Carousel */}
          <div className="relative overflow-hidden py-8">
            <div className="flex gap-12 animate-scroll">
              {[...logos, ...logos].map((logo, i) => <div key={i} className="flex-shrink-0">
                  <img src={logo.image} alt={logo.name} className="h-12 w-auto object-contain transition-all" />
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="px-6 bg-background" style={{
      paddingTop: '100px',
      paddingBottom: '100px'
    }}>
        <div className="container mx-auto max-w-6xl text-center mb-16">
          <Badge variant="default" className="mb-6 bg-primary text-primary-foreground">The Challenge</Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            You know your work. AI can help you do it better.
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Most consultants and leaders waste time on tasks AI could handle. But AI feels complicated.
          </p>
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Problem Side */}
            <div className="p-8 rounded-2xl bg-muted/50 border border-border space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Puzzle className="w-6 h-6 text-foreground" />
                  <h3 className="text-2xl font-bold text-foreground mb-0">Your Current State</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Manual & Fragmented</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-secondary" />
                  <h3 className="text-xl font-bold text-foreground">Too Much Time on Admin</h3>
                </div>
                <p className="text-muted-foreground">Hours wasted on tasks that don't require your expertise.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-secondary" />
                  <h3 className="text-xl font-bold text-foreground">AI Feels Overwhelming</h3>
                </div>
                <p className="text-muted-foreground">Too many tools. Too much jargon. No clear path forward.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-secondary" />
                  <h3 className="text-xl font-bold text-foreground">Hard to Measure Impact</h3>
                </div>
                <p className="text-muted-foreground">You know you need to change, but don't know where to start.</p>
              </div>
            </div>

            {/* Solution Side */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-secondary-foreground space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-secondary-foreground" />
                  <h3 className="text-2xl font-bold text-secondary-foreground mb-0">With McCarthy Solutions</h3>
                </div>
                <p className="text-sm text-secondary-foreground/90">Automated & Intelligent</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-secondary-foreground" />
                  <h3 className="text-xl font-bold text-secondary-foreground">Save Hours Every Week</h3>
                </div>
                <p className="text-secondary-foreground/90">Automate admin. Focus on what matters. Get time back.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-secondary-foreground" />
                  <h3 className="text-xl font-bold text-secondary-foreground">Stay Creative</h3>
                </div>
                <p className="text-secondary-foreground/90">Use AI to enhance your work, not replace your thinking.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <LineChart className="w-5 h-5 text-secondary-foreground" />
                  <h3 className="text-xl font-bold text-secondary-foreground">Lead with Integrity</h3>
                </div>
                <p className="text-secondary-foreground/90">Build systems that work for you and your clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section id="services" className="px-6" style={{
      paddingTop: '100px',
      paddingBottom: '100px',
      backgroundColor: '#F5F1ED'
    }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4 bg-primary text-primary-foreground">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">What can we do for you?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three ways to make AI work for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => <Card key={i} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.benefits.map((benefit, j) => <div key={j} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>)}
                  </div>
                  <a href="#contact" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section id="testimonials" className="px-6 bg-background" style={{
      paddingTop: '100px',
      paddingBottom: '100px'
    }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4 bg-primary text-primary-foreground">Client Success</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What do other people say about our work?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Consultants and leaders who changed the way they work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => <Card key={i} className="border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-primary text-primary" />)}
                  </div>
                  <CardDescription className="text-base text-foreground italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-secondary">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Process/Methodology Section */}
      <section id="process" className="px-6" style={{
      paddingTop: '100px',
      paddingBottom: '100px',
      backgroundColor: '#F5F1ED'
    }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4 bg-primary text-primary-foreground">Our Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              How will we work together?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple steps. Real results.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />
            
            <div className="grid md:grid-cols-3 gap-12">
              {processSteps.slice(0, 3).map((step, i) => <div key={i} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 relative z-10 shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>)}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2" onClick={() => window.open('https://calendar.app.google/PaVwZ8ZxYX5SVBJT8', '_blank')}>
              Book free intro call
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Results & Case Studies */}
      <section id="results" className="px-6 bg-background" style={{
      paddingTop: '100px',
      paddingBottom: '100px'
    }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4 bg-primary text-primary-foreground">Proven Results</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Real results from real people.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here's what happens when consultants and leaders work with AI the right way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {results.map((result, i) => <Card key={i} className="text-center border-2 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="text-5xl font-bold text-primary mb-2">{result.metric}</div>
                  <CardTitle className="text-lg text-foreground">{result.description}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{result.client}</p>
                  <Badge variant="default" className="text-xs bg-primary text-primary-foreground">{result.industry}</Badge>
                </CardContent>
              </Card>)}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="default" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => window.open('https://calendar.app.google/PaVwZ8ZxYX5SVBJT8', '_blank')}>
              Book free intro call
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* What We Believe About AI */}
      <section className="px-6" style={{
      paddingTop: '100px',
      paddingBottom: '100px',
      backgroundColor: '#407899'
    }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{
          color: '#F5F1ED'
        }}>
            What we believe about AI.
          </h2>
          <div className="space-y-6 text-xl" style={{
          color: '#F5F1ED'
        }}>
            <div className="flex items-start gap-4 text-left max-w-3xl mx-auto">
              <Bot className="w-8 h-8 flex-shrink-0 mt-1" style={{
              color: '#FBA60C'
            }} />
              <p>AI is not a replacement for human judgment. It's a tool that amplifies your expertise and frees you to focus on what truly matters.</p>
            </div>
            <div className="flex items-start gap-4 text-left max-w-3xl mx-auto">
              <Workflow className="w-8 h-8 flex-shrink-0 mt-1" style={{
              color: '#FBA60C'
            }} />
              <p>The best AI implementations are simple, practical, and built around the way you already work.</p>
            </div>
            <div className="flex items-start gap-4 text-left max-w-3xl mx-auto">
              <Users className="w-8 h-8 flex-shrink-0 mt-1" style={{
              color: '#FBA60C'
            }} />
              <p>Real transformation happens when technology serves people, not the other way around.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Trust & Certification */}
      <section className="px-6 bg-background" style={{
      paddingTop: '100px',
      paddingBottom: '100px'
    }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Who I've collaborated with.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Work shaped in conversation with remarkable people.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[{
            name: "Seth Godin",
            image: sethGodinImage,
            description: "Changed how millions think about marketing, trust, and creative work by making ideas spread through clarity and generosity."
          }, {
            name: "Ramon Ray",
            image: ramonRayImage,
            description: "Inspires and equips entrepreneurs with practical business growth advice rooted in energy, storytelling, and community."
          }, {
            name: "Bernadette Jiwa",
            image: bernadetteJiwaImage,
            description: "Helps brands find and tell meaningful stories that connect deeply with the people they serve."
          }].map((person, i) => <div key={i} className="flex flex-col items-center text-center p-4 rounded-lg border-2 border-primary/20 hover:border-primary/50 transition-all">
                <img src={person.image} alt={person.name} className="w-40 h-40 rounded-full object-cover mb-4" />
                <p className="font-semibold text-foreground mb-2">{person.name}</p>
                <p className="text-sm text-muted-foreground">{person.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6" style={{
      paddingTop: '100px',
      paddingBottom: '100px',
      backgroundColor: '#F5F1ED'
    }}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-4 bg-primary text-primary-foreground">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Common questions answered.
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about working with McCarthy Solutions.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => <AccordionItem key={i} value={`item-${i}`} className="border-2 border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="px-6" style={{
      paddingTop: '100px',
      paddingBottom: '100px',
      backgroundColor: '#2E294E'
    }}>
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8" style={{
          backgroundColor: 'rgba(251, 166, 12, 0.1)',
          borderColor: 'rgba(251, 166, 12, 0.3)'
        }}>
            <Clock className="w-4 h-4" style={{
            color: '#FBA60C'
          }} />
            <span className="text-sm font-medium" style={{
            color: '#F5F1ED'
          }}>Limited Spots Available This Quarter</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{
          color: '#F5F1ED'
        }}>
            Ready to change the way you work?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{
          color: '#F5F1ED',
          opacity: 0.9
        }}>
            Book a free strategy call. We'll talk about your work and where AI can help.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button size="lg" className="text-lg px-8 shadow-lg" style={{
            backgroundColor: '#FBA60C',
            color: '#2E294E'
          }} onClick={() => window.open('https://calendar.app.google/PaVwZ8ZxYX5SVBJT8', '_blank')}>
              Book free intro call
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm" style={{
          color: '#F5F1ED',
          opacity: 0.8
        }}>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" style={{
              color: '#FBA60C'
            }} />
              <span>30 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" style={{
              color: '#FBA60C'
            }} />
              <span>No sales pitch</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" style={{
              color: '#FBA60C'
            }} />
              <span>Just clarity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border" style={{
      backgroundColor: '#F5F1ED'
    }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
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
                <li><a href="#services" className="hover:text-accent transition-colors">AI Training</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Strategy & Advisory</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Implementation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#process" className="hover:text-accent transition-colors">Process</a></li>
                <li><a href="#results" className="hover:text-accent transition-colors">Results</a></li>
                <li><a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
                <li><a href="/case-studies" className="hover:text-accent transition-colors">Case Studies</a></li>
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

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>;
};
export default Index;
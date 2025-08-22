import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="particles-bg absolute inset-0"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary-glow rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-8 fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Introducing NEXUS v2.0</span>
            <Zap className="w-4 h-4 text-accent" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              The Future
            </span>
            <br />
            <span className="text-foreground">
              of Digital Innovation
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-up fade-in-delay-1 max-w-2xl mx-auto leading-relaxed">
            Transform your business with cutting-edge technology, seamless user experiences, 
            and powerful analytics that drive real results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up fade-in-delay-2">
            <Button variant="hero" size="lg" className="glow-primary group">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="glass border-card-border/50 hover:bg-surface-glass">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 fade-in-up fade-in-delay-3">
            <div className="glass-card text-center">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                10k+
              </div>
              <div className="text-muted-foreground text-sm">
                Active Users
              </div>
            </div>
            <div className="glass-card text-center">
              <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-muted-foreground text-sm">
                Uptime
              </div>
            </div>
            <div className="glass-card text-center">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-muted-foreground text-sm">
                Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-card-border/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
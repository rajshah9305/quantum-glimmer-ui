import { 
  Zap, 
  Shield, 
  Cpu, 
  BarChart3, 
  Layers, 
  Smartphone,
  Cloud,
  Lock
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed with cutting-edge optimization techniques and modern architecture."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and compliance standards."
  },
  {
    icon: Cpu,
    title: "AI-Powered",
    description: "Smart automation and intelligent insights powered by advanced machine learning."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights with real-time data visualization and predictive analytics."
  },
  {
    icon: Layers,
    title: "Modular Design",
    description: "Flexible architecture that scales with your business needs and requirements."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Optimized for all devices with responsive design and native app experience."
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Built for the cloud with automatic scaling and global distribution."
  },
  {
    icon: Lock,
    title: "Privacy Focused",
    description: "Your data stays yours with transparent privacy controls and GDPR compliance."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale your applications 
            with confidence and ease.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card hover-scale group"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: 0 
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4 group-hover:glow-primary transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card inline-block">
            <p className="text-lg mb-4">
              Ready to experience the difference?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:glow-primary transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-6 py-3 border border-card-border/50 rounded-lg hover:bg-surface-glass transition-all duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Intersection Observer hook for animations
export function useIntersectionObserver() {
  // Implementation would go here for scroll animations
  // This is a placeholder for the animation trigger functionality
}
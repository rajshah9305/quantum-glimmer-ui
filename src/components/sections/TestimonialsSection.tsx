import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    company: "TechFlow Inc.",
    content: "NEXUS transformed our development workflow completely. The AI-powered insights helped us reduce deployment time by 70% and catch issues before they reach production.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez", 
    role: "Founder & CEO",
    company: "InnovateLab",
    content: "The glassmorphism design and smooth animations make our dashboard feel incredibly premium. Our clients are constantly impressed by the professional appearance.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Emily Watson",
    role: "Product Manager",
    company: "DataVision",
    content: "Outstanding customer support and documentation. The modular architecture allowed us to scale from startup to enterprise without rebuilding our entire infrastructure.",
    rating: 5,
    avatar: "EW"
  },
  {
    name: "David Kumar",
    role: "Lead Developer",
    company: "CloudFirst",
    content: "The real-time analytics and mobile-first approach have been game changers. We've seen a 40% increase in user engagement since switching to NEXUS.",
    rating: 5,
    avatar: "DK"
  },
  {
    name: "Lisa Park",
    role: "VP of Engineering", 
    company: "ScaleUp Solutions",
    content: "Security and privacy features exceed industry standards. The GDPR compliance tools saved us months of development time and legal complications.",
    rating: 5,
    avatar: "LP"
  },
  {
    name: "James Mitchell",
    role: "Technical Director",
    company: "FutureForge",
    content: "The cloud-native architecture and automatic scaling capabilities have allowed us to focus on building features instead of managing infrastructure.",
    rating: 5,
    avatar: "JM"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background to-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-accent opacity-10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Trusted by Innovators
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of companies that have transformed their businesses 
            with our cutting-edge platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card hover-scale group relative"
              style={{ 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                
                {/* Details */}
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="glass-card">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                50,000+
              </div>
              <div className="text-muted-foreground text-sm">
                Happy Customers
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                4.9/5
              </div>
              <div className="text-muted-foreground text-sm">
                Average Rating
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-muted-foreground text-sm">
                Customer Satisfaction
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-muted-foreground text-sm">
                Expert Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
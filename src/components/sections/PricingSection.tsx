import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "29",
    period: "month",
    description: "Perfect for small teams and startups",
    icon: Zap,
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "Mobile app access",
      "API integrations"
    ],
    popular: false,
    buttonText: "Start Free Trial"
  },
  {
    name: "Professional", 
    price: "79",
    period: "month",
    description: "Best for growing businesses",
    icon: Crown,
    features: [
      "Up to 25 team members",
      "100GB storage", 
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "Advanced security",
      "Collaboration tools",
      "White-label options"
    ],
    popular: true,
    buttonText: "Get Started"
  },
  {
    name: "Enterprise",
    price: "199",
    period: "month", 
    description: "For large organizations",
    icon: Rocket,
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 phone support",
      "Custom development",
      "Enterprise security",
      "Dedicated account manager",
      "SLA guarantee",
      "On-premise deployment"
    ],
    popular: false,
    buttonText: "Contact Sales"
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-surface to-background relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="text-foreground">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees, 
            no complicated tiers. Just powerful features at fair prices.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`glass-card hover-scale group relative ${
                plan.popular 
                  ? "ring-2 ring-primary/50 transform scale-105" 
                  : ""
              }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary px-4 py-1 rounded-full text-primary-foreground text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                  plan.popular 
                    ? "bg-gradient-primary" 
                    : "bg-gradient-accent"
                }`}>
                  <plan.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    /{plan.period}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="flex-shrink-0 w-5 h-5 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? "hero" : "outline"}
                className={`w-full ${
                  plan.popular 
                    ? "glow-primary" 
                    : "glass border-card-border/50 hover:bg-surface-glass"
                }`}
                size="lg"
              >
                {plan.buttonText}
              </Button>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl ${
                plan.popular 
                  ? "bg-gradient-primary" 
                  : "bg-gradient-accent"
              }`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card inline-block max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Need a custom solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              We offer tailored enterprise solutions for organizations 
              with specific requirements. Contact our sales team for a 
              personalized quote and dedicated support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" className="glow-primary">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="glass border-card-border/50">
                View Enterprise Features
              </Button>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span className="font-semibold text-primary">30-day money-back guarantee</span> • 
            <span className="ml-2">Cancel anytime</span> • 
            <span className="ml-2">No setup fees</span>
          </p>
        </div>
      </div>
    </section>
  );
}
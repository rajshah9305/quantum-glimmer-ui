import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      {/* Animated Background */}
      <div className="particles-bg absolute inset-0 opacity-30"></div>
      
      <div className="text-center relative z-10">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-glow">
            <Zap className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            NEXUS
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-surface rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-gradient-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading Text */}
        <p className="text-muted-foreground animate-pulse">
          Initializing the future...
        </p>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-1 mt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
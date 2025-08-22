import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign,
  Activity,
  Calendar,
  Settings,
  Bell
} from "lucide-react";

export function DashboardSection() {
  const metrics = [
    { label: "Total Revenue", value: "$124,592", change: "+12.5%", icon: DollarSign },
    { label: "Active Users", value: "8,429", change: "+18.2%", icon: Users },
    { label: "Conversion Rate", value: "3.24%", change: "+5.1%", icon: TrendingUp },
    { label: "Server Uptime", value: "99.9%", change: "+0.1%", icon: Activity },
  ];

  return (
    <section id="dashboard" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Interactive Dashboard
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get real-time insights with our comprehensive analytics dashboard 
            designed for modern businesses.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-6xl mx-auto">
          {/* Dashboard Header */}
          <div className="glass-card mb-6 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground">Dashboard</h3>
                <p className="text-muted-foreground">Welcome back, Alex Johnson</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 glass rounded-lg hover-glow">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 glass rounded-lg hover-glow">
                  <Settings className="w-5 h-5" />
                </button>
                <button className="p-2 glass rounded-lg hover-glow">
                  <Calendar className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div key={metric.label} className="glass-card hover-scale">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <metric.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-green-400 text-sm font-medium">
                    {metric.change}
                  </span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground mb-1">
                    {metric.value}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {metric.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Chart */}
            <div className="glass-card">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold">Revenue Analytics</h4>
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              
              {/* Mock Chart */}
              <div className="h-64 relative overflow-hidden rounded-lg bg-gradient-to-b from-primary/10 to-transparent">
                <div className="absolute inset-0 flex items-end justify-around p-4">
                  {[40, 65, 45, 80, 60, 75, 90, 55, 70, 85, 95, 78].map((height, i) => (
                    <div
                      key={i}
                      className="bg-gradient-primary rounded-t-md transition-all duration-1000 hover:glow-primary"
                      style={{ 
                        height: `${height}%`, 
                        width: '6%',
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="glass-card">
              <h4 className="text-lg font-semibold mb-6">Recent Activity</h4>
              <div className="space-y-4">
                {[
                  { action: "New user registered", time: "2 minutes ago", type: "user" },
                  { action: "Payment received", time: "15 minutes ago", type: "payment" },
                  { action: "Server deployment completed", time: "1 hour ago", type: "deployment" },
                  { action: "Security scan finished", time: "3 hours ago", type: "security" },
                  { action: "Backup created successfully", time: "6 hours ago", type: "backup" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 glass rounded-lg hover:bg-surface-glass transition-colors">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="mt-8 text-center">
            <div className="glass-card inline-block">
              <p className="text-lg mb-4">
                Experience the full power of our dashboard
              </p>
              <button className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:glow-primary transition-all duration-300">
                Try Interactive Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
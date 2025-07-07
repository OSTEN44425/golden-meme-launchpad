import React from 'react';
import ModernGrid from "@/components/animations/ModernGrid";
import { ModernButton } from "@/components/ui/modern-button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <ModernGrid />
      
      {/* Header */}
      <header className="relative z-50 border-b border-gray-800/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold text-white">Lovable</span>
            </div>
            
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Product</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Docs</a>
              
              <ModernButton className="glowing-border">
                Join the Alpha
              </ModernButton>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                Build beautiful
              </span>
              <br />
              <span className="text-white">web apps with AI</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in delay-100">
              Create stunning, responsive web applications using the power of artificial intelligence. 
              No coding required - just describe what you want to build.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-200">
              <ModernButton size="lg" className="glowing-border">
                Join the Alpha
              </ModernButton>
              <ModernButton variant="secondary" size="lg" className="glowing-border">
                Learn more
              </ModernButton>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 glass-dark glowing-border hover-scale animate-fade-in delay-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <CardTitle className="text-white">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Build applications in minutes, not hours. Our AI understands your requirements and generates production-ready code instantly.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-8 glass-dark glowing-border hover-scale animate-fade-in delay-400">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🎨</span>
                </div>
                <CardTitle className="text-white">Beautiful Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Every component is crafted with modern design principles, ensuring your application looks professional and engaging.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-8 glass-dark glowing-border hover-scale animate-fade-in delay-500">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <CardTitle className="text-white">Deploy Anywhere</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Your applications are built with standard web technologies, making them deployable on any modern hosting platform.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <Card className="max-w-4xl mx-auto p-12 glass-dark glowing-border animate-fade-in">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-white mb-6">
                Ready to transform your development workflow?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xl text-gray-300 mb-8">
                Join thousands of developers who are already building faster and more efficiently with AI-powered web development.
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ModernButton size="lg" className="glowing-border">
                  Start Building Now
                </ModernButton>
                <ModernButton variant="secondary" size="lg" className="glowing-border">
                  View Examples
                </ModernButton>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800/50 bg-background/80 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="text-xl font-bold text-white">Lovable</span>
              </div>
              <p className="text-gray-400">
                Building the future of web development with AI.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white footer-link">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white footer-link">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white footer-link">Templates</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white footer-link">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white footer-link">Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white footer-link">API Reference</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white footer-link">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white footer-link">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white footer-link">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800/50 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Lovable. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CheckCircle, Zap, Shield, BarChart3, Rocket, Code, Users, Star, Plus, Minus, ArrowRight, Layers, TrendingUp, Globe, Lock, Activity, Database, Settings, ArrowUp, FileText, DollarSign, Headphones, MessageCircle, Sparkles, Target, Timer, Award, Cpu, Server, Wifi, BookOpen, Copy, ChevronDown, Send, Bell, Search } from "lucide-react";
import FadeContent from "@/components/animations/FadeContent";
import CountUp from "@/components/animations/CountUp";
import ModernGrid from "@/components/animations/ModernGrid";
import AIBot from "@/components/animations/AIBot";
import MouseLightEffect from "@/components/animations/MouseLightEffect";
import { useLenis } from "@/hooks/useLenis";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Index = () => {
  // Initialize Lenis smooth scroll
  useLenis();
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = useState('python');

  const codeExamples = {
    python: {
      name: 'Python',
      code: `import requests

# Configuration
API_KEY = "your_api_key_here"
BASE_URL = "https://api.launchpad.trade"

# Buy token example
def buy_token(token_address, amount_sol):
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "token_address": token_address,
        "amount_sol": amount_sol,
        "slippage": 0.5,
        "priority_fee": "high"
    }
    
    response = requests.post(
        f"{BASE_URL}/v1/trade/buy",
        headers=headers,
        json=payload
    )
    
    return response.json()

# Execute trade
result = buy_token("So11111111111111111111111111111111111112", 0.1)
print(f"Transaction: {result['signature']}")`
    },
    javascript: {
      name: 'JavaScript',
      code: `const API_KEY = "your_api_key_here";
const BASE_URL = "https://api.launchpad.trade";

// Buy token example
async function buyToken(tokenAddress, amountSol) {
    const response = await fetch(\`\${BASE_URL}/v1/trade/buy\`, {
        method: 'POST',
        headers: {
            'Authorization': \`Bearer \${API_KEY}\`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token_address: tokenAddress,
            amount_sol: amountSol,
            slippage: 0.5,
            priority_fee: "high"
        })
    });
    
    const result = await response.json();
    console.log(\`Transaction: \${result.signature}\`);
    return result;
}

// Execute trade
buyToken("So11111111111111111111111111111111111112", 0.1)
    .then(result => console.log('Trade completed:', result))
    .catch(error => console.error('Trade failed:', error));`
    },
    typescript: {
      name: 'TypeScript',
      code: `interface TradeRequest {
    token_address: string;
    amount_sol: number;
    slippage: number;
    priority_fee: string;
}

interface TradeResponse {
    signature: string;
    status: 'success' | 'failed';
    transaction_id: string;
    amount_received?: number;
}

const API_KEY: string = "your_api_key_here";
const BASE_URL: string = "https://api.launchpad.trade";

class LaunchpadAPI {
    private apiKey: string;
    private baseUrl: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.baseUrl = BASE_URL;
    }

    async buyToken(tokenAddress: string, amountSol: number): Promise<TradeResponse> {
        const payload: TradeRequest = {
            token_address: tokenAddress,
            amount_sol: amountSol,
            slippage: 0.5,
            priority_fee: "high"
        };

        const response = await fetch(\`\${this.baseUrl}/v1/trade/buy\`, {
            method: 'POST',
            headers: {
                'Authorization': \`Bearer \${this.apiKey}\`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }

        return await response.json();
    }
}

// Execute trade
const api = new LaunchpadAPI(API_KEY);
const result = await api.buyToken("So11111111111111111111111111111111111112", 0.1);
console.log(\`Transaction: \${result.signature}\`);`
    },
    rust: {
      name: 'Rust',
      code: `use reqwest;
use serde::{Deserialize, Serialize};
use serde_json::json;
use std::collections::HashMap;

#[derive(Serialize)]
struct TradeRequest {
    token_address: String,
    amount_sol: f64,
    slippage: f64,
    priority_fee: String,
}

#[derive(Deserialize, Debug)]
struct TradeResponse {
    signature: String,
    status: String,
    transaction_id: String,
    amount_received: Option<f64>,
}

const API_KEY: &str = "your_api_key_here";
const BASE_URL: &str = "https://api.launchpad.trade";

struct LaunchpadClient {
    client: reqwest::Client,
    api_key: String,
}

impl LaunchpadClient {
    fn new(api_key: String) -> Self {
        Self {
            client: reqwest::Client::new(),
            api_key,
        }
    }

    async fn buy_token(&self, token_address: &str, amount_sol: f64) -> Result<TradeResponse, Box<dyn std::error::Error>> {
        let payload = TradeRequest {
            token_address: token_address.to_string(),
            amount_sol,
            slippage: 0.5,
            priority_fee: "high".to_string(),
        };

        let response = self.client
            .post(&format!("{}/v1/trade/buy", BASE_URL))
            .header("Authorization", format!("Bearer {}", self.api_key))
            .header("Content-Type", "application/json")
            .json(&payload)
            .send()
            .await?;

        let result: TradeResponse = response.json().await?;
        println!("Transaction: {}", result.signature);
        Ok(result)
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = LaunchpadClient::new(API_KEY.to_string());
    
    match client.buy_token("So11111111111111111111111111111111111112", 0.1).await {
        Ok(result) => println!("Trade successful: {:?}", result),
        Err(e) => eprintln!("Trade failed: {}", e),
    }
    
    Ok(())
}`
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExamples[selectedLanguage].code);
    toast({
      title: "✓ Code copied!",
      description: "Ready to use in your project",
      duration: 1000,
      className: "fixed top-4 right-4 z-[100] bg-black/95 backdrop-blur-sm border border-violet-500/30 text-white shadow-2xl rounded-xl p-4 max-w-sm",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans relative">
      {/* Shooting Stars Background */}
      <div className="shooting-stars-container">
        {Array.from({length: 12}).map((_, i) => {
          const directions = ['from-top', 'from-bottom', 'from-left', 'from-right', 'from-top-left', 'from-top-right'];
          const randomDirection = directions[Math.floor(Math.random() * directions.length)];
          
          return (
            <div 
              key={i}
              className={`shooting_star ${randomDirection}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 1500 + Math.random() * 3000}ms`,
              }}
            />
          );
        })}
      </div>

      {/* Mouse Light Effect */}
      <MouseLightEffect />
      
      {/* Modern Grid Background */}
      <ModernGrid />

      {/* Enhanced Navigation */}
      <FadeContent>
        <header className="backdrop-blur-xl bg-slate-950/99 sticky top-0 z-50 transition-all duration-500 border-b border-slate-800/30">
          <div className="container mx-auto px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-400 via-violet-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/50 group-hover:scale-110 transition-all duration-300">
                  <Zap className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
                <div className="absolute inset-0 w-10 h-10 rounded-xl bg-violet-500/30 blur-md animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-white font-mono tracking-wide">
                launchpad.trade
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <FadeContent delay={100}>
                <button 
                  onClick={() => scrollToSection('documentation')}
                  className="text-slate-200 hover:text-violet-400 font-semibold text-sm px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  Documentation
                </button>
              </FadeContent>
              <FadeContent delay={150}>
                <button 
                  onClick={() => scrollToSection('edge')}
                  className="text-slate-200 hover:text-violet-400 font-semibold text-sm px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  Edge
                </button>
              </FadeContent>
              <FadeContent delay={200}>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-slate-200 hover:text-violet-400 font-semibold text-sm px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  Pricing
                </button>
              </FadeContent>
              <FadeContent delay={250}>
                <button 
                  onClick={() => scrollToSection('community')}
                  className="text-slate-200 hover:text-violet-400 font-semibold text-sm px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  Community
                </button>
              </FadeContent>
            </nav>
            <button 
              onClick={() => scrollToSection('cta-final')}
              className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/40 text-white hover:bg-slate-700/60 font-bold shadow-xl transition-all duration-300 text-sm px-6 py-2 rounded-full relative overflow-hidden group"
            >
              <span className="relative z-10">Get my API Key</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>
          {/* Full-width animated violet separator line */}
          <div className="relative h-px w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent animate-pulse"></div>
            <div className="absolute left-0 w-full h-px bg-gradient-to-r from-violet-400/10 via-violet-500/30 to-violet-400/10 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </header>
      </FadeContent>

      {/* Hero Section - NO FLOATING ICONS */}
      <section className="relative flex items-center justify-center pt-40 pb-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeContent delay={400} blur={true}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-violet-400">The Fastest API</span>
                <br />
                <span className="text-white">for Trading and Launching on</span>{" "}
                <span className="text-violet-400">letsbonk.fun</span>
              </h1>
            </FadeContent>
            
            <FadeContent delay={600}>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Integrate professional-grade infrastructure in minutes to automate your trades and token launches. Maximum reliability, minimal fees.
              </p>
            </FadeContent>
            
            <FadeContent delay={800}>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <button 
                  onClick={() => scrollToSection('cta-final')}
                  className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/40 text-white hover:bg-slate-700/60 hover:text-white font-bold px-8 py-3 rounded-full shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Generate my Free API Key</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('documentation')}
                  className="glowing-border bg-transparent border-2 border-slate-600/50 text-slate-300 hover:border-slate-500 hover:text-white backdrop-blur-sm hover:bg-slate-800/20 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Explore Documentation
                </button>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* AI Bot Section */}
      <FadeContent>
        <section className="py-2 relative">
          <div className="container mx-auto px-6 flex justify-center">
            <AIBot />
          </div>
        </section>
      </FadeContent>

      {/* Social Proof / Trust */}
      <FadeContent>
        <section className="py-12 relative">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-slate-400 mb-8 uppercase tracking-wider">Compatible with Solana Ecosystem</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-slate-500">Solana</div>
              <div className="text-2xl font-bold text-slate-500">letsbonk.fun</div>
              <div className="text-2xl font-bold text-slate-500">Jito Labs</div>
              <div className="text-2xl font-bold text-slate-500">Temporal</div>
              <div className="text-2xl font-bold text-slate-500">0slot</div>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Violet Section separator BEFORE API Documentation */}
      <div className="relative py-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-violet-500 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Documentation Section */}
      <FadeContent>
        <section id="documentation" className="py-20 relative">
          <div className="container mx-auto px-6">
            <FadeContent delay={200}>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                  <span className="text-white">API</span>{" "}
                  <span className="text-violet-400">Documentation</span>
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Get started with our simple and powerful API in minutes. Copy, paste, and start trading.
                </p>
              </div>
            </FadeContent>

            <FadeContent delay={400}>
              <div className="max-w-4xl mx-auto">
                <Card className="api-integration-border glass-effect bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border-violet-500/30 relative shadow-xl hover-scale">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-violet-500/30">
                          <Code className="w-5 h-5 text-violet-400" />
                        </div>
                        <div>
                          <CardTitle className="text-white text-xl font-semibold">API Integration</CardTitle>
                          <CardDescription className="text-slate-400">Quick start example to buy tokens</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {/* Modern Language Selector - Custom Dropdown */}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button className="bg-black/40 backdrop-blur-2xl border border-violet-500/30 text-white px-6 py-3 rounded-xl text-sm font-mono focus:outline-none focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/20 cursor-pointer shadow-2xl hover:bg-black/60 transition-all duration-300 hover:border-violet-500/50 flex items-center gap-3 hover:shadow-violet-500/20">
                              <span className="text-white font-mono">{codeExamples[selectedLanguage].name}</span>
                              <ChevronDown className="w-4 h-4 text-violet-400 group-hover:rotate-180 transition-transform duration-300" />
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent 
                            className="bg-black/70 backdrop-blur-2xl border border-violet-500/30 shadow-2xl shadow-black/50 rounded-xl p-2 min-w-[160px] z-50"
                            align="end"
                          >
                            {Object.entries(codeExamples).map(([key, lang]) => (
                              <DropdownMenuItem
                                key={key}
                                onClick={() => setSelectedLanguage(key)}
                                className={`text-slate-300 hover:text-white hover:bg-violet-500/20 rounded-lg px-4 py-3 cursor-pointer transition-all duration-300 font-mono backdrop-blur-sm border border-transparent hover:border-violet-500/30 hover:shadow-lg ${
                                  selectedLanguage === key ? 'bg-violet-500/25 text-white border-violet-500/40 shadow-md' : ''
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-violet-400 opacity-60"></div>
                                  {lang.name}
                                </span>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                        
                        {/* Copy Button - Improved */}
                        <button 
                          onClick={copyToClipboard}
                          className="flex items-center space-x-2 text-sm text-white hover:text-white transition-all duration-300 bg-black/40 backdrop-blur-2xl px-5 py-3 rounded-xl hover:bg-black/60 border border-violet-500/30 hover:border-violet-500/50 shadow-2xl group hover:shadow-violet-500/20"
                        >
                          <Copy className="w-4 h-4 group-hover:scale-110 transition-transform duration-200 text-violet-400" />
                          <span className="font-mono text-white">Copy</span>
                        </button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-950/90 rounded-lg p-6 border border-slate-800/60 font-mono text-sm overflow-x-auto">
                      <pre className="text-slate-300 whitespace-pre-wrap">
                        <code 
                          dangerouslySetInnerHTML={{
                            __html: codeExamples[selectedLanguage].code
                              // Keywords
                              .replace(/\b(import|from|def|class|async|function|const|let|var|if|else|return|await|interface|type|struct|impl|fn|use|match|Ok|Err)\b/g, '<span style="color: #c678dd">$1</span>')
                              // Strings
                              .replace(/"([^"]*)"/g, '<span style="color: #98c379">"$1"</span>')
                              .replace(/'([^']*)'/g, '<span style="color: #98c379">\'$1\'</span>')
                              .replace(/`([^`]*)`/g, '<span style="color: #98c379">`$1`</span>')
                              // Comments
                              .replace(/(#[^\n]*)/g, '<span style="color: #5c6370">$1</span>')
                              .replace(/(\/\/[^\n]*)/g, '<span style="color: #5c6370">$1</span>')
                              // Numbers
                              .replace(/\b(\d+\.?\d*)\b/g, '<span style="color: #d19a66">$1</span>')
                              // Function names
                              .replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, '<span style="color: #61afef">$1</span>(')
                              // Types
                              .replace(/:\s*([A-Z][a-zA-Z0-9_]*)/g, ': <span style="color: #e5c07b">$1</span>')
                          }}
                        />
                      </pre>
                    </div>
                    <FadeContent delay={600}>
                      <div className="mt-6 flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl w-full text-center">
                          <div className="flex flex-col items-center p-4 bg-slate-800/20 rounded-lg border border-slate-700/30">
                            <CheckCircle className="w-6 h-6 text-violet-400 mb-2" />
                            <span className="text-slate-300 text-sm font-medium">0.8% fee only</span>
                          </div>
                          <div className="flex flex-col items-center p-4 bg-slate-800/20 rounded-lg border border-slate-700/30">
                            <CheckCircle className="w-6 h-6 text-violet-400 mb-2" />
                            <span className="text-slate-300 text-sm font-medium">Jito bundles included</span>
                          </div>
                          <div className="flex flex-col items-center p-4 bg-slate-800/20 rounded-lg border border-slate-700/30">
                            <CheckCircle className="w-6 h-6 text-violet-400 mb-2" />
                            <span className="text-slate-300 text-sm font-medium">Priority transactions</span>
                          </div>
                        </div>
                      </div>
                    </FadeContent>
                  </CardContent>
                </Card>
              </div>
            </FadeContent>
          </div>
        </section>
      </FadeContent>

      {/* Violet Section separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-violet-500 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Use Cases Section */}
      <FadeContent>
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight whitespace-nowrap">
                Built for <span className="text-violet-400">Your Goals</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <FadeContent delay={300}>
                <Card className="glowing-border glass-effect bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border-violet-500/30 relative shadow-xl h-full flex flex-col hover-scale">
                  <CardHeader className="pb-6">
                    <Badge className="bg-black/60 backdrop-blur-sm border border-violet-500/40 text-white font-bold px-4 py-1 text-sm mb-4 w-fit">
                      BOT DEVELOPERS
                    </Badge>
                    <CardTitle className="text-2xl font-bold text-white mb-4">Create Unstoppable Trading Bots</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-4">
                      {[
                        "Snipe token launches before everyone else with Jito bundles",
                        "Execute complex buy/sell strategies with minimal latency", 
                        "Robust and stable API designed for 24/7 operation"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start text-slate-300">
                          <CheckCircle className="w-5 h-5 text-violet-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeContent>

              <FadeContent delay={500}>
                <Card className="glowing-border glass-effect bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border-purple-500/30 h-full flex flex-col hover-scale">
                  <CardHeader className="pb-6">
                    <Badge className="bg-black/60 backdrop-blur-sm border border-violet-500/40 text-white font-bold px-4 py-1 text-sm mb-4 w-fit">
                      PROJECT CREATORS
                    </Badge>
                    <CardTitle className="text-2xl font-bold text-white mb-4">Launch Your Token Seamlessly</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-4">
                      {[
                        "Automate token creation and deployment with a simple API call",
                        "Ensure perfect initial liquidity",
                        "Save time and avoid costly manual errors"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start text-slate-300">
                          <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeContent>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Violet Section separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-violet-500 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Trading API Edge Title */}
      <FadeContent>
        <section id="edge" className="py-6 relative">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight whitespace-nowrap">
              <span className="text-white">Trading</span>{" "}
              <span className="text-violet-400">API Edge</span>
            </h2>
          </div>
        </section>
      </FadeContent>

      {/* Key Benefits - WITH DARKER ANIMATED BORDERS */}
      <FadeContent>
        <section className="py-8 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Radical Simplicity",
                  description: "Integrate our API in less than 5 minutes. Clear documentation and logical endpoints to focus on your strategy, not our infrastructure.",
                  color: "from-violet-500/15 to-purple-500/15",
                  borderColor: "border-violet-800/20",
                  iconColor: "text-violet-400"
                },
                {
                  icon: Rocket,
                  title: "Performance & Stability",
                  description: "Leverage Jito bundles for atomic and priority transactions. Our service relies on the best providers (0slot, astralane) for near-instant execution.",
                  color: "from-purple-500/15 to-pink-500/15",
                  borderColor: "border-violet-800/20",
                  iconColor: "text-purple-400"
                },
                {
                  icon: DollarSign,
                  title: "Lowest & Transparent Fees",
                  description: "A unique and clear fee structure: 0.8% on transactions. That's it. No hidden fees, no subscription.",
                  color: "from-violet-500/15 to-emerald-500/15",
                  borderColor: "border-violet-800/20",
                  iconColor: "text-violet-400"
                },
                {
                  icon: FileText,
                  title: "Exemplary Documentation",
                  description: "Copy-paste guides, complete API reference, and tutorials to get you operational immediately.",
                  color: "from-violet-500/15 to-red-500/15",
                  borderColor: "border-violet-800/20",
                  iconColor: "text-violet-400"
                }
              ].map((feature, index) => (
                <FadeContent key={index} delay={index * 200}>
                  <Card className={`trading-edge-card glass-effect bg-gradient-to-br ${feature.color} backdrop-blur-sm ${feature.borderColor} hover:border-opacity-50 transition-all duration-300 group h-full flex flex-col hover-scale`}>
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border ${feature.borderColor}`}>
                        <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                      </div>
                      <CardTitle className="text-white text-xl font-semibold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </FadeContent>
              ))}
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Violet Section separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-violet-500 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Pricing Section */}
      <FadeContent>
        <section id="pricing" className="py-20 relative">
          <div className="container mx-auto px-6">
            <FadeContent delay={200}>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight whitespace-nowrap">
                  <span className="text-white">API</span>{" "}
                  <span className="text-violet-400">Pricing</span>
                </h2>
              </div>
            </FadeContent>

            <FadeContent delay={400}>
              <div className="max-w-4xl mx-auto">
                <Card className="glowing-border glass-effect bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border-violet-500/30 relative shadow-xl hover-scale">
                  <CardContent className="p-16 text-center relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-black/80 backdrop-blur-xl border border-violet-500/20 text-white font-bold px-8 py-3 text-base rounded-full shadow-2xl shadow-black/40">
                        CHEAPEST ON THE MARKET
                      </div>
                    </div>

                    <FadeContent delay={600}>
                      <div className="mb-8 mt-4 relative">
                        <div className="text-8xl lg:text-9xl font-bold text-violet-400 mb-4 relative">
                          0.8<span className="text-6xl lg:text-7xl">%</span>
                        </div>
                        <p className="text-2xl text-slate-300 font-medium mb-4">
                          Per successful transaction
                        </p>
                      </div>
                    </FadeContent>

                    <FadeContent delay={800}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        {[
                          "No monthly fees",
                          "No subscription fees", 
                          "No fees on read-only API calls",
                          "No fees on failed transactions"
                        ].map((feature, i) => (
                          <div key={i} className="flex items-center text-slate-300 text-lg">
                            <CheckCircle className="w-6 h-6 text-violet-400 mr-4 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </FadeContent>
                  </CardContent>
                </Card>
              </div>
            </FadeContent>
          </div>
        </section>
      </FadeContent>

      {/* Violet Section separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-violet-500 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Community Section - WITH UPDATED BUTTONS */}
      <FadeContent>
        <section id="community" className="py-20 relative">
          <div className="container mx-auto px-6 max-w-5xl">
            <FadeContent delay={200}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-black/40 via-black/50 to-black/40 rounded-3xl opacity-60 group-hover:opacity-80 blur-sm transition-all duration-500"></div>
                
                <div className="relative bg-black/80 backdrop-blur-sm border-violet-500/40 border rounded-3xl overflow-hidden hover-scale transition-all duration-300 hover:border-violet-500/60 hover:shadow-2xl hover:shadow-black/20">
                  <div className="relative p-16 text-center">
                    <FadeContent delay={400}>
                      <div className="mb-8">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-slate-800/40 to-slate-700/40 border border-slate-600/30 mb-8 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                          <Users className="w-10 h-10 text-slate-300" />
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                          <span className="text-white">Join the</span>{" "}
                          <span className="text-violet-400">Community</span>
                        </h2>
                        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                          Connect with other developers, get fast support, and share your strategies. Join our community of traders and investors for the latest insights and market analysis.
                        </p>
                      </div>
                    </FadeContent>
                    
                    <FadeContent delay={600}>
                      <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
                        <div className="relative">
                          <button className="glowing-border bg-transparent border-2 border-slate-600/50 text-slate-300 hover:border-slate-500 hover:text-white backdrop-blur-sm hover:bg-slate-800/20 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            <span className="relative z-10 flex items-center text-lg">
                              <div className="w-6 h-6 mr-3">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                                </svg>
                              </div>
                              Join our Discord
                            </span>
                          </button>
                          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-12 bg-violet-500/10 rounded-full blur-xl opacity-40"></div>
                        </div>
                        <div className="relative">
                          <button className="glowing-border bg-transparent border-2 border-slate-600/50 text-slate-300 hover:border-slate-500 hover:text-white backdrop-blur-sm hover:bg-slate-800/20 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            <span className="relative z-10 flex items-center text-lg">
                              <div className="w-6 h-6 mr-3">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                  <path d="M18.244 2.25h3.308l-7.227 8.26l8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                              </div>
                              Follow on Twitter
                            </span>
                          </button>
                          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-12 bg-violet-500/10 rounded-full blur-xl opacity-40"></div>
                        </div>
                        <div className="relative">
                          <button className="glowing-border bg-transparent border-2 border-slate-600/50 text-slate-300 hover:border-slate-500 hover:text-white backdrop-blur-sm hover:bg-slate-800/20 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            <span className="relative z-10 flex items-center text-lg">
                              <div className="w-6 h-6 mr-3">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                </svg>
                              </div>
                              Join our Telegram
                            </span>
                          </button>
                          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-12 bg-violet-500/10 rounded-full blur-xl opacity-40"></div>
                        </div>
                      </div>
                    </FadeContent>
                  </div>
                </div>
              </div>
            </FadeContent>
          </div>
        </section>
      </FadeContent>

      {/* Final CTA - WITH UPDATED BUTTON */}
      <FadeContent>
        <section id="cta-final" className="py-20 relative">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Ready to Dominate <span className="text-violet-400">letsbonk.fun</span>?
            </h2>
            <div className="relative inline-block">
              <button className="glowing-border bg-transparent border-2 border-slate-600/50 text-slate-300 hover:border-slate-500 hover:text-white backdrop-blur-sm hover:bg-slate-800/20 font-semibold px-12 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10">Get my API Key and Start</span>
              </button>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-12 bg-violet-500/10 rounded-full blur-xl opacity-40"></div>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Violet Section separator BEFORE Footer */}
      <div className="relative py-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-violet-500 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Footer - Simplified without copyright and links */}
      <FadeContent>
        <footer className="bg-slate-950/99 backdrop-blur-xl shadow-2xl shadow-slate-900/50">
          <div className="container mx-auto px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-1">
                  <div className="relative">
                    <div className="w-6 h-6 bg-gradient-to-br from-violet-400 via-violet-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-violet-500/40">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                    <div className="absolute inset-0 w-6 h-6 rounded-lg bg-violet-500/20 blur-md animate-pulse"></div>
                  </div>
                  <span className="text-base font-bold text-white font-mono tracking-wide">
                    launchpad.trade
                  </span>
                </div>
                <p className="text-slate-300 max-w-sm mb-1 font-medium leading-relaxed text-xs">
                  The fastest and most reliable API to automate your trades on letsbonk.fun.
                </p>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-bold text-white mb-1 text-sm flex items-center">
                  <Code className="w-4 h-4 mr-2 text-violet-400" />
                  Product
                </h4>
                <ul className="space-y-0.5">
                  <li>
                    <button
                      onClick={() => scrollToSection('documentation')}
                      className="text-slate-300 hover:text-violet-400 transition-all duration-300 text-xs font-medium hover:translate-x-1 block py-0.5 hover:bg-slate-800/20 px-1 rounded-md backdrop-blur-sm text-left"
                    >
                      Documentation
                    </button>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-bold text-white mb-1 text-sm flex items-center">
                  <Headphones className="w-4 h-4 mr-2 text-violet-400" />
                  Support
                </h4>
                <ul className="space-y-0.5">
                  {[
                    { name: "Discord", icon: MessageCircle },
                    { name: "Twitter", icon: Users }
                  ].map((link, i) => (
                    <li key={i}>
                      <a 
                        href="#" 
                        className="text-slate-300 hover:text-purple-400 transition-all duration-300 text-xs font-medium hover:translate-x-1 block py-0.5 hover:bg-slate-800/20 px-1 rounded-md backdrop-blur-sm flex items-center"
                      >
                        <link.icon className="w-3 h-3 mr-2 opacity-60" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </FadeContent>
    </div>
  );
};

export default Index;

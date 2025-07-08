import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Zap, Shield, BarChart3, Rocket, Code, Users, Star, Plus, Minus, ArrowRight, Layers, TrendingUp, Globe, Lock, Activity, Database, Settings, ArrowUp, FileText, DollarSign, Headphones, MessageCircle, Sparkles, Target, Timer, Award, Cpu, Server, Wifi, BookOpen, Copy, ChevronDown } from "lucide-react";
import FadeContent from "@/components/animations/FadeContent";
import CountUp from "@/components/animations/CountUp";
import ModernGrid from "@/components/animations/ModernGrid";
import AIBot from "@/components/animations/AIBot";
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

      {/* Hero Section - Better spacing */}
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
        <section className="py-6 relative">
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
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="text-white">API</span>{" "}
                <span className="text-violet-400">Documentation</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Get started with our simple and powerful API in minutes. Copy, paste, and start trading.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="glowing-border glass-effect bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border-violet-500/30 relative shadow-xl hover-scale">
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
                      {/* Modern Language Selector */}
                      <div className="relative">
                        <select 
                          value={selectedLanguage}
                          onChange={(e) => setSelectedLanguage(e.target.value)}
                          className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-md border border-violet-500/40 text-slate-200 px-6 py-3 rounded-xl text-sm font-medium focus:outline-none focus:border-violet-400/70 focus:ring-2 focus:ring-violet-500/30 cursor-pointer appearance-none pr-10 shadow-lg hover:bg-slate-700/95 transition-all duration-300"
                        >
                          {Object.entries(codeExamples).map(([key, lang]) => (
                            <option key={key} value={key} className="bg-slate-800 text-slate-300 py-2">
                              {lang.name}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-violet-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                      <button 
                        onClick={copyToClipboard}
                        className="flex items-center space-x-2 text-sm text-slate-400 hover:text-violet-400 transition-colors duration-300 bg-gradient-to-r from-slate-800/70 to-slate-700/70 backdrop-blur-md px-4 py-3 rounded-xl hover:bg-slate-700/85 border border-slate-700/60 hover:border-violet-500/40 shadow-lg group"
                      >
                        <Copy className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-medium">Copy</span>
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
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Use Cases Section */}
      <FadeContent>
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Built for <span className="text-violet-400">Your Goals</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <FadeContent delay={300}>
                <Card className="glowing-border glass-effect bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border-violet-500/30 relative shadow-xl h-full flex flex-col hover-scale">
                  <CardHeader className="pb-6">
                    <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold px-4 py-1 text-sm animate-pulse mb-4 w-fit">
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
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-4 py-1 text-sm animate-pulse mb-4 w-fit">
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

      {/* Trading API Edge Title */}
      <FadeContent>
        <section id="edge" className="py-12 relative">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-16">
              <span className="text-white">Trading</span>{" "}
              <span className="text-violet-400">API Edge</span>
            </h2>
          </div>
        </section>
      </FadeContent>

      {/* Key Benefits */}
      <FadeContent>
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Radical Simplicity",
                  description: "Integrate our API in less than 5 minutes. Clear documentation and logical endpoints to focus on your strategy, not our infrastructure.",
                  color: "from-violet-500/20 to-purple-500/20",
                  borderColor: "border-violet-500/30",
                  iconColor: "text-violet-400"
                },
                {
                  icon: Rocket,
                  title: "Performance & Stability",
                  description: "Leverage Jito bundles for atomic and priority transactions. Our service relies on the best providers (0slot, astralane) for near-instant execution.",
                  color: "from-purple-500/20 to-pink-500/20",
                  borderColor: "border-purple-500/30",
                  iconColor: "text-purple-400"
                },
                {
                  icon: DollarSign,
                  title: "Lowest & Transparent Fees",
                  description: "A unique and clear fee structure: 0.8% on transactions. That's it. No hidden fees, no subscription.",
                  color: "from-violet-500/20 to-emerald-500/20",
                  borderColor: "border-violet-500/30",
                  iconColor: "text-violet-400"
                },
                {
                  icon: FileText,
                  title: "Exemplary Documentation",
                  description: "Copy-paste guides, complete API reference, and tutorials to get you operational immediately.",
                  color: "from-violet-500/20 to-red-500/20",
                  borderColor: "border-violet-500/30",
                  iconColor: "text-violet-400"
                }
              ].map((feature, index) => (
                <FadeContent key={index} delay={index * 200}>
                  <Card className={`glowing-border glass-effect bg-gradient-to-br ${feature.color} backdrop-blur-sm ${feature.borderColor} hover:border-opacity-50 transition-all duration-300 group h-full flex flex-col hover-scale`}>
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

      {/* Pricing Section */}
      <FadeContent>
        <section id="pricing" className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="text-white">API</span>{" "}
                <span className="text-violet-400">Pricing</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="glowing-border glass-effect bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border-violet-500/30 relative shadow-xl hover-scale">
                <CardContent className="p-16 text-center relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-violet-950/70 via-violet-900/75 to-violet-950/70 backdrop-blur-md border border-violet-700/30 text-violet-200 font-bold px-8 py-3 text-base rounded-full shadow-lg shadow-violet-900/30">
                      CHEAPEST ON THE MARKET
                    </div>
                  </div>

                  <div className="mb-8 mt-4">
                    <div className="text-8xl lg:text-9xl font-bold text-violet-400 mb-4">
                      0.8<span className="text-6xl lg:text-7xl">%</span>
                    </div>
                    <p className="text-2xl text-slate-300 font-medium mb-4">
                      Per successful transaction
                    </p>
                  </div>

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
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Community Section - Fixed background and icon positioning */}
      <FadeContent>
        <section id="community" className="py-20 relative">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-black/30 via-black/50 to-black/30 rounded-3xl opacity-60 group-hover:opacity-80 blur-sm transition-all duration-500"></div>
              
              <div className="relative bg-black/90 backdrop-blur-sm border-slate-700/40 border rounded-3xl overflow-hidden hover-scale transition-all duration-300 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-black/20">
                {/* Background decorative icons - positioned in corners */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {/* Top left corner */}
                  <div className="absolute top-6 left-6 w-12 h-12 text-slate-500/15 opacity-60">
                    <MessageCircle className="w-full h-full" />
                  </div>
                  
                  {/* Top right corner */}
                  <div className="absolute top-6 right-6 w-12 h-12 text-slate-500/15 opacity-60">
                    <Users className="w-full h-full" />
                  </div>
                  
                  {/* Bottom left corner */}
                  <div className="absolute bottom-6 left-6 w-12 h-12 text-slate-500/15 opacity-60">
                    <Sparkles className="w-full h-full" />
                  </div>
                  
                  {/* Bottom right corner */}
                  <div className="absolute bottom-6 right-6 w-12 h-12 text-slate-500/15 opacity-60">
                    <Star className="w-full h-full" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-16 text-center">
                  <div className="mb-8">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                      <span className="text-white">Join the</span>{" "}
                      <span className="text-violet-400">Community</span>
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                      Connect with traders, developers, and creators. Get support, share strategies, and stay updated with the latest features.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                    <a 
                      href="https://discord.gg/launchpad" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-3 hover:scale-105 shadow-lg"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Join Discord</span>
                    </a>
                    <a 
                      href="https://twitter.com/launchpadtrade" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/40 text-white hover:bg-slate-700/60 font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-3 hover:scale-105 shadow-lg"
                    >
                      <span>Follow Twitter</span>
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-violet-500/30">
                        <Users className="w-8 h-8 text-violet-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Active Community</h3>
                      <p className="text-slate-400">Connect with 5000+ traders and developers</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                        <Headphones className="w-8 h-8 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                      <p className="text-slate-400">Get help from our team and community</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-violet-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-violet-500/30">
                        <Sparkles className="w-8 h-8 text-violet-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Latest Updates</h3>
                      <p className="text-slate-400">Stay informed about new features and improvements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* CTA Final Section */}
      <FadeContent>
        <section id="cta-final" className="py-20 relative">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                <span className="text-white">Ready to</span>{" "}
                <span className="text-violet-400">Get Started?</span>
              </h2>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Join thousands of traders and developers who trust launchpad.trade for their Solana trading needs.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-500/25">
                  Generate Free API Key
                </button>
                <button className="glowing-border bg-transparent border-2 border-slate-600/50 text-slate-300 hover:border-slate-500 hover:text-white backdrop-blur-sm hover:bg-slate-800/20 font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105">
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-slate-800/60 backdrop-blur-sm border border-slate-700/40 text-white hover:bg-slate-700/60 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Index;

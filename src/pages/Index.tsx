
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Zap, Shield, BarChart3, Rocket, Code, Users, Star, ChevronDown, ArrowRight, Layers, TrendingUp, Globe, Lock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <header className="border-b border-white/10 backdrop-blur-md bg-black/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-xl flex items-center justify-center font-bold text-black shadow-lg">
              MK
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">MemeKit</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-medium">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-medium">Pricing</a>
            <a href="#docs" className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-medium">Documentation</a>
            <a href="#faq" className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-medium">FAQ</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-amber-400 hover:bg-amber-400/10 border-transparent">
              Log In
            </Button>
            <Button className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-700 text-black font-semibold shadow-lg hover:shadow-amber-500/25 transition-all duration-300">
              Get API Key
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-500/5 via-transparent to-yellow-500/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm border border-amber-500/20 shadow-lg">
                <Rocket className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">API pour développeurs • Facile à utiliser</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </div>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Deploy & Trade
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                Memecoins
              </span>
              <br />
              <span className="text-white text-4xl lg:text-6xl font-normal">
                sur Bonk & PumpFun
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              L'API complète pour déployer des tokens, trader en temps réel et intégrer tous les launchpads Solana. 
              <span className="text-amber-400"> Bonk, PumpFun et plus encore.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-16">
              <Button size="lg" className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-700 text-black font-bold px-10 py-6 text-lg shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105">
                <Zap className="w-5 h-5 mr-2" />
                Commencer maintenant
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/20 text-white hover:border-amber-400 hover:text-amber-400 hover:bg-amber-400/10 px-10 py-6 text-lg backdrop-blur-sm transition-all duration-300">
                <Code className="w-5 h-5 mr-2" />
                Documentation API
              </Button>
            </div>

            {/* Integration badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg"></div>
                <span>Bonk Protocol</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg"></div>
                <span>PumpFun</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg"></div>
                <span>All Launchpads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with modern cards */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "50K+", label: "Tokens Lancés", icon: Rocket },
              { value: "$10M+", label: "Volume Traité", icon: TrendingUp },
              { value: "99.9%", label: "Uptime API", icon: Shield },
              { value: "1000+", label: "Développeurs Actifs", icon: Users }
            ].map((stat, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10 hover:border-amber-400/50 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-amber-500/10 text-amber-400 border-amber-500/20 px-4 py-2 text-sm font-semibold">
              FONCTIONNALITÉS
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-white">Une API </span>
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">complète</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Déployez, tradez et gérez vos memecoins sur tous les protocoles Solana avec notre suite d'outils enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Deploy & Launch",
                description: "Déployez vos tokens en quelques secondes sur Bonk, PumpFun et tous les launchpads Solana. Configuration des tokenomics et liquidité automatique.",
                features: ["Déploiement instantané", "Multi-launchpads", "Liquidité automatique"]
              },
              {
                icon: TrendingUp,
                title: "Trading en Temps Réel",
                description: "Tradez vos memecoins directement via l'API avec des données en temps réel, analytics avancés et monitoring des performances.",
                features: ["Trading API", "Données temps réel", "Analytics avancés"]
              },
              {
                icon: Layers,
                title: "Intégrations Complètes",
                description: "Connectez-vous à tous les protocoles : Bonk, PumpFun, Raydium et plus. Une seule API pour tout l'écosystème Solana.",
                features: ["Multi-protocoles", "API unifiée", "Webhooks custom"]
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-md border-white/10 hover:border-amber-400/50 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-7 h-7 text-black" />
                  </div>
                  <CardTitle className="text-2xl text-white mb-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-300 text-base mb-6 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-white">Pricing </span>
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Simple</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pas de frais cachés. Choisissez le plan parfait pour votre projet memecoin.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-white mb-4">STARTER</CardTitle>
                <CardDescription className="text-gray-300 mb-8">Parfait pour tester et petits projets</CardDescription>
                <div className="text-5xl font-bold text-white mb-3">Free</div>
                <div className="text-gray-400">Forever</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {["5 tokens par mois", "Dashboard analytics", "Support communauté", "Accès documentation"].map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-amber-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 transition-all duration-300">
                  Commencer Gratuitement
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-yellow-500/5 backdrop-blur-md border-amber-500/30 relative scale-105 shadow-2xl">
              <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold px-6 py-2">
                POPULAIRE
              </Badge>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-white mb-4">PRO</CardTitle>
                <CardDescription className="text-gray-300 mb-8">Pour les builders sérieux</CardDescription>
                <div className="text-5xl font-bold text-amber-400 mb-3">$99</div>
                <div className="text-gray-400">/mois</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {["Tokens illimités", "Analytics avancés", "Support prioritaire", "Webhooks custom", "Options white-label"].map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-amber-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-black font-bold transition-all duration-300 shadow-lg">
                  Essai Pro Gratuit
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-white mb-4">ENTERPRISE</CardTitle>
                <CardDescription className="text-gray-300 mb-8">Pour les opérations à grande échelle</CardDescription>
                <div className="text-5xl font-bold text-white mb-3">Custom</div>
                <div className="text-gray-400">Nous contacter</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {["Tout du Pro", "Infrastructure dédiée", "Support 24/7", "Intégrations custom", "Garanties SLA"].map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-amber-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 transition-all duration-300">
                  Contacter les Ventes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-white">Ce que disent les </span>
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">développeurs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "devmike", text: "MemeKit's API est incroyablement efficace. J'ai lancé mon premier memecoin en moins de 5 minutes. La doc est claire et le support génial!" },
              { name: "solanadev", text: "Le dashboard analytics change la donne. Les insights temps réel m'ont aidé à optimiser mes tokens et faire grandir ma communauté." },
              { name: "memequeen", text: "Les fonctionnalités de sécurité me rassurent. La protection anti-rug et l'audit automatique ont sauvé mon projet de problèmes potentiels." }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10 hover:border-amber-400/30 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold mr-4">
                      {testimonial.name[0].toUpperCase()}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">FAQ</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { q: "Qu'est-ce que MemeKit API ?", a: "MemeKit est une plateforme API complète qui permet aux développeurs de facilement lancer, gérer et analyser des memecoins sur les protocoles Solana comme Bonk et PumpFun." },
              { q: "À quelle vitesse puis-je lancer un memecoin ?", a: "Avec notre API, vous pouvez déployer un memecoin en moins de 5 minutes sur multiple launchpads simultanément." },
              { q: "Quels protocoles supportez-vous ?", a: "Nous supportons Bonk Protocol, PumpFun, Raydium et tous les principaux launchpads de l'écosystème Solana." },
              { q: "Proposez-vous un support technique ?", a: "Oui, nous offrons un support communautaire gratuit, un support prioritaire pour les plans Pro, et un support 24/7 pour Enterprise." }
            ].map((faq, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10 hover:border-amber-400/30 transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between cursor-pointer">
                  <CardTitle className="text-white text-lg">{faq.q}</CardTitle>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-yellow-500/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="text-white">Prêt à lancer votre </span>
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">memecoin</span>
              <span className="text-white"> ?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Rejoignez des milliers de développeurs qui construisent l'avenir des memecoins sur Solana avec MemeKit API.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
              <Button size="lg" className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-700 text-black font-bold px-10 py-6 text-lg shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105">
                <Zap className="w-5 h-5 mr-2" />
                Commencer Gratuitement
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/20 text-white hover:border-amber-400 hover:text-amber-400 hover:bg-amber-400/10 px-10 py-6 text-lg backdrop-blur-sm transition-all duration-300">
                <Globe className="w-5 h-5 mr-2" />
                Voir la Démo Live
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-xl flex items-center justify-center font-bold text-black shadow-lg">
                  MK
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">MemeKit</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Construire l'avenir du développement memecoin sur Solana.
              </p>
            </div>
            
            {[
              { title: "Produit", links: ["Fonctionnalités", "Pricing", "Documentation", "API Reference"] },
              { title: "Entreprise", links: ["À propos", "Blog", "Carrières", "Contact"] },
              { title: "Communauté", links: ["Discord", "Twitter", "GitHub", "Support"] }
            ].map((section, index) => (
              <div key={index} className="space-y-6">
                <h4 className="font-semibold text-white text-lg">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <Separator className="my-12 bg-white/10" />
          
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400">
            <p>© 2024 MemeKit. Tous droits réservés.</p>
            <div className="flex items-center space-x-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">Politique de Confidentialité</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">Conditions d'Utilisation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

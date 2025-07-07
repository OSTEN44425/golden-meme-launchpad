
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Zap, Shield, BarChart3, Rocket, Code, Users, Star, Plus, Minus, ArrowRight, Layers, TrendingUp, Globe, Lock, Activity, Database, Settings, ArrowUp, FileText, DollarSign, Headphones, MessageCircle } from "lucide-react";
import FadeContent from "@/components/animations/FadeContent";
import CountUp from "@/components/animations/CountUp";
import ModernGrid from "@/components/animations/ModernGrid";
import { useLenis } from "@/hooks/useLenis";

const Index = () => {
  // Initialize Lenis smooth scroll
  useLenis();

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden font-sans relative">
      {/* Modern Grid Background */}
      <ModernGrid />

      {/* Enhanced Navigation */}
      <FadeContent>
        <header className="backdrop-blur-xl bg-slate-950/80 sticky top-0 z-50 transition-all duration-500">
          <div className="container mx-auto px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                  <Zap className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
                <div className="absolute inset-0 w-10 h-10 rounded-xl bg-blue-500/30 blur-md animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-white bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent font-mono tracking-wide">
                launchpad.trade
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8 font-pro">
              {[
                { name: "Documentation", id: "documentation" },
                { name: "Tarifs", id: "pricing" },
                { name: "Blog", id: "blog" }
              ].map((item, index) => (
                <FadeContent key={item.name} delay={index * 100}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className="nav-link-hover text-slate-200 font-semibold text-sm px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                </FadeContent>
              ))}
            </nav>
            <button 
              onClick={() => scrollToSection('cta-final')}
              className="join-alpha-button text-white font-bold shadow-xl transition-all duration-300 text-sm px-6 py-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Obtenir ma Clé API</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
        </header>
      </FadeContent>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeContent delay={400} blur={true}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                L'<span className="text-blue-400 animate-glow">API</span> la plus{" "}
                <span className="text-violet-400 animate-glow">Rapide</span>
                <br />
                pour Trader et Lancer sur{" "}
                <span className="text-blue-400 animate-glow">letsbonk.fun</span>
              </h1>
            </FadeContent>
            
            <FadeContent delay={600}>
              <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Intégrez en quelques minutes une infrastructure de niveau professionnel pour automatiser vos trades et vos lancements de tokens. Fiabilité maximale, frais minimaux.
              </p>
            </FadeContent>
            
            <FadeContent delay={800}>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                <button 
                  onClick={() => scrollToSection('cta-final')}
                  className="join-alpha-button text-white font-bold px-8 py-3 shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Générer ma Clé API Gratuite</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('documentation')}
                  className="glowing-border bg-transparent border-2 border-slate-600/50 text-slate-300 hover:border-slate-500 hover:text-white backdrop-blur-sm hover:bg-slate-800/20 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Explorer la Documentation
                </button>
              </div>
            </FadeContent>

            <FadeContent delay={1000}>
              <p className="text-sm text-slate-400 italic">
                Aucune carte de crédit requise. Intégration simple.
              </p>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Preuve Sociale / Confiance */}
      <FadeContent>
        <section className="py-16 relative">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-slate-400 mb-8 uppercase tracking-wider">Compatible avec l'écosystème Solana</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-slate-500">Solana</div>
              <div className="text-2xl font-bold text-slate-500">Jito Labs</div>
              <div className="text-2xl font-bold text-slate-500">letsbonk.fun</div>
              <div className="text-2xl font-bold text-slate-500">0slot</div>
              <div className="text-2xl font-bold text-slate-500">astralane</div>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Cas d'Usage - Section à Onglets */}
      <FadeContent>
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Conçu pour <span className="text-blue-400 animate-glow">Votre Objectif</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <FadeContent delay={300}>
                <Card className="glowing-border glass-effect bg-gradient-to-br from-blue-500/10 to-violet-500/10 backdrop-blur-sm border-blue-500/30 relative shadow-xl h-full flex flex-col hover-scale">
                  <CardHeader className="pb-6">
                    <Badge className="bg-gradient-to-r from-blue-500 to-violet-500 text-white font-bold px-4 py-1 text-sm animate-pulse mb-4 w-fit">
                      DÉVELOPPEURS DE BOTS
                    </Badge>
                    <CardTitle className="text-2xl font-bold text-white mb-4">Créez des Bots de Trading Imparables</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-4">
                      {[
                        "Snipez les lancements de tokens avant tout le monde grâce aux bundles Jito",
                        "Exécutez des stratégies d'achat/vente complexes avec une latence minimale", 
                        "API robuste et stable, conçue pour un fonctionnement 24/7"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start text-slate-300">
                          <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeContent>

              <FadeContent delay={500}>
                <Card className="glowing-border glass-effect bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border-violet-500/30 h-full flex flex-col hover-scale">
                  <CardHeader className="pb-6">
                    <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold px-4 py-1 text-sm animate-pulse mb-4 w-fit">
                      CRÉATEURS DE PROJETS
                    </Badge>
                    <CardTitle className="text-2xl font-bold text-white mb-4">Lancez Votre Token sans Friction</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-4">
                      {[
                        "Automatisez le processus de création et de déploiement de votre token via un simple appel API",
                        "Assurez une liquidité initiale parfaite",
                        "Gagnez du temps et évitez les erreurs manuelles coûteuses"
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
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Avantages Clés */}
      <FadeContent>
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Simplicité Radicale",
                  description: "Intégrez notre API en moins de 5 minutes. Une documentation claire et des endpoints logiques pour vous concentrer sur votre stratégie, pas sur notre infrastructure.",
                  color: "from-blue-500/20 to-cyan-500/20",
                  borderColor: "border-blue-500/30",
                  iconColor: "text-blue-400"
                },
                {
                  icon: Rocket,
                  title: "Performance & Stabilité",
                  description: "Tirez parti des bundles Jito pour des transactions atomiques et prioritaires. Notre service s'appuie sur les meilleurs fournisseurs (0slot, astralane) pour une exécution quasi instantanée.",
                  color: "from-violet-500/20 to-purple-500/20",
                  borderColor: "border-violet-500/30",
                  iconColor: "text-violet-400"
                },
                {
                  icon: DollarSign,
                  title: "Frais les Plus Bas et Transparents",
                  description: "Une structure de frais unique et claire : 0.8% sur les transactions. C'est tout. Pas de frais cachés, pas d'abonnement.",
                  color: "from-green-500/20 to-emerald-500/20",
                  borderColor: "border-green-500/30",
                  iconColor: "text-green-400"
                },
                {
                  icon: FileText,
                  title: "Documentation Exemplaire",
                  description: "Des guides \"copier-coller\", une référence d'API complète et des tutoriels pour vous rendre opérationnel immédiatement.",
                  color: "from-orange-500/20 to-red-500/20",
                  borderColor: "border-orange-500/30",
                  iconColor: "text-orange-400"
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

      {/* Extrait de Code */}
      <FadeContent>
        <section id="documentation" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                L'<span className="text-blue-400 animate-glow">Élégance</span> en Action
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="glowing-border glass-effect backdrop-blur-sm border-slate-700/30 hover:border-slate-600/30 transition-all duration-300 hover-scale">
                <CardHeader>
                  <CardTitle className="text-white text-xl font-semibold mb-4">Acheter 1 SOL de $MYTOKEN</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900/60 rounded-lg p-6 font-mono text-sm">
                    <div className="text-green-400 mb-2"># Python</div>
                    <div className="text-blue-300">from</div> <div className="text-yellow-300">launchpad_trade</div> <div className="text-blue-300">import</div> <div className="text-yellow-300">LaunchpadClient</div>
                    <br /><br />
                    <div className="text-slate-400"># Initialisation du client</div>
                    <div className="text-yellow-300">client</div> <div className="text-blue-300">=</div> <div className="text-yellow-300">LaunchpadClient</div><div className="text-white">(</div><div className="text-orange-300">api_key</div><div className="text-blue-300">=</div><div className="text-green-300">"YOUR_API_KEY"</div><div className="text-white">)</div>
                    <br /><br />
                    <div className="text-slate-400"># Acheter un token en une seule ligne</div>
                    <div className="text-yellow-300">tx_signature</div> <div className="text-blue-300">=</div> <div className="text-yellow-300">client</div><div className="text-white">.</div><div className="text-blue-300">buy</div><div className="text-white">(</div><div className="text-orange-300">token</div><div className="text-blue-300">=</div><div className="text-green-300">"TOKEN_ADDRESS"</div><div className="text-white">,</div> <div className="text-orange-300">sol_amount</div><div className="text-blue-300">=</div><div className="text-purple-300">1.0</div><div className="text-white">)</div>
                    <br /><br />
                    <div className="text-blue-300">print</div><div className="text-white">(</div><div className="text-green-300">f"Achat réussi ! Signature : </div><div className="text-white">{tx_signature}</div><div className="text-green-300">"</div><div className="text-white">)</div>
                  </div>
                  <div className="mt-6 text-center">
                    <Button 
                      onClick={() => scrollToSection('documentation')}
                      className="glowing-border bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white font-medium transition-all duration-300 modern-button hover-scale"
                    >
                      Explorer la Documentation Complète
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* Section Tarifs */}
      <FadeContent>
        <section id="pricing" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Une Tarification <span className="text-blue-400 animate-glow">Simple</span> et Prévisible
              </h2>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="glowing-border glass-effect bg-gradient-to-br from-blue-500/10 to-violet-500/10 backdrop-blur-sm border-blue-500/30 relative shadow-xl hover-scale">
                <CardHeader className="text-center pb-6">
                  <div className="text-sm font-medium text-blue-400 mb-2">FRAIS DE TRANSACTION</div>
                  <div className="text-6xl font-bold text-white mb-4">0.8<span className="text-2xl text-slate-400">%</span></div>
                  <CardDescription className="text-slate-300 text-lg">
                    Uniquement sur les transactions réussies. Pas de frais de création de token, pas de frais d'abonnement mensuel.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="space-y-3 mb-8">
                    {[
                      "Pas de frais cachés",
                      "Pas d'abonnement mensuel", 
                      "Facturation uniquement sur les transactions réussies",
                      "Transparence totale des coûts"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center justify-center text-slate-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* CTA Secondaire - Communauté */}
      <FadeContent>
        <section className="py-24 relative">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Rejoignez une <span className="text-violet-400 animate-glow">Communauté</span> de Bâtisseurs
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Échangez avec d'autres développeurs, obtenez un support rapide et partagez vos stratégies sur notre canal communautaire.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button className="glowing-border bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold px-8 py-3 transition-all duration-300 shadow-lg modern-button hover-scale">
                <MessageCircle className="w-5 h-5 mr-2" />
                Rejoindre notre Discord
              </Button>
              <Button className="glowing-border bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold px-8 py-3 transition-all duration-300 shadow-lg modern-button hover-scale">
                <Users className="w-5 h-5 mr-2" />
                Suivre sur Telegram
              </Button>
            </div>
          </div>
        </section>
      </FadeContent>

      {/* CTA Final */}
      <FadeContent>
        <section id="cta-final" className="py-24 relative">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Prêt à Dominer <span className="text-blue-400 animate-glow">letsbonk.fun</span> ?
            </h2>
            <button 
              className="join-alpha-button text-white font-bold px-12 py-4 text-lg shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Obtenir ma Clé API et Commencer</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>
        </section>
      </FadeContent>

      {/* Footer */}
      <FadeContent>
        <footer className="border-t border-slate-800/30 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-slate-950/80 backdrop-blur-xl shadow-2xl shadow-slate-900/40">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 via-blue-500 to-violet-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/40">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute inset-0 w-8 h-8 rounded-lg bg-blue-500/20 blur-md animate-pulse"></div>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent font-mono tracking-wide">
                    launchpad.trade
                  </span>
                </div>
                <p className="text-slate-300 max-w-sm mb-4 font-medium leading-relaxed">
                  L'API la plus rapide et la plus fiable pour automatiser vos trades sur letsbonk.fun.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-white mb-4 text-lg bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Produit
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: "Documentation", id: "documentation" },
                    { name: "Tarifs", id: "pricing" },
                    { name: "Blog", id: "blog" }
                  ].map((link, i) => (
                    <li key={i}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-slate-300 hover:text-blue-400 transition-all duration-300 text-sm font-medium hover:translate-x-1 block py-1 hover:bg-slate-800/20 px-2 rounded-md backdrop-blur-sm text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-white mb-4 text-lg bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  Support
                </h4>
                <ul className="space-y-3">
                  {["Discord", "Telegram", "Contact", "Terms of Service", "Privacy Policy"].map((link, i) => (
                    <li key={i}>
                      <a 
                        href="#" 
                        className="text-slate-300 hover:text-violet-400 transition-all duration-300 text-sm font-medium hover:translate-x-1 block py-1 hover:bg-slate-800/20 px-2 rounded-md backdrop-blur-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <Separator className="my-6 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
            
            <div className="flex flex-col md:flex-row items-center justify-between text-slate-300 text-sm">
              <p className="font-medium">
                © 2025 Copyright{" "}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent font-semibold">
                  launchpad.trade
                </span>
                . All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {["Privacy Policy", "Terms of Service", "Contact"].map((link, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="hover:text-blue-400 transition-all duration-300 font-medium hover:scale-105 hover:underline decoration-blue-400/50 underline-offset-4"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </FadeContent>
    </div>
  );
};

export default Index;

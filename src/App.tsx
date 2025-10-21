import React, { useState } from 'react';
import { Play, Trophy, Smartphone, Clock, Check, Star, Users, Shield, Headphones as HeadphonesIcon, FileText } from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const testimonials = [
    {
      name: "Carlos Silva",
      location: "São Paulo, SP",
      text: "Finalmente posso assistir todos os jogos do Palmeiras sem perder nenhum lance! App incrível e preço justo.",
      rating: 5
    },
    {
      name: "Maria Santos",
      location: "Rio de Janeiro, RJ", 
      text: "Comprei há 6 meses e não me arrependo. Assisto Flamengo, Champions League, tudo em um lugar só!",
      rating: 5
    },
    {
      name: "João Oliveira",
      location: "Belo Horizonte, MG",
      text: "A qualidade é excelente e funciona perfeitamente no celular. Recomendo para qualquer torcedor!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Funciona no celular?",
      answer: "Sim! Nosso app funciona perfeitamente em smartphones, tablets, computadores e Smart TVs. Interface otimizada para todos os dispositivos."
    },
    {
      question: "Preciso pagar todo mês?",
      answer: "Não! É um pagamento único de R$ 37,90. Sem mensalidades, sem assinaturas. Comprou uma vez, acessa para sempre."
    },
    {
      question: "Quantos dispositivos posso usar?",
      answer: "Você pode acessar em qualquer dispositivos simultaneamente com a mesma conta."
    },
    {
      question: "Tem todos os campeonatos?",
      answer: "Sim! Brasileirão, Libertadores, Champions League, Premier League, La Liga, Serie A, Bundesliga e muito mais!"
    },
    {
      question: "E se eu não gostar?",
      answer: "Oferecemos 7 dias de garantia total. Se não ficar satisfeito, devolvemos 100% do seu dinheiro."
    },
    {
      question: "Como faço para acessar após a compra?",
      answer: "Após o pagamento, você recebe imediatamente um email com seus dados de acesso e link para download."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-yellow-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/50 rounded-full"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold mb-6">
              <Trophy className="w-5 h-5" />
              Acesso Ilimitado - Pagamento Único
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Todos os jogos de futebol 
              <span className="text-yellow-300"> ao vivo</span> em um só lugar
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-green-50 max-w-3xl mx-auto leading-relaxed">
              Acompanhe as principais competições em tempo real, onde e quando quiser. 
              Sem mensalidades, sem complicação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href="https://pay.herospark.com/fut-app-gm-golplay-465533" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block">
                🚀 Comprar Agora por R$ 37,90
              </a>
              <div className="flex items-center gap-2 text-green-100">
                <Shield className="w-5 h-5" />
                <span>7 dias de garantia</span>
              </div>
            </div>
            
            <div className="flex justify-center items-center gap-8 text-sm text-green-100">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-yellow-300" />
                Sem mensalidade
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-yellow-300" />
                Acesso vitalício
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-yellow-300" />
                Todos os dispositivos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Por que escolher nosso app?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A solução definitiva para quem ama futebol e não quer perder nenhum jogo importante
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Play className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Jogos ao Vivo</h3>
                <p className="text-gray-600">
                  Todas as principais ligas e campeonatos nacionais e internacionais em tempo real
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-yellow-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Interface Simples</h3>
                <p className="text-gray-600">
                  Design intuitivo e rápido. Encontre seu jogo em segundos e assista sem complicação
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Acesso Ilimitado</h3>
                <p className="text-gray-600">
                  Pague uma vez e tenha acesso vitalício. Assista quantos jogos quiser, quando quiser
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-yellow-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Trophy className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sem Mensalidade</h3>
                <p className="text-gray-600">
                  Chega de assinaturas caras! Um pagamento único de R$ 37,90 e pronto, é seu para sempre
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Garante já o seu acesso vitalício
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Mais de 10.000 torcedores já estão assistindo. Não perca mais nenhum jogo!
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-6xl font-bold text-yellow-300 mb-2">R$ 37,90</div>
                <div className="text-xl text-green-50 mb-4">Pagamento único - Acesso vitalício</div>
                <div className="flex justify-center gap-4 text-sm text-green-100 mb-6">
                  <span>✓ Todos os jogos</span>
                  <span>✓ Sem mensalidade</span>
                  <span>✓ 7 dias de garantia</span>
                </div>
              </div>
            </div>
            
            <a href="https://pay.herospark.com/fut-app-gm-golplay-465533" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-12 py-5 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl mb-6 inline-block">
              🔥 Comprar Agora - Acesso Imediato
            </a>
            
            <p className="text-green-100 text-sm">
              Pagamento 100% seguro • Acesso em menos de 2 minutos • Suporte 24h
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                O que nossos usuários dizem
              </h2>
              <p className="text-xl text-gray-600">
                Mais de 10.000 torcedores satisfeitos em todo o Brasil
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dúvidas Frequentes
              </h2>
              <p className="text-xl text-gray-600">
                Tire suas dúvidas antes de fazer sua compra
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-green-700 via-green-600 to-green-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Não perca mais nenhum jogo!
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Junte-se aos milhares de torcedores que já garantiram seu acesso vitalício
            </p>
            
            <a href="https://pay.herospark.com/fut-app-gm-golplay-465533" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-12 py-5 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl inline-block">
              ⚽️ Garantir Meu Acesso Agora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">FutebolApp</h3>
                <p className="text-gray-400 mb-4">
                  A plataforma definitiva para assistir todos os jogos de futebol ao vivo. 
                  Pagamento único, acesso vitalício.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    +10.000 usuários
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    4.9/5 avaliação
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Links Rápidos</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><HeadphonesIcon className="w-4 h-4" /> Suporte</a></li>
                  <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><FileText className="w-4 h-4" /> Termos de Uso</a></li>
                  <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Shield className="w-4 h-4" /> Política de Privacidade</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contato</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>📧elielvalentim.gm@gmail.com</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>&copy; 2024 FutebolApp. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
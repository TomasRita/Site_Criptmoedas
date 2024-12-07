import { motion } from "framer-motion";
import backgroundImageHeader from '../assets/forms/Herd.png';
import { useEffect, useState } from "react";
import { formcryptocurrencies, Formplans } from "../api/requestcard";
import '../style/cssgloal.css';
import avatar_cripto from '../assets/forms/avatar_cripto.png';
import background_about from '../assets/forms/Grupo 67.png';
import estrela_1 from '../assets/forms/estrelas.png';
import estrela from '../assets/forms/estrelas-1.png';
import roda from '../assets/forms/roda.png';

// Definindo a interface para os dados das criptomoedas
export interface Cryptocurrency {
  id: number;
  name: string;
  price: string;
  change: number;
  icon: string;
}
interface Plan {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  icon: string;
}
const CountAnimation = ({ targetValue }: { targetValue: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = targetValue;
    const duration = 2; 
    const stepTime = 50; 
    const steps = (duration * 1000) / stepTime;
    const increment = (end - start) / steps;

    const isNegative = targetValue < 0; 


    const interval = setInterval(() => {
      start += increment;
      if (isNegative) {
        setCount(Math.max(start, end)); 
      } else {
        setCount(Math.min(start, end)); 
      }
    }, stepTime);

    return () => clearInterval(interval); 
  }, [targetValue]);

  return <>{count.toFixed(2)}%</>;
};

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [cryptocurrencies, setCryptocurrencies] = useState<Cryptocurrency[]>([]);
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    const handCryptocurrencies = () => {
      setCryptocurrencies(formcryptocurrencies);
      setPlans(Formplans)
    };
    handCryptocurrencies();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    // Adiciona o evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpeza do evento ao desmontar o componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  const [lightningBolts, setLightningBolts] = useState<
  { id: number; path: string; delay: number; left?: string; right?: string }[]
>([]);


  useEffect(() => {
    const createLightningPath = (): string => {
      const segments = 10;
      let path = "M50 0 ";
      let currentX = 50;
  
      for (let i = 0; i < segments; i++) {
        const nextX = currentX + (Math.random() * 20 - 10); // Desvio horizontal (-10 a +10)
        const nextY = (i + 1) * (100 / segments); // Progresso vertical proporcional
        path += `L${Math.max(0, Math.min(100, nextX))} ${nextY} `; // Limita o caminho entre 0% e 100% horizontalmente
        currentX = nextX;
      }
  
      return path;
    };
    const playLightningEffect = () => {
      const bolts = Array.from({ length: Math.floor(Math.random() * 3) + 2 }).map(() => {
        const isRight = Math.random() > 0.5; // Decide aleatoriamente se será `right` ou `left`
    
        return {
          id: Math.random(),
          path: createLightningPath(),
          delay: Math.random() * 0.2, // Atraso aleatório entre raios
          ...(isRight
            ? { right: `${Math.random() * 80}%` } // Define a posição `right`
            : { left: `${Math.random() * 80}%` }), // Define a posição `left`
        };
      });
    
      setLightningBolts(bolts);
    
      setTimeout(() => {
        setLightningBolts([]);
      }, 300); // Duração do relâmpago
    };
    
  
    const interval = setInterval(() => {
      playLightningEffect();
    }, Math.random() * 1000 + 1000); // Entre 1 e 2 segundos
  
    return () => clearInterval(interval);
  }, []);
  
  // Função para rolar de volta ao topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (

    <div className="bg-black min-h-screen w-full flex flex-col items-center relative overflow-hidden px-4">
       
       {/* Espaço reservado para o cabeçalho fixo */}
       <div className="h-44"></div>
       <section className="flex flex-col justify-center">
        {/* Texto central */}
        <motion.div
          className="text-center space-y-4 z-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-white text-3xl font-medium animated-text w-full relative">
          <span className="text-slide title">Invest in Cryptocurrencies Safely and Easily</span>
          <span className="text-slide title">Secure, Simple, Profitable Crypto Investments</span>
        </div>


          <p className="text-white text-sm md:text-lg max-w-xl mx-auto font-extralight">
           Cryptocurrencies have revolutionized the financial world, offering an innovative, safe, and accessible way to invest.
        </p>

        </motion.div>

        {/* Cristal azul no centro */}
        <motion.img
          src={backgroundImageHeader} // Substitua pelo caminho correto da imagem do cristal
          alt="Crystal"
          className="w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
       </section>

       <section id="Pricing" className="relative flex flex-col items-center justify-center bg-black overflow-hidden w-full">
        {/* Conteúdo principal */}
        <motion.div
          className="text-center space-y-4 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-white text-3xl font-medium title">
            Cryptocurrency Diversity
          </h1>
          <p className="text-white text-sm md:text-lg max-w-xl mx-auto font-extralight">
            Explore a wide range of digital currencies, from the most popular to emerging ones, to diversify your investment portfolio.
          </p>
        </motion.div>

        <div className="relative w-full backdrop-blur-sm bg-black/50 py-16 px-4 overflow-hidden">
          {/* Estrelas */}
          <div>
            {/* Partículas */}
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full opacity-50 animate-pulse star-animation"
                style={{
                  top: `${Math.random() * -100}%`, // Começam acima da tela
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 2}px`, // Tamanho aleatório das estrelas (2px a 5px)
                  height: `${Math.random() * 3 + 2}px`,
                  animationDelay: `${Math.random() * 2}s`, // Atraso aleatório para as estrelas caírem em momentos diferentes
                  animationDuration: `${Math.random() * 3 + 4}s`, // Duração aleatória para a queda (de 4s a 7s)
                }}
              ></div>
            ))}
          </div>

          <div className="relative z-10 flex justify-center items-center w-full h-auto md:h-[50vh] bg-gradient-to-r from-transparent via-white/10 to-transparent backdrop-blur-lg">
            {/* Luzes no fundo */}
            <div className="relative w-full flex justify-center items-center p-4">
              <div className="absolute md:left-48 rounded-full w-1/6 h-52 bg-purple-600/20 blur-3xl"></div>
              <div className="absolute md:right-48 rounded-full w-1/6 h-52 bg-purple-600/20 blur-3xl"></div>

              {/* Conteúdo */}
              <motion.div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20"
              initial={{ opacity: 0, scale: 0.9 }} // Define o estado inicial (opacidade e escala)
              animate={{ opacity: 1, scale: 1 }}    // Define o estado de animação (totalmente visível e com escala normal)
              transition={{ duration: 0.5 }}    
              >
                {cryptocurrencies.map((crypto) => (
                  <div
                    key={crypto.id}
                    className="bg-white/10 backdrop-blur-lg p-3 w-full xl:w-56 rounded-lg border border-gray-500 shadow-xl anamation-card"
                // Define a duração da animação
                  >
                    {/* Renderiza o ícone dinamicamente */}
                    <div className="flex justify-center items-center space-x-2">
                      <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
                        <i className={`${crypto.icon} text-yellow-400 text-2xl`}></i>
                      </div>
                      <h2 className="text-white text-lg font-semibold text-center">
                        {crypto.name}
                      </h2>
                    </div>

                    <p className="text-white mt-2 text-lg">{crypto.price}</p>

                    <motion.p
                      className={`${
                        crypto.change > 0 ? "text-green-500" : "text-red-500"
                      } text-sm`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      {/* Animação de contagem */}
                      <CountAnimation targetValue={crypto.change} />
                    </motion.p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          
        </div>
        
       </section>

       <section id="Product">
    
        {/* Conteúdo principal */}
        <motion.div
        className="text-center space-y-4 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-white text-3xl font-medium title">
        Choose the Plan that Best Meets Your Needs
        </h1>
        <p className="text-white text-sm md:text-lg max-w-xl mx-auto font-extralight">
        We offer affordable pricing plans for all investor profiles, from beginners to experienced professionals in the cryptocurrency market. 
        Check out our plans and choose the ideal one for you!
        </p>
        </motion.div>
        <div className="relative w-full backdrop-blur-sm py-16 px-4 flex items-center justify-center">
          <div className="absolute md:left-0 top-8 rounded-full w-1/6 h-52 bg-purple-600/20 blur-3xl"></div>
            <div className="absolute md:right-4 bottom-0 rounded-full w-1/6 h-52 bg-purple-600/20 blur-3xl"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 text-white">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-white/10 backdrop-blur-lg p-8 h-auto  xl:max-h-[70vh] w-auto md:w-80 rounded-lg border border-gray-500 shadow-xl flex flex-col items-center ${
                  index === 0
                  ? "xl:my-8 my-0" // Abaixa a carta da posição 0
                  : index === 1
                  ? "my-0" // Eleva a carta do meio
                  : "xl:my-16 my-0" // Mantém a posição padrão da última carta
              }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-full bg-[#915AC0] flex items-center justify-center mb-4 ">
                  <i className={`${plan.icon} text-2xl text-white`}></i>
                </div>
                <div className="my-4">
                <h2 className="text-xl font-bold">{plan.title}</h2>
                <p className="text-lg font-semibold ">{plan.price}</p>
                </div>
        
                <p className="my-4 max-w-72 text-left font-light">{plan.description}</p>


              <ul className="text-sm space-y-2 my-4 text-white ">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center font-extralight">
                  <span className="flex items-center justify-center border border-[#915AC0] rounded-full w-6 h-6 p-2 mr-2">
                    <i className="ri-check-line text-[#915AC0]"></i>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

                <button
                  className={` py-2 px-4 rounded-full my-6 font-light ${
                    index === 0
                      ? "bg-white/10 backdrop-blur-lg hover:bg-gray-500 text-white"
                      : index === 1
                      ? "bg-white/10 backdrop-blur-lg hover:bg-gray-500 text-white"
                      : "bg-[#915AC0] hover:bg-purple-700 text-white"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
         
       </section>

       <section className="relative flex flex-col items-center justify-center bg-black overflow-hidden w-full mt-20">
       <>
        {/* Efeito de raios */}
        {lightningBolts.map((bolt) => (
          <motion.svg
            key={bolt.id}
            className="absolute w-full h-full z-50 pointer-events-none"
            style={{
              left: bolt.left, // Define se `left` está presente
              right: bolt.right, // Define se `right` está presente
              animationDelay: `${bolt.delay}s`,
            }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: bolt.delay }}
          >
            <path
              d={bolt.path}
              stroke="url(#blueGradient)" 
              strokeWidth="0.5" 
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)" 
            />
          </motion.svg>
        ))}
        {/* Definir gradiente e efeito de brilho */}
        <svg style={{ position: "absolute", width: "0", height: "0" }}>
          <defs>
            {/* Gradiente azul para o raio */}
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(145, 90, 192)" />
              <stop offset="100%" stopColor="rgba(220, 180, 255)" />
            </linearGradient>
            {/* Filtro de brilho para o raio */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
              <feFlood floodColor="#9a30f7" result="color" />
              <feComposite in2="blur" operator="in" />
              <feComposite in2="SourceAlpha" operator="in" />
              <feComposite in2="SourceAlpha" operator="in" />
              <feComposite in2="SourceAlpha" operator="in" />
              <feComposite in2="SourceAlpha" operator="in" />
              <feComposite in2="SourceAlpha" operator="in" />
            </filter>
          </defs>
        </svg>
       </>

        {/* Conteúdo principal */}
        <motion.div
          className="text-center space-y-4 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-white text-3xl font-medium title">
          Cryptocurrencies Available for Purchase
          </h1>
          <p className="text-white text-sm md:text-lg max-w-xl mx-auto font-extralight">
          Buy the main cryptocurrencies on the market directly on our platform. We offer a variety of 
          digital currencies, from the most consolidated to the most promising. 
          Diversify your portfolio safely and 
          confidently!
          </p>
        </motion.div>
        <div className="relative flex flex-wrap justify-center items-center  mt-16 w-full">
        <div className="relative flex justify-center items-center w-full">
            
         {/* Background shapes */}
        <div className="absolute w-56 h-56 bg-[#915AC0]/65 rounded-full blur-2xl md:w-96 md:h-96"></div>
        <div className="absolute md:right-[30em] top-16 rounded-full w-28 h-36 bg-purple-600/20 blur-3xl"></div>

        {/* Avatar image */}
          <img 
            className="md:w-[53%] w-full  z-30 absolute" 
            src={avatar_cripto} 
            alt="Imagem de avatar" 
          />
         {/* Central container */}
          <div className="bg-white/10 backdrop-blur-lg w-96 h-96 md:h-[90vh] md:w-[90vh] border border-[#ffffff0c] rounded-full flex justify-center items-center overflow-hidden">

          {/* Inner blurred containers */}
          <div className="backdrop-blur-none bg-black/20 absolute h-[50vh] w-[50vh] md:h-[75vh] md:w-[75vh] border border-[#ffffff0c] rounded-full flex justify-center items-center"></div>
          <div className="bg-[#0000001f] backdrop-blur-none absolute h-[40vh] w-[40vh] md:h-[60vh] md:w-[60vh] border border-[#ffffff0c] rounded-full flex justify-center items-center"></div>
         </div>
        </div>
        
   
       <div className="space-y-8 md:space-y-0 my-6 md:my-0 w-96 md:w-0">
      {/* Card 1 */}
      <div className="bg-white/10 backdrop-blur-lg md:left-48 md:top-[19vh] md:absolute text-white rounded-lg z-40  shadow-md md:w-44 w-full p-4 text-center">
        <div className="flex justify-center items-center gap-2">
          <i className="ri-bit-coin-line text-yellow-500 text-2xl"></i>
          <h3 className="text-lg font-bold">BTC-Bitcoin</h3>
        </div>
        <p className="text-sm mb-4">$62,060.01</p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/10 backdrop-blur-lg  md:absolute md:left-52 z-40 md:bottom-56 md:w-44 w-full p-4 text-white rounded-lg  shadow-md text-center">
        <div className="flex justify-center items-center gap-2">
          <i className="ri-coin-line text-blue-500 text-2xl"></i>
          <h3 className="text-lg font-bold">BNB-BNB</h3>
        </div>
        <p className="text-sm mb-4">$22,060.01</p>

      </div>

      {/* Card 3 */}
      <div className="bg-white/10 backdrop-blur-lg md:right-52 md:top-[35vh] md:absolute text-white rounded-lg shadow-md z-40 md:w-48 w-full p-2 py-4 text-center">
        <div className="flex justify-center items-center gap-2">
          <i className="ri-eth-line text-purple-500 text-2xl"></i>
          <h3 className="text-lg font-bold">ETH-Ethereum</h3>
        </div>
        <p className="text-sm mb-4">$42,060.01</p>
      </div>

      {/* Card 4 */}
       <div className="bg-white/10 backdrop-blur-lg  md:absolute md:right-48 z-40 md:bottom-16 text-white rounded-lg shadow-md md:w-44 w-full p-4 text-center">
        <div className="flex justify-center items-center gap-2">
          <i className="ri-bank-card-line text-green-500 text-2xl"></i>
          <h3 className="text-lg font-bold">XRP-Ripple</h3>
        </div>
        <p className="text-sm mb-4">$1,060.01</p>
       </div>
       </div>

       </div>
              
      </section>

      <section id="About_Us" className="relative flex flex-wrap  justify-evenly bg-black  w-full md:mt-60 space-y-8">
        {/* Conteúdo principal */}
        <motion.div
          className="text-center space-y-4 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-white text-left text-3xl font-medium title mt-10">
           About [Invista <span className="text-[#915AC0]">Cripto]</span> 
          </h1>
          <div className="flex flex-col space-y-4 my-5">
            <span className="text-2xl text-white text-left">Our Mission</span>
            <p className="text-white text-sm md:text-lg text-left max-w-xl mx-auto font-extralight">
            At Invista <span className="text-[#915AC0]">Cripto</span>, our mission is to democratize access to cryptocurrencies by providing a 
            safe, reliable, and easy-to-use platform for investors of all levels. We believe everyone
            should have the opportunity to explore and benefit from the transformative
            potential of digital finance.
            </p>
          </div>

          <div className="flex flex-col space-y-4 text-left">
          <span className="text-2xl text-white">Our History</span>
          <p className="text-white text-sm md:text-lg text-left max-w-xl mx-auto font-extralight">
          Founded in [20<span className="text-[#915AC0]">02]</span>, Invista <span className="text-[#915AC0]">Cripto,</span> was born from a passion for technology and innovation. 
          A group of cryptocurrency enthusiasts came together with the aim of creating a solution
          that would simplify the process of buying and selling digital assets. Since then, we have
          worked tirelessly to build a platform that not only meets, but exceeds our users'
          expectations.
          </p>
          </div>
       
        </motion.div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl flex justify-center items-center p-4">
          <img src={background_about} alt="background_about" />
          <div className="absolute md:right-[28em]  bottom-0 rounded-full w-20 h-20 bg-purple-600/5 blur-xl"></div>
          <div className="absolute md:right-[25em] -bottom-10 rounded-full w-36 h-44 bg-purple-600/20 blur-3xl"></div>
          <div className="absolute md:right-[25em] -bottom-10 rounded-full w-36 h-44 bg-purple-600/20 blur-3xl"></div>
        </div>
      </section> 

      <section className="relative flex flex-wrap  justify-evenly bg-black  w-full md:my-48 my-24 md:px-32">
        {/* Conteúdo principal */}
        <div className="bg-white/10 backdrop-blur-lg relative rounded-2xl flex justify-center  w-full  items-center py-12 p-4">
        <motion.div
          className="text-center space-y-4 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h1 className="text-white  text-3xl font-medium title my-3">
            Join Us
            </h1>
            <p className="text-white text-sm md:text-lg md:max-w-4xl w-full mx-auto font-extralight">
            We are excited about the future of cryptocurrencies and invite you to join us on this journey. Whether you are an experienced
            investor or someone just starting out.
            </p>
            <button className="bg-[#915AC0] text-white py-2 md:w-64 w-full rounded-3xl hover:bg-purple-700">Register</button>
          </div>

          <img className="absolute top-0 -left-24" src={estrela} alt="estrela" />
          <img className="absolute top-0 -right-24 " src={estrela_1} alt="estrela" />
          <img className="absolute md:-bottom-6 md:right-36 right-0 -z-10" src={roda} alt="roda" />

        </motion.div>
        </div>
      </section> 

      {/* Botão de Voltar ao Topo*/}
      {showScrollButton && (
        <div className="fixed bottom-5 right-5 z-40">
          <button
            onClick={scrollToTop}
            className="bg-[#915AC0] text-white py-2 px-4 rounded-full shadow-lg hover:bg-purple-700"
            title="Voltar ao Topo"
          >
            ↑
          </button>
        </div>
      )}

    </div>
  );
};

export default Home;

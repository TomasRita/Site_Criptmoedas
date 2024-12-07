import { motion } from 'framer-motion';
import logo from '../assets/logo/Grupo 67.svg'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps{
setLoadingTrue: () => void;
}

const Header = ({setLoadingTrue}:HeaderProps)=>{
    const [scrollPosition, setScrollPosition] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [navbar, setNavbar] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          setScrollPosition(window.scrollY);
        };
    
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    const isMobile = windowWidth <= 760;
    const background = scrollPosition > 0 ? "bg-black/80 shadow-lg" : "bg-transparent";

    return (
      <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav
        className={`w-full fixed z-50 py-6 transition-all duration-300 ${background}  backdrop-blur-sm bg-black/50`}
      >
        <div className="flex items-center justify-between px-6 py-2 lg:max-w-7xl mx-auto border-b border-[#ffffff33] ">
          {/* LOGO */}
          <Link to="/">
            <img src={logo} alt="Logo" className="w-32 md:w-48" />
          </Link>
    
          {/* MENU DESKTOP */}
          <div
            className="hidden md:flex items-center space-x-8 border border-[#ffffff33] rounded-full px-6 py-3 relative"
            style={{ fontWeight: 300 }}
          >
            <a
              href="/#"
              className="relative text-white hover:text-[#915AC0] after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#915AC0] after:-bottom-1 after:left-0"
            >
              Home
            </a>
            <a
              href="/#Pricing"
              className="relative text-white hover:text-[#915AC0]"
            >
              Pricing
            </a>
            <a
              href="/#Product"
                className="relative text-white hover:text-[#915AC0]"
            >
              Product
            </a>
            <a
              href="/#About_Us"
                className="relative text-white hover:text-[#915AC0]"
            >
              About Us
            </a>
          </div>
    
          {!isMobile && (
            <Link
              to="/Site_Criptmoedas/"
              className="bg-[#915AC0] text-white py-2 px-6 rounded-3xl hover:bg-purple-700"
              style={{ fontWeight: 300 }}
              onClick={setLoadingTrue}
            >
              Get Start
            </Link>
          )}
    
          {/* MENU MOBILE */}
          {isMobile && (
            <button
              className="text-white text-2xl z-50"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <i className="ri-close-fill" /> : <i className="ri-menu-line" />}
            </button>
          )}
        </div>
    
        {/* MENU MOBILE */}
        {isMobile && navbar && (
          <motion.div
            className="absolute top-0 left-0 w-full z-40 h-screen bg-black/90 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul
              className="flex flex-col justify-center items-center z-50"
              style={{ fontWeight: 300 }}
            >
          <a
            href="/#"
            className="text-white text-xl mb-4 hover:text-[#915AC0] relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#915AC0] after:-bottom-1 after:left-0"
          >
            Home
          </a>

              <a
                href="/#Pricing"
                className="text-white text-xl mb-4 hover:text-[#915AC0]"
        
              >
                Pricing
              </a>
              <a
                href="/#Product"
                className="text-white text-xl mb-4 hover:text-[#915AC0]"
               
              >
                Product
              </a>
              <a
                href="/#About_Us"
                className="text-white text-xl mb-4 hover:text-[#915AC0]"
        
              >
                About Us
              </a>
              <Link
                to="/Site_Criptmoedas/"
                className="bg-[#915AC0] text-white py-2 px-8 rounded-3xl hover:bg-purple-700"
                onClick={() => {
                  setLoadingTrue();
                  setNavbar(false);
                }}
              >
                Get Start
              </Link>
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.div>
    
    );
    
}
export default Header;
import 'remixicon/fonts/remixicon.css';
import logo from '../assets/logo/Grupo 67.svg';

const Footer = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="lg:max-w-7xl mx-auto px-6 w-full">
        {/* Divider */}
        <div className="border border-[#ffffff11] mb-12"></div>

        <div className='flex flex-wrap justify-between w-full space-y-8'>

     
        {/* Logo */}
        <div className=" flex flex-col items-start">
          <div>
          <img src={logo} alt="Invista Crypto Logo"  />
          </div>
 
            {/* Social Media */}
           <div className=" flex justify-start items-center space-x-4 ml-6">
            <a
              href="https://github.com/TomasRita"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#75757511] flex justify-center items-center w-8 h-8 p-1 hover:text-[#915AC0] hover:bg-white rounded-full"
            >
            <i className="ri-github-fill text-xl"></i>
            </a>

            <a
              href="https://www.instagram.com/tomasdrita/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex justify-center items-center w-8 h-8 bg-[#75757511] p-1 hover:text-[#915AC0] hover:bg-white rounded-full"
            >
              <i className="ri-instagram-fill  text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/tomasdrita/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#75757511] flex justify-center items-center w-8 h-8 p-1 hover:text-[#915AC0] hover:bg-white rounded-full"
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
          </div>

        </div>

        {/* Footer Content */}
        <div className="flex md:flex-row flex-col space-y-16 md:space-y-0 xl:flex-row xl:justify-center md:w-full md:justify-between xl:w-auto items-start xl:space-x-32">
          {/* Navigation */}
          <div>
            <h3 className="font-medium text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 font-thin">
              <li>
                <a href="#" className="hover:text-[#915AC0]">
                  Home
                </a>
              </li>
              <li>
                <a href="#Pricing" className="hover:text-[#915AC0]">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#Product" className="hover:text-[#915AC0]">
                  Product
                </a>
              </li>
              <li>
                <a href="#About_Us" className="hover:text-[#915AC0]">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Information */}
          <div>
            <h3 className="font-medium text-lg mb-4">Legal Information</h3>
            <ul className="space-y-2 font-thin">
              <li>
                <a href="#terms" className="hover:text-[#915AC0]">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-[#915AC0]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#cookies" className="hover:text-[#915AC0]">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="#rights" className="hover:text-[#915AC0]">
                  Risk Notice
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-medium text-lg mb-4">Subscribe to our Newsletter</h3>
            <p className=" font-thin text-white-400 text-sm mb-4">
              Get the latest cryptocurrency news directly to your inbox.
            </p>
            <form className="flex relative justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#1a1a1a] font-thin text-white rounded-full border border-[#333] w-full md:w-96 px-4 py-3 focus:outline-none focus:ring-1  focus:ring-[#915AC0]"
              />
              <button
                type="submit"
                className="bg-[#915AC0] absolute right-2 rounded-full hover:bg-purple-700 px-4 py-2 text-sm  font-thin text-white"
              >
                Sign Up
              </button>
            </form>
          </div>

        </div>


        </div>

          {/* Footer Bottom */}
          <div className="flex justify-center items-center mt-16">
          {/* Copyright */}
          <p className="text-sm text-white font-extralight">
            © 2024 Invista <span className="text-[#915AC0]">Crypto</span>. All rights reserved.
          </p>

    
        </div>
      </div>
    </div>
  );
};

export default Footer;

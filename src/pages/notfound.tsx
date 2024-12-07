import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/Site_criptmoedas/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-50 w-full">
      {/* <img src={erro} alt="Erro 404" className="max-w-96 h-auto mb-8" /> */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Erro 404 - Página Não Encontrada</h1>
      <p className="text-lg text-gray-600 mb-6">
        A página que você está procurando não existe, foi movida ou o endereço digitado está incorreto.
        <br />
        Mas não se preocupe, estamos aqui para ajudar você a voltar ao caminho certo!
      </p>
      <button
        onClick={handleRedirect}
        className="bg-[#915AC0] text-white px-6 py-3 rounded-lg hover:bg-[#8a57b6] transition-colors"
      >
        Voltar para a Página Inicial
      </button>
    </div>
  );
};

export default NotFoundPage;

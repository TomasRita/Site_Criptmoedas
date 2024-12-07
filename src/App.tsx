import { useEffect, useState } from "react"
import Loading from "./componets/loading";
import Header from "./componets/header";
import { Outlet } from "react-router-dom";
import Footer from "./componets/footer";

function App() {
  const[loading,setLoading]=useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    },9000);
  return () => clearTimeout(timer);
  },[])

  const setLoadingTrue = () =>{
   setLoading(true)

   const timer = setTimeout(() => {
    setLoading(false); 
   }, 9000);
   return () => clearTimeout(timer);

  }
  const isNotFoundPage = location.pathname === '/Site_criptmoedas/'; 

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {isNotFoundPage && <Header setLoadingTrue={setLoadingTrue} />}
          <Outlet />
          {/* Verifica se a rota é a página 404 */}
          {isNotFoundPage && <Footer />}
        </>
      )}
    </>
  );
}

export default App;

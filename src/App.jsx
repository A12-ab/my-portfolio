import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import { BallTriangle } from 'react-loader-spinner';
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])
  return (
    <>
     {
      loading ?
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
           <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
         />
        </div>
      
      :
      <div className="bg-slate-900">
      <Nav/>
      <Banner/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>

     }
    </>
  );
};

export default App;
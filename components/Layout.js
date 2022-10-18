import Head from 'next/head';
import { useState,useEffect } from "react";
import NavBar from "./NavBar";
import LoAding from "./LoAding";
import Footer from './Footer';
import nProgress from "nprogress";
import  Router  from "next/router";

Router.onRouteChangeStart = url => {
    nProgress.start()
    nProgress.set(0.3)
   
  
  }
  Router.onRouteChangeComplete = () => {
    
    nProgress.done()
    nProgress.set(1)
  }

const Layout = ({children}) => {

    const [loading,setLoading] = useState(false);
    useEffect(() => {
      const handleComplete = () => {
        setLoading(false);
      };
      const handleStart = () => {
        setLoading(true)
      }
      Router.events.on("routeChangeComplete", handleComplete);
      Router.events.on("routeChangeStart", handleStart);
  
      return () => {
        Router.events.off("routeChangeComplete", handleComplete);
        Router.events.off("routeChangeStart", handleStart);
  
      }
    }, [Router])
    
  return (
    <>
         
       <Head>
       
     
      </Head>
      <div className=" row  col-lg-12 col-12">
        
        <header className=" col-12 col-lg-12 ">
        <NavBar/>
        </header>
       

        {loading ? <LoAding/> :<div className="col-12 col-lg-12"> {children} </div>}

     </div>
     <footer className='col-lg-12 col-12'>
          <Footer/>
      </footer> 


    </>
  )
}

export default Layout

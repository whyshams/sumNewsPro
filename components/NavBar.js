import Link from "next/link";
import { useRouter } from 'next/router';
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import Menu from "./Menu";


const NavBar = () => {
  
  const [menuOpen,setMenuOpen] = useState(false)
 
  const router = useRouter();
  return (
    <>
   
    <div className='row'>
      <div className='col-md-12 d-flex'>
        <div className=' menuicon'>
          {
            !menuOpen && 
            <div onClick={() => setMenuOpen(!menuOpen)} className='btn btn-light button' >
            <BiMenu />
            </div>
            
        
          }
       
          
         
        </div>
        <div className='logo'>
          <img src='sumlogo2.png' />
       </div>


      </div>
      <div className="col-md-12">
      
      {
            menuOpen && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          }

      </div>
    {/*
      <nav className='menu col-md-12'>
  <Link href="/">
    <div className='btn btn-success'>
        SUMNEWS
    </div>
    </Link>
    
    <Link href="/TopNews/World"><div className='btn btn-success'>Worldwide Top News</div></Link>

 <Link href="/BDnews">
 <div className='btn btn-success'>
  Bangladesh News</div></Link>


    <Link href="/Summarize">
<div className='btn btn-success'>

      Summarizer</div></Link>
      <Link href="/EditImage">
<div className='btn btn-success'>
        Image Editor</div></Link>
        

  </nav>
    
  */}
  

  

    </div>
  
 
<hr/>
    </>
  )
}

export default NavBar
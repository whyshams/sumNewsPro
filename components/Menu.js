import React from 'react';
import Link from 'next/link';
import { GiCancel } from "react-icons/gi";

const Menu = ({menuOpen,setMenuOpen}) => {
  return (
    <div>
           <div className='modumenu'>
              <nav className='menu col-md-12'>
                {
                    menuOpen &&       <div className='col-md-12 d-flex'>
                    <div className=' menuicon' onClick={() => setMenuOpen(!menuOpen)}>
                      {
                        menuOpen && 
                        <div  className='btn btn-light button' >
                        <GiCancel/>
                        </div>
                        
                    
                      }
                   
                      
                     
                    </div>
                    <div className='logo'>
                    <Link href='/'>

                      <img src='logo.png' />
                    </Link>

                   </div>
                    
                   
            
            
                  </div>
                  
                }
                <hr className='hr'/>
 
    <div className='menu col-md-12 d-md-flex d-block justify-content-center align-items-center'>
    <Link href="/TopNews/World"><div className='btn btn-light m-3 p-5 button' onClick={() => setMenuOpen(!menuOpen)}>Worldwide Top News</div></Link>

<Link href="/BDnews">
<div className='btn btn-light m-3 p-5 button' onClick={() => setMenuOpen(!menuOpen)}>
 Bangladesh News</div></Link>


   <Link href="/Summarize">
<div onClick={() => setMenuOpen(!menuOpen)} className='btn btn-light m-3 p-5 button'>

     Summarizer</div></Link>
     <Link href="/EditImage">
<div onClick={() => setMenuOpen(!menuOpen)} className='btn btn-light m-3 p-5 button'>
       Image Editor</div></Link>
       


    </div>
 
  </nav>
    </div>
    </div>
  )
}

export default Menu
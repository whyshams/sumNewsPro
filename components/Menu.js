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
                    <div className=' menuicon'>
                      {
                        menuOpen && 
                        <div onClick={() => setMenuOpen(!menuOpen)} className='btn btn-light button' >
                        <GiCancel/>
                        </div>
                        
                    
                      }
                   
                      
                     
                    </div>
                    <div className='logo'>
                      <img src='sumlogo2.png' />
                   </div>
            
            
                  </div>
                }
 
    <div className='menu'>
    <Link href="/TopNews/World"><div className='btn btn-success' onClick={() => setMenuOpen(!menuOpen)}>Worldwide Top News</div></Link>

<Link href="/BDnews">
<div className='btn btn-success' onClick={() => setMenuOpen(!menuOpen)}>
 Bangladesh News</div></Link>


   <Link href="/Summarize">
<div onClick={() => setMenuOpen(!menuOpen)} className='btn btn-success'>

     Summarizer</div></Link>
     <Link href="/EditImage">
<div onClick={() => setMenuOpen(!menuOpen)} className='btn btn-success'>
       Image Editor</div></Link>
       


    </div>
 
  </nav>
    </div>
    </div>
  )
}

export default Menu
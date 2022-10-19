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
        <div className=' menuicon' onClick={() => setMenuOpen(!menuOpen)}>
          {
            !menuOpen && 
            <div  className='btn btn-light button' >
            <BiMenu />
            </div>
            
        
          }
       
          
         
        </div>
        <div className='logo'>
        <Link href='/'>

          <img src='logo.png' />
        </Link>

       </div>

        
     

      </div>
      <div className="col-md-12">
      
      {
            menuOpen && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          }

      </div>
  </div>
  
 
<hr/>
    </>
  )
}

export default NavBar
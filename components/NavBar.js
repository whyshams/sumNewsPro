import {useState} from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';


const NavBar = () => {
  const [bdOpen , setBdOpen] =useState(false);
  const [bdNatOpen,setBdNatOpen] = useState(false);
  const [homeOpen,setHomeOpen] = useState(false);

  const router = useRouter();
  return (
    <>
   
    <div className='row'>
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

    </div>
  
 
<hr/>
    </>
  )
}

export default NavBar
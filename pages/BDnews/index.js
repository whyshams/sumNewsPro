import Link from "next/link"

const index = () => {
  return (
    <div>
      <div className='menu col-md-12 d-md-flex d-block justify-content-center align-items-center'>
      <nav className="btn btn-light m-3 p-5 button">
      <Link href='/BDnews/Categorical/news'><div>Categorical</div></Link>

      </nav>
     
<nav className="btn btn-light m-3 p-5 button">
<Link href='/BDnews/Divisional/Dhaka'><div>Divisional</div></Link>

</nav> 
<nav className="btn btn-light m-3 p-5 button">
<Link href='/BDnews/International'><div>International</div></Link>

</nav>
<nav className="btn btn-light m-3 p-5 button">
<Link href='/BDnews/BanglaNews/ঢাকা'><div>বাংলা সংবাদ</div></Link>

</nav>

      </div>
    



    </div>
  )
}

export default index
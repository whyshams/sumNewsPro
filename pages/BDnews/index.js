import Link from "next/link"

const index = () => {
  return (
    <div className="">
      <div className='menu col-md-12 d-md-flex d-block justify-content-center align-items-center'>
      <Link href='/BDnews/Categorical/news'><div className="btn btn-light m-3 p-5 button">Categorical</div></Link>

     
<Link href='/BDnews/Divisional/Dhaka'><div className="btn btn-light m-3 p-5 button">Divisional</div></Link>

<Link href='/BDnews/International'><div className="btn btn-light m-3 p-5 button">International</div></Link>

<Link href='/BDnews/BanglaNews/ঢাকা'><div className="btn btn-light m-3 p-5 button">বাংলা সংবাদ</div></Link>


      </div>
    



    </div>
  )
}

export default index
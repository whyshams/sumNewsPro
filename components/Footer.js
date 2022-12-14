import Link from "next/link"

const Footer = () => {
  return (
    <>
    <hr/>
        <div className="Footer">
        <div className='Footer-menu pt-4 pb-1 d-flex flex-wrap justify-content-center align-items-center'>
                <Link href='/AboutUs'><div className='btn btn-matt m-md-3 m-1'>About Us</div></Link>
                <Link href='/ContactUs'><div className='btn btn-matt m-md-3 m-1'>Contact Us</div></Link>
                <Link href='/Terms'><div className='btn btn-matt m-md-3 m-1'>Terms &amp; Conditions</div></Link>
                <Link href='/PrivacyPolicy'><div className='btn btn-matt m-md-3 m-1'>Privacy Policy</div></Link>
                <Link href='/Disclaimer'><div className='btn btn-matt m-md-3 m-1'>Disclaimer</div></Link>

                
            </div>
            <div className=''>
                <div className='copyright mt-3 d-flex justify-content-center align-items-center'>&copy; Databases of Various News API from open source</div>
                <div className='footer-logo'>
                    <p className='mt-5 d-flex text-muted justify-content-center align-items-center'>Brought To You By</p>
                    <h1 className='  mt-2 pb-5 d-flex flex-wrap justify-content-center align-items-center'>
                      <Link href='/'>
                      <div className="logo">
                      <img src="/logo.png"/>


                      </div>
                      
                      </Link>
                     
                    </h1>
                </div>

            </div>
        </div>
    </>
  )
}

export default Footer
import {useState,useEffect} from 'react'
import axios from 'axios';
import moment from 'moment';
import {useRouter} from 'next/router'
import { useResultContext } from '../../../Contexts/ResultContextProvider';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {FaAngleDown} from 'react-icons/fa';
import { IconContext } from "react-icons";
import Head from 'next/head';
import Summary from '../../../components/Summary';

import Pagination from '../../../components/Pagination';
import LoAding from '../../../components/LoAding';
import {FacebookShareButton,FacebookIcon,FacebookMessengerShareButton,FacebookMessengerIcon,WhatsappShareButton,WhatsappIcon,TwitterShareButton,TwitterIcon,TelegramShareButton,TelegramIcon} from 'react-share';

import Link from 'next/link';
const National = ({Data,National}) => {
  const router = useRouter();
const {bdNewsDataDiv,setBdNewsDataDiv,setCopied,Loading,directSumData,setDirectSumData,setDirectsumInput,clear} = useResultContext();


    const [divText,setDivText] = useState('');
    const handleCopy = () => {
      setCopied(true)
      router.push('/Summarize')
    }
  

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/BDnews/Divisional/${divText}`);
        
    }
    useEffect(()=>{
      if(clear){
        setDirectSumData(null)
      }
  },[clear])
  
  
    setBdNewsDataDiv(Data)

   
         {/* Pagination algo*/}
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(8);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const paginatedData = bdNewsDataDiv.slice(indexOfFirstPost, indexOfLastPost);

const paginate = pageNumber => setCurrentPage(pageNumber);
    

  return (
    <>
       <Head>
      <title>BD News || Divisional </title>
      <meta name="description" content="Get Division wise News Of Bangladesh from the reputed English Newspaper of the country and summarize them in seconds with our summarizer tool..."/>
      <meta name="keywords" content="Bangladesh news,Bangladesh division news,bd division news, Bangla News,BD News,NewsBd,bangladesh english news, bangladesh english newspaper,english newspaper bangladesh,summary,summarize news,all bangladesh english news"/>
      <meta name="author" content="Nuren Shams Chowdhury"/>
      </Head>
      <div className=' mt-3 row '>
        <div className=' col-md-12'> 
        <div className=''>
          <h2 className='mainpagetitle d-flex justify-content-center align-items-center'>
            Division wise news of bangladesh from local english news media 
          </h2>
        </div>
        </div>
      </div>
     
      <div className='select rounded'>
      <div className='row'>
            <div className='col-md-12'>
      <div className='b-block'>
        <div className='m-2'>
        
        <h6 className='selecttitle d-flex justify-content-center align-items-center mb-4 mt-3'>Change the Division to see top news of last Week</h6>
        <form className=' d-flex justify-content-center align-items-center' onSubmit={handleSubmit}>
            <label className='d-block'>
            <div className='optiontitle mb-3 '>Select the category   <IconContext.Provider value={{className:"fa-bounce"}}> <FaAngleDown/></IconContext.Provider> </div>
            <select className=' option rounded' value={divText} onChange={(e) => setDivText(e.target.value)}>
            <option value='Dhaka'>Dhaka</option>
            <option value='Chittagong'>Chottogram</option>
            <option value='Khulna'>Khulna</option>
            <option value='Rajshahi'>Rajshahi</option>
            <option value='Barisal'>Barishal</option>
            <option value='Sylhet'>Sylhet</option>
            <option value='Mymensingh'>Mymensingh</option>
            <option value='Rangpur'>Rangpur</option>
            <option value='Noakhali'>Noakhali</option>
            
            </select>
          <button className='btn selectbutton btn-light' type='submit'>Submit</button>


            </label>
       

        </form>
        </div>
        
          </div>
      </div>
      
            </div>
      </div>
     

      <div className='pagenamecard rounded'>
      <div className=''>
        <p className='d-flex justify-content-center align-items-center  pagenametitle'>Current Division</p>
        <div className=''>
        <div className='d-flex justify-content-center align-items-center'>

        <h1 className='pagename'>{National.toUpperCase()}</h1>
        </div>
       </div>
      </div>

      </div>
   

      {
      Loading ? <h1 className='modu'><LoAding/></h1> : <div></div>
     }
      
        
      
      {
          directSumData && <Summary directSumData={directSumData} />
        }
    
      <div className='bdNatSecond'>

   
     
     
      {
    paginatedData?.map((data)=>(
      <div key={data.title} className='contentcard rounded col-12'>
        <div  className='row col-md-12 '>
        <div className='col-md-4 col-12'>
          
          <img className='rounded image' src={data.media} alt={data.title}/>

        </div>
        <div className='col-md-8 '>
        <div className='col-12 maincontent'>
          <h3 className='contenttitle fontFat d-flex justify-content-center align-items-center mb-2'>{data.title}</h3>
          
          <div><h4 className='contentparatitle'>Summary :</h4><p className='contentpara m-1'> {data.summary}</p></div>


          <div className='d-block'>
            <h5 className='m-2 contentparatitle  d-flex justify-content-center align-items-center' >{moment(data.published_date).fromNow()}</h5> 
            <div className=' d-flex justify-content-center align-items-center'>
            <h6 >by </h6>

            </div>
            <div className='d-flex justify-content-center align-items-center'>
            <p className='sourcename'>{data.rights}</p>
            </div>
          </div>
           
          
          <div className='row contentbutton'>
                                      
          <div className=' d-block d-md-flex justify-content-center'>
                              <a target="_blank" rel="noreferrer" className=' btn btn-light button m-3' href={data.link}>Read Full News</a>
                               <a className='btn btn-light button m-3' onClick={()=> {setDirectsumInput(data.link)}}>Summarize</a>
                               <CopyToClipboard text={data.media} >
                                       
                               <div className=' button btn btn-light m-3'><Link href='/EditImage/Editor'>Copy Image Link</Link></div>

                                                                           </CopyToClipboard>


                              </div>
                          
                               </div>
                               <div className='col-md-12'>
                                  <h4 className='contentparatitle'>Share this</h4>
                                  <div className='sharebutton'>
                                <FacebookShareButton url={data.link}><FacebookIcon/></FacebookShareButton>
                                <FacebookMessengerShareButton url={data.link} appId='611096880759273'><FacebookMessengerIcon/></FacebookMessengerShareButton>
                                <WhatsappShareButton url={data.link} title={data.title}><WhatsappIcon/></WhatsappShareButton>
                                <TwitterShareButton url={data.link} title={data.title} ><TwitterIcon/></TwitterShareButton>
                                <TelegramShareButton url={data.link} title={data.title}><TelegramIcon/></TelegramShareButton>
                                
                                


                                  </div>


                                </div>


        <hr/>

          </div>


        </div>

</div>

      </div>
      
        
       
    ))}
      
      <hr className='text-muted'/>

   <div className='col-md-12'>
                        <div className='pagination mt-3 d-flex justify-content-center mt-3 align-items-center'>
                <Pagination
                     postsPerPage={postsPerPage}
                      totalPosts={Data.length}
                      paginate={paginate}
                  />

                </div>

                        </div>
                        <hr className='text-muted' />
                     
      

     
      </div>

       
    </>
  )
}


export default National


export async function getServerSideProps(context) {
    const {params} = context
    const {National} = params 
    const res = await axios({
      method: 'GET',
      url: 'https://newscatcher.p.rapidapi.com/v1/search',
      params: {
        q: `${National}`,
        lang: 'en',
        sort_by: 'date',
        country: 'BD',
        sources: 'dhakatribune.com,thedailystar.net,tbsnews.net,newagebd.net,thefinancialexpress.com.bd,daily-sun.com,observerbd.com,bdnews24.com,business-standard.com,risingbd.com,prothomalo.com,dhakapost.com',
        
        media: 'True'
      },
      headers: {
        'X-RapidAPI-Key': '35e963e80bmsh91a17eb329bdacap11ef20jsn978398e6e697',
        'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
      }
  
      })
      
      const data = res.data.articles;
      
    return {
      props: {Data : data, National},
    }
  }


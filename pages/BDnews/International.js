import {useState,useEffect} from 'react';
import { useResultContext } from '../../Contexts/ResultContextProvider';
import axios from 'axios';
import moment from 'moment';
import { useRouter } from 'next/dist/client/router';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Pagination from '../../components/Pagination';
import Head from 'next/head';
import Summary from '../../components/Summary';
import LoAding from '../../components/LoAding';




const International = ({Data}) => {

    const {bdNewsData,setBdNewsData,setDirectsumInput,directsumInput,Loading,directSumData,setDirectSumData,clear} = useResultContext();
    setBdNewsData(Data);
    console.log(directSumData)
    const router = useRouter()

    const [ load,setLoad ] = useState(false);
    useEffect(()=>{
        if(clear){
          setDirectSumData(null)
        }
    },[clear])
   
 
    {/* Pagination algo*/}
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(10);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const paginatedData = bdNewsData.slice(indexOfFirstPost, indexOfLastPost);

const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <>
       <Head>
      <title>BD News || International </title>
      <meta name="description" content="Get the latest news of Bangladesh from the reputed News Journals around the world and summarize them in seconds with our summarizer tool.."/>
      <meta name="keywords" content="news bd 24,news for bangladesh,Bangladesh news, Bangla News,BD News,NewsBd,bangladesh english news, bangladesh english newspaper,english newspaper bangladesh,summary,summarize news,all bangladesh english news,bangladesh international news"/>
      <meta name="author" content="Nuren Shams Chowdhury"/>
      </Head>
       <div className='row  '>
        <div className=' '> 
        <div className=''>
          <h2 className='mainpagetitle d-flex m-3 justify-content-center align-items-center'>
            News Of Bangladesh In International Media
          </h2>
        </div>
        </div>
      </div>
      
      <div className=''>
     
      
        
      </div>
   

        
        <div>
        {
                      paginatedData?.map((data)=>(
                        <div className='contentcard col-12' key={data.title}>
                          <div className='content '>
                            <div className='col-md-12  d-md-flex '>
                            <div className='col-md-4 col-12 d-md-flex justify-content-center align-items-center'>
                            <img className='image rounded' src={data.urlToImage}  alt={data.title}  />

                            </div>
                            <div className='col-md-8 col-12'>
                            <div className='maincontent'>
                                <div >
                                <h4 className='contenttitle mb-2 d-flex justify-content-center align-items-center'>{data.title}</h4>
                                <p className='contentpara'>{data.description}. . . . .</p>
                               

                                </div>
                                
    
                                {
                              
                                  <div className='bdIntSource'>
                                    <div className='contentparatitle d-md-flex d-flex justify-content-center align-items-center'>
                                    <p className='contentparatitle'> {moment(data.publishedAt).fromNow()} by </p>
                                  
                                    </div>
                                    
                                    <div className='d-md-flex d-flex justify-content-center align-items-center'>
                                        <p>{data?.source.name}</p>
                                    </div>

                                  </div>
                                    
                                    
                                }

                            </div>
                    
                            <div className='row contentbutton'>
                                      
                                  
                                      
                                 
                              <div className=' d-block d-md-flex justify-content-center'>
                              <a target="_blank" rel="noreferrer" className=' btn btn-light button m-3' href={data.url}>Read Full News</a>
                               <a className='btn btn-light m-3 button'  onClick={()=> {setDirectsumInput(data.url) }}>Summarize</a>
                               <CopyToClipboard text={data.urlToImage} >
                                       
                                       <a href='/EditImage/Editor' className='btn btn-light m-3 button'>Copy image Link</a>
                                                                           </CopyToClipboard>

                              </div>
                               </div>
                           
                              






                            </div>

                            </div>
                           
                            
                          
                           
                               
                            
                          <hr className='text-muted'/>
                
                
                            

                          </div>
                            

                        </div>
                         
                        ))}
                         {
      Loading ? <h1 className='modu'><LoAding/></h1> : <div></div>
     }
      
                            {
          directSumData && <Summary directSumData={directSumData} /> 
        }
       
                        <div className='mt-3'>
                        <div className='pagination  d-flex flex-wrap justify-content-center alig-items-center'>
                                  <Pagination
                                          postsPerPage={postsPerPage}
                                         totalPosts={bdNewsData.length}
                                           paginate={paginate}
                                    />

                </div>

                        </div>
                        
                        
        </div>
    </>
  )
}

export default International;






export async function getServerSideProps(context) {
 
    const Res = await axios('https://newsapi.org/v2/everything?q=Bangladesh&language=en&searchIn=title&excludeDomains=dhakatribune.com,thedailystar.net,tbsnews.net,newagebd.net,thefinancialexpress.com.bd,daily-sun.com,observerbd.com,bdnews24.com,business-standard.com,risingbd.com,prothomalo.com,sylhetmirror.com,newsnextbd.com&sortBy=publishedAt&apiKey=e61b96af15684d79b5b13f0a12b6ec0c')
      const data = Res.data.articles;
    return {
      props: {Data : data},
    }
  }
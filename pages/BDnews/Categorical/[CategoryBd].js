import {useEffect, useState} from 'react';
import axios from 'axios';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useResultContext } from '../../../Contexts/ResultContextProvider';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {FaAngleDown} from 'react-icons/fa';
import { IconContext } from "react-icons";
import Head from 'next/head';
import Pagination from '../../../components/Pagination';
import Summary from '../../../components/Summary';
import LoAding from '../../../components/LoAding';







const Category= ({Data,CategoryBd}) => {
    const {bdNewsDataCat, setBdNewsDataCat,setCopied,setSumText,setDirectsumInput,directSumData,setDirectSumData,clear,Loading} = useResultContext();
    const [bdCat,setBdCat] = useState('news');
    const [passData,setPassData] = useState('');
    
   
    const router = useRouter();
    const handleSubmit = (e) => {
      e.preventDefault();
      router.push(`/BDnews/Categorical/${bdCat}`);

    }
    const handleCopy = () => {
      
      router.push('/Summarize')
      
    }
    
   useEffect(() => {
  
      setSumText(passData)
    
   },[passData])
  
   useEffect(()=>{
    if(clear){
      setDirectSumData(null)
    }
},[clear])

    

    setBdNewsDataCat(Data);


     {/* Pagination algo*/}
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(8);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const paginatedData = bdNewsDataCat.slice(indexOfFirstPost, indexOfLastPost);

const paginate = pageNumber => setCurrentPage(pageNumber);
    
  return (
    <div className='maindiv'>
      <Head>
      <title>BD News || Categorical </title>
      <meta name="description" content="Get category wise News Of Bangladesh from the reputed English Newspaper of the country and summarize them in seconds with our summarizer tool..."/>
      <meta name="keywords" content="Bangladesh news, Bangla News,BD News,NewsBd,bangladesh english news, bangladesh english newspaper,english newspaper bangladesh,summary,summarize news,all bangladesh english news"/>
      <meta name="author" content="Nuren Shams Chowdhury"/>
      </Head>
      
      <div className='selectSticky'>
      <div className='row '>
        <div className=' col-md-12'> 
        <div className=''>
          <h2 className='mainpagetitle d-flex justify-content-center align-items-center'>
             English News From Bangladesh National Media 

          </h2>
        </div>
        </div>
      </div>
      
      <div className='select rounded'>
      <div className='row'>
            <div className='col-md-12'>
      <div className='b-block'>
        <div className='m-2'>
        
        <h6 className='selecttitle d-flex justify-content-center align-items-center mb-4 mt-2 '>Change the category to see top news of that category</h6>
        <form className='  d-flex justify-content-center align-items-center' onSubmit={handleSubmit}>
            <label >
               <div className='optiontitle mb-3 '>Select the category   <IconContext.Provider value={{className:"fa-bounce"}}> <FaAngleDown/></IconContext.Provider> </div> 
            <select className='rounded option' value={bdCat} onChange={(e) => setBdCat(e.target.value)}>
            <option value='news'>News </option>
            
            <option value="politics">Politics</option>
            <option value='business'>Business</option>
            <option value='finance'>Finance</option>
            <option value='economics'>Economics</option>
            <option value="entertainment">Entertainment</option>
            <option value='sport'>Sports</option>
            <option value="music">Music</option>
            <option value='beauty'>Fashion</option>
            <option value='travel'>travel</option>
            <option value='food'>Food</option>
            <option value='science'>Science</option>

            {/* news, sport, tech, world, finance, politics, business, economics, entertainment,beauty,travel,music,food,science */}
           
          </select>
          <button className='selectbutton btn btn-light ' type='submit'>Submit</button>
          </label>
          </form>

        </div>
        
          </div>
      </div>
      
            </div>
      </div>
      

      </div>
     

      <div className=''>
      <div className='pagenamecard rounded'>
        <p className='d-flex justify-content-center align-items-center pagenametitle'>Current Category</p>
        <div className=''>
        <div className='d-flex justify-content-center align-items-center'>

        <h1 className='pagename'>{CategoryBd.toUpperCase()}</h1>
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
       
      
     
      <div className=''>
        <div className='row'>
          <div className=''>
          {
    paginatedData?.map((data)=>(
      <div key={data.title} className='contentcard rounded col-12'>
        <div  className='row col-md-12 '>
        <div className='col-md-4 col-12'>
          
          <img className='rounded image' src={data.media} alt={data.title}/>

        </div>
        <div className='col-md-8 '>
        <div className='col-12 maincontent'>
          <h3 className='contenttitle mb-2 d-flex justify-content-center align-items-center'>{data.title}</h3>
          
          <div><h4 className='contentparatitle'>Summary :</h4><p className='contentpara m-1'> {data.summary}</p></div>

          <div className='d-block m-5'>
            <h5 className='m-2 contentparatitle  d-flex justify-content-center align-items-center time' >{moment(data.published_date).fromNow()}</h5> 
            <div className=' d-flex justify-content-center align-items-center'>
            <h6 >by </h6>

            </div>
            <div className='d-flex justify-content-center align-items-center'>
            <p className='sourcename'>{data.rights}</p>
            </div>
          </div>
           
           <div className='contentbutton'>
           <div className='row'>
                                      
                                     
                                      <div className='  d-block d-md-flex justify-content-center'>
                            <a target="_blank" rel="noreferrer" className='button btn btn-light m-3' href={data.link}>Read Full News</a>
                             <a className='button btn btn-light m-3' onClick={()=> {setDirectsumInput(data.link)}}>Summarize</a>
                             <CopyToClipboard text={data.media} >
                                     
                                     <a href='/EditImage/Editor' className=' button btn btn-light m-3'>Copy Image Link</a>
                                                                         </CopyToClipboard>


                            </div>
                                
                                    
                               
                            
                             </div>

           </div>

          </div>


        </div>

</div>

      </div>
      
        
       
    ))}
          </div>
         
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
                     
        </div>
      </div>
      
    </div>
  )
}

export default Category


export async function getServerSideProps(context) {
    const {params} = context;
    const {CategoryBd} = params;
    const res =await axios({
        method: 'GET',
        url: 'https://newscatcher.p.rapidapi.com/v1/search',
        params: {
          q: 'Bangladesh News',
          lang: 'en',
          sort_by: 'date',
          country: 'BD',
          topic: `${CategoryBd}`,
          media: 'True'
        },
        headers: {
          'X-RapidAPI-Key': '0ea5875e08msh2ec564c6381f6e8p10c302jsn3dbc1337386d',
          'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
        }

    })
    const Data = res.data.articles;
    return{
        props : {Data ,CategoryBd},

    }
}
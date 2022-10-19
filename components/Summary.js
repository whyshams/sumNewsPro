
import { useResultContext } from '../Contexts/ResultContextProvider';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import Link from 'next/link';
import {FacebookShareButton,FacebookIcon,FacebookMessengerShareButton,FacebookMessengerIcon,WhatsappShareButton,WhatsappIcon,TwitterShareButton,TwitterIcon,TelegramShareButton,TelegramIcon} from 'react-share';

const Summary = ({directSumData}) => {

  const {clear,setClear} = useResultContext();
  return (
    <div>
                
      
                {
                  directSumData ? <div className='modu'>
                    
                  <div className=' col-md-12'>
                        
                      
                      <div className='d-block contentcard'>
                    <button className='btn btn-light p-2 mb-4 button' onClick={() => {setClear(true)}}>Close</button>

                        <div className='maincontent'>
                        <h2 className='contentitle d-flex justify-content-center align-items-center'>{directSumData.article_title}</h2>
                        <div className='m-2 d-flex justify-content-center align-items-center'>
                          <img className='sumimage rounded' src={directSumData.article_image} alt={directSumData.article_title}/>
                        </div>
                        <CopyToClipboard text={directSumData.article_image} >
                                       <div className='d-flex justify-content-center align-items-center'>
                                       <div className='btn btn-light p-2 m-3 '><Link href='/EditImage/Editor' >Copy image Link</Link></div>
                                       </div>
                         </CopyToClipboard>
                        <div className=' summary justify-content-center align-items-center'>
                        <h4 className='contentparatitle d-flex justify-content-center align-items-center'>Summary : </h4>

                        {
                      directSumData?.summary.map(dat => (
                        <div key={dat}>
                        <p className='summary2 d-flex justify-content-center align-items-center'>{dat}</p>

                        </div>
                      ))
                    }

                        </div>
                        <div className='col-md-12'>
                                  <h4 className='contentparatitle'>Share this</h4>
                                  <div className='sharebutton'>
                                <FacebookShareButton url={directSumData.article_url}><FacebookIcon/></FacebookShareButton>
                                <FacebookMessengerShareButton url={directSumData.article_url} appId='611096880759273'><FacebookMessengerIcon/></FacebookMessengerShareButton>
                                <WhatsappShareButton url={directSumData.article_url} title={directSumData.article_title}><WhatsappIcon/></WhatsappShareButton>
                                <TwitterShareButton url={directSumData.article_url} title={directSumData.article_title} ><TwitterIcon/></TwitterShareButton>
                                <TelegramShareButton url={directSumData.article_url} title={directSumData.article_title}><TelegramIcon/></TelegramShareButton>
                                
                                


                                  </div>


                                </div>


                        </div>
                       
                      </div>
                      

                    </div>
                    
                    
                  </div> :<div>
                  <button className='btn btn-danger p-2' onClick={() => {setClear(true)}}></button>

                    <h1 className='modu'>
                    Loading...

                    </h1>
                      </div>
                }

    </div>
  )
}

export default Summary
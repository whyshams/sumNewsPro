import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
          
      <Head>
        <title>sumNews</title>
        <meta name="description" content="SumNews is a powerful online news aggregator that brings together the best stories from around the web and lets you summarize them in seconds. Read more about what makes SumNews different from other news sites of Bangladesh!" />
        <meta name='title' content="SumNews is the most powerful news aggregator in Bangladesh. It's an online tool that allows you to search for, read, share, and summarize the latest headlines from over 1,000 sources across the web."/>
        <meta name='keywords' content='news aggregator,summarize news bangladesh, get news, find news, short news, news digest,bangladesh news, bangladesh news digest, bangladesh news, global news, bangladesh international news, bangladesh divisional news, বাংলা সংবাদ'/>
      </Head>
      <div className='fullscreen row '>
        
        <div className="col-md-12">
        <div className="d-flex justify-content-center align-items-center">
            <h4 className="mainpagetitle">
                    READ
              </h4>

            </div>
        </div>
        <div className="col-md-12">
        <div className="d-flex justify-content-center align-items-center">
            <h4 className="mainpagetitle">
                    SUMMARIZE
              </h4>

            </div>
        </div>
        <div className="col-md-12">
        <div className="d-flex justify-content-center align-items-center">
            <h4 className="mainpagetitle">
                    CREATE
              </h4>

            </div>
        </div>
        <div className="col-md-12">
          <div className="text-center">
            <div className="d-flex justify-content-center align-items-center">
            <h4 className="contenttitle ">
                    AND
              </h4>

            </div>
             
            <div className="d-flex justify-content-center align-items-center">
            <h4 className="mainpagetitle">
                    SHARE
              </h4>

            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

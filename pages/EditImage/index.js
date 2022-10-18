import React from 'react';
import Link from 'next/link';

const EditorMenu = () => {
  return (
    <div>
        <div className='row '>
        <div className=' col-md-12'> 
        <div className=''>
          <h2 className='mainpagetitle d-flex justify-content-center align-items-center'>
             GRAPHIC DESIGNING APP

          </h2>
        </div>
        </div>
      </div>
       <div className= 'fullscreen contentcard d-flex justify-content-center align-items-center'>
    
    <div className='editormenu'>
<Link href="/EditImage/Upload">
<nav className='btn m-3 btn-light button p-3 '>
 Upload or Drag and Drop Image to edit
</nav>
</Link>
<h1 className='text-center m-3'>OR</h1>
<Link href="/EditImage/Editor">
<nav className='btn btn-light m-3 p-3 button'>
 Paste Image Link to edit that image
</nav>
</Link>

</div>
</div>

    </div>
   
  )
}

export default EditorMenu
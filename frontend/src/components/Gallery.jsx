import React from 'react'

function Gallery() {
  const gallery=[
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img7.jpg",
    "/img4.jpg",
    "/img8.jpg",
    "/img6.jpg",
    "/img5.jpg",
  ];
  return (
    <section className='gallery'>
      <h1>Better Beats Best</h1>
      <div className="images">
        
    
      <div>
        {
          gallery.slice(0,3).map((item,index)=>(
            <img key={index} src={item} alt="galleryimage" />
          ))
        }
      </div>
      <div>
        {
          gallery.slice(3,6).map((item,index)=>(
            <img key={index} src={item} alt="galleryimage" />
          ))
        }
      </div>
      <div>
        {
          gallery.slice(6,9).map((item,index)=>(
            <img key={index} src={item} alt="galleryimage" />
          ))
        }
      </div>
      </div>
    </section>
  )
}

export default Gallery
import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image4 from '../../../assets/images/banner/4.jpg'
import image5 from '../../../assets/images/banner/5.jpg'
import image6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">

      {/* first silde  */}
      <div id="slide1" className="carousel-item relative w-full ">


        {/* overlay and text  */}
        <div className="absolute left-0 top-0 w-full h-full text-white bg-gradient-to-r from-black/70 rounded-lg">
          <div className='w-1/3 absolute left-6 transform translate-y-1/2 mt-24 space-y-4 text-left'>
            <h2 className='text-5xl font-bold'>Affordable Price For Car Servicing</h2>
            <p className='text-xl font-normal'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='space-x-5'>
              <button href="#slide4" className="btn btn-success">Discover More</button>

              <button href="#slide2" className="btn btn-outline btn-info">Latest Project</button>
            </div>
          </div>
        </div>

        {/* slide button  */}
        <img src={image1} className="w-full  rounded-lg" />
        <div className="absolute flex transform space-x-3 right-16 bottom-20">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>

      </div>


      {/* slide 2  */}
      <div id="slide2" className="carousel-item relative w-full">

        
        {/* overlay and text  */}
        <div className="absolute left-0 top-0 w-full h-full text-white bg-gradient-to-r from-black/70 rounded-lg">
          <div className='w-1/3 absolute left-6 transform translate-y-1/2 mt-24 space-y-4 text-left'>
            <h2 className='text-5xl font-bold'>Affordable Price For Car Servicing</h2>
            <p className='text-xl font-normal'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='space-x-5'>
              <button href="#slide4" className="btn btn-success">Discover More</button>

              <button href="#slide2" className="btn btn-outline btn-info">Latest Project</button>
            </div>
          </div>
        </div>

        {/* slide button  */}
  

        <img src={image2} className="w-full rounded-lg" />
        <div className="absolute flex transform space-x-3 right-16 bottom-20">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* slide 3  */}
      <div id="slide3" className="carousel-item relative w-full">

        
        {/* overlay and text  */}
        <div className="absolute left-0 top-0 w-full h-full text-white bg-gradient-to-r from-black/70 rounded-lg">
          <div className='w-1/3 absolute left-6 transform translate-y-1/2 mt-24 space-y-4 text-left'>
            <h2 className='text-5xl font-bold'>Affordable Price For Car Servicing</h2>
            <p className='text-xl font-normal'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='space-x-5'>
              <button href="#slide4" className="btn btn-success">Discover More</button>

              <button href="#slide2" className="btn btn-outline btn-info">Latest Project</button>
            </div>
          </div>
        </div>

        {/* slide button  */}
        <img src={image3} className="w-full rounded-lg" />
        <div className="absolute flex transform space-x-3 right-16 bottom-20">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>


      {/* slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">

        
        {/* overlay and text  */}
        <div className="absolute left-0 top-0 w-full h-full text-white bg-gradient-to-r from-black/70 rounded-lg">
          <div className='w-1/3 absolute left-6 transform translate-y-1/2 mt-24 space-y-4 text-left'>
            <h2 className='text-5xl font-bold'>Affordable Price For Car Servicing</h2>
            <p className='text-xl font-normal'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='space-x-5'>
              <button href="#slide4" className="btn btn-success">Discover More</button>

              <button href="#slide2" className="btn btn-outline btn-info">Latest Project</button>
            </div>
          </div>
        </div>

        {/* slide button  */}
        <img src={image4} className="w-full rounded-lg" />
        <div className="absolute flex transform space-x-3 right-16 bottom-20">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image4 from '../../../assets/images/banner/4.jpg'
import image5 from '../../../assets/images/banner/5.jpg'
import image6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={image1} className="w-full" />
    <div className='w-full h-full bg-gray-500'></div>
    <div className="absolute flex transform space-x-3 right-16 bottom-20">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute left-16 top-1/3 text-left text-white space-y-3 w-2/6">
        <h2 className='text-5xl font-bold'>Affordable Price For Car Servicing</h2>
        <p className='text-xl font-normal'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div className='space-x-5'>
      <button href="#slide4" className="btn btn-success">Discover More</button>
      
      <button href="#slide2" className="btn btn-outline btn-info">Latest Project</button>
      </div>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={image2} className="w-full" />
    <div className="absolute flex transform space-x-3 right-16 bottom-20">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={image3} className="w-full" />
    <div className="absolute flex transform space-x-3 right-16 bottom-20">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={image4} className="w-full" />
    <div className="absolute flex transform space-x-3 right-16 bottom-20">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;
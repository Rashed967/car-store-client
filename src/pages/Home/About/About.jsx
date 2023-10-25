import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>

                <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                <img  src={parts} className="absolute right-0 -bottom-16 border-4 border-white  w-1/2 rounded-md shadow-2xl" />

                </div>
                <div className='lg:w-1/2 text-left'>
                    <h4 className="text-base text-red-700 font-weight font-bold">About Us</h4>
                    <h1 className="mt-4  text-3xl font-bold w-2/3">We are qualified & of experience in this field</h1>
                    <div className='mt-5 space-y-6 mb-8'>
                    <p className='leading-7'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    </div>
                    <button className="btn btn-error">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;
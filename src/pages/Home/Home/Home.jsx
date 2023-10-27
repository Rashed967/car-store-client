
import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactArea from '../ContactArea/ContactArea';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Team from './Team/Team';
import WhyChoosUs from './WhyChoosUs/WhyChoosUs';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <ContactArea />
            <Products />
            <Team />
            <WhyChoosUs />
        </div>
    );
};

export default Home;
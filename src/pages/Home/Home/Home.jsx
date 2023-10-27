
import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactArea from '../ContactArea/ContactArea';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <ContactArea />
            <Products />
        </div>
    );
};

export default Home;
import AboutUs from "./components/AboutUs/AboutUs";
import Banner from "./components/Banner/Banner";
import Booking from "./components/Booking/Booking";
import Causway from "./components/Casuway/Causway";
import Customer from "./components/Customers/Customer";
import FixedIcons from "./components/FixedIcons/FixedIcons";
import Footer from "./components/Footer/Footer";
import Location from "./components/Location/Location";
import Nav from "./components/Nav/Nav";
import NavSlider from "./components/NavSlider/NavSlider";
import PriceBeat from "./components/PriceBeat.js/PriceBeat";
import SpecialOffer from "./components/SpecialOffer/SpecialOffer";
import Testimonial from "./components/Testimonial/Testimonial";
import { useCausWayContext } from "./context/CauswayContextProvider";

function App() {
  const {navStatus} = useCausWayContext()

  return (
    <div className="App">
          <Nav />
          <Banner />
          <Causway />
          <Booking />
          <SpecialOffer />
          <PriceBeat />
          <AboutUs />
          <Testimonial />
          <Customer />
          <Location />
          <Footer />
          {navStatus && <NavSlider />}
          <FixedIcons />
    </div>
  );
}

export default App;

import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";
import RecentWorks from "./components/RecentWorks";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <OurServices />
      <RecentWorks />
      <Footer />
    </div>
  );
}

export default App;

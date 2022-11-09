import "./App.css";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import Footer from "./component/Footer";
import Section7 from "./component/Section7";
import Section6 from "./component/Section6";
import BlogList from "./component/BlogList";
import Category from "./component/Category";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Category />
      <BlogList />
      <Section6 />
      <Section7 />
      <Footer />
    </div>
  );
}

export default App;

import Header from "./components/header";
import AppBar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Join from "./components/Join";
import GalleryComponent from "./components/Gallery";
import AcheivementCard from "./components/Acheivement";
import Achievements from "./components/Celebration";
import TestimonialsComponent from "./components/Testinomials";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <AppBar />
      <Home />
      <Courses />
      <Join />
      <GalleryComponent />
      <AcheivementCard />
      <Achievements />
      <TestimonialsComponent/>
      <Footer/>
    </>
  );
}

export default App;

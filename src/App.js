import logo from './logo.svg';
import Navbar from './components/Navbar'
import Masthead from './components/Masthead'
import Portfolio from './components/PortfolioSection'
import About from './components/About'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Masthead />
      </header>
      <div>
        <About />
        <Portfolio />
        <Blogs />
        <Contact />
        <Footer />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
      {/* <!-- Copyright Section--> */}
        <div class="copyright py-4 text-center text-white">
            <div class="container"><small>Copyright © Your Website 2020</small></div>
        </div>
      {/* <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)--> */}
        <div class="scroll-to-top d-lg-none position-fixed">
            <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i class="fa fa-chevron-up"></i></a>
        </div>
    </div>
  );
}

export default App;

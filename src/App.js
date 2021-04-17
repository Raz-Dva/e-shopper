// import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import HeaderBanner from './Header/Header-banner'
import LeftSide from './Main/Left-side'
import Main from './Main/Main'
import Footer from './Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className="row">
            {/* <HeaderBanner />
            <LeftSide />
            <Main /> */}

          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </>
  );
}

export default App;

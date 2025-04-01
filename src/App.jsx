import {useRoutes} from 'react-router-dom';
import Navigation from "./components/Navigation";
import Footer from "./components/footer/Footer";

import "./App.css";
import Home from './pages/Home';
import Destinations from './pages/destinations/Destinations';
import Zakynthos from './pages/zakynthos/Zakynthos';
import Norway from './pages/norway/Norway';
import Crete from './pages/crete/Crete';
import Australia from './pages/australia/Australia';
import TravelTips from './pages/TravelTips/TravelTips';
import Support from './pages/support/Support';
import About from './pages/about/About';

const App = () => {
  // Define routes using `useRoutes`
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "destinations", element: <Destinations /> },
    { path: "zakynthos", element: <Zakynthos /> },
    { path: "norway", element: <Norway /> },
    { path: "crete", element: <Crete /> },
    { path: "australia", element: <Australia /> },
    { path: "TravelTips", element: <TravelTips /> },
    { path: "support", element: <Support /> },
    { path: "about", element: <About />},
  ]);

  return (
    <>
      <Navigation />
      <div className="app">
        {/* Render routes */}
        <div className="content">{routes}</div>
      </div>
      <Footer />
    </>
  );
};

export default App;
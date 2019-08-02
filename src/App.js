import React from 'react';
import Header from './Components/Header';
import Showcase from './Components/Showcase';
import Footer from './Components/Footer';

function App() {
  const bkgnd_img_url = require('./Assets/back.jpg');
  const backgroundStyle = {
    backgroundImage: `url(${bkgnd_img_url})`,
    backgroundSize: 'cover',
  };
  return (
    <div className="App"  style={backgroundStyle}>
      <Header />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;

import Navbar from './Components/Navbar';
import React from 'react';
import image from './styles/desktop-1920x1080.jpg'

function App() {
  return (
    <React.Fragment>

      <Navbar />
      <img src={image} height={590} width={1315} />
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Nav />
      {routes}
      <Footer />
    </div>
  );
}

export default App;

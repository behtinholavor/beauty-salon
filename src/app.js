import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Routes from './routes';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Component as Navbar } from './components/navbar/Navbar'
import Header from './components/header/Header';
import AboutMe from './components/about/AboutMe';
import Experience from './components/experience/Experience';

function App() {
  return (
   <>
   <Router>
   <Navbar />
    <Routes>
      <Route path='/' element={ <>
      <Header />
      <Experience />
      <AboutMe />
      </>}  />

    </Routes>
   </Router>
   
   </>
  );
}

export default App;

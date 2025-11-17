import './App.css'
import Layout from './components/layout/Layout'
import LocomotiveScroll from 'locomotive-scroll';
import Lenis from 'lenis'
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    new LocomotiveScroll();
  }, []);

  new Lenis({
    autoRaf: true,
  });
  return (
    <>
      <Layout />
    </>
  )
}

export default App

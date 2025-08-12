import { useEffect, Suspense } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Loading from './components/Loading/Loading';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './styles/global.css';

function App() {
  useEffect(() => {
    // Smooth scrolling offset for fixed header
    const style = document.createElement('style');
    style.innerHTML = `
      html {
        scroll-padding-top: 80px;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Suspense fallback={<Loading />}>
          <Header />
          <main>
            <About />
            <Projects />
            <Contact />
          </main>
          <ScrollToTop />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}
export default App;
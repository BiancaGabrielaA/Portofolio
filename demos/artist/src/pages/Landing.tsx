import '../styles/landing.css'
import portrait from '../assets/landing-portrait.png';
import vinyl from '../assets/vinyl.svg';
import Footer from '../components/Footer';


export default function Landing() {
  return (
    <div className="container py-5" > 
      {/* Spotlight effect */}
      <div className="position-absolute top-0 start-0 w-100 h-100" />

      {/* 3 columns in a row */}
      <div className="row align-items-center text-center">
        
        {/* Column 1: Texts */}
        <div className="col-md-4 mb-4 mb-md-0">
          <p className="title-main">The Genius Returns</p>
          <p className="title-sub">Wolfgang Amadeus Mozart - Reinvented</p>
        </div>

        {/* Column 2: Portrait */}
        <div className="col-md-4 mb-4 mb-md-0">
          <img src={portrait} alt="Mozart Portrait" width="700px" height="900px" />
        </div>

        {/* Column 3: Vinyl */}
        <div className="col-md-4 mt-5 ps-md-5 ps-5">
          <img src={vinyl} alt="Vinyl" width="300px" className="img-fluid spin-slow" style={{ filter: 'sepia(0.5)', border: '2px dashed var(--gold)', borderRadius: '50%', padding: '0.5rem' }} />
        </div>
      </div>
      <Footer/>
    </div>

  );
}

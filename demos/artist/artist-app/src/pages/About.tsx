// Modern spin on a bio: “Mozart, the 18th-century prodigy reimagined.”

// Highlights of his life, but with bold visuals and modern typography.
import mozartImg from '../assets/about-pic.jpg'

export default function About () {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <p className='fs-4'>
                    Wolfgang Amadeus Mozart wasn’t just a composer — he was a revolution. 
                    By the age of five, he was writing symphonies and performing for emperors. 
                    His genius was intuitive, raw, and electric.
                     In an era of powdered wigs and candlelit concert halls, Mozart brought fire and flair, blending structure with emotion.
                    </p>
                </div>
                <div className="col-md-4">
                    <p className='fs-4'>
                    His catalog spans over 600 works — operas, concertos, chamber pieces — each dripping with innovation and heart. 
                    He could write a haunting requiem and a cheeky comic opera in the same breath. 
                    His music still pulses through pop culture, films, and TikTok trends — proof that timeless art knows no bounds.
                    </p>
                </div>
                <div className="col-md-4">
                    <img src={mozartImg} alt="Modern Mozart" className="img-fluid rounded shadow" />
                </div>
            </div>
        </div>
    )
}
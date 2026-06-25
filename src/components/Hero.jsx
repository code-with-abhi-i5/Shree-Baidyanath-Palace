import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { HERO_CONTENT } from '../data/content';
import IMAGES from '../data/images';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const TITLE_WORDS = "Celebrate Life's Most Beautiful Moments in Luxury".split(' ');
const TYPING_PHRASES = ['Dream Weddings', 'Luxury Stays', 'Grand Anniversaries', 'Corporate Events'];

export default function Hero() {
  const container = useRef(null);
  const [currentBg, setCurrentBg] = useState(0);

  // Typing Effect State
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Background Image Slider
  useEffect(() => {
    if (!Array.isArray(IMAGES.hero)) return;
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % IMAGES.hero.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Typing Effect Logic
  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];
    const typeSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex]);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.from('.hero-badge', { y: 30, autoAlpha: 0, duration: 0.8, delay: 0.3 })
      .to('.hero-title-word', { y: 0, autoAlpha: 1, duration: 1, stagger: 0.1 }, '-=0.4')
      .from('.hero-subtitle', { y: 40, autoAlpha: 0, duration: 0.8 }, '-=0.5')
      .from('.hero-buttons .btn', { y: 30, autoAlpha: 0, duration: 0.6, stagger: 0.15 }, '-=0.4')
      .from('.hero-scroll', { autoAlpha: 0, duration: 0.6 }, '-=0.2');

    // Fade out hero content on scroll
    gsap.to('.hero-content', {
      y: -60,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: container.current,
        start: '30% top',
        end: '60% top',
        scrub: 1,
      },
    });
  }, { scope: container });

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  const bgImages = Array.isArray(IMAGES.hero) ? IMAGES.hero : [IMAGES.hero];

  return (
    <section className="hero" id="home" ref={container}>
      <div className="hero-bg">
        {bgImages.map((src, index) => (
          <img
            key={index}
            className={`hero-bg-image ${index === currentBg ? 'active' : ''}`}
            src={src}
            alt="Baidyanath Luxury Resort"
          />
        ))}
        <div className="hero-overlay" />

        {/* Magical CSS Particles */}
        <div className="hero-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Welcome to Baidyanath
        </div>

        <h1 className="hero-title">
          {TITLE_WORDS.map((word, index) => (
            <span key={index} className="word-wrap">
              <span className="hero-title-word">
                {word === 'Beautiful' || word === 'Moments' ? (
                  <span className="hero-title-accent">{word}</span>
                ) : (
                  word
                )}
                &nbsp;
              </span>
            </span>
          ))}
        </h1>

        <p className="hero-subtitle">
          Celebrate your <span className="typing-text">{typedText}</span><span className="typing-cursor">|</span>
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary" id="hero-cta-book">
            {HERO_CONTENT.cta1}
          </button>
          <button className="btn btn-outline" id="hero-cta-explore">
            {HERO_CONTENT.cta2}
          </button>
        </div>
      </div>

      <div className="hero-scroll" onClick={scrollToNext} role="button" tabIndex={0} aria-label="Scroll down">
        <span className="hero-scroll-text">Scroll</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  );
}

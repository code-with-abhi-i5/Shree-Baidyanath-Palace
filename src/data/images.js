import hero1 from '../assets/hero section/hero 1.png';
import hero2 from '../assets/hero section/hero 2.png';
import bestImage from '../assets/best image/image.png';
import parkImage from '../assets/park/image.png';
import hallImage from '../assets/hall image/image.png';
import roomImage1 from '../assets/Room image/image.png';
import roomImage2 from '../assets/Room image/image copy.png';
import roomImage3 from '../assets/Room image/image copy 2.png';
import roomImage4 from '../assets/Room image/image copy 3.png';
import roomImage5 from '../assets/Room image/image copy 4.png';
import roomImage6 from '../assets/Room image/image copy 5.png';
import roomImage7 from '../assets/Room image/image copy 6.png';
import roomImage8 from '../assets/Room image/image copy 7.png';
import roomImage9 from '../assets/Room image/image copy 8.png';
import gardenImage1 from '../assets/gardan image/image.png';
import gardenImage2 from '../assets/gardan image/image copy.png';
import gardenImage3 from '../assets/gardan image/image copy 2.png';
import gardenImage4 from '../assets/gardan image/image copy 3.png';
import gardenImage5 from '../assets/gardan image/image copy 4.png';

// Centralized image URLs
const IMAGES = {
  hero: [hero1, hero2],
  heroVideo: null, // Add video URL here if available

  exterior: [
    bestImage,
    parkImage,
  ],

  about: hallImage,
  aboutSlider: [hallImage, bestImage],

  halls: {
    grand: hallImage,
    royal: hallImage,
    celebration: hallImage,
  },

  rooms: [
    roomImage1,
    roomImage2,
    roomImage3,
    roomImage4,
    roomImage5,
    roomImage6,
    roomImage7,
    roomImage8,
    roomImage9,
  ],

  weddings: [
  ],

  anniversary: [
  ],

  birthday: [
  ],

  dining: [
  ],

  pool: [
  ],

  garden: [
    gardenImage1,
    gardenImage2,
    gardenImage3,
    gardenImage4,
    gardenImage5,
    bestImage,
  ],

  park: [
    parkImage,
    bestImage,
  ],

  services: {
    wedding: roomImage4,
    anniversary: gardenImage1,
    birthday: gardenImage3,
    rooms: roomImage1,
    prewedding: gardenImage5,
    meetings: roomImage9,
    dj: roomImage8,
    photography: bestImage,
  },

  testimonials: [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  ],

  bookingCta: bestImage,
};

export default IMAGES;

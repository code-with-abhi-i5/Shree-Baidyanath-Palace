import IMAGES from './images';

// Centralized content data — easy to update or connect to CMS

export const RESORT_INFO = {
  name: 'Baidyanath Palace',
  tagline: 'Where Luxury Meets Celebration',
  phone: '+91 62028 43404',
  phone2: '+91 62062 88203',
  email: 'shreebaidyanathpalace@gmail.com',
  whatsapp: '+916202843404',
  address: '7P8F+734 Baidyanath Palace, NH 18, near Bala Petrol Pump, Uinala, Jharkhand 832101',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.3256391862897!2d86.72012777634065!3d22.26565124414852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d97e6e0ba4d27%3A0xbf1fb80b1ff7996e!2sShree%20Baidyanath%20Palace!5e0!3m2!1sen!2sin!4v1782298348619!5m2!1sen!2sin',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_CONTENT = {
  headline: "Celebrate Life's Most Beautiful Moments in Luxury",
  subheadline: 'From dream weddings and unforgettable anniversaries to birthday celebrations and luxury stays, experience timeless hospitality in a destination designed for memories.',
  cta1: 'Book Your Experience',
  cta2: 'Explore Packages',
};

export const ABOUT_CONTENT = {
  sectionTitle: 'Welcome to Baidyanath Palace',
  subtitle: 'A Legacy of Luxury & Celebration',
  paragraphs: [
    'Nestled amidst serene landscapes, Baidyanath Palace is where dreams take shape and memories are crafted with perfection. Our world-class facilities, combined with an unwavering commitment to excellence, create an experience that transcends ordinary hospitality.',
    'Whether you envision a grand wedding under the stars, an intimate anniversary dinner, or a vibrant birthday celebration, our dedicated team transforms your vision into a breathtaking reality. Every corner of our resort whispers elegance, and every moment is designed to be extraordinary.',
  ],
  features: [
    { icon: 'crown', title: 'Luxury Hospitality', desc: 'Five-star service with personalized attention to every detail' },
    { icon: 'leaf', title: 'Peaceful Surroundings', desc: 'Lush gardens and scenic landscapes for tranquil retreats' },
    { icon: 'sparkle', title: 'Bespoke Experiences', desc: 'Customized celebrations tailored to your unique vision' },
  ],
};

export const WHY_CHOOSE_US = [
  { icon: 'bed', title: 'Luxury Accommodation', desc: 'Elegantly designed rooms with premium amenities for the ultimate comfort' },
  { icon: 'calendar', title: 'Expert Event Planning', desc: 'Seasoned professionals who bring your dream celebrations to life' },
  { icon: 'mountain', title: 'Scenic Location', desc: 'Breathtaking views and serene surroundings for unforgettable moments' },
  { icon: 'tree', title: 'Open Garden', desc: 'Sprawling lush green lawns perfect for outdoor celebrations' },
  { icon: 'heart', title: 'Exceptional Service', desc: 'Warm, attentive hospitality that anticipates your every need' },
  { icon: 'building', title: 'Modern Facilities', desc: 'State-of-the-art venues equipped with the latest technology' },
];

export const SERVICES = [
  { id: 'wedding', title: 'Wedding Celebrations', desc: 'Create your fairy-tale wedding with our exquisite venues, custom décor, and flawless coordination that makes your special day truly magical.', cta: 'Plan Your Wedding' },
  { id: 'anniversary', title: 'Anniversary Events', desc: 'Celebrate your love story with elegantly crafted anniversary celebrations, from intimate dinners to grand parties.', cta: 'Celebrate Love' },
  { id: 'birthday', title: 'Birthday Parties', desc: 'From milestone birthdays to surprise celebrations, we create unforgettable birthday experiences for all ages.', cta: 'Plan a Party' },
  { id: 'rooms', title: 'Luxury Room Stay', desc: 'Retreat to our beautifully appointed rooms featuring premium linens, modern amenities, and breathtaking views.', cta: 'Book a Room' },
  { id: 'prewedding', title: 'Pre-Wedding Shoots', desc: 'Capture your love story against the stunning backdrop of our palace architecture and lush gardens.', cta: 'Book a Shoot' },
  { id: 'meetings', title: 'Corporate Meetings', desc: 'Professional venues equipped with AV facilities for conferences, offsites, and corporate retreats.', cta: 'Plan Meeting' },
  { id: 'dj', title: 'DJ & Entertainment', desc: 'Elevate your celebrations with top-tier DJ performances, live music, and entertainment that keeps the energy alive.', cta: 'Book Entertainment' },
  { id: 'photography', title: 'Photography Support', desc: 'Capture every precious moment with our professional photography and videography services.', cta: 'Learn More' },
];

export const HALLS = [
  {
    name: 'Grand Hall',
    capacity: '500+ Guests',
    image: 'grand',
    features: ['Magnificent Chandeliers', 'Premium Sound System', 'Customizable Lighting', 'Bridal Suite Access', 'Valet Parking'],
    desc: 'Our largest and most opulent venue, perfect for grand weddings and large-scale celebrations.',
  },
  {
    name: 'Royal Hall',
    capacity: '300 Guests',
    image: 'royal',
    features: ['Elegant Interiors', 'Stage & Dance Floor', 'LED Wall Setup', 'Private Lounge', 'Outdoor Access'],
    desc: 'A regal setting that combines classic charm with modern sophistication for memorable events.',
  },
  {
    name: 'Celebration Hall',
    capacity: '150 Guests',
    image: 'celebration',
    features: ['Intimate Ambiance', 'Garden View', 'Built-in Bar', 'Mood Lighting', 'Dedicated Staff'],
    desc: 'An intimate, refined space ideal for birthdays, anniversaries, and private gatherings.',
  },
];

export const LUXURY_ROOMS = [
  { name: 'Double Bed Room', price: '8 Rooms', amenities: ['Double Bed', 'Attached Bathroom', 'AC', 'Free Wi-Fi', 'Room Service'] },
  { name: 'Deluxe Room', price: '2 Rooms', amenities: ['King Bed', 'Premium Interiors', '24/7 Service', 'Smart TV', 'Rain Shower'] },
  { name: 'VIP Suite', price: '4 Rooms', amenities: ['King Bed', 'Private Balcony', 'Living Area', 'Premium Amenities', 'Butler Service'] },
];

export const EVENT_EXPERIENCES = [
  'Wedding Decoration',
  'Anniversary Celebration Setup',
  'Birthday Party Arrangements',
  'Stage Design',
  'Catering Services',
  'Balloon & Theme Décor',
  'Candlelight Dining',
  'Family Celebrations',
  'DJ Setup',
  'Guest Arrangements',
];

export const GALLERY_FILTERS = ['All', 'Rooms', 'Weddings', 'Anniversary', 'Birthday', 'Halls', 'Garden', 'Park'];

export const GALLERY_ITEMS = [
  ...IMAGES.rooms.map((img, i) => ({ src: img, category: 'Rooms', alt: `Luxury Room ${i + 1}` })),
  { src: IMAGES.halls.grand, category: 'Halls', alt: 'Banquet Hall' },
  ...IMAGES.garden.map((img, i) => ({ src: img, category: 'Garden', alt: `Beautiful Garden ${i + 1}` })),
  ...IMAGES.park.map((img, i) => ({ src: img, category: 'Park', alt: `Nature Park ${i + 1}` })),
];

export const AMENITIES = [
  { icon: 'wifi', title: 'Free Wi-Fi', desc: 'High-speed connectivity throughout' },
  { icon: 'car', title: 'Parking', desc: 'Complimentary valet parking' },
  { icon: 'park', title: 'Nature Park', desc: 'Lush green recreational park' },
  { icon: 'tree', title: 'Garden', desc: 'Beautifully landscaped gardens' },
  { icon: 'building', title: 'Banquet Hall', desc: 'Multiple premium venues' },
  { icon: 'playground', title: 'Kids Playground', desc: 'Safe & fun outdoor play area' },
  { icon: 'bolt', title: 'Power Backup', desc: '24/7 uninterrupted power' },
  { icon: 'headset', title: '24×7 Support', desc: 'Round-the-clock concierge' },
];

export const STATISTICS = [
  { value: 1000, suffix: '+', label: 'Happy Guests' },
  { value: 500, suffix: '+', label: 'Celebrations' },
  { value: 3, suffix: '', label: 'Premium Halls' },
  { value: 16, suffix: '', label: 'Luxury Rooms' },
  { value: 5, suffix: '-Star', label: 'Hospitality' },
];

export const TESTIMONIALS = [
  {
    name: 'Rajesh & Priya Sharma',
    role: 'Wedding Celebration',
    rating: 5,
    review: 'Baidyanath Palace transformed our wedding into a fairy tale. Every detail was perfected beyond our imagination. The Grand Hall was breathtaking, and the staff treated us like royalty. We cannot recommend this venue enough!',
    avatar: 0,
  },
  {
    name: 'Anita Verma',
    role: 'Anniversary Dinner',
    rating: 5,
    review: 'Our 25th anniversary at Baidyanath Palace was pure magic. The candlelight dinner setup, the personalised décor, and the impeccable service made it an evening we will cherish forever.',
    avatar: 1,
  },
  {
    name: 'Vikram Singh',
    role: 'Corporate Event',
    rating: 5,
    review: 'Hosting our annual corporate gala at Baidyanath Palace was the best decision. The Royal Hall was stunning, the food was exceptional, and the AV setup was world-class. Our guests were thoroughly impressed.',
    avatar: 2,
  },
  {
    name: 'Meera Kapoor',
    role: 'Birthday Celebration',
    rating: 5,
    review: 'My daughter\'s 18th birthday at Baidyanath Palace was spectacular! The team went above and beyond with the theme décor, DJ setup, and catering. It was truly a celebration to remember.',
    avatar: 3,
  },
];

export const BOOKING_CTA = {
  headline: 'Your Perfect Celebration Starts Here.',
  subtext: 'Let us craft an experience that exceeds your every expectation.',
  buttons: {
    book: 'Book Now',
    call: 'Call Now',
    whatsapp: 'WhatsApp Inquiry',
  },
};

export const FOOTER_LINKS = {
  quickLinks: ['Home', 'About', 'Services', 'Facilities', 'Gallery', 'Contact'],
  services: ['Weddings', 'Anniversary', 'Birthday', 'Room Stay', 'Dining', 'Events'],
  legal: [],
  socials: [
    { platform: 'Instagram', url: '#' },
    { platform: 'Facebook', url: '#' },
    { platform: 'YouTube', url: '#' },
    { platform: 'Twitter', url: '#' },
  ],
};

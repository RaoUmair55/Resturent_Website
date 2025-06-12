export const RESTAURANT_INFO = {
  name: 'Restaurant Name',
  address: '123 Restaurant Street, City, State 12345',
  phone: '(123) 456-7890',
  email: 'info@restaurant.com',
  whatsapp: '1234567890',
  socialMedia: {
    facebook: 'https://facebook.com/restaurant',
    instagram: 'https://instagram.com/restaurant',
    twitter: 'https://twitter.com/restaurant',
  },
  openingHours: {
    weekdays: '11:00 AM - 10:00 PM',
    saturday: '10:00 AM - 11:00 PM',
    sunday: '10:00 AM - 9:00 PM',
  },
  location: {
    lat: 40.7128,
    lng: -74.0060,
  },
};

export const MENU_CATEGORIES = [
  { id: 'starters', name: 'Starters' },
  { id: 'mains', name: 'Main Course' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'drinks', name: 'Drinks' },
];

export const GALLERY_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'food', name: 'Food' },
  { id: 'interior', name: 'Interior' },
  { id: 'drinks', name: 'Drinks' },
];

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  },
  slideDown: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
  },
  scale: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
  },
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const ROUTES = {
  home: '/',
  menu: '/menu',
  about: '/about',
  gallery: '/gallery',
  contact: '/contact',
};

export const API_ENDPOINTS = {
  contact: '/api/contact',
  reservation: '/api/reservation',
  menu: '/api/menu',
};

export const ERROR_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  message: 'Message must be at least 10 characters long',
};

export const SUCCESS_MESSAGES = {
  contact: 'Thank you for your message. We will get back to you soon!',
  reservation: 'Your reservation has been confirmed. We look forward to seeing you!',
  order: 'Your order has been placed successfully!',
}; 
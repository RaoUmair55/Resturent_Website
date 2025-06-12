import { RESTAURANT_INFO } from '../utils/constants';

export const config = {
  api: {
    baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:3000',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  },
  googleMaps: {
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    center: {
      lat: RESTAURANT_INFO.location.lat,
      lng: RESTAURANT_INFO.location.lng,
    },
    zoom: 15,
  },
  whatsapp: {
    number: RESTAURANT_INFO.whatsapp,
    message: 'Hello! I would like to place an order.',
  },
  social: {
    facebook: RESTAURANT_INFO.socialMedia.facebook,
    instagram: RESTAURANT_INFO.socialMedia.instagram,
    twitter: RESTAURANT_INFO.socialMedia.twitter,
  },
  contact: {
    email: RESTAURANT_INFO.email,
    phone: RESTAURANT_INFO.phone,
    address: RESTAURANT_INFO.address,
  },
  hours: RESTAURANT_INFO.openingHours,
  features: {
    enableWhatsAppOrdering: true,
    enableOnlineReservations: true,
    enableGallery: true,
    enableReviews: true,
  },
  seo: {
    title: `${RESTAURANT_INFO.name} - Fine Dining Experience`,
    description: 'Experience the finest dining with our exquisite menu, elegant ambiance, and exceptional service.',
    keywords: 'restaurant, fine dining, food, cuisine, reservations, menu',
    ogImage: '/images/og-image.jpg',
  },
  analytics: {
    googleAnalyticsId: process.env.REACT_APP_GA_ID,
    facebookPixelId: process.env.REACT_APP_FB_PIXEL_ID,
  },
  cache: {
    menu: 3600, // 1 hour
    gallery: 7200, // 2 hours
    reviews: 1800, // 30 minutes
  },
  pagination: {
    menuItemsPerPage: 12,
    galleryItemsPerPage: 9,
    reviewsPerPage: 6,
  },
  validation: {
    minPasswordLength: 8,
    maxPasswordLength: 32,
    minNameLength: 2,
    maxNameLength: 50,
    minMessageLength: 10,
    maxMessageLength: 1000,
  },
}; 
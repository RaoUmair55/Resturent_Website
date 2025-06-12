// Format price with currency symbol
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

// Check if restaurant is currently open
export const isRestaurantOpen = () => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hour + minutes / 60;

  if (day >= 1 && day <= 5) {
    // Monday - Friday
    return currentTime >= 11 && currentTime < 22;
  } else if (day === 6) {
    // Saturday
    return currentTime >= 10 && currentTime < 23;
  } else {
    // Sunday
    return currentTime >= 10 && currentTime < 21;
  }
};

// Generate WhatsApp message for ordering
export const generateWhatsAppMessage = (item) => {
  const message = `Hi, I'd like to order ${item.name} for ${item.price}.`;
  return encodeURIComponent(message);
};

// Format date for display
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

// Truncate text with ellipsis
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

// Generate random ID
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Validate email format
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Format phone number
export const formatPhoneNumber = (phoneNumber) => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return phoneNumber;
}; 
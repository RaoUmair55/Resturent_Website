# Modern Restaurant Website

A professional, fully responsive restaurant website built with React.js and Tailwind CSS. Features modern animations, rich visuals, and a clean layout.

## Features

- 🎨 Modern and responsive design
- 🚀 Fast and optimized performance
- 📱 Mobile-first approach
- ✨ Smooth animations and transitions
- 🍽️ Interactive menu with categories
- 📸 Image gallery with lightbox
- 📍 Google Maps integration
- 💬 WhatsApp ordering system
- ⏰ Dynamic opening hours
- 📝 Contact form
- 🌐 Social media integration

## Tech Stack

- React.js (Vite)
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Icons
- Google Maps API
- EmailJS/Formspree

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/restaurant-website.git
cd restaurant-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your API keys:
```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── assets/        # Static assets
├── styles/        # Global styles
└── utils/         # Utility functions
```

## Customization

1. Update the restaurant information in the respective components
2. Replace the images with your own
3. Update the menu items in `Menu.jsx`
4. Customize the color scheme in `tailwind.config.js`
5. Update the Google Maps coordinates in `Contact.jsx`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Design inspiration from various restaurant websites

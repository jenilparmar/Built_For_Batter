# Built For Batter 🚂

A modern web-based train ticket booking application designed for seamless travel reservations.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## 📖 About

**Built For Batter** is a ticket booking web application that allows users to:
- Browse available train schedules
- Select seats from a visual seat map
- Complete booking with passenger information
- Generate and view booking confirmations

The application provides an intuitive interface for a smooth booking experience with real-time seat availability.

## ✨ Features

### Core Features
- 🚂 **Train Schedule Display** - Browse available trains with departure and arrival times
- 💺 **Interactive Seat Selection** - Visual seat map with real-time availability
- 📋 **Booking Form** - Collect passenger information securely
- 🎫 **Ticket Generation** - Digital ticket display with booking details
- 📱 **Responsive Design** - Mobile-friendly interface for all devices
- 🎨 **Dark/Light Mode** - Toggle between light and dark themes

### Navigation
- Home - Main landing page
- Booking - Train selection and ticket booking
- About - Application information
- More - Additional options

## 🛠️ Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side dependencies required (static HTML/CSS/JS)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/jenilparmar/Built_For_Batter.git
   cd Built_For_Batter
   ```

2. **Open the application**
   - Open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js
     npx http-server
     ```

3. **Access the application**
   - Navigate to `http://localhost:8000` in your browser

## 📁 Project Structure

```
Built_For_Batter/
├── index.html              # Main landing page
├── booking2.html           # Train booking page
├── form.html              # Passenger information form
├── ticket.html            # Ticket display page
├── about.html             # About page
├── more.html              # More options page
├── script.js              # Main JavaScript logic
├── script2.js             # Booking page script
├── script4.js             # Additional functionality
├── style.css              # Main stylesheet
├── style2.css             # Booking page styles
├── style3.css             # Form page styles
├── style4.css             # Ticket page styles
├── style5.css             # Additional styles
└── assets/                # Images and resources
    ├── *.jpg             # Background and decorative images
    ├── *.png             # UI icons and images
    └── *.gif             # Animations
```

## 🚀 Usage

### Getting Started

1. **Start on Home Page**
   - Open the application to view the main landing page
   - Navigate using the menu icons at the bottom

2. **Book a Ticket**
   - Click on "Booking" to see available trains
   - Select a train from the list
   - Choose your preferred seat from the interactive seat map
   - Fill in passenger information
   - Confirm your booking

3. **View Your Ticket**
   - After booking, your digital ticket will be displayed
   - Contains all journey and passenger details

### Navigation Guide

- **Home Icon** - Returns to main landing page
- **Booking Icon** - Access train booking interface
- **Menu Icon** - Additional options and features
- **About Icon** - Learn more about the application

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Styling and responsive design
- **JavaScript (ES6+)** - Interactive functionality and DOM manipulation

### Features
- Responsive Grid Layout
- Event Listeners and Handlers
- DOM Query and Manipulation
- Local Storage (for future enhancements)
- CSS Animations and Transitions

## 🏗️ Key Components

### HTML Pages
- `index.html` - Navigation hub with theme toggle options
- `booking2.html` - Train schedule display
- `form.html` - Passenger data collection
- `ticket.html` - Booking confirmation and ticket display

### JavaScript Files
- `script.js` - Core boarding functionality with fixed error handling (Issue #1)
- `script2.js` - Train selection and booking flow
- `script4.js` - Additional interactive features

### Stylesheets
- `style.css` - Main page styling
- `style2.css` - Booking interface styles
- `style3.css` - Form styling
- `style4.css` & `style5.css` - Theme and additional styles

## 🐛 Bug Fixes

### Issue #1 - Fixed
- **CSS Selector Bug**: Fixed invalid selector `.loader -container` to `.loader-container`
- **Variable Declaration**: Replaced implicit global variables with proper `const` declarations
- **Error Handling**: Added null checks for DOM elements
- **Code Quality**: Improved code with validation and console warnings

## 📝 Contributing

We welcome contributions! To contribute:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request** with a clear description

### Coding Standards
- Use `const`/`let` instead of `var`
- Add null checks for DOM elements
- Include console warnings for debugging
- Write descriptive comments
- Follow existing code style

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Jenil Parmar**
- GitHub: [@jenilparmar](https://github.com/jenilparmar)
- Repository: [Built_For_Batter](https://github.com/jenilparmar/Built_For_Batter)

## 🙏 Acknowledgments

- Icons and images sourced from design resources
- Inspired by modern e-commerce and booking interfaces
- Built with attention to user experience and accessibility

## 📧 Support

For issues, bug reports, or feature requests, please create an issue on the [GitHub repository](https://github.com/jenilparmar/Built_For_Batter/issues).

---

**Last Updated:** February 2026

**Project Status:** Active Development ✅

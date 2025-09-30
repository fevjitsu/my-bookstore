# 📚 Online Bookstore App

A modern online bookstore built with Vite, React, and Firebase that allows users to read e-books or order physical copies with secure Stripe payments.

## ✨ Features

- **🔐 Authentication**
  - Email/password sign up and login
  - Google SSO integration
  - Firebase Authentication

- **📖 Book Management**
  - Browse book catalog
  - Read e-books online
  - Order physical copies

- **💳 Payments**
  - Secure Stripe integration
  - One-time payments for books
  - Secure checkout process

- **🎯 User Experience**
  - Responsive design
  - Protected routes
  - Shopping cart functionality
  - Order history

## 🛠 Tech Stack

- **Frontend**: React 18, Vite, React Router DOM
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Payments**: Stripe
- **Styling**: CSS3 (easily customizable)
- **Deployment**: Firebase Hosting

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase account
- Stripe account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd online-bookstore
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   # Firebase Configuration
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id

   # Stripe Configuration
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```

4. **Firebase Setup**
   - Create a new Firebase project
   - Enable Authentication (Email/Password & Google provider)
   - Create a Firestore database
   - Set up Storage for e-books

5. **Stripe Setup**
   - Create a Stripe account
   - Get your publishable key from the Stripe dashboard
   - Set up webhooks for payment confirmation

### Development

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Build for production**
   ```bash
   npm run build
   ```

3. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Login.jsx       # Login component
│   ├── SignUp.jsx      # Signup component
│   └── Layout.jsx      # Main layout with navigation
├── contexts/           # React contexts
│   └── AuthContext.jsx # Authentication context
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── BookCatalog.jsx # Book listings
│   ├── BookReader.jsx  # E-book reader
│   └── Checkout.jsx    # Payment checkout
├── firebase/           # Firebase configuration
│   └── config.js       # Firebase setup
└── App.jsx             # Main app component
```

## 🔧 Configuration

### Firebase Authentication

Enable these sign-in methods in Firebase Console:
- Email/Password
- Google

### Firestore Database

Create collections:
- `books` - Store book information
- `users` - User profiles and preferences
- `orders` - Order history

### Stripe Setup

1. Install Stripe Firebase extension
2. Configure webhook endpoints
3. Set up products in Stripe dashboard

## 🎯 Usage

1. **User Registration**
   - Sign up with email/password or Google
   - Verify email (if required)

2. **Browsing Books**
   - View book catalog
   - Search and filter books

3. **Reading E-books**
   - Click "Read Now" on e-books
   - PDF viewer for online reading

4. **Purchasing Physical Books**
   - Add to cart
   - Secure checkout with Stripe
   - Order confirmation

## 🔒 Security Features

- Firebase Security Rules for data protection
- Stripe secure payment processing
- Environment variables for sensitive data
- Authentication state persistence

## 🚀 Deployment

### Firebase Hosting

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

### Environment Variables in Production

Set environment variables in your hosting platform:
- Firebase Hosting: Use Firebase Functions config
- Other platforms: Set in deployment settings

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔄 Development Workflow

1. Create feature branch
2. Implement changes
3. Test authentication flows
4. Verify Stripe payments (test mode)
5. Submit pull request

## 🐛 Troubleshooting

### Common Issues

1. **Firebase Configuration Errors**
   - Verify `.env` variables match Firebase project
   - Check Firebase SDK version compatibility

2. **Stripe Payment Failures**
   - Use test mode for development
   - Verify webhook endpoints

3. **Authentication Problems**
   - Check Firebase Auth providers are enabled
   - Verify authorized domains in Firebase Console

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check Firebase documentation
- Review Stripe integration guides
- Create an issue in the repository

---

**Happy Reading!** 📖
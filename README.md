# HomePro Services Website

A modern, responsive website for HomePro Services - a professional home maintenance and repair service provider. This platform serves as a comprehensive solution for homeowners and businesses seeking reliable home maintenance services.

## 🚀 Features

### Core Features
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices (mobile, tablet, desktop)
- **Modern UI**: Clean and professional design using Tailwind CSS with optimized performance
- **Interactive Elements**: Dynamic contact form with real-time validation and error handling
- **Service Showcase**: Detailed presentation of plumbing and electrical services with high-quality images
- **Pricing Plans**: Clear pricing structure with three tiers (Basic, Premium, Business)
- **Testimonials**: Customer reviews and ratings with star-based rating system
- **FAQ Section**: Interactive accordion-style FAQ with common questions and answers
- **Contact Form**: Integrated contact form with backend API support and form validation

### Advanced Features
- **Mobile-First Approach**: Optimized for mobile devices with touch-friendly interfaces
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Performance Optimized**: Fast loading times with optimized assets
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels and keyboard navigation
- **Cross-Browser Compatibility**: Tested and optimized for all major browsers

## 🛠️ Technologies Used

### Frontend Stack
- **HTML5**: Semantic markup with proper structure
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Font Awesome Icons**: Comprehensive icon library
- **JavaScript**: Vanilla JS for enhanced interactivity
- **Modern CSS Features**: Flexbox, Grid, and CSS Variables

### Backend Stack
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **RESTful API**: For handling contact form submissions
- **MongoDB**: Database for storing contact form data (optional)

### Development Tools
- **VS Code**: Primary code editor
- **Git**: Version control
- **Chrome DevTools**: For debugging and performance optimization
- **Postman**: For API testing

## 📁 Project Structure

```
homepro-services/
├── index.html          # Main landing page with hero section and service overview
├── services.html       # Detailed services page with service cards
├── pricing.html        # Pricing plans with comparison table
├── testimonials.html   # Customer testimonials with ratings
├── faq.html           # FAQ page with accordion
├── about.html         # About us page with company history
├── contact.html       # Contact page with form
├── script.js          # Main JavaScript file with all functionality
├── images/            # Image assets directory
│   ├── services/      # Service-related images
│   ├── testimonials/  # Client photos
│   └── icons/         # Custom icons
├── styles/            # Additional CSS files
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Web Browser**: Latest version of Chrome, Firefox, Safari, or Edge
- **Node.js**: Version 14.x or higher
- **npm**: Version 6.x or higher
- **Git**: For version control

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/homepro-services.git
   ```

2. Navigate to the project directory:
   ```bash
   cd homepro-services
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Configure environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Open your browser and visit:
   ```
   http://localhost:5000
   ```

### Development Workflow

1. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

3. Push your changes:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request on GitHub

## 📝 API Integration

### Contact Form API

The contact form is integrated with a RESTful API endpoint:

- **Base URL**: `http://localhost:5000`
- **Endpoint**: `/api/contacts`
- **Method**: POST
- **Content-Type**: application/json
- **Authentication**: None (public endpoint)

#### Request Format
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "service": "plumbing",
  "message": "Need help with a leaky faucet"
}
```

#### Response Format
```json
{
  "status": "success",
  "message": "Contact form submitted successfully",
  "data": {
    "id": "123456",
    "timestamp": "2024-03-20T12:00:00Z"
  }
}
```

#### Error Handling
```json
{
  "status": "error",
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

## 🎨 Design Features

### Color Scheme
- **Primary Colors**:
  - Main Blue: #3B82F6
  - Dark Blue: #2563EB
  - Light Blue: #60A5FA
- **Secondary Colors**:
  - White: #FFFFFF
  - Light Gray: #F3F4F6
  - Medium Gray: #6B7280
  - Dark Gray: #1F2937
- **Accent Colors**:
  - Success Green: #10B981
  - Warning Yellow: #F59E0B
  - Error Red: #EF4444

### Typography
- **Headings**:
  - Font Family: Inter, sans-serif
  - Weights: 700 (Bold), 600 (Semi-bold)
  - Sizes: 2.5rem (h1), 2rem (h2), 1.5rem (h3)
- **Body Text**:
  - Font Family: Inter, sans-serif
  - Weight: 400 (Regular)
  - Size: 1rem
  - Line Height: 1.5

### Components

#### Navigation
- Responsive navbar with mobile menu
- Dropdown menus for services
- Active state indicators
- Smooth scroll behavior

#### Service Cards
- Image with overlay
- Service description
- Feature list
- Call-to-action button
- Hover effects

#### Pricing Tables
- Three-tier pricing
- Feature comparison
- Highlighted recommended plan
- Monthly/Annual toggle
- Currency selector

#### Testimonial Cards
- Client photo
- Star rating
- Testimonial text
- Client name and title
- Company logo (optional)

#### FAQ Accordion
- Expandable sections
- Smooth animations
- Icon indicators
- Keyboard navigation

#### Contact Form
- Input validation
- Error messages
- Success confirmation
- Loading states
- File upload support

## 🧪 Testing

### Manual Testing
- Cross-browser testing
- Mobile responsiveness
- Form validation
- Navigation flow
- Performance testing

### Automated Testing
- Unit tests for JavaScript functions
- Integration tests for API endpoints
- E2E tests for critical user flows

## 🔒 Security

- Form validation on both client and server
- XSS protection
- CSRF protection
- Rate limiting on API endpoints
- Secure headers configuration
- Input sanitization

## 📈 Performance Optimization

- Image optimization
- Lazy loading
- Code splitting
- Minification
- Caching strategies
- CDN usage

## 🤝 Contributing

### Code Style
- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful commit messages
- Include tests for new features

### Pull Request Process
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
6. Address review comments
7. Merge after approval

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

### Support
- Email: support@homepro.com
- Phone: +1 234 567 890
- Hours: 24/7

### Business Inquiries
- Email: business@homepro.com
- Phone: +1 234 567 891

### Office Location
123 Service St, City, State 12345
United States

### Social Media
- Twitter: @HomeProServices
- Facebook: /HomeProServices
- Instagram: @HomeProServices
- LinkedIn: /company/HomeProServices

---

Made with ❤️ by [AnshTech Solutions](https://www.anshtechsolutions.tech)

© 2024 AnshTech Solutions. All rights reserved.

## Pricing Page

The pricing page (`pricing.html`) offers three subscription plans:
- Basic Plan ($49/visit)
- Premium Plan ($99/month)
- Family Plan ($149/month)

### Plan Selection Flow

1. User clicks "Select Plan" on any pricing card
2. A modal opens with a form to collect:
   - Full Name
   - Email Address
   - Selected Plan

### API Integration

The pricing page integrates with the backend API endpoint:

```
POST http://localhost:5000/api/plan
```

#### Request Payload
```json
{
    "name": "string",
    "email": "string",
    "planType": "string"
}
```

#### Response Handling
- Success: Shows confirmation message and closes modal
- Error: Displays error message to user

## Setup

1. Clone the repository
2. Open `pricing.html` in a web browser
3. Ensure the backend API is running at `http://localhost:5000`

## Development

To modify the pricing plans or API integration:

1. Edit `pricing.html` for UI changes
2. Update the JavaScript form submission handler for API changes
3. Test the changes with the backend API

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request 

## 🔄 Backend API Documentation

### Base URL
```
http://localhost:5000
```

### Authentication
All endpoints require JWT authentication except for `/api/auth/*` endpoints.
Include the token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

### Endpoints

#### Authentication
```
POST /api/auth/register
```
Register a new user
```json
Request Body:
{
    "name": "string",
    "email": "string",
    "password": "string",
    "phone": "string"
}

Response:
{
    "status": "success",
    "token": "jwt_token",
    "user": {
        "id": "string",
        "name": "string",
        "email": "string"
    }
}
```

```
POST /api/auth/login
```
Login user
```json
Request Body:
{
    "email": "string",
    "password": "string"
}

Response:
{
    "status": "success",
    "token": "jwt_token",
    "user": {
        "id": "string",
        "name": "string",
        "email": "string"
    }
}
```

#### Plans
```
POST /api/plan
```
Create a new plan subscription
```json
Request Body:
{
    "name": "string",
    "email": "string",
    "planType": "string"
}

Response:
{
    "status": "success",
    "message": "Plan subscription created successfully",
    "data": {
        "id": "string",
        "name": "string",
        "email": "string",
        "planType": "string",
        "createdAt": "timestamp"
    }
}
```

```
GET /api/plans
```
Get all available plans
```json
Response:
{
    "status": "success",
    "data": [
        {
            "id": "string",
            "name": "string",
            "price": "number",
            "features": ["string"],
            "duration": "string"
        }
    ]
}
```

#### Services
```
GET /api/services
```
Get all available services
```json
Response:
{
    "status": "success",
    "data": [
        {
            "id": "string",
            "name": "string",
            "description": "string",
            "image": "string",
            "category": "string"
        }
    ]
}
```

```
GET /api/services/:id
```
Get service details
```json
Response:
{
    "status": "success",
    "data": {
        "id": "string",
        "name": "string",
        "description": "string",
        "image": "string",
        "category": "string",
        "pricing": {
            "basic": "number",
            "premium": "number"
        },
        "features": ["string"]
    }
}
```

#### Bookings
```
POST /api/bookings
```
Create a new booking
```json
Request Body:
{
    "serviceId": "string",
    "date": "string",
    "time": "string",
    "address": "string",
    "notes": "string"
}

Response:
{
    "status": "success",
    "message": "Booking created successfully",
    "data": {
        "id": "string",
        "serviceId": "string",
        "date": "string",
        "time": "string",
        "status": "pending"
    }
}
```

```
GET /api/bookings
```
Get user's bookings
```json
Response:
{
    "status": "success",
    "data": [
        {
            "id": "string",
            "service": {
                "name": "string",
                "category": "string"
            },
            "date": "string",
            "time": "string",
            "status": "string"
        }
    ]
}
```

#### Testimonials
```
GET /api/testimonials
```
Get all testimonials
```json
Response:
{
    "status": "success",
    "data": [
        {
            "id": "string",
            "name": "string",
            "rating": "number",
            "comment": "string",
            "image": "string",
            "date": "string"
        }
    ]
}
```

```
POST /api/testimonials
```
Create a new testimonial
```json
Request Body:
{
    "name": "string",
    "rating": "number",
    "comment": "string",
    "image": "string"
}

Response:
{
    "status": "success",
    "message": "Testimonial created successfully",
    "data": {
        "id": "string",
        "name": "string",
        "rating": "number",
        "comment": "string",
        "image": "string",
        "date": "string"
    }
}
```

#### FAQ
```
GET /api/faq
```
Get all FAQs
```json
Response:
{
    "status": "success",
    "data": [
        {
            "id": "string",
            "question": "string",
            "answer": "string",
            "category": "string"
        }
    ]
}
```

### Error Responses
All endpoints return consistent error responses:
```json
{
    "status": "error",
    "message": "Error message",
    "errors": [
        {
            "field": "string",
            "message": "string"
        }
    ]
}
```

### Status Codes
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

### Rate Limiting
- All endpoints are rate-limited to 100 requests per minute per IP
- Authentication endpoints are limited to 5 requests per minute per IP

### Data Validation
- All input data is validated on both client and server side
- Required fields are marked with *
- Email format is validated
- Phone numbers must be in international format
- Dates must be in ISO format

### Security
- All endpoints use HTTPS
- JWT tokens expire after 24 hours
- Passwords are hashed using bcrypt
- Input sanitization is performed on all endpoints
- CORS is enabled for specific origins 

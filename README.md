# The Layered Future - Landing Page

A modern, responsive React landing page for The Layered Future, a creative-technology brand focused on helping creators and small businesses adapt to AI, automation, and blockchain technologies.

## 🚀 Features

- **React-based** with modern hooks and functional components
- **Dark mode enabled by default** with brand-specific color scheme
- **Fully responsive** design optimized for mobile and desktop
- **Smooth scrolling navigation** with anchor links
- **Interactive contact form** with validation and success states
- **Ready for integration** with n8n, Kit, or other email services
- **Professional UI** using Tailwind CSS and shadcn/ui components

## 🎨 Brand Colors

- **Burnt Orange**: `#FF6B00` (Primary/CTA buttons)
- **Slate Gray**: `#2A2A2A` (Secondary elements)
- **Concrete White**: `#F9F9F9` (Light backgrounds)
- **Black**: `#000000` (Dark backgrounds)

## 📁 Project Structure

```
layered-future-landing/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   │   └── The_Layered_future_logo.png
│   ├── components/
│   │   └── ui/            # shadcn/ui components
│   ├── App.jsx            # Main application component
│   ├── App.css            # Custom styles and brand colors
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
├── dist/                  # Production build output
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd layered-future-landing

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### Available Scripts
- `pnpm run dev` - Start development server with hot reload
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build locally
- `pnpm run lint` - Run ESLint

## 📧 Form Integration

The contact form is ready for backend integration. Current structure:

```javascript
// Form data structure
{
  email: "user@example.com",
  message: "Optional message text"
}
```

### Integration Options:

1. **n8n Workflow**: Update the `handleSubmit` function in `App.jsx` to POST to your n8n webhook
2. **Kit (ConvertKit)**: Replace form action with Kit API endpoint
3. **Custom API**: Point to your own backend service

Example n8n integration:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  
  try {
    const response = await fetch('YOUR_N8N_WEBHOOK_URL', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, message })
    })
    
    if (response.ok) {
      setIsSubmitted(true)
    }
  } catch (error) {
    console.error('Form submission error:', error)
  }
}
```

## 🚀 Deployment

### Option 1: Cloudflare Pages (Recommended)
1. Build the project: `pnpm run build`
2. Upload the `dist/` folder to Cloudflare Pages
3. Configure custom domain if needed

### Option 2: Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `pnpm run build`
3. Set publish directory: `dist`

### Option 3: Vercel
1. Connect repository to Vercel
2. Framework preset: Vite
3. Build command: `pnpm run build`
4. Output directory: `dist`

## 📱 Responsive Design

The landing page is optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

Key responsive features:
- Flexible grid layouts
- Scalable typography
- Touch-friendly buttons
- Optimized images

## 🎯 Conversion Optimization

- **Clear value proposition** in hero section
- **Social proof** with testimonial placeholders
- **Multiple CTAs** strategically placed
- **Trust indicators** (privacy notice, company info)
- **Minimal friction** contact form

## 📊 Analytics Ready

The page is prepared for analytics integration. Add your tracking code to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔧 Customization

### Adding New Sections
1. Create component in `src/components/`
2. Import and add to `App.jsx`
3. Update navigation if needed

### Modifying Colors
Update CSS variables in `src/App.css`:
```css
:root {
  --primary: #FF6B00;
  --secondary: #2A2A2A;
  /* ... other colors */
}
```

### Form Fields
Add new fields in the contact form section of `App.jsx` and update the state management accordingly.

## 📞 Support

For questions about this landing page:
- **Business**: The Layered Future (Division of CloosEffects LLC)
- **Website**: TheLayeredFuture.com
- **Social**: [@thelayeredfuture](https://twitter.com/thelayeredfuture)

## 📄 License

© 2024 CloosEffects LLC. All rights reserved.

---

*Built with React, Tailwind CSS, and modern web technologies. Optimized for performance and conversion.*


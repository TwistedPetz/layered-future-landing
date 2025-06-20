# Deployment Guide - The Layered Future Landing Page

## 🚀 Quick Deployment Options

### Option 1: Cloudflare Pages (Recommended for your stack)
Since you're already using Cloudflare for DNS, this is the most integrated option:

1. **Build the project**:
   ```bash
   pnpm run build
   ```

2. **Upload to Cloudflare Pages**:
   - Go to Cloudflare Dashboard → Pages
   - Create a new project
   - Upload the `dist/` folder
   - Set custom domain: `thelayeredfuture.com`

3. **Configure n8n integration**:
   - Update the form handler in `src/App.jsx`
   - Replace the console.log with your n8n webhook URL

### Option 2: GitHub + Automatic Deployment

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial landing page commit"
   git remote add origin https://github.com/yourusername/layered-future-landing.git
   git push -u origin main
   ```

2. **Connect to deployment service**:
   - **Netlify**: Auto-deploy from GitHub
   - **Vercel**: Connect repository
   - **Cloudflare Pages**: Connect to GitHub repo

### Option 3: Manual Static Hosting

1. **Build and download**:
   ```bash
   pnpm run build
   # Download the entire dist/ folder
   ```

2. **Upload to any static host**:
   - Upload `dist/` contents to your web server
   - Point domain to the hosting location

## 🔧 Form Integration Setup

### For n8n Integration:

1. **Create n8n workflow**:
   - Webhook trigger node
   - Email node (Gmail/SMTP)
   - Optional: Database storage node

2. **Update form handler** in `src/App.jsx`:
   ```javascript
   const handleSubmit = async (e) => {
     e.preventDefault()
     
     try {
       const response = await fetch('YOUR_N8N_WEBHOOK_URL', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           email,
           message,
           timestamp: new Date().toISOString(),
           source: 'landing_page'
         })
       })
       
       if (response.ok) {
         setIsSubmitted(true)
         // Optional: Track conversion event
       } else {
         throw new Error('Form submission failed')
       }
     } catch (error) {
       console.error('Form submission error:', error)
       // Handle error state
     }
   }
   ```

3. **Test the integration**:
   - Submit test form
   - Verify email delivery
   - Check n8n workflow execution

### For Kit (ConvertKit) Integration:

1. **Get your Kit form endpoint**
2. **Update form action**:
   ```javascript
   // Replace the fetch URL with Kit endpoint
   const response = await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       api_key: 'YOUR_API_KEY',
       email: email,
       fields: {
         message: message
       }
     })
   })
   ```

## 📊 Analytics Setup

### Google Analytics 4:
Add to `index.html` before closing `</head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible Analytics (Privacy-focused):
```html
<script defer data-domain="thelayeredfuture.com" src="https://plausible.io/js/script.js"></script>
```

## 🔒 Security Considerations

1. **Environment Variables**:
   - Store API keys in environment variables
   - Never commit sensitive data to GitHub

2. **CORS Configuration**:
   - Configure your backend to accept requests from your domain
   - Set appropriate CORS headers

3. **Rate Limiting**:
   - Implement rate limiting on your form endpoint
   - Add client-side form submission throttling

## 🎯 Performance Optimization

1. **Image Optimization**:
   - Logo is already optimized
   - Consider WebP format for additional images

2. **Caching**:
   - Set appropriate cache headers
   - Use CDN for static assets

3. **Bundle Analysis**:
   ```bash
   pnpm run build -- --analyze
   ```

## 📱 Testing Checklist

Before going live:

- [ ] Test form submission
- [ ] Verify email delivery
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify social media links
- [ ] Test dark mode display
- [ ] Check loading performance
- [ ] Validate HTML/CSS
- [ ] Test on different browsers

## 🚨 Troubleshooting

### Common Issues:

1. **Form not submitting**:
   - Check network tab for errors
   - Verify endpoint URL
   - Check CORS configuration

2. **Styling issues**:
   - Clear browser cache
   - Check CSS build output
   - Verify Tailwind classes

3. **Build failures**:
   - Check Node.js version (18+)
   - Clear node_modules and reinstall
   - Check for TypeScript errors

## 📞 Support

For deployment issues:
- Check the main README.md
- Review build logs
- Test locally first with `pnpm run preview`

---

*This guide covers the most common deployment scenarios for The Layered Future landing page.*


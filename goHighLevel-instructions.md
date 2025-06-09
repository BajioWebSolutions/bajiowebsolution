
# GoHighLevel Integration Instructions

## Files Included:
- `goHighLevel-export.html` - Complete HTML/CSS version of your website

## How to Use in GoHighLevel:

### Method 1: Page Builder (Recommended)
1. **Create a new page** in GoHighLevel
2. **Use the HTML element** and paste sections from the exported file
3. **Copy the CSS** from the `<style>` section into GoHighLevel's custom CSS area
4. **Upload images** to GoHighLevel's media library and update the image paths

### Method 2: Full HTML Import
1. **Create a custom HTML page** in GoHighLevel
2. **Paste the entire HTML content** from `goHighLevel-export.html`
3. **Upload all images** to GoHighLevel and update the paths in the HTML
4. **Test all links** and forms to ensure they work with GoHighLevel's system

## Key Sections to Extract:

### 1. Navigation Bar
```html
<!-- Copy the entire <nav class="navbar"> section -->
```

### 2. Hero Section
```html
<!-- Copy the <section class="hero"> section -->
```

### 3. Services Grid
```html
<!-- Copy the <section class="services"> section -->
```

### 4. Footer
```html
<!-- Copy the <footer class="footer"> section -->
```

## Images to Upload to GoHighLevel:
- Logo: `/lovable-uploads/1df209b2-56a3-4ba2-ae30-8ee0015a8129.png`
- Hero Image: `/lovable-uploads/8cbecad2-2102-44f5-8942-42e17c95d52a.png`

## Forms Integration:
Replace any form elements with GoHighLevel's form builder widgets for proper lead capture and CRM integration.

## CSS Customization:
All colors, fonts, and styling can be modified in the CSS section. The design uses:
- Primary Color: #2dd4bf (teal)
- Background: #0f172a (dark blue)
- Font: Inter from Google Fonts

## Responsive Design:
The exported code includes mobile-responsive breakpoints that should work well in GoHighLevel's environment.

## Testing Checklist:
- [ ] All images display correctly
- [ ] Navigation links work
- [ ] Contact forms connect to GoHighLevel CRM
- [ ] Mobile responsiveness works
- [ ] Page loads quickly
- [ ] All buttons and CTAs function properly

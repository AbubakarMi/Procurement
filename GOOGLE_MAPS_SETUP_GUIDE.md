# Quick Guide: Setting Up Google Maps API

## Step 1: Get Your Google Maps API Key

1. **Visit Google Cloud Console**
   - Go to: https://console.cloud.google.com/

2. **Create or Select a Project**
   - Click "Select a project" at the top
   - Click "NEW PROJECT" or choose an existing one
   - Give it a name like "Kano Ministry Website"

3. **Enable Required APIs**
   - In the left menu, go to "APIs & Services" > "Library"
   - Search for and enable:
     - ✅ **Maps JavaScript API**
     - ✅ **Places API** (optional, for enhanced features)

4. **Create API Key**
   - Go to "APIs & Services" > "Credentials"
   - Click "+ CREATE CREDENTIALS" > "API key"
   - Copy the API key that appears

5. **Secure Your API Key (Recommended)**
   - Click "Edit API key" (pencil icon)
   - Under "Application restrictions":
     - Select "HTTP referrers (websites)"
     - Add: `localhost:9002/*` (for development)
     - Add: `yourdomain.com/*` (for production)
   - Under "API restrictions":
     - Select "Restrict key"
     - Check only "Maps JavaScript API"
   - Click "Save"

## Step 2: Add API Key to Your Project

1. **Open the `.env.local` file** in the project root
   - If it doesn't exist, create it

2. **Add your API key:**
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyC...your_actual_key_here
   ```

3. **Save the file**

## Step 3: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## Step 4: Verify Maps Are Working

1. **Contact Page** - Navigate to `/contact`
   - Should see a map with a red marker at the Ministry location

2. **Projects Page** - Navigate to `/projects`
   - Should see a map with multiple project markers
   - Red markers = In Progress
   - Green markers = Completed
   - Yellow markers = Planning

## Important Notes

- ✅ The `.env.local` file is already in `.gitignore`, so your API key won't be committed
- 💰 Google provides **$200 free credit per month**
- 📍 Ministry location: 21 Magaji Rumfa Road, Kano
- 🎨 Map markers use your ministry's brand colors (#E34234)

## Troubleshooting

**Problem: "Map Configuration Required" message**
- Solution: Make sure `.env.local` has the correct API key
- Restart the development server

**Problem: "For development purposes only" watermark**
- Solution: Set up billing in Google Cloud Console (you still get $200/month free)

**Problem: Maps not loading**
- Check: API key is correct in `.env.local`
- Check: Maps JavaScript API is enabled in Google Cloud
- Check: Browser console for error messages

## Need More Help?

- 📖 [Google Maps Platform Docs](https://developers.google.com/maps/documentation)
- 💵 [Pricing Details](https://mapsplatform.google.com/pricing/)
- 🔒 [API Security Best Practices](https://developers.google.com/maps/api-security-best-practices)

---

**Your maps should now be working!** The Contact page shows the Ministry location, and the Projects page displays all active projects with color-coded status markers.

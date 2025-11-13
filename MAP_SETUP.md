# Google Maps Setup Instructions

The Ministry website now includes an interactive Google Maps component that displays the ministry's location at **21 Magaji Rumfa Road, Kano, Nigeria**.

## Setup Steps

### 1. Get a Google Maps API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - **Maps JavaScript API**
   - **Places API** (optional, for enhanced features)
4. Go to **Credentials** and create an **API Key**
5. (Recommended) Restrict your API key:
   - Set **Application restrictions** to "HTTP referrers"
   - Add your website domains (e.g., `localhost:9002/*`, `yourdomain.com/*`)
   - Set **API restrictions** to only allow "Maps JavaScript API"

### 2. Add the API Key to Your Project

1. Copy the `.env.example` file to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and add your Google Maps API key:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_API_KEY_HERE
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

### 3. Verify the Map is Working

1. Navigate to the **Contact** page
2. You should see an interactive map with a red marker at the ministry's location
3. The map supports:
   - Zoom controls
   - Street view
   - Full-screen mode
   - Satellite/Map toggle

## Map Features

- **Custom Marker**: Red pin matching the ministry's brand colors (#E34234)
- **Default Location**: 21 Magaji Rumfa Road, Kano (Coordinates: 12.0022°N, 8.5919°E)
- **Interactive Controls**: Pan, zoom, street view, and map type switching
- **Responsive Design**: Works on all device sizes

## Troubleshooting

### Map not displaying
- Check that `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is set in `.env.local`
- Ensure the Maps JavaScript API is enabled in Google Cloud Console
- Verify your API key restrictions allow requests from your domain
- Check browser console for any error messages

### "For development purposes only" watermark
- This appears when using an API key without billing enabled
- Set up billing in Google Cloud Console to remove it
- Google provides $200 free credit per month for Maps usage

### Map shows wrong location
- The coordinates are set to Kano city center as an approximation
- You can adjust the exact coordinates in `src/components/map.tsx`
- Update the `position` constant with the precise latitude/longitude

## Cost Information

- Google Maps offers **$200 free credit per month**
- Maps JavaScript API costs approximately **$7 per 1,000 map loads** after free credit
- For a government website, this should be sufficient for normal traffic
- Consider implementing map caching strategies for high-traffic sites

## Need Help?

For more information, visit:
- [Google Maps Platform Documentation](https://developers.google.com/maps/documentation)
- [Pricing Information](https://mapsplatform.google.com/pricing/)
- [API Key Best Practices](https://developers.google.com/maps/api-security-best-practices)

# Second Life

A static demo for circular electronics recovery. Second Life helps someone identify an unused device, see which components still have value, and choose a local next step.

## Run it

Open `index.html` in a browser for the demo. For real browser location permissions and live nearby results, serve this folder from `localhost` or deploy it over HTTPS; browsers block GPS on most `file://` pages.

## Demo script

1. Hold up a real broken phone or laptop and say: "62 million tonnes of e-waste were generated in 2022, but only 22.3% was formally collected and recycled. That leaves 48.2 million tonnes outside the formal system."
2. Upload a photo of the real device. The report keeps the photo as the **Before** state, identifies the device category in demo mode, and shows the **After** state as routed components.
3. Point out the component routing table: the display, battery, storage, and other parts each have a different specialist destination. This is the differentiator: reuse before recycle.
4. Click **Use my location** to show the location state, then use the closest repair, recycler, or marketplace action. Mention that live GPS and directory lookup require localhost or HTTPS.
5. Publish a marketplace listing, reload the page, and show it in the local marketplace board. Scan another device and show scan history persists too.
6. Close with: "At scale, routing just 1% of the 48.2 million tonne gap means 482,000 tonnes kept in repair, resale, or verified recycling pathways."

## Demo data

The mock catalog covers smartphones, laptops, game consoles, tablets, digital cameras, smartwatches, and printers. Each category includes salvageable parts, estimated values, confidence, component-specific specialist routing, and three destination types in `app.js`. Uploaded images are classified in the browser by TensorFlow.js MobileNet; the UI shows the model's top label and match probability. If the model CDN is unavailable, the filename classifier is used as an explicit demo fallback. The **Use my location** action requests the browser's precise coordinates, then queries OpenStreetMap's Overpass directory for nearby repair and recycling places. If that directory is unavailable, the app keeps the GPS coordinates visible and retains the demo directory.

The impact proof uses the [Global E-waste Monitor 2024](https://ewastemonitor.info/the-global-e-waste-monitor-2024/) figures: 62 million tonnes generated in 2022 and 22.3% documented as collected and recycled. The app calculates `62M × (1 − 0.223) = 48.2M tonnes` outside formal collection.

Scan history and marketplace listings use `localStorage`, so they persist after reload in the same browser. Publishing a listing creates a QR claim ticket containing the listing payload; scanning it opens the claim dialog even on a second device. The demo marks the ticket claimed locally. A real multi-user marketplace needs a backend database, authenticated accounts, server-side listing validation, one-time claim settlement, and a moderation flow.

## Production path

- Replace `showResult`'s static catalog lookup with a vision model endpoint.
- Configure a server-side `POST /api/chat` endpoint that accepts `{ "message": "...", "device": "...", "history": [] }` and returns `{ "answer": "..." }`. Keep the provider API key on the server; the browser falls back to local guidance when the endpoint is unavailable.
- Pickup requests use a `mailto:` handoff so users can send the collected details through their configured email client. Replace this with an authenticated mail service for automatic delivery.
- Add image upload storage and privacy-conscious deletion rules.
- Use geolocation only after consent, then query a certified recycler / repair cafe directory.
- Add a marketplace claim flow, device data-wipe guidance, and accessibility testing.
- Deploy as a static site on GitHub Pages, Netlify, or Vercel.

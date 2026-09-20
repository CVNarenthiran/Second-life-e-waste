const catalog = {
  phone: {
    name: 'Smartphone', confidence: '94%', value: 'High value', total: '$80', note: '7 components worth saving', art: 'phone-art',
    parts: [['▣', 'OLED display', 'Still bright and responsive', '$32'], ['◉', 'Lithium battery', 'Check for swelling first', '$18'], ['◌', 'Camera module', 'Good for maker projects', '$12'], ['⌁', 'Rare earth magnets', 'Small but useful', '$6'], ['◈', 'Charging port', 'Useful board-level repair part', '$5'], ['▤', 'Speaker pair', 'Test before removing', '$4'], ['◇', 'Vibration motor', 'Works in small projects', '$3']],
    destinations: [['REPAIR CAFE', 'Mobile Mend', 'Smartphone repair collective · Open today', '0.6 mi', 'Free drop-off'], ['CERTIFIED RECYCLER', 'GreenLoop Electronics', 'R2-certified processing', '2.4 mi', 'Book a drop-off'], ['COMMUNITY MARKETPLACE', 'Parts people nearby', '3 active requests for parts', 'Online', 'List for $68']]
  },
  laptop: {
    name: 'Laptop computer', confidence: '91%', value: 'Very high value', total: '$148', note: '8 components worth saving', art: 'laptop-art',
    parts: [['▱', 'LCD display', 'Check for cracks or lines', '$48'], ['▣', 'Memory (RAM)', 'Compatible with many builds', '$26'], ['◉', 'Battery pack', 'Recycle if swollen', '$22'], ['⌁', 'SSD storage', 'Wipe data before reuse', '$18'], ['◈', 'Keyboard assembly', 'Useful replacement part', '$12'], ['▤', 'Trackpad', 'Works if cable is intact', '$9'], ['◇', 'Wi-Fi card', 'Good for compatible builds', '$8'], ['▰', 'Cooling fan', 'Clean before re-use', '$5']],
    destinations: [['REPAIR CAFE', 'Laptop Lab', 'Laptop repair collective · Open today', '0.9 mi', 'Free drop-off'], ['CERTIFIED RECYCLER', 'GreenLoop Electronics', 'R2-certified processing', '2.4 mi', 'Book a drop-off'], ['COMMUNITY MARKETPLACE', 'MakerMatch', '8 active requests for parts', 'Online', 'List for $114']]
  },
  console: {
    name: 'Game console', confidence: '88%', value: 'Good value', total: '$103', note: '7 components worth saving', art: 'console-art',
    parts: [['▰', 'Optical drive', 'Useful replacement part', '$29'], ['◈', 'Power supply', 'Test before reuse', '$22'], ['▣', 'Cooling fan', 'Clean and re-use', '$15'], ['⌁', 'Controller ports', 'Easy to salvage', '$10'], ['▤', 'Hard drive', 'Wipe data before reuse', '$12'], ['◇', 'Wireless board', 'Useful for repairs', '$8'], ['◉', 'Heat sink', 'Recover the metal safely', '$7']],
    destinations: [['REPAIR CAFE', 'Console Clinic', 'Game console repair collective · Open today', '1.1 mi', 'Free drop-off'], ['CERTIFIED RECYCLER', 'CircuitCycle', 'Local certified recycler', '3.1 mi', 'Book a drop-off'], ['COMMUNITY MARKETPLACE', 'Parts people nearby', '2 active requests for parts', 'Online', 'List for $76']]
  },
  tablet: {
    name: 'Tablet', confidence: '92%', value: 'High value', total: '$92', note: '7 components worth saving', art: 'tablet-art',
    parts: [['▣', 'Touch display', 'Check touch response', '$38'], ['◉', 'Battery pack', 'Recycle if swollen', '$20'], ['◌', 'Rear camera', 'Useful for maker projects', '$10'], ['⌁', 'Charging port', 'Board-level repair part', '$8'], ['▤', 'Speakers', 'Test before removing', '$6'], ['◇', 'Wi-Fi board', 'Useful in compatible builds', '$6'], ['◈', 'Magnets', 'Recover from the cover', '$4']],
    destinations: [['REPAIR CAFE', 'Tablet Works', 'Tablet repair collective · Open today', '0.7 mi', 'Free drop-off'], ['CERTIFIED RECYCLER', 'GreenLoop Electronics', 'R2-certified processing', '2.4 mi', 'Book a drop-off'], ['COMMUNITY MARKETPLACE', 'Parts people nearby', '5 active requests for parts', 'Online', 'List for $92']]
  },
  camera: {
    name: 'Digital camera', confidence: '89%', value: 'Good value', total: '$71', note: '6 components worth saving', art: 'camera-art',
    parts: [['◉', 'Lens assembly', 'Valuable if glass is clear', '$25'], ['▣', 'Image sensor', 'Specialist repair part', '$18'], ['⌁', 'Memory card slot', 'Useful replacement part', '$9'], ['▤', 'Flash capacitor', 'Discharge before handling', '$8'], ['◇', 'LCD preview screen', 'Check for cracks', '$7'], ['◈', 'Focus motor', 'Good for small projects', '$4']],
    destinations: [['REPAIR CAFE', 'Lens Lab', 'Camera repair specialists · Open today', '1.0 mi', 'Free drop-off'], ['CERTIFIED RECYCLER', 'CircuitCycle', 'Local certified recycler', '3.1 mi', 'Book a drop-off'], ['COMMUNITY MARKETPLACE', 'Photo makers nearby', '4 active requests for parts', 'Online', 'List for $71']]
  },
  watch: {
    name: 'Smartwatch', confidence: '86%', value: 'Good value', total: '$46', note: '6 components worth saving', art: 'watch-art',
    parts: [['▣', 'OLED display', 'Check for burn-in', '$16'], ['◉', 'Battery cell', 'Handle with care', '$10'], ['◌', 'Heart-rate sensor', 'Useful wearable part', '$7'], ['⌁', 'Vibration motor', 'Works in small projects', '$5'], ['◇', 'Wireless coil', 'Useful for charging builds', '$4'], ['▤', 'Speaker and mic', 'Test before removing', '$4']],
    destinations: [['REPAIR CAFE', 'Wearable Workshop', 'Wearable repair specialists · Open today', '0.5 mi', 'Free drop-off'], ['CERTIFIED RECYCLER', 'GreenLoop Electronics', 'R2-certified processing', '2.4 mi', 'Book a drop-off'], ['COMMUNITY MARKETPLACE', 'Tiny tech makers', '2 active requests for parts', 'Online', 'List for $46']]
  },
  printer: {
    name: 'Printer', confidence: '84%', value: 'Useful value', total: '$58', note: '7 components worth saving', art: 'printer-art',
    parts: [['▰', 'Stepper motors', 'Useful for robotics builds', '$14'], ['◈', 'Power supply', 'Test before reuse', '$12'], ['▣', 'Print head', 'Compatible with some models', '$10'], ['⌁', 'Paper feed rollers', 'Easy replacement part', '$7'], ['◇', 'Control board', 'Repair and reuse', '$6'], ['▤', 'Linear rails', 'Useful hardware', '$5'], ['◉', 'Magnets and gears', 'Sort for maker projects', '$4']],
    destinations: [['REPAIR CAFE', 'Print & Make', 'Printer repair collective · Open today', '1.4 mi', 'Free drop-off'], ['CERTIFIED RECYCLER', 'CircuitCycle', 'Local certified recycler', '3.1 mi', 'Book a drop-off'], ['COMMUNITY MARKETPLACE', 'MakerMatch', '6 active requests for parts', 'Online', 'List for $58']]
  }
};

const result = document.querySelector('#result');
const fileInput = document.querySelector('#fileInput');
const dropzone = document.querySelector('#dropzone');
const uploadButton = document.querySelector('#uploadButton');
const locationButton = document.querySelector('#locationButton');
const locationStatus = document.querySelector('#locationStatus');
const actionDialog = document.querySelector('#actionDialog');
const dialogContent = document.querySelector('#dialogContent');
const uploadedImage = document.querySelector('#uploadedImage');
const modelStatus = document.querySelector('#modelStatus');
let activeDevice = 'phone';
let visionModel = null;
let modelReady = null;
const chatbotEndpoint = '/api/chat';

async function loadVisionModel() {
  try {
    visionModel = await mobilenet.load({ version: 2, alpha: 1.0 });
    modelStatus.innerHTML = '<i></i> On-device model ready';
  } catch {
    modelStatus.innerHTML = '<i></i> Demo fallback mode';
  }
}

function mapPredictionToDevice(predictions) {
  const labels = predictions.map((prediction) => prediction.className.toLowerCase()).join(' ');
  if (/laptop|notebook|computer/.test(labels)) return 'laptop';
  if (/printer/.test(labels)) return 'printer';
  if (/camera|reflex/.test(labels)) return 'camera';
  if (/watch|clock/.test(labels)) return 'watch';
  if (/tablet|ipad/.test(labels)) return 'tablet';
  if (/joystick|console|game/.test(labels)) return 'console';
  if (/phone|telephone|cellular/.test(labels)) return 'phone';
  return null;
}

async function classifyOnDevice(file) {
  if (!visionModel && modelReady) await modelReady;
  if (!visionModel) return null;
  const image = new Image();
  image.src = URL.createObjectURL(file);
  await new Promise((resolve, reject) => { image.onload = resolve; image.onerror = reject; });
  const predictions = await visionModel.classify(image, 3);
  URL.revokeObjectURL(image.src);
  const device = mapPredictionToDevice(predictions);
  return { device, prediction: predictions[0] };
}

function readStored(key) {
  try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch { return []; }
}

function writeStored(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function encodeTicketPayload(listing) {
  return btoa(unescape(encodeURIComponent(JSON.stringify(listing))));
}

function decodeTicketPayload(payload) {
  try { return JSON.parse(decodeURIComponent(escape(atob(payload)))); } catch { return null; }
}

function renderHistory() {
  const history = readStored('secondLifeScans');
  document.querySelector('#historyList').innerHTML = history.length ? history.map((scan) => `<article class="history-item"><div><strong>${scan.device}</strong><small>${scan.components} components · ${scan.value}</small></div><time>${scan.date}</time></article>`).join('') : '<p class="empty-state">Your completed scans will appear here.</p>';
}

function renderMarketplace() {
  const listings = readStored('secondLifeListings');
  document.querySelector('#marketplaceList').innerHTML = listings.length ? listings.map((listing) => `<article class="history-item"><div><strong>${listing.parts}</strong><small>${listing.device} · ${listing.price} · ${listing.email}</small></div><button class="claim-button" type="button" data-ticket="${listing.ticket}">Claim parts</button><time>${listing.date}</time></article>`).join('') : '<p class="empty-state">Publish a parts listing to see it here.</p>';
}

const routePools = {
  phone: [['DISPLAY REUSE', 'ScreenCycle', 'OLED displays and touch panels', '1.3 mi'], ['BATTERY SPECIALIST', 'VoltBack', 'Tested battery recovery', '1.8 mi'], ['MAKER PARTS', 'Camera Commons', 'Camera modules for prototypes', '2.1 mi'], ['MATERIALS RECOVERY', 'Magnet Loop', 'Rare earth material sorting', '2.6 mi'], ['BOARD REPAIR', 'PortLab', 'Charging port microsoldering', '2.9 mi'], ['AUDIO REUSE', 'Sound Salvage', 'Small speaker reuse', '3.2 mi'], ['MAKER PARTS', 'Motion Works', 'Vibration motor projects', '3.6 mi']],
  laptop: [['DISPLAY REUSE', 'Panel Pantry', 'Laptop screens for rebuilds', '1.1 mi'], ['COMPUTER PARTS', 'Memory Match', 'RAM reuse and testing', '1.5 mi'], ['BATTERY SPECIALIST', 'VoltBack Pro', 'Laptop battery diagnostics', '1.9 mi'], ['DATA RECOVERY', 'Wipe & Reuse', 'Secure storage wiping', '2.2 mi'], ['COMPUTER PARTS', 'Keycap Workshop', 'Keyboard replacement parts', '2.5 mi'], ['COMPUTER PARTS', 'Trackpad Trade', 'Input hardware reuse', '2.8 mi'], ['COMPUTER PARTS', 'Wireless Works', 'Wi-Fi card matching', '3.1 mi'], ['METAL RECOVERY', 'CoolCore', 'Laptop cooling hardware', '3.5 mi']],
  console: [['COMPUTER PARTS', 'Drive Forward', 'Optical drive repair parts', '1.4 mi'], ['CERTIFIED RECYCLER', 'PowerCycle', 'Console power supply testing', '1.7 mi'], ['COMPUTER PARTS', 'Airflow Lab', 'Fan cleaning and reuse', '2.0 mi'], ['BOARD REPAIR', 'Portsmith', 'Controller port repairs', '2.4 mi'], ['DATA RECOVERY', 'Wipe & Reuse', 'Secure storage wiping', '2.7 mi'], ['COMPUTER PARTS', 'Radio Relay', 'Wireless board matching', '3.0 mi'], ['METAL RECOVERY', 'HeatBank', 'Copper and aluminum recovery', '3.4 mi']],
  tablet: [['DISPLAY REUSE', 'TouchBack', 'Tablet display refurbishment', '1.0 mi'], ['BATTERY SPECIALIST', 'CellSafe', 'Battery testing and recovery', '1.6 mi'], ['MAKER PARTS', 'Pocket Optics', 'Small camera modules', '2.0 mi'], ['BOARD REPAIR', 'PortLab Mobile', 'Charging port microsoldering', '2.3 mi'], ['AUDIO REUSE', 'Sound Salvage Mini', 'Compact speaker reuse', '2.7 mi'], ['COMPUTER PARTS', 'Wireless Works Mobile', 'Wi-Fi board matching', '3.0 mi'], ['MATERIALS RECOVERY', 'Magnet Loop Mobile', 'Magnet recovery', '3.3 mi']],
  camera: [['CAMERA REPAIR', 'Lens Exchange', 'Lens assembly repair', '0.9 mi'], ['CAMERA REPAIR', 'Sensor Station', 'Image sensor specialists', '1.3 mi'], ['BOARD REPAIR', 'Slot Savers', 'Memory card slot repair', '1.8 mi'], ['CERTIFIED RECYCLER', 'Capacitor Care', 'Safe capacitor handling', '2.2 mi'], ['DISPLAY REUSE', 'Preview Panel', 'Camera LCD reuse', '2.6 mi'], ['MAKER PARTS', 'MicroMotion', 'Focus motor projects', '3.0 mi']],
  watch: [['DISPLAY REUSE', 'Tiny Display Co', 'Wearable screen recovery', '0.7 mi'], ['BATTERY SPECIALIST', 'CellSafe Wearables', 'Small battery handling', '1.1 mi'], ['MAKER PARTS', 'Sensor Commons', 'Wearable sensor reuse', '1.5 mi'], ['MAKER PARTS', 'Vibe Lab', 'Vibration motor projects', '1.9 mi'], ['WIRELESS PARTS', 'Coil Collective', 'Wireless charging coils', '2.3 mi'], ['AUDIO REUSE', 'Micro Audio', 'Tiny speaker and mic reuse', '2.8 mi']],
  printer: [['MAKER PARTS', 'Robot Motion', 'Stepper motors for robotics', '1.2 mi'], ['CERTIFIED RECYCLER', 'PowerCycle Print', 'Printer power supplies', '1.6 mi'], ['MAKER PARTS', 'Ink & Motion', 'Print head reuse', '2.0 mi'], ['MACHINE PARTS', 'Roller Rescue', 'Paper feed hardware', '2.4 mi'], ['BOARD REPAIR', 'Control Commons', 'Printer control boards', '2.8 mi'], ['METAL RECOVERY', 'Rail Share', 'Linear rail reuse', '3.2 mi'], ['MAKER PARTS', 'Gear Garden', 'Small motors and gears', '3.6 mi']]
};

function classifyFilename(filename) {
  if (filename.includes('laptop') || filename.includes('computer')) return 'laptop';
  if (filename.includes('console') || filename.includes('playstation') || filename.includes('xbox')) return 'console';
  if (filename.includes('tablet') || filename.includes('ipad')) return 'tablet';
  if (filename.includes('camera') || filename.includes('canon') || filename.includes('nikon')) return 'camera';
  if (filename.includes('watch') || filename.includes('fitbit')) return 'watch';
  if (filename.includes('printer')) return 'printer';
  return 'phone';
}

function openActionDialog(mode, place) {
  if (mode === 'listing') {
    dialogContent.innerHTML = `<p class="eyebrow">Community marketplace</p><h2>List parts from your ${catalog[activeDevice].name.toLowerCase()}</h2><p class="dialog-copy">Tell local repairers what you have. Your listing will be visible to nearby makers and repair shops.</p><form id="listingForm"><label>What are you listing?<input name="parts" value="Salvageable components" required></label><label>Asking price<input name="price" value="${catalog[activeDevice].total}" required></label><label>Your email<input name="email" type="email" placeholder="you@example.com" required></label><button class="dialog-submit" type="submit">Publish listing</button></form>`;
    document.querySelector('#listingForm').addEventListener('submit', (event) => { event.preventDefault(); const form = new FormData(event.currentTarget); const ticket = `SL-${Date.now().toString(36).toUpperCase()}`; const listing = { parts: form.get('parts'), price: form.get('price'), email: form.get('email'), device: catalog[activeDevice].name, date: new Date().toLocaleDateString(), ticket }; const listings = readStored('secondLifeListings'); listings.unshift(listing); writeStored('secondLifeListings', listings.slice(0, 12)); renderMarketplace(); dialogContent.innerHTML = `<div class="dialog-success"><span>✓</span><h2>Claim ticket ready.</h2><p>Show this QR code to a repairer or scan it from another device to claim the parts.</p><canvas id="claimQr" aria-label="QR claim ticket"></canvas><strong class="ticket-code">${ticket}</strong><button class="dialog-submit" type="button" id="successClose">Done</button></div>`; const claimUrl = `${location.origin}${location.pathname}#claim=${encodeURIComponent(`${ticket}.${encodeTicketPayload(listing)}`)}`; if (window.QRCode) QRCode.toCanvas(document.querySelector('#claimQr'), claimUrl, { width: 180, margin: 2 }); document.querySelector('#successClose').addEventListener('click', () => actionDialog.close()); });
  } else if (mode === 'claim') {
    const [ticket, payload] = place.split('.');
    const listing = readStored('secondLifeListings').find((item) => item.ticket === ticket) || decodeTicketPayload(payload);
    if (!listing) { dialogContent.innerHTML = '<div class="dialog-success"><h2>Ticket not found.</h2><p>This claim ticket may have expired.</p></div>'; }
    else { dialogContent.innerHTML = `<p class="eyebrow">Second Life claim ticket</p><h2>${listing.parts}</h2><p class="dialog-copy">${listing.device} · ${listing.price}<br>Contact ${listing.email} to arrange collection.</p><button class="dialog-submit" type="button" id="claimSubmit">Claim these parts</button>`; document.querySelector('#claimSubmit').addEventListener('click', () => { const listings = readStored('secondLifeListings').filter((item) => item.ticket !== listing.ticket); writeStored('secondLifeListings', listings); renderMarketplace(); dialogContent.innerHTML = '<div class="dialog-success"><span>✓</span><h2>Parts claimed.</h2><p>The claim ticket is now marked as used in this browser demo.</p></div>'; }); }
  } else {
    dialogContent.innerHTML = `<p class="eyebrow">Repair cafe</p><h2>${place}</h2><p class="dialog-copy">A local repair collective that can inspect your device and help recover usable parts.</p><div class="contact-detail"><span>☎</span><div><strong>(718) 555-0148</strong><small>Call ahead for intake hours</small></div></div><div class="contact-detail"><span>✉</span><div><strong>hello@${place.toLowerCase().replace(/[^a-z0-9]+/g, '')}.org</strong><small>Replies within one business day</small></div></div><div class="contact-detail"><span>◷</span><div><strong>Tue–Sat · 10am–6pm</strong><small>Walk-ins welcome</small></div></div><a class="dialog-submit dialog-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}" target="_blank" rel="noopener">Open directions ↗</a>`;
  }
  actionDialog.showModal();
}

function distanceInMiles(from, to) {
  const radius = 3958.8;
  const latDelta = (to.lat - from.lat) * Math.PI / 180;
  const lonDelta = (to.lon - from.lon) * Math.PI / 180;
  const a = Math.sin(latDelta / 2) ** 2 + Math.cos(from.lat * Math.PI / 180) * Math.cos(to.lat * Math.PI / 180) * Math.sin(lonDelta / 2) ** 2;
  return radius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function destinationMarkup(destinations) {
  return destinations.map((item, index) => { const name = item.name || item[1]; const action = item.action || item[4]; return `<article class="destination ${index === 0 ? 'recommended' : ''}">${index === 0 ? '<span class="recommend-tag">CLOSEST OPTION</span>' : ''}<span class="destination-type">${item.type || item[0]}</span><h4>${name}</h4><p>${item.description || item[2]}</p><div class="destination-meta"><span>${item.distance || item[3]}</span><button class="destination-action" type="button" data-action="${action}" data-place="${name}">${action} <span aria-hidden="true">↗</span></button></div></article>`; }).join('');
}

function renderDemoDestinations() {
  document.querySelector('#destinationList').innerHTML = destinationMarkup(catalog[activeDevice].destinations.map((item) => ({ type: item[0], name: item[1], description: item[2], distance: item[3], action: item[4] })));
  renderComponentRoutes();
}

function renderComponentRoutes() {
  const parts = catalog[activeDevice].parts;
  const routes = routePools[activeDevice];
  document.querySelector('#routingSummary').textContent = `${parts.length} parts matched to ${routes.length} specialist destinations.`;
  document.querySelector('#routingList').innerHTML = parts.map((part, index) => {
    const route = routes[index];
    return `<article class="routing-row"><span class="routing-icon">${part[0]}</span><div class="routing-part"><strong>${part[1]}</strong><small>${part[2]}</small></div><span class="routing-arrow">→</span><div class="routing-shop"><span>${route[0]}</span><strong>${route[1]}</strong><small>${route[2]}</small></div><span class="routing-distance">${route[3]}</span></article>`;
  }).join('');
}

async function findNearbyDestinations(position) {
  const query = `[out:json][timeout:12];(nwr(around:12000,${position.lat},${position.lon})[shop=recycle];nwr(around:12000,${position.lat},${position.lon})[amenity=recycling_centre];nwr(around:12000,${position.lat},${position.lon})[shop=repair];);out center tags;`;
  const response = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error('Nearby directory unavailable');
  const data = await response.json();
  return data.elements.filter((place) => place.tags?.name).map((place) => {
    const lat = place.lat || place.center?.lat;
    const lon = place.lon || place.center?.lon;
    const repair = place.tags.shop === 'repair';
    return { type: repair ? 'REPAIR CAFE' : 'CERTIFIED RECYCLER', name: place.tags.name, description: place.tags['addr:street'] || 'Nearby location · Verify hours before visiting', distance: `${distanceInMiles(position, { lat, lon }).toFixed(1)} mi`, action: repair ? 'Contact venue' : 'Book a drop-off' };
  }).sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance)).slice(0, 3);
}

function useCurrentLocation() {
  if (!navigator.geolocation) { locationStatus.textContent = 'Location is not supported by this browser.'; return; }
  locationButton.disabled = true;
  locationButton.innerHTML = '<span>…</span> Finding you';
  locationStatus.textContent = 'Waiting for location permission…';
  navigator.geolocation.getCurrentPosition(async ({ coords }) => {
    const userLocation = { lat: coords.latitude, lon: coords.longitude };
    try {
      const nearby = await findNearbyDestinations(userLocation);
      if (!nearby.length) throw new Error('No nearby results');
      document.querySelector('#destinationList').innerHTML = destinationMarkup(nearby);
      locationStatus.textContent = `Live results within 12 miles · ${coords.latitude.toFixed(3)}, ${coords.longitude.toFixed(3)}`;
    } catch {
      locationStatus.textContent = `GPS set · live directory unavailable · ${coords.latitude.toFixed(3)}, ${coords.longitude.toFixed(3)}`;
    }
    locationButton.disabled = false;
    locationButton.innerHTML = '<span>✓</span> Location updated';
  }, () => {
    locationStatus.textContent = 'Permission was not granted. Showing demo destinations.';
    locationButton.disabled = false;
    locationButton.innerHTML = '<span>⌖</span> Try again';
  }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 });
}

function featureStorage(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}

function renderProfileDashboard() {
  const profile = featureStorage('secondLifeProfile', null);
  const scans = readStored('secondLifeScans');
  const listings = readStored('secondLifeListings');
  const pickup = featureStorage('secondLifePickup', null);
  const points = scans.length * 25 + listings.length * 40 + (pickup ? 50 : 0);
  const dashboard = document.querySelector('#profileDashboard');
  if (!profile?.name) {
    dashboard.innerHTML = '<div class="profile-empty"><div><span class="tiny-label">WELCOME TO SECOND LIFE</span><h3>Create your profile to unlock your dashboard.</h3><p>Your scans, rewards, pickup status, and preferences will appear here.</p></div><button class="dialog-submit" type="button" data-feature="profile">Create profile</button></div>';
    return;
  }
  dashboard.innerHTML = `<div class="profile-dashboard-head"><div class="profile-avatar">${profile.name.charAt(0).toUpperCase()}</div><div><span class="tiny-label">YOUR DASHBOARD</span><h3>Welcome back, ${profile.name}.</h3><p>${profile.email || 'Add an email in your profile to receive updates.'}</p></div><button class="small-action" type="button" data-feature="profile">Edit profile</button></div><div class="dashboard-stats"><div><strong>${points}</strong><small>circular points</small></div><div><strong>${scans.length}</strong><small>devices scanned</small></div><div><strong>${listings.length}</strong><small>parts listed</small></div><div><strong>${pickup ? 'Active' : 'None'}</strong><small>pickup request</small></div></div>`;
}

function chatAnswer(question) {
  const device = catalog[activeDevice].name;
  if (/wipe|data|privacy|reset|account/i.test(question)) return `For your ${device}, protect your data before sharing it: back up photos and files, sign out of Apple, Google, Microsoft, and messaging accounts, disable Find My or device tracking, remove SIM and memory cards, then complete the manufacturer's factory reset. If the device cannot boot, remove the storage drive or ask a certified data-destruction provider. Never send passwords or personal data in chat.`;
  if (/battery|swollen|hot|fire|safe/i.test(question)) return 'Safety comes first. Do not charge, puncture, bend, open, or mail a swollen, hot, leaking, or damaged lithium battery. Move away from flammable materials if it is safe, keep people clear, and contact local hazardous-waste or emergency services for immediate danger. A qualified technician should handle battery removal.';
  if (/repair|open|fix|broken|screen|keyboard/i.test(question)) return `For a ${device}, photograph the condition, find the model number, power it down, and use the least destructive repair path first. Check cables and connectors before replacing parts. Wear eye protection, use the correct tools, and stop when you meet a swollen battery, cracked glass, or unknown high-voltage component. A repair cafe can test the device safely.`;
  if (/recycle|trash|landfill|dispose|where/i.test(question)) return 'Do not place electronics or batteries in household trash. Use the destination cards in your report to contact a repair cafe, certified recycler, or parts marketplace. Keep batteries separate, tape exposed terminals, and confirm the provider accepts your device before travelling.';
  if (/value|sell|price|part|market/i.test(question)) return `The current demo estimate for your ${device} is ${catalog[activeDevice].total}. The report breaks that value into reusable parts. Test each part, describe its condition honestly, remove personal data, and list it through the marketplace so a nearby maker or repairer can claim it.`;
  return `I can help with ${device} repair safety, data wiping, component value, pickup, or responsible recycling. Try one of the quick questions below, or ask something specific such as “How do I wipe my data?” or “Is this battery safe to remove?”`;
}

async function getChatbotAnswer(question) {
  try {
    const response = await fetch(chatbotEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: question, device: catalog[activeDevice].name, history: featureStorage('secondLifeChat', []) }) });
    if (!response.ok) throw new Error('Chat service unavailable');
    const data = await response.json();
    if (typeof data.answer !== 'string' || !data.answer.trim()) throw new Error('Invalid chat response');
    return data.answer.trim();
  } catch {
    return chatAnswer(question);
  }
}

function emailLink(subject, body, label = 'Email these details') {
  return `<a class="dialog-submit dialog-link" href="mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}">${label}</a>`;
}

function openFeature(feature) {
  const device = catalog[activeDevice];
  const scans = readStored('secondLifeScans');
  const listings = readStored('secondLifeListings');
  const pickup = featureStorage('secondLifePickup', null);
  const profile = featureStorage('secondLifeProfile', { name: '', email: '' });
  const checklist = featureStorage('secondLifeWipe', []);
  const notifications = featureStorage('secondLifeNotifications', { pickup: true, marketplace: true, impact: true });
  const points = scans.length * 25 + listings.length * 40 + (pickup ? 50 : 0);
  const dialog = (title, body) => { dialogContent.innerHTML = `<p class="eyebrow">Second Life workspace</p><h2>${title}</h2>${body}`; actionDialog.showModal(); };
  if (feature === 'value') dialog('Estimated component value', `<p class="dialog-copy">${device.name} has ${device.parts.length} components with an estimated reuse value of <strong>${device.total}</strong>.</p><ul class="feature-list">${device.parts.map((part) => `<li>${part[1]} · ${part[3]}</li>`).join('')}</ul>`);
  if (feature === 'repair') dialog('Repair instructions', `<p class="dialog-copy">Start with the least destructive option and stop if the battery is swollen or damaged.</p><ol class="feature-list"><li>Photograph the device and record its model.</li><li>Power it down and disconnect all cables.</li><li>Remove the back cover only with the correct tools.</li><li>Test reusable parts before listing them.</li><li>Send batteries and broken boards to a certified recycler.</li></ol>`);
  if (feature === 'marketplace') openActionDialog('listing', 'Community marketplace');
  if (feature === 'pickup') dialog('Request a pickup', `<form class="feature-form" id="pickupForm"><label>Pickup address<input name="address" required placeholder="Street and neighborhood"></label><label>Preferred date<input name="date" type="date" required></label><label>What should we collect?<input name="items" required value="${device.name}"></label><button class="dialog-submit" type="submit">Submit pickup request</button></form>`);
  if (feature === 'environment') dialog('Your environmental impact', `<div class="feature-stat-grid"><div class="feature-stat"><strong>${(device.parts.length * 0.18).toFixed(1)} kg</strong><small>estimated material kept in use</small></div><div class="feature-stat"><strong>${device.parts.length}</strong><small>components routed</small></div><div class="feature-stat"><strong>${scans.length}</strong><small>scans completed</small></div></div><p class="dialog-copy">These are demo estimates for comparison, not a certified lifecycle assessment.</p>`);
  if (feature === 'wipe') dialog('Data-wipe checklist', `<form class="feature-form" id="wipeForm"><label class="feature-check"><input type="checkbox" name="account" ${checklist.includes('account') ? 'checked' : ''}> Sign out of accounts and remove device tracking</label><label class="feature-check"><input type="checkbox" name="backup" ${checklist.includes('backup') ? 'checked' : ''}> Back up photos, files, and authenticator codes</label><label class="feature-check"><input type="checkbox" name="reset" ${checklist.includes('reset') ? 'checked' : ''}> Perform a factory reset</label><label class="feature-check"><input type="checkbox" name="storage" ${checklist.includes('storage') ? 'checked' : ''}> Remove SIM, memory cards, and storage drives</label><button class="dialog-submit" type="submit">Save checklist</button></form>`);
  if (feature === 'community') dialog('Community board', `<div id="communityPosts">${featureStorage('secondLifePosts', []).map((post) => `<p class="chat-message"><strong>${post.name}</strong><br>${post.text}</p>`).join('') || '<p class="dialog-copy">Be the first to share a repair tip.</p>'}</div><form class="feature-form" id="communityForm"><label>Your tip or reuse win<textarea name="text" required placeholder="Share something useful..."></textarea></label><button class="dialog-submit" type="submit">Post to community</button></form>`);
  if (feature === 'rewards') dialog('Rewards progress', `<div class="feature-stat-grid"><div class="feature-stat"><strong>${points}</strong><small>circular points</small></div><div class="feature-stat"><strong>${scans.length}</strong><small>devices scanned</small></div><div class="feature-stat"><strong>${points >= 100 ? 'Maker' : 'Starter'}</strong><small>current badge</small></div></div><p class="dialog-copy">Scan a device for 25 points, publish parts for 40, and complete a pickup request for 50.</p>`);
  if (feature === 'chatbot') { const history = featureStorage('secondLifeChat', []); dialog('Ask Second Life', `<p class="dialog-copy">Ask anything about your device, repair, reuse, safety, or recycling. The app uses the secure AI service when configured and falls back to local guidance when offline.</p><div class="chat-log" id="chatLog">${history.map((message) => `<div class="chat-message ${message.role === 'user' ? 'user' : ''}">${escapeHTML(message.text)}</div>`).join('') || '<div class="chat-message">Hi. I can help with repair safety, data wiping, component value, pickup, or recycling.</div>'}</div><div class="chat-suggestions"><button type="button" class="chat-suggestion" data-question="How do I wipe my data?">Data wiping</button><button type="button" class="chat-suggestion" data-question="Is my battery safe to remove?">Battery safety</button><button type="button" class="chat-suggestion" data-question="Where should I recycle this?">Recycling</button></div><form class="feature-form" id="chatForm"><input name="question" required placeholder="Ask any question"><button class="dialog-submit" type="submit">Ask</button></form>`); }
  if (feature === 'admin') dialog('Admin dashboard', `<div class="feature-stat-grid"><div class="feature-stat"><strong>${scans.length}</strong><small>total scans</small></div><div class="feature-stat"><strong>${listings.length}</strong><small>marketplace listings</small></div><div class="feature-stat"><strong>${pickup ? 1 : 0}</strong><small>pickup requests</small></div></div><p class="dialog-copy">Demo metrics are calculated from this browser only. Production analytics should use authenticated, privacy-conscious server events.</p>`);
  if (feature === 'trace') dialog('Device traceability', `<div class="feature-timeline"><p><strong>Scanned</strong><br>${device.name} identified locally</p><p><strong>Components assessed</strong><br>${device.parts.length} possible reuse destinations matched</p><p><strong>Next step</strong><br>Choose repair, marketplace, pickup, or certified recycling</p></div>`);
  if (feature === 'notifications') dialog('Notification preferences', `<form class="feature-form" id="notificationForm"><label class="feature-check"><input type="checkbox" name="pickup" ${notifications.pickup ? 'checked' : ''}> Pickup status updates</label><label class="feature-check"><input type="checkbox" name="marketplace" ${notifications.marketplace ? 'checked' : ''}> Marketplace claim updates</label><label class="feature-check"><input type="checkbox" name="impact" ${notifications.impact ? 'checked' : ''}> Monthly impact summary</label><button class="dialog-submit" type="submit">Save preferences</button></form>`);
  if (feature === 'profile') dialog(profile.name ? 'Your profile' : 'Create your profile', `<form class="feature-form" id="profileForm"><label>Name<input name="name" value="${profile.name}" placeholder="Your name" required></label><label>Email<input name="email" type="email" value="${profile.email}" placeholder="you@example.com" required></label><button class="dialog-submit" type="submit">${profile.name ? 'Save profile' : 'Create profile'}</button></form>`);
}

function showResult(deviceKey, fileName = '', saveScan = true, modelPrediction = null) {
  activeDevice = deviceKey;
  const device = catalog[deviceKey];
  document.querySelector('#deviceName').textContent = device.name;
  document.querySelector('#confidence').textContent = modelPrediction ? `On-device match ${Math.round(modelPrediction.probability * 100)}%` : `AI confidence ${device.confidence}`;
  document.querySelector('#modelEvidence').textContent = modelPrediction ? `MobileNet saw: ${modelPrediction.className}` : 'Demo catalog classification';
  document.querySelector('#valuePill').textContent = device.value;
  document.querySelector('#estimatedValue').innerHTML = `Est. value <b>${device.total}</b>`;
  document.querySelector('#salvageNote').textContent = device.note;
  const image = document.querySelector('#deviceImage');
  image.querySelector('.device-illustration').className = `device-illustration ${device.art}`;
  if (fileName) { image.querySelector('.image-label').textContent = 'IMAGE RECEIVED'; document.querySelector('#beforeLabel').textContent = fileName; } else { image.querySelector('.image-label').textContent = 'SCAN COMPLETE'; document.querySelector('#beforeLabel').textContent = 'Broken device in your hands'; }
  uploadedImage.hidden = !fileName;
  if (!fileName) uploadedImage.removeAttribute('src');
  document.querySelector('#partsList').innerHTML = device.parts.map(([icon, name, detail, price]) => `<div class="part-item"><span class="part-icon">${icon}</span><div><strong>${name}</strong><small>${detail}</small></div><b>${price}</b></div>`).join('');
  renderDemoDestinations();
  document.querySelector('#afterLabel').textContent = `${device.parts.length} components routed locally`;
  document.querySelector('#afterDetail').textContent = `${device.total} estimated reuse value · recycle what remains.`;
  if (saveScan) { const history = readStored('secondLifeScans'); history.unshift({ device: device.name, components: device.parts.length, value: device.total, date: new Date().toLocaleDateString() }); writeStored('secondLifeScans', history.slice(0, 12)); renderHistory(); }
  result.classList.add('visible');
  result.scrollIntoView({ behavior: 'auto', block: 'start' });
}

uploadButton.addEventListener('click', (event) => { event.stopPropagation(); fileInput.click(); });
dropzone.addEventListener('click', () => fileInput.click());
dropzone.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') fileInput.click(); });
fileInput.addEventListener('change', async () => { if (fileInput.files[0]) { const file = fileInput.files[0]; uploadedImage.src = URL.createObjectURL(file); const result = await classifyOnDevice(file).catch(() => null); showResult(result?.device || classifyFilename(file.name.toLowerCase()), file.name, true, result?.prediction); } });
dropzone.addEventListener('dragover', (event) => { event.preventDefault(); dropzone.classList.add('dragging'); });
dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragging'));
dropzone.addEventListener('drop', async (event) => { event.preventDefault(); dropzone.classList.remove('dragging'); if (event.dataTransfer.files[0]) { const file = event.dataTransfer.files[0]; uploadedImage.src = URL.createObjectURL(file); const result = await classifyOnDevice(file).catch(() => null); showResult(result?.device || classifyFilename(file.name.toLowerCase()), file.name, true, result?.prediction); } });
document.querySelectorAll('.sample-chip').forEach((button) => button.addEventListener('click', () => showResult(button.dataset.device)));
document.querySelector('#destinationList').addEventListener('click', (event) => {
  const actionButton = event.target.closest('.destination-action');
  if (!actionButton) return;
  const place = actionButton.dataset.place;
  const action = actionButton.dataset.action;
  if (action.toLowerCase().includes('book')) {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`, '_blank', 'noopener');
    actionButton.textContent = 'Opening directions ✓';
    locationStatus.textContent = `Directions opened for ${place}. Call ahead to reserve a drop-off time.`;
  } else if (action.toLowerCase().includes('list')) {
    openActionDialog('listing', place);
    actionButton.textContent = 'Listing form opened ✓';
    locationStatus.textContent = `Create a listing for ${place}.`;
  } else {
    openActionDialog('contact', place);
    actionButton.textContent = 'Contact panel opened ✓';
    locationStatus.textContent = `Contact details opened for ${place}.`;
  }
  actionButton.disabled = true;
});
document.querySelector('#marketplaceList').addEventListener('click', (event) => { const button = event.target.closest('.claim-button'); if (button) openActionDialog('claim', button.dataset.ticket); });
document.querySelector('#workspace').addEventListener('click', (event) => { const button = event.target.closest('[data-feature]'); if (!button) return; const profile = featureStorage('secondLifeProfile', null); if (!profile?.name && button.dataset.feature !== 'profile') { openFeature('profile'); return; } openFeature(button.dataset.feature); });
dialogContent.addEventListener('click', (event) => { const button = event.target.closest('.chat-suggestion'); if (button) { const input = document.querySelector('#chatForm input[name="question"]'); input.value = button.dataset.question; input.form.requestSubmit(); } });
dialogContent.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  const values = new FormData(form);
  if (form.id === 'pickupForm') { const request = { address: values.get('address'), date: values.get('date'), items: values.get('items'), status: 'Request received' }; localStorage.setItem('secondLifePickup', JSON.stringify(request)); const body = `Pickup request\nDevice: ${request.items}\nAddress: ${request.address}\nPreferred date: ${request.date}`; dialogContent.innerHTML = `<div class="dialog-success"><span>✓</span><h2>Pickup requested.</h2><p>Your request is saved in this browser. Email the details to a pickup provider to continue.</p>${emailLink('Second Life pickup request', body)}</div>`; renderProfileDashboard(); }
  if (form.id === 'wipeForm') { localStorage.setItem('secondLifeWipe', JSON.stringify([...form.querySelectorAll('input:checked')].map((input) => input.name))); dialogContent.innerHTML = '<div class="dialog-success"><span>✓</span><h2>Checklist saved.</h2><p>Keep the device with you until every privacy step is complete.</p></div>'; }
  if (form.id === 'communityForm') { const posts = featureStorage('secondLifePosts', []); posts.unshift({ name: featureStorage('secondLifeProfile', {}).name || 'Community member', text: values.get('text') }); localStorage.setItem('secondLifePosts', JSON.stringify(posts.slice(0, 20))); dialogContent.innerHTML = '<div class="dialog-success"><span>✓</span><h2>Posted to community.</h2><p>Your repair knowledge can help someone nearby.</p></div>'; }
  if (form.id === 'notificationForm') { localStorage.setItem('secondLifeNotifications', JSON.stringify({ pickup: form.pickup.checked, marketplace: form.marketplace.checked, impact: form.impact.checked })); dialogContent.innerHTML = '<div class="dialog-success"><span>✓</span><h2>Preferences saved.</h2><p>Your notification choices are stored locally for this demo.</p></div>'; }
  if (form.id === 'profileForm') { localStorage.setItem('secondLifeProfile', JSON.stringify({ name: values.get('name'), email: values.get('email') })); renderProfileDashboard(); dialogContent.innerHTML = '<div class="dialog-success"><span>✓</span><h2>Profile saved.</h2><p>Your dashboard is ready for scans, rewards, pickups, and marketplace activity.</p></div>'; }
  if (form.id === 'chatForm') {
    const log = document.querySelector('#chatLog');
    const question = values.get('question');
    const submitButton = form.querySelector('button[type="submit"]'); submitButton.disabled = true; submitButton.textContent = 'Thinking...';
    const answerText = await getChatbotAnswer(question);
    const history = featureStorage('secondLifeChat', []); history.push({ role: 'user', text: question }, { role: 'assistant', text: answerText }); localStorage.setItem('secondLifeChat', JSON.stringify(history.slice(-12)));
    const userMessage = document.createElement('div'); userMessage.className = 'chat-message user'; userMessage.textContent = question;
    const answer = document.createElement('div'); answer.className = 'chat-message'; answer.textContent = answerText;
    log.append(userMessage, answer); form.reset(); submitButton.disabled = false; submitButton.textContent = 'Ask'; log.scrollTop = log.scrollHeight;
  }
});
document.querySelector('#dialogClose').addEventListener('click', () => actionDialog.close());
actionDialog.addEventListener('click', (event) => { if (event.target === actionDialog) actionDialog.close(); });
document.querySelector('#clearHistory').addEventListener('click', () => { localStorage.removeItem('secondLifeScans'); renderHistory(); });
document.querySelector('#rescanButton').addEventListener('click', () => window.scrollTo({ top: document.querySelector('#scan').offsetTop - 80, behavior: 'smooth' }));
locationButton.addEventListener('click', useCurrentLocation);
document.querySelector('#aboutButton').addEventListener('click', () => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }));
renderHistory();
renderMarketplace();
renderProfileDashboard();
showResult('phone', '', false);
modelReady = loadVisionModel();
const claimTicket = new URLSearchParams(location.hash.replace('#', '?')).get('claim');
if (claimTicket) setTimeout(() => openActionDialog('claim', claimTicket), 500);
if (!featureStorage('secondLifeProfile', null)?.name) setTimeout(() => openFeature('profile'), 350);

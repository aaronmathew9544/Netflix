# Netflix Clone — React.js Web App

A fully interactive Netflix-style movie browsing application built with **React.js 18** and **Zustand** state management. Created as a placement interview prototype.

![Netflix Clone](https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&q=80)

---

## Live Demo

> Run locally with `npm start` — see setup instructions below.

---

## Features

-  **Hover Preview** — Hovering a movie card plays a live video preview in the hero background
-  **Click to Play** — Clicking a card opens a full-screen video player
-  **Back Button** — Transparent back button appears on mouse move, returns to browse page
-  **Custom Video Player** — Progress bar, play/pause, volume, fullscreen, time display
-  **Custom Cursor** — Red dot cursor that expands on interactive elements
-  **Fully Responsive** — Works on mobile, tablet, and desktop
-  **Smooth Animations** — Fade/scale transitions between browse and player
-  **9 Mock Movies** — Complete with thumbnails, metadata, and sample video streams

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React.js 18** | Component-based UI framework |
| **Zustand** | Lightweight global state management |
| **Custom CSS** | Animations, hover effects, responsive layout |
| **Bebas Neue + Barlow** | Typography — cinematic display + clean body font |
| **Google CDN MP4s** | Free sample videos simulating real streaming |

---

## Project Structure

```
netflix-clone/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed top navigation bar
│   │   ├── Hero.jsx         # Hero banner with background video preview
│   │   ├── MovieCard.jsx    # Movie card with hover + click interactions
│   │   └── Player.jsx       # Full-screen video player with controls
│   ├── App.js               # Main app layout + custom cursor
│   ├── App.css              # All component styles
│   ├── index.js             # React entry point
│   ├── index.css            # Global styles + animations
│   ├── store.js             # Zustand global state store
│   └── movies.js            # 9 mock movies — metadata + video URLs
└── package.json
```

---

## Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org) (LTS version recommended)

### Steps

**1. Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/netflix-clone.git
cd netflix-clone
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm start
```

**4. Open in browser**
```
http://localhost:3000
```

**5. Build for production**
```bash
npm run build
```

---

## How to Use

| Action | Result |
|---|---|
| Hover over a movie card | Preview video plays in hero background |
| Click a movie card | Full-screen player opens, video plays |
| Move mouse in player | Controls + back button appear |
| Click back button | Returns to browse page |
| Resize browser | Responsive layout adapts to screen size |

---

## State Flow (Zustand)

```
User hovers card
  → setHoveredMovie(movie)
  → Hero reads state → background video changes

User clicks card
  → playMovie(movie)
  → Main page fades out → Player appears → video plays

User clicks back
  → goBack()
  → Player fades out → Main page returns
```

---

## Component Breakdown

### `store.js` — Zustand State
```javascript
const useStore = create((set) => ({
  hoveredMovie: null,   // tracks which card is hovered
  playingMovie: null,   // tracks which movie is playing fullscreen
  setHoveredMovie: (movie) => set({ hoveredMovie: movie }),
  playMovie: (movie) => set({ playingMovie: movie }),
  goBack: () => set({ playingMovie: null }),
}));
```

### `MovieCard.jsx` — Hover + Click Logic
- `useRef` for direct video element access
- `useEffect` watches hover state — plays or pauses preview video
- 200ms timeout prevents accidental triggers while scrolling
- CSS `hovered` class triggers scale animation and info panel

### `Hero.jsx` — Background Preview
- Reads `hoveredMovie` from Zustand
- `useEffect` switches background video when hovered movie changes
- Falls back to featured movie when nothing is hovered

### `Player.jsx` — Video Player
- `onTimeUpdate` fires every 250ms → updates progress bar
- Click on progress bar calculates position ratio → seeks video
- Controls auto-hide after 3 seconds of no mouse movement
- `goBack()` sets `playingMovie = null` → player disappears

---

## Design Highlights

- **Bebas Neue** display font for cinematic Netflix-style titles
- **Red `#E50914`** accent — consistent with Netflix brand
- **Custom cursor** — red dot that grows on interactive elements
- **Scanline overlay** in player for a cinematic CRT aesthetic
- **Corner accent** — red triangle notch on hovered cards
- **Staggered entrance animations** on movie cards
- **Hero gradient** — smooth transition from video to dark background

---

## Video Sources

Using Google's open-source sample MP4 files:
```
https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/
```

These simulate real streaming behaviour (progressive download, buffering, seek support).

> For HLS/m3u8 stream support, replace `<video>` tags with `hls.js` or `video.js`.

---

##  Mobile Support

| Screen Size | Layout |
|---|---|
| Desktop (1024px+) | Auto-fill grid, full navbar |

---

## Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1",
  "zustand": "^4.4.7"
}
```

---

## Author

**Aaron**
- Built for placement interview — React.js Netflix Clone prototype
- GitHub: [@aaronmathew9544](https://github.com/aaronmathew9544)

---

## License

This project is open source and available under the [MIT License](LICENSE).


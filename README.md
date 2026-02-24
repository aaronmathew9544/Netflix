# 🎬 Netflux — Netflix Clone

A Netflix-inspired streaming UI built from scratch with **React.js** — no UI libraries, no shortcuts. Every component is hand-coded and heavily commented so beginners can follow along line by line.

---

## ✨ Live Demo

> Clone the repo and run `npm start` to see it locally!

---

## 📸 Preview

```
┌─────────────────────────────────────────────────────────┐
│  NETFLUX          Home  Movies  TV Shows  My List   [U] │  ← Navbar
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ◉ PREVIEWING                                           │  ← Hero Section
│  BIG BUCK BUNNY                                         │    (updates on hover)
│  A large rabbit deals with three bullying creatures.    │
│                                                         │
│  [ ▶ PLAY ]  [ ⓘ MORE INFO ]                           │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  TRENDING NOW                                           │
│                                                         │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐│  ← Movie Grid
│  │  🐰  │ │  🐘  │ │  🔥  │ │  💜  │ │  🚗  │ │  🏎️  ││    (9 cards)
│  │      │ │      │ │      │ │      │ │      │ │      ││
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘│
└─────────────────────────────────────────────────────────┘
         ↑ Hover a card = background preview plays
         ↑ Click a card = full-screen video opens
```

---

## 🎮 Features

| Interaction | What Happens |
|-------------|-------------|
| 🖱️ **Hover** a movie card | Background plays that movie's preview (muted) |
| 🖱️ **Move away** | Preview stops, background clears |
| 👆 **Click** a card | Full-screen video player opens, homepage hides |
| 🖱️ **Move mouse** in player | Transparent ← Back button fades in |
| ⏸️ **Stop moving** for 3s | Back button fades out automatically |
| 👆 **Click ← BACK** | Returns to homepage, video stops |

---

## 🗂️ Project Structure

```
netflix-clone/
│
├── public/
│   └── index.html                 ← HTML shell with <div id="root">
│
├── src/
│   ├── index.js                   ← React entry point
│   ├── App.js                     ← Root: holds all state, wires components
│   ├── moviesData.js              ← All 9 movie objects (edit this to add movies!)
│   │
│   └── components/
│       ├── Navbar.js              ← Logo + navigation links
│       ├── BackgroundPreview.js   ← Fullscreen muted preview video
│       ├── HeroSection.js         ← Banner showing hovered movie info
│       ├── MovieGrid.js           ← Responsive CSS Grid of all cards
│       ├── MovieCard.js           ← Individual card (hover + click logic)
│       └── FullScreenPlayer.js    ← Full video player with fade-in back button
│
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) (LTS version recommended)
- A terminal / command prompt

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/your-username/netflix-clone.git
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

The app opens automatically at **http://localhost:3000** 🎉

---

## 🧠 Concepts Covered

This project is written for beginners. Here's what you'll learn by reading the code:

### `useState` — Tracking what's happening
```js
// In App.js — two pieces of state run the whole app
const [hoveredMovie, setHoveredMovie] = useState(null); // which card is hovered
const [playingMovie, setPlayingMovie] = useState(null); // which movie was clicked
```

### `useRef` — Controlling video elements directly
```js
// In BackgroundPreview.js and FullScreenPlayer.js
const videoRef = useRef(null);
videoRef.current.play(); // directly calls .play() on the <video> tag
```

### `useEffect` — Running code when something changes
```js
// Runs whenever the hovered movie changes
useEffect(() => {
  videoRef.current.load();
  videoRef.current.play();
}, [movie]); // ← only re-runs when `movie` changes
```

### Props — Passing data between components
```
App.js
 ├── hoveredMovie ──► BackgroundPreview  (plays preview video)
 ├── hoveredMovie ──► HeroSection        (shows movie title & description)
 └── onClick      ──► MovieCard          (bubbles click back up to App)
```

### Conditional Rendering — Show different things based on state
```js
// In App.js — the whole app switches between two views
if (playingMovie) {
  return <FullScreenPlayer movie={playingMovie} onBack={handleBack} />;
}
return <HomePage />; // default view
```

---

## 🎥 About the Videos

All videos are free sample `.mp4` files streamed from Google's public CDN — no downloads or sign-ups needed.

```
https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
```

### Adding Your Own Movies

Open `src/moviesData.js` and edit any movie object:

```js
{
  id: 1,
  title: "Your Movie Title",
  genre: "Action",
  year: 2024,
  rating: "PG-13",
  description: "Your movie description here.",
  thumbnail: "https://link-to-your-poster-image.jpg",
  preview:   "https://link-to-preview-video.mp4",  // plays on hover (muted)
  video:     "https://link-to-full-video.mp4",      // plays on click
  color:     "#e50914",                             // accent glow color
},
```

---

## 📱 Responsive Design

The grid adapts automatically using CSS Grid `auto-fill`:

```css
grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
```

| Screen Size | Columns |
|-------------|---------|
| Desktop 1200px+ | ~6 columns |
| Tablet 768px | ~4 columns |
| Mobile 375px | ~2 columns |

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| [React 18](https://react.dev) | UI framework |
| Plain CSS (inline styles) | All styling — no libraries |
| HTML5 `<video>` | Video playback |
| Google Fonts — Bebas Neue | Display font |
| CSS Grid | Responsive movie layout |

**No Tailwind. No Bootstrap. No MUI. No Redux. Just React + CSS.**

---

## 📖 File-by-File Learning Guide

| File | What to learn from it |
|------|-----------------------|
| `App.js` | State management, conditional rendering, prop drilling |
| `MovieCard.js` | Local state, hover effects, CSS transitions |
| `BackgroundPreview.js` | useRef, useEffect, video control |
| `FullScreenPlayer.js` | Timers (setTimeout), mouse events, z-index layering |
| `HeroSection.js` | Conditional JSX, responsive font sizes with `clamp()` |
| `MovieGrid.js` | CSS Grid, rendering lists with `.map()` |
| `moviesData.js` | Data modeling, JavaScript arrays and objects |

---

## 🤝 Contributing

Pull requests are welcome! If you're a beginner and something in the code confused you, open an issue — that feedback helps make the comments better for everyone.

---

## 📄 License

MIT — free to use, modify, and share.

---

> Built as an interview task to demonstrate React fundamentals without relying on component libraries.

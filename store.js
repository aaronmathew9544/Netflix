import { create } from 'zustand';

const useStore = create((set) => ({
  hoveredMovie: null,    // which movie is being hovered
  playingMovie: null,    // which movie is being played fullscreen

  setHoveredMovie: (movie) => set({ hoveredMovie: movie }),
  playMovie: (movie) => set({ playingMovie: movie }),
  goBack: () => set({ playingMovie: null }),
}));

export default useStore;
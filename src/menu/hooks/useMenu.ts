import { create } from 'zustand';
import { combine } from 'zustand/middleware';

export const initialState = {
  isVisible: false,
};

export const useMenu = create(
  combine(initialState, (set, get) => ({
    show: () => set(() => ({ isVisible: true })),
    hide: () => set(() => ({ isVisible: false })),
    toggle: () => set(() => ({ isVisible: !get().isVisible })),
  })),
);

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTaskStore = create(
  persist(
    
    (set) => ({
      title: "",
      summary: "",
      All: [],
      
        isDark: true,

      toggleTheme: () =>
        set((state) => ({
          isDark: !state.isDark,
        })),
      setTitle: (title) => set({ title }),

      setSummary: (summary) => set({ summary }),

      createAll: () =>
        set((state) => ({
          All: [
            ...state.All,
            {
              title: state.title,
              summary: state.summary,
            },
          ],
          title: "",
          summary: "",
        })),

      deleteAll: (index) =>
        set((state) => ({
          All: state.All.filter((_, i) => i !== index),
        })),
    }),
    {
      name: "task-storage",
    }
  )
);
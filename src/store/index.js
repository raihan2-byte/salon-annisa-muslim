import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

const useStore = create(
  devtools(
    persist(
      (set) => ({
        auth: null,
        setAuth: (auth) => set({ auth }),
      }),
      {
        name: "store",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default useStore;

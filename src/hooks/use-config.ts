import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type ConfigState = {
  packageManager: "npm" | "yarn" | "pnpm" | "bun";
};

export type ConfigActions = {
  setConfig: (state: Partial<ConfigState>) => void;
  reset: () => void;
};

export type ConfigStore = ConfigState & ConfigActions;

export const defaultInitState: ConfigState = {
  packageManager: "npm",
};

export const useConfigStore = create<ConfigStore>()(
  persist(
    (set) => ({
      ...defaultInitState,
      setConfig: (state) => set((prevState) => ({ ...prevState, ...state })),
      reset: () =>
        set({
          ...defaultInitState,
        }),
    }),
    {
      name: "config-store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

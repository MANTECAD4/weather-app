import { create } from "zustand";

interface ErrorHandlingSlice {
  hasError: boolean;
  error: string | undefined;
  codeError: number | undefined;
  setHasError: (hasError: boolean) => void;
  setError: (error: string | undefined) => void;
  setCodeError: (code: number) => void;
}

export const useHandleError = create<ErrorHandlingSlice>((set) => ({
  hasError: false,
  error: undefined,
  codeError: undefined,
  setCodeError: (code: number) => set({ codeError: code }),
  setError: (error: string | undefined) => set({ error }),
  setHasError: (hasError: boolean) => set({ hasError }),
}));

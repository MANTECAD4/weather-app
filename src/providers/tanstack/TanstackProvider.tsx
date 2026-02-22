import type { FC, ReactNode } from "react";

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useHandleError } from "../app-state/useHandleError";

type Props = {
  children: ReactNode;
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      useHandleError.getState().setHasError(true);
      useHandleError.getState().setError(error.message);
    },
  }),
});
export const TanstackProvider: FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* App.tsx */}
      {children}

      {/*Mostramos las Devtools de Tanstack renderizando este componente dentro del provider*/}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

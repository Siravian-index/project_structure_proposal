import { msalInstance } from "@/lib/auth";
import { queryClient } from "@/lib/react-query";
import { MsalProvider } from "@azure/msal-react";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ErrorBoundary } from "react-error-boundary"
import { BrowserRouter } from 'react-router-dom';
import { MantineProviders } from "./MantineProviders";

// TODO: move to components folder
const ErrorFallback = () => {
  return (
    <div>
      <h2 >Ooops, something went wrong :( </h2>
      <button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </button>
    </div>
  );
};

// TODO: move to components folder
const LoadingFallback = () => {
  return (
    <div>
      Loading
    </div>
  );
};

function AppProviders({ children }: { children: React.ReactNode }) {

  return (
    <React.Suspense fallback={<LoadingFallback />}>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <MsalProvider instance={msalInstance}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <MantineProviders>
                {children}
              </MantineProviders>
            </BrowserRouter>
          </QueryClientProvider>
        </MsalProvider>
      </ErrorBoundary>
    </React.Suspense>
  )
}


export default AppProviders
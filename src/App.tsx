// src/App.js
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DataDisplay from './components/DataDisplay';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <DataDisplay />
      </div>
    </QueryClientProvider>
  );
}

export default App;
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

const LandingPage = lazy(() => import('./landingPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        
      </Routes>
    </Suspense>
    </Router>
  );
}

export default App;
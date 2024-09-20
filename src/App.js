import React, { Suspense, lazy } from "react";
import "./App.css";
const Landing = lazy(() => import("./components/Landing"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Landing />
    </Suspense>
  );
};

export default App;

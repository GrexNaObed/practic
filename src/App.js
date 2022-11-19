import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./components/routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {
          routes
            .map(({ id, path, Component }) =>
              <Route
                key={ id }
                path={ path }
                element={
                  <Suspense fallback={ 'loading' }>
                    { <Component /> }
                  </Suspense>
                }
              />
            )
        }
      </Routes>
    </div>
  );
}

export default App;

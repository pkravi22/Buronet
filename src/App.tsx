// App.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./component/RootLayout";
import Homecompo from "./component/Homecompo";
import Jobs from "./component/jobs";
import Messaging from "./component/Messaging";
import Bytes from "./component/Bytes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Homecompo />} /> {/* Default child at "/" */}
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/bytes" element={<Bytes />} />
        </Route>
        {/* Catch all unmatched routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

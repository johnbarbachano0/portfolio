import React from "react";
import Homepage from "./pages/Homepage";
import Testimonials from "./pages/Testimonials";
import Theme from "./helpers/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/testimonial" element={<Testimonials />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    </Provider>
  );
}

export default App;

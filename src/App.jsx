import React from "react";
import QuizHomepage from "./QuizHomepage";
import QuizApp from "./pages/TextQuiz";
import ImageQuiz from "./pages/ImageQuiz";

import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizHomepage />} />
        <Route path="/textQuiz" element={<QuizApp />} />
        <Route path="/imageQuiz" element={<ImageQuiz />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

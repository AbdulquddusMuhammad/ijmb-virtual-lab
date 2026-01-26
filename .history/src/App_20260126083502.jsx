import React from "react";
import QuizHomepage from "./QuizHomepage";
import QuizApp from "./pages/TextQuiz";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizHomepage />} />
        <Route path="/textQuiz" element={<QuizApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

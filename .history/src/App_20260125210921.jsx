import React from "react";
import QuizHomepage from "./QuizHomepage";
import QuizApp from "./TextQuiz";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizHomepage />} />
        <Route path="/quiz" element={<QuizApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

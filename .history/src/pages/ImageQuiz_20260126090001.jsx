import React, { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, Award } from "lucide-react";
import snail_Gastropoda from "../assets/images/gastropod.png";
import octopus from "../assets/images/octopus.png";
import clams from "../assets/images/clams.png";
import oyster from "../assets/images/oyster.png";
import snail_closup from "../assets/images/snail-closeup.png";

const ImageQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Which class of Mollusca does this organism belong to?",
      image: snail_Gastropoda,
      imageDescription: "Land snail with a coiled shell",
      options: ["Bivalvia", "Gastropoda", "Cephalopoda", "Scaphopoda"],
      correct: 1,
      explanation: "This organism is a land snail, which belongs to Class Gastropoda. Gastropods typically have a single coiled shell (univalve) and move using a muscular foot.",
    },
    {
      id: 2,
      question: "Which class of Mollusca is characterized by two shell valves?",
      image: oyster,
      imageDescription: "Oyster with two hinged shells",
      options: ["Gastropoda", "Cephalopoda", "Bivalvia", "Polyplacophora"],
      correct: 2,
      explanation: "This organism belongs to Class Bivalvia. Bivalves possess two shell valves joined by a hinge, as seen in oysters and clams.",
    },
    {
      id: 3,
      question: "Identify the class of Mollusca shown here.",
      image: octopus,
      imageDescription: "Octopus with arms and suckers",
      options: ["Gastropoda", "Scaphopoda", "Cephalopoda", "Monoplacophora"],
      correct: 2,
      explanation: "This organism is an octopus, which belongs to Class Cephalopoda. Cephalopods have well-developed heads, arms or tentacles, and are active predators.",
    },
    {
      id: 4,
      question: "Which class of Mollusca includes animals with a tubular, tusk-shaped shell?",
      image: scaphopod,
      imageDescription: "Tusk shell mollusc",
      options: ["Polyplacophora", "Scaphopoda", "Gastropoda", "Bivalvia"],
      correct: 1,
      explanation: "Scaphopods have elongated, tubular shells open at both ends. They are commonly called tusk shells.",
    },
    {
      id: 5,
      question: "This organism belongs to which class of Mollusca?",
      image: chiton,
      imageDescription: "Chiton with multiple shell plates",
      options: ["Polyplacophora", "Monoplacophora", "Gastropoda", "Cephalopoda"],
      correct: 0,
      explanation: "This is a chiton, a member of Class Polyplacophora. Polyplacophorans have eight overlapping shell plates on their dorsal surface.",
    },
    {
      id: 6,
      question: "Which class of Mollusca is known for having a single cap-like shell?",
      image: monoplacophora,
      imageDescription: "Primitive mollusc with single shell",
      options: ["Monoplacophora", "Scaphopoda", "Bivalvia", "Gastropoda"],
      correct: 0,
      explanation: "Monoplacophora are primitive molluscs with a single cap-like shell and simple body organization.",
    },
    {
      id: 7,
      question: "Which class of Mollusca is best described as highly intelligent and active predators?",
      image: squid,
      imageDescription: "Squid swimming in water",
      options: ["Gastropoda", "Bivalvia", "Cephalopoda", "Polyplacophora"],
      correct: 2,
      explanation: "Cephalopods such as squids and octopuses are highly active predators with advanced nervous systems and complex behaviors.",
    },
    {
      id: 8,
      question: "An animal with a soft body, no distinct head, and two shells most likely belongs to which class?",
      image: clams,
      imageDescription: "Clams partially buried in sand",
      options: ["Gastropoda", "Cephalopoda", "Bivalvia", "Scaphopoda"],
      correct: 2,
      explanation: "Clams belong to Class Bivalvia. They lack a distinct head and possess two shell valves adapted for filter feeding.",
    },
  ];

  const handleAnswer = (answerIndex) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "Outstanding! You're a Mollusca expert! 🎓";
    if (percentage >= 70) return "Great job! You know your molluscs well! 👏";
    if (percentage >= 50) return "Good effort! Keep studying! 📚";
    return "Keep learning! Review the material and try again! 💪";
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center">
          <Award className="w-24 h-24 mx-auto text-yellow-500 mb-4" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
          <p className="text-6xl font-bold text-indigo-600 mb-4">
            {score}/{questions.length}
          </p>
          <p className="text-xl text-gray-600 mb-8">{getScoreMessage()}</p>
          <div className="bg-indigo-50 rounded-lg p-6 mb-6">
            <p className="text-lg text-gray-700">
              You answered <span className="font-bold text-indigo-600">{score}</span> out of <span className="font-bold">{questions.length}</span> questions correctly
            </p>
            <p className="text-md text-gray-600 mt-2">Accuracy: {((score / questions.length) * 100).toFixed(1)}%</p>
          </div>
          <button onClick={handleRestart} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto">
            <RotateCcw className="w-5 h-5" />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 text-white p-6">
            <h1 className="text-3xl font-bold text-center mb-2">Mollusca Visual Recognition Quiz</h1>
            <div className="flex justify-between items-center text-sm">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span>
                Score: {score}/{questions.length}
              </span>
            </div>
            <div className="w-full bg-indigo-400 h-2 rounded-full mt-3">
              <div className="bg-white h-2 rounded-full transition-all duration-300" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} />
            </div>
          </div>

          {/* Question Content */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{question.question}</h2>

            {/* Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img src={question.image} alt={question.imageDescription} className="w-full max-w-md h-64 object-cover" />
              </div>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {question.options.map((option, index) => {
                const isCorrect = index === question.correct;
                const isSelected = selectedAnswer === index;

                let buttonClass = "w-full p-4 rounded-lg border-2 text-left font-medium transition-all duration-200 ";

                if (!isAnswered) {
                  buttonClass += "border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 cursor-pointer";
                } else if (isSelected && isCorrect) {
                  buttonClass += "border-green-500 bg-green-50 text-green-800";
                } else if (isSelected && !isCorrect) {
                  buttonClass += "border-red-500 bg-red-50 text-red-800";
                } else if (isCorrect) {
                  buttonClass += "border-green-500 bg-green-50 text-green-800";
                } else {
                  buttonClass += "border-gray-300 bg-gray-50 cursor-not-allowed";
                }

                return (
                  <button key={index} onClick={() => handleAnswer(index)} disabled={isAnswered} className={buttonClass}>
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {isAnswered && isCorrect && <CheckCircle className="w-6 h-6 text-green-600" />}
                      {isAnswered && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-600" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {isAnswered && (
              <div className={`p-4 rounded-lg mb-6 ${selectedAnswer === question.correct ? "bg-green-50 border-2 border-green-200" : "bg-red-50 border-2 border-red-200"}`}>
                <p className="font-semibold mb-2 text-gray-800">{selectedAnswer === question.correct ? "✓ Correct!" : "✗ Incorrect"}</p>
                <p className="text-gray-700">{question.explanation}</p>
              </div>
            )}

            {/* Next Button */}
            {isAnswered && (
              <button onClick={handleNext} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg transition-colors duration-200">
                {currentQuestion < questions.length - 1 ? "Next Question" : "View Results"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageQuiz;

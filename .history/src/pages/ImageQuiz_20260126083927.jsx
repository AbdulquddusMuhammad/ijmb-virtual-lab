import React, { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, Award } from "lucide-react";
import snail_Gastropoda from "../assets/images/gastropod.png";

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
      imageDescription: "Garden snail with spiral shell",
      options: ["Bivalvia", "Gastropoda", "Cephalopoda", "Scaphopoda"],
      correct: 1,
      explanation: "This is a gastropod (snail). Gastropods have a coiled shell, well-developed head with tentacles and eyes, and a large flat foot for locomotion.",
    },
    {
      id: 2,
      question: "What structure is primarily used by this organism for locomotion?",
      image: "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=400&h=300&fit=crop",
      imageDescription: snail_Gastropoda,
      options: ["Tentacles", "Ventral muscular foot", "Siphon", "Mantle"],
      correct: 1,
      explanation: "Molluscs like snails use their ventral muscular foot for locomotion through waves of muscular contractions.",
    },
    {
      id: 3,
      question: "This organism belongs to which class?",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      imageDescription: "Octopus with tentacles",
      options: ["Gastropoda", "Bivalvia", "Cephalopoda", "Polyplacophora"],
      correct: 2,
      explanation: "This is a cephalopod (octopus). Cephalopods have a well-developed head with eyes, arms/tentacles, and their shell is often reduced or absent.",
    },
    {
      id: 4,
      question: "What type of feeding mechanism do these organisms exhibit?",
      image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&h=300&fit=crop",
      imageDescription: "Clams/mussels with shells",
      options: ["Predatory feeding", "Filter feeding", "Parasitic feeding", "Photosynthesis"],
      correct: 1,
      explanation: "Bivalves like clams and mussels are filter feeders. They filter small particles and plankton from water.",
    },
    {
      id: 5,
      question: "How many shell valves does this organism have?",
      image: "https://images.unsplash.com/photo-1604743527141-e51c37d580e3?w=400&h=300&fit=crop",
      imageDescription: "Oyster showing two shell halves",
      options: ["One valve", "Two valves", "Multiple plates", "No shell"],
      correct: 1,
      explanation: "This is a bivalve with two lateral shell valves connected by a dorsal hinge. Examples include oysters, clams, and mussels.",
    },
    {
      id: 6,
      question: "What specialized feeding structure is absent in this class?",
      image: "https://images.unsplash.com/photo-1622568643107-7e0cd5ffbc80?w=400&h=300&fit=crop",
      imageDescription: "Mussel shell",
      options: ["Mantle", "Gills", "Radula", "Foot"],
      correct: 2,
      explanation: "Bivalves lack a radula (the rasping tongue-like structure found in gastropods and cephalopods). They are filter feeders instead.",
    },
    {
      id: 7,
      question: "What is the respiratory pigment that gives mollusc blood a bluish color?",
      image: "https://images.unsplash.com/photo-1602524206684-900be0ce4b9c?w=400&h=300&fit=crop",
      imageDescription: "Land snail close-up",
      options: ["Hemoglobin", "Haemocyanin", "Chlorophyll", "Myoglobin"],
      correct: 1,
      explanation: "Haemocyanin is the respiratory pigment in molluscs that gives their blood a bluish color, unlike hemoglobin which makes vertebrate blood red.",
    },
    {
      id: 8,
      question: "What type of body symmetry do most molluscs possess?",
      image: "https://images.unsplash.com/photo-1591025207163-942350e47db2?w=400&h=300&fit=crop",
      imageDescription: "Snail showing body structure",
      options: ["Radial symmetry", "Bilateral symmetry", "Asymmetry", "Pentaradial symmetry"],
      correct: 1,
      explanation: "Molluscs are usually bilaterally symmetrical, though gastropods show some asymmetry due to torsion during development.",
    },
    {
      id: 9,
      question: "This organism's shell is made primarily of what material?",
      image: "https://images.unsplash.com/photo-1581262177000-8c085w89a161?w=400&h=300&fit=crop",
      imageDescription: "Spiral snail shell",
      options: ["Chitin", "Calcium carbonate", "Silica", "Keratin"],
      correct: 1,
      explanation: "The mantle secretes a calcareous shell made of calcium carbonate (calcium). These shells can be used as a calcium source for animal feed.",
    },
    {
      id: 10,
      question: "What modified structure do cephalopods use for movement and feeding?",
      image: "https://images.unsplash.com/photo-1591025207163-942350e47db2?w=400&h=300&fit=crop",
      imageDescription: "Squid or octopus",
      options: ["Radula", "Siphon", "Mantle cavity", "Labial palps"],
      correct: 1,
      explanation: "In cephalopods, the foot is modified into a siphon (a tube used for jet propulsion and directing water for movement).",
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

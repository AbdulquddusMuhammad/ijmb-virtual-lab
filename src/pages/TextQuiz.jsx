import React, { useState, useEffect } from "react";

const molluscaQuiz = [
  {
    question: "Arrange the first characteristic of Phylum Mollusca.",
    answer: "They are triploblastic and coelomate.",
  },
  {
    question: "Arrange the second characteristic of Phylum Mollusca.",
    answer: "They are usually bilaterally symmetrical.",
  },
  {
    question: "Arrange the third characteristic of Phylum Mollusca.",
    answer: "They are not metamerically segmented.",
  },
  {
    question: "Arrange the fourth characteristic of Phylum Mollusca.",
    answer: "They possess a soft fleshy body divided into head, dorsal visceral mass, and ventral muscular foot.",
  },
  {
    question: "Arrange the fifth characteristic of Phylum Mollusca.",
    answer: "The visceral mass is covered by a mantle which secretes a calcareous shell made of calcium.",
  },
  {
    question: "Arrange the sixth characteristic of Phylum Mollusca.",
    answer: "The head is well defined and bears two tentacles with eyes at their tips.",
  },
  {
    question: "Arrange the seventh characteristic of Phylum Mollusca.",
    answer: "The foot is ventral, muscular, and flat.",
  },
  {
    question: "Arrange the eighth characteristic of Phylum Mollusca.",
    answer: "The mantle cavity contains two gills, the kidney opening, and an osphradium which functions as a chemoreceptor.",
  },
  {
    question: "Arrange the ninth characteristic of Phylum Mollusca.",
    answer: "The heart consists of two auricles and one ventricle.",
  },
  {
    question: "Arrange the tenth characteristic of Phylum Mollusca.",
    answer: "The coelom is greatly reduced.",
  },
  {
    question: "Arrange the eleventh characteristic of Phylum Mollusca.",
    answer: "The perivisceral cavity contains blood and forms a haemocoel.",
  },
  {
    question: "Arrange the twelfth characteristic of Phylum Mollusca.",
    answer: "They have an open circulatory system consisting of the heart, pericardial space, and blood vessels.",
  },
  {
    question: "Arrange the thirteenth characteristic of Phylum Mollusca.",
    answer: "Gills are used for gaseous exchange in aquatic forms while lungs are used in terrestrial forms.",
  },
  {
    question: "Arrange the fourteenth characteristic of Phylum Mollusca.",
    answer: "Excretion is carried out by two tubular nephridia.",
  },
  {
    question: "Arrange the fifteenth characteristic of Phylum Mollusca.",
    answer: "Trochophore or veliger larval stages are present in some members.",
  },
  {
    question: "Arrange the sixteenth characteristic of Phylum Mollusca.",
    answer: "Reproduction is sexual and fertilization is usually external.",
  },
  {
    question: "Arrange the seventeenth characteristic of Phylum Mollusca.",
    answer: "Members may be monoecious (hermaphrodites) or dioecious.",
  },
  {
    question: "Arrange the eighteenth characteristic of Phylum Mollusca.",
    answer: "Examples include giant African snail, octopus, squid, clams, oyster, and shellfish.",
  },
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scrambledWords, setScrambledWords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [wordsPerPick, setWordsPerPick] = useState(1);
  const [showSettings, setShowSettings] = useState(true);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    scrambleAnswer();
  }, [currentQuestion]);

  const scrambleAnswer = () => {
    const answer = molluscaQuiz[currentQuestion].answer;
    const words = answer.split(" ");

    // Group words based on wordsPerPick
    const groupedWords = [];
    for (let i = 0; i < words.length; i += wordsPerPick) {
      groupedWords.push(words.slice(i, i + wordsPerPick).join(" "));
    }

    const shuffled = [...groupedWords].sort(() => Math.random() - 0.5);
    setScrambledWords(shuffled);
    setSelectedWords([]);
    setIsCorrect(null);
    setShowFeedback(false);
  };

  const handleWordClick = (word, index) => {
    setSelectedWords([...selectedWords, word]);
    setScrambledWords(scrambledWords.filter((_, i) => i !== index));
  };

  const handleSelectedWordClick = (word, index) => {
    setScrambledWords([...scrambledWords, word]);
    setSelectedWords(selectedWords.filter((_, i) => i !== index));
  };

  const checkAnswer = () => {
    const userAnswer = selectedWords.join(" ");
    const correctAnswer = molluscaQuiz[currentQuestion].answer;
    const correct = userAnswer === correctAnswer;

    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (isCorrect && currentQuestion < molluscaQuiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (isCorrect) {
      setShowResult(true);
    }
  };

  const tryAgain = () => {
    scrambleAnswer();
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setQuizStarted(false);
    setShowSettings(true);
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setShowSettings(false);
    scrambleAnswer();
  };

  if (showSettings && !quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <h2 className="text-3xl font-bold text-indigo-600 mb-2 text-center">Mollusca Quiz</h2>
          <p className="text-gray-600 text-center mb-8">Test your knowledge about molluscs!</p>

          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Difficulty Level (Words per pick):</label>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((num) => (
                <button key={num} onClick={() => setWordsPerPick(num)} className={`py-3 px-4 rounded-lg font-semibold transition ${wordsPerPick === num ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>
                  {num}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              {wordsPerPick === 1 && "Hard: Select one word at a time"}
              {wordsPerPick === 2 && "Medium: Select two words at a time"}
              {wordsPerPick === 3 && "Easy: Select three words at a time"}
              {wordsPerPick === 4 && "Very Easy: Select four words at a time"}
            </p>
          </div>

          <button onClick={startQuiz} className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">Quiz Complete!</h2>
          <div className="text-6xl font-bold text-indigo-700 my-6">
            {score}/{molluscaQuiz.length}
          </div>
          <p className="text-xl text-gray-700 mb-6">{score === molluscaQuiz.length ? "Perfect Score! 🎉" : score >= molluscaQuiz.length * 0.7 ? "Great Job! 👏" : "Keep Practicing! 💪"}</p>
          <button onClick={resetQuiz} className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-indigo-600">
              Question {currentQuestion + 1} of {molluscaQuiz.length}
            </span>
            <span className="text-sm font-semibold text-gray-600">Score: {score}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-indigo-600 h-2 rounded-full transition-all duration-300" style={{ width: `${((currentQuestion + 1) / molluscaQuiz.length) * 100}%` }} />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">{molluscaQuiz[currentQuestion].question}</h2>

        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Your Answer:</h3>
          <div className="min-h-24 border-2 border-dashed border-indigo-300 rounded-lg p-4 bg-indigo-50">
            {selectedWords.length === 0 ? (
              <p className="text-gray-400 text-center">Select words to form your answer</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {selectedWords.map((word, index) => (
                  <button key={index} onClick={() => handleSelectedWordClick(word, index)} className="bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition">
                    {word}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Available Words:</h3>
          <div className="flex flex-wrap gap-2">
            {scrambledWords.map((word, index) => (
              <button key={index} onClick={() => handleWordClick(word, index)} className="bg-gray-200 text-gray-800 px-3 py-2 rounded-lg hover:bg-gray-300 transition">
                {word}
              </button>
            ))}
          </div>
        </div>

        {showFeedback && (
          <div className={`mb-6 p-4 rounded-lg ${isCorrect ? "bg-green-100 border-2 border-green-400" : "bg-red-100 border-2 border-red-400"}`}>
            <p className={`font-semibold ${isCorrect ? "text-green-800" : "text-red-800"}`}>{isCorrect ? "✓ Correct!" : "✗ Incorrect - Please review the correct answer below"}</p>
            {!isCorrect && (
              <div className="mt-3">
                <p className="text-gray-700 font-semibold mb-2">Correct answer:</p>
                <p className="text-gray-800 bg-white p-3 rounded border border-red-300">{molluscaQuiz[currentQuestion].answer}</p>
              </div>
            )}
          </div>
        )}

        <div className="flex gap-4">
          {!showFeedback ? (
            <button onClick={checkAnswer} disabled={selectedWords.length === 0} className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed">
              Submit Answer
            </button>
          ) : isCorrect ? (
            <button onClick={nextQuestion} className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              {currentQuestion < molluscaQuiz.length - 1 ? "Next Question" : "View Results"}
            </button>
          ) : (
            <button onClick={tryAgain} className="flex-1 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
              Start Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizApp;

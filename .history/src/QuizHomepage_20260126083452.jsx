import React, { useState } from "react";
import { BookOpen, Image, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function QuizHomepage() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const quizTypes = [
    {
      id: "image",
      title: "Image-Based Quiz",
      description: "Test your visual recognition and memory skills with image-based questions",
      icon: Image,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      path: "/imageQuiz",
    },
    {
      id: "text",
      title: "Text-Based Quiz",
      description: "Challenge your knowledge with theory and writing-based questions",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      path: "/textQuiz",
    },
  ];

  const handleStartQuiz = (quizId) => {
    setSelectedQuiz(quizId);
    // Here you would navigate to the quiz page
    console.log(`Starting ${quizId} quiz`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to QuizMaster</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose your quiz type and challenge yourself. Test your knowledge and have fun!</p>
        </div>

        {/* Quiz Type Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {quizTypes.map((quiz) => {
            const Icon = quiz.icon;
            return (
              <div key={quiz.id} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${quiz.borderColor} overflow-hidden`}>
                {/* Gradient Background Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${quiz.color} opacity-10 rounded-bl-full`}></div>

                <div className="p-8 relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${quiz.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 bg-gradient-to-br ${quiz.color} bg-clip-text text-transparent`} strokeWidth={2.5} />
                  </div>

                  {/* Content */}
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">{quiz.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{quiz.description}</p>

                  {/* Button */}
                  <button onClick={() => handleNavigate(quiz.path)} className={`w-full bg-gradient-to-r ${quiz.color} text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group`}>
                    Start Quiz
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-lg shadow-md px-8 py-4">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-800">Pro Tip:</span> Choose the quiz type that matches your learning style
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

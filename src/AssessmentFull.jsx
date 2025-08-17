import { useState } from 'react';

const SuicideRiskAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Over the past 2 weeks, how often have you felt down, depressed, or hopeless?",
      options: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    },
    {
      id: 2,
      question: "How often have you had thoughts that you would be better off dead?",
      options: [
        { text: "Never", score: 0 },
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 }
      ]
    },
    {
      id: 3,
      question: "Have you been having trouble sleeping or sleeping too much?",
      options: [
        { text: "No trouble with sleep", score: 0 },
        { text: "Slight sleep issues", score: 1 },
        { text: "Moderate sleep problems", score: 2 },
        { text: "Severe sleep disruption", score: 3 }
      ]
    },
    {
      id: 4,
      question: "How often do you feel like you have little energy or motivation?",
      options: [
        { text: "Rarely", score: 0 },
        { text: "Sometimes", score: 1 },
        { text: "Often", score: 2 },
        { text: "Almost always", score: 3 }
      ]
    },
    {
      id: 5,
      question: "Have you lost interest in activities you used to enjoy?",
      options: [
        { text: "Not at all", score: 0 },
        { text: "A little", score: 1 },
        { text: "Quite a bit", score: 2 },
        { text: "Completely", score: 3 }
      ]
    },
    {
      id: 6,
      question: "Do you feel like a burden to others?",
      options: [
        { text: "Never", score: 0 },
        { text: "Rarely", score: 1 },
        { text: "Sometimes", score: 2 },
        { text: "Often", score: 3 }
      ]
    },
    {
      id: 7,
      question: "How isolated or alone do you feel?",
      options: [
        { text: "Not isolated", score: 0 },
        { text: "Slightly isolated", score: 1 },
        { text: "Moderately isolated", score: 2 },
        { text: "Extremely isolated", score: 3 }
      ]
    },
    {
      id: 8,
      question: "Have you made any specific plans to harm yourself?",
      options: [
        { text: "No", score: 0 },
        { text: "Vague thoughts", score: 2 },
        { text: "Some planning", score: 4 },
        { text: "Detailed plans", score: 6 }
      ]
    }
  ];

  const handleAnswer = (questionId, score) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: score
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((total, score) => total + score, 0);
  };

  const getRiskLevel = (score) => {
    if (score <= 5) return { level: "Low", color: "text-green-400", bg: "bg-green-900/20" };
    if (score <= 10) return { level: "Moderate", color: "text-yellow-400", bg: "bg-yellow-900/20" };
    if (score <= 15) return { level: "High", color: "text-orange-400", bg: "bg-orange-900/20" };
    return { level: "Critical", color: "text-red-400", bg: "bg-red-900/20" };
  };

  const getRecommendations = (score) => {
    if (score <= 5) {
      return [
        "Continue monitoring your mental health",
        "Maintain healthy lifestyle habits",
        "Stay connected with friends and family",
        "Consider preventive mental health resources"
      ];
    }
    if (score <= 10) {
      return [
        "Consider speaking with a counselor or therapist",
        "Reach out to trusted friends or family",
        "Practice stress management techniques",
        "Monitor your symptoms closely"
      ];
    }
    if (score <= 15) {
      return [
        "Seek professional help immediately",
        "Contact a mental health crisis line",
        "Don't isolate yourself - reach out for support",
        "Consider inpatient or intensive treatment options"
      ];
    }
    return [
      "Seek immediate professional help",
      "Contact emergency services if in immediate danger",
      "Reach out to a crisis helpline now",
      "Don't be alone - contact someone immediately"
    ];
  };

  const restartAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const score = calculateScore();
    const risk = getRiskLevel(score);
    const recommendations = getRecommendations(score);

    return (
      <div className="min-h-screen bg-black text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Back Button */}
          <div className="mb-10">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-3xl font-bold text-gray-400 hover:text-white transition-colors">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back
            </button>
          </div>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Assessment Results</h1>
            <div className={`inline-block px-6 py-3 rounded-lg ${risk.bg} border border-gray-700`}>
              <p className="text-lg">Your Risk Level: <span className={`font-bold ${risk.color}`}>{risk.level}</span></p>
              <p className="text-sm text-gray-400">Score: {score}/21</p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
            <ul className="space-y-2">
              {recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span className="text-gray-300">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          {score > 10 && (
            <div className="bg-red-900/20 border border-red-700 rounded-lg p-6 mb-6">
              <h3 className="text-red-400 font-semibold mb-3">⚠️ Immediate Resources</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">🇮🇳 India Crisis Helplines:</p>
                <p className="text-white">• Vandrevala Foundation: <span className="font-mono">9999666555</span></p>
                <p className="text-white">• AASRA: <span className="font-mono">9820466726</span></p>
                <p className="text-white">• Sneha India: <span className="font-mono">044-24640050</span></p>
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={restartAssessment}
              className="flex-1 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors"
            >
              Take Assessment Again
            </button>
            <button
              onClick={() => window.location.href = '/resources'}
              className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
            >
              Find Resources
            </button>
          </div>
        </div>
      </div>
    );
  }

  const progress = (currentQuestion / questions.length) * 100;

  return (
    <div className="min-h-screen bg-black text-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Question */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-900 rounded-xl p-8 h-full">
              <h2 className="text-2xl font-medium mb-8 leading-relaxed text-gray-100">
                {questions[currentQuestion].question}
              </h2>
              
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(questions[currentQuestion].id, option.score)}
                    className={`w-full p-4 text-left rounded-xl border transition-all duration-200 ${
                      answers[questions[currentQuestion].id] === option.score
                        ? 'border-purple-500 bg-purple-900/30 text-white shadow-lg'
                        : 'border-gray-700 bg-gray-800/50 hover:border-gray-600 hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                        answers[questions[currentQuestion].id] === option.score
                          ? 'border-purple-500 bg-purple-500'
                          : 'border-gray-600'
                      }`}>
                        {answers[questions[currentQuestion].id] === option.score && (
                          <div className="w-2 h-2 bg-white rounded-full m-auto mt-0.5"></div>
                        )}
                      </div>
                      <span className="text-base">{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Progress & Info */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-8">
            {/* Header */}
            <div className="text-center lg:text-left mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">Mental Health Assessment</h1>
              <p className="text-gray-400 text-lg">Answer honestly for accurate results</p>
            </div>

            {/* Progress Card */}
            <div className="bg-gray-900 rounded-xl p-6 mb-6">
              <div className="flex justify-between text-lg text-gray-300 mb-4">
                <span className="font-medium">Question {currentQuestion + 1}</span>
                <span className="text-gray-500">of {questions.length}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3 mb-3">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-center text-sm text-gray-400">
                {progress > 0 ? `${Math.round(progress)}% Complete` : 'Just getting started'}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex gap-4">
              <button
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className="flex-1 px-6 py-3 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-900 disabled:text-gray-600 disabled:cursor-not-allowed rounded-xl font-medium transition-colors"
              >
                Previous
              </button>
              
              <button
                onClick={nextQuestion}
                disabled={answers[questions[currentQuestion].id] === undefined}
                className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed rounded-xl font-medium transition-colors"
              >
                {currentQuestion === questions.length - 1 ? 'View Results' : 'Next'}
              </button>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
              <p className="text-sm text-gray-400 text-center leading-relaxed">
                💡 This assessment is not a substitute for professional medical advice. 
                If you're in crisis, please contact emergency services immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuicideRiskAssessment;
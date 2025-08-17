
import { useState } from 'react';

const MentalHealthResources = () => {
  const [activeSection, setActiveSection] = useState('triggers');

  const sections = [
    { id: 'triggers', title: 'Identifying Triggers' },
    { id: 'coping', title: 'Coping Strategies' },
    { id: 'articles', title: 'Articles & Guides' },
    { id: 'videos', title: 'Video Resources' },
    { id: 'meditation', title: 'Meditation & Music' },
    { id: 'crisis', title: 'Crisis Resources' }
  ];

  const triggers = [
    {
      category: "Environmental Triggers",
      items: [
        "Crowded spaces or social situations",
        "Loud noises or overwhelming sensory input",
        "Specific locations tied to traumatic memories",
        "Weather changes or seasonal transitions"
      ]
    },
    {
      category: "Emotional Triggers",
      items: [
        "Feelings of rejection or abandonment",
        "Overwhelming stress or pressure",
        "Grief and loss experiences",
        "Feelings of helplessness or lack of control"
      ]
    },
    {
      category: "Physical Triggers",
      items: [
        "Chronic pain or illness",
        "Lack of sleep or poor sleep quality",
        "Substance use or withdrawal",
        "Hormonal changes"
      ]
    },
    {
      category: "Social Triggers",
      items: [
        "Relationship conflicts or breakups",
        "Social media comparison",
        "Financial stress or job loss",
        "Family dynamics and expectations"
      ]
    }
  ];

  const copingStrategies = [
    {
      title: "Immediate Coping (0-5 minutes)",
      strategies: [
        "Deep breathing: 4-7-8 technique (inhale 4, hold 7, exhale 8)",
        "Grounding: Name 5 things you see, 4 you hear, 3 you touch",
        "Cold water on face or ice cubes in hands",
        "Progressive muscle relaxation starting from toes"
      ]
    },
    {
      title: "Short-term Coping (5-30 minutes)",
      strategies: [
        "Take a walk in nature or around your neighborhood",
        "Listen to calming music or guided meditation",
        "Write in a journal or practice gratitude",
        "Call a trusted friend or family member"
      ]
    },
    {
      title: "Long-term Coping (Daily practices)",
      strategies: [
        "Regular exercise routine (30 minutes, 3-4 times per week)",
        "Maintain consistent sleep schedule (7-9 hours)",
        "Practice mindfulness or meditation daily",
        "Build and maintain social connections"
      ]
    }
  ];

  const articles = [
    {
      title: "Understanding Depression: Signs, Symptoms, and Solutions",
      readTime: "12 min read",
      description: "A comprehensive guide to recognizing depression and finding effective treatment options.",
      category: "Mental Health Basics"
    },
    {
      title: "Anxiety Management: Practical Tools for Daily Life",
      readTime: "8 min read", 
      description: "Learn evidence-based techniques to manage anxiety in work, relationships, and daily situations.",
      category: "Anxiety"
    },
    {
      title: "Building Resilience: Bouncing Back from Life's Challenges",
      readTime: "15 min read",
      description: "Discover how to develop mental resilience and emotional strength during difficult times.",
      category: "Personal Growth"
    },
    {
      title: "The Science of Happiness: What Research Tells Us",
      readTime: "10 min read",
      description: "Explore scientific findings about happiness and practical ways to improve your well-being.",
      category: "Positive Psychology"
    },
    {
      title: "Trauma Recovery: Understanding and Healing",
      readTime: "18 min read",
      description: "A sensitive guide to understanding trauma responses and pathways to healing.",
      category: "Trauma & Recovery"
    },
    {
      title: "Mindfulness in Daily Life: Simple Practices for Peace",
      readTime: "7 min read",
      description: "Easy-to-implement mindfulness techniques for reducing stress and increasing awareness.",
      category: "Mindfulness"
    }
  ];

  const videos = [
    {
      title: "Breathing Techniques for Anxiety Relief",
      duration: "8:45",
      channel: "Therapy in a Nutshell",
      description: "Learn powerful breathing exercises to calm your nervous system.",
      url: "https://www.youtube.com/watch?v=tEmt1Znux58"
    },
    {
      title: "Understanding Your Emotions: A Guide", 
      duration: "12:30",
      channel: "Psych2Go",
      description: "Explore the psychology behind emotions and how to process them healthily.",
      url: "https://www.youtube.com/watch?v=BG46IwVfSu8"
    },
    {
      title: "Progressive Muscle Relaxation Tutorial",
      duration: "15:20", 
      channel: "The Honest Guys",
      description: "Full-body relaxation technique to release tension and stress.",
      url: "https://www.youtube.com/watch?v=86HUcX8ZtAk"
    },
    {
      title: "Cognitive Behavioral Therapy Basics",
      duration: "20:15",
      channel: "Kati Morton", 
      description: "Introduction to CBT techniques for managing negative thought patterns.",
      url: "https://www.youtube.com/watch?v=0ViaCs0k31E"
    },
    {
      title: "Building Self-Compassion",
      duration: "11:40",
      channel: "TEDx Talks",
      description: "Learn to treat yourself with kindness during difficult times.", 
      url: "https://www.youtube.com/watch?v=IvtZBUSplr4"
    },
    {
      title: "Sleep Hygiene for Mental Health",
      duration: "9:25",
      channel: "Mayo Clinic",
      description: "Evidence-based tips for better sleep and improved mental wellness.",
      url: "https://www.youtube.com/watch?v=nm1TxQj9IsQ"
    }
  ];

  const meditationResources = [
    {
      category: "Guided Meditations",
      items: [
        { name: "Body Scan Meditation", duration: "20 min", type: "Relaxation" },
        { name: "Loving-Kindness Meditation", duration: "15 min", type: "Self-Compassion" },
        { name: "Mindful Breathing", duration: "10 min", type: "Focus" },
        { name: "Sleep Meditation", duration: "30 min", type: "Sleep Aid" }
      ]
    },
    {
      category: "Calming Music",
      items: [
        { name: "Nature Sounds & Rain", duration: "60 min", type: "Background" },
        { name: "Tibetan Singing Bowls", duration: "45 min", type: "Healing" },
        { name: "Binaural Beats for Focus", duration: "30 min", type: "Concentration" },
        { name: "Classical for Relaxation", duration: "90 min", type: "Classical" }
      ]
    },
    {
      category: "Apps & Tools",
      items: [
        { name: "Headspace", duration: "Various", type: "App" },
        { name: "Calm", duration: "Various", type: "App" },
        { name: "Insight Timer", duration: "Various", type: "App" },
        { name: "YouTube: Jason Stephenson", duration: "Various", type: "Channel" }
      ]
    }
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'triggers':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Identifying Your Triggers</h2>
              <p className="text-gray-300 text-lg mb-8">
                Understanding what triggers your mental health challenges is the first step toward managing them effectively. 
                Triggers are situations, people, places, or thoughts that can worsen symptoms or cause distress.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {triggers.map((category, index) => (
                <div key={index} className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-gray-300">
                        <span className="text-purple-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-blue-900/20 border border-blue-700 rounded-xl p-6">
              <h3 className="text-blue-400 font-semibold mb-3">Tracking Your Triggers</h3>
              <p className="text-gray-300 mb-4">
                Keep a trigger journal for 1-2 weeks. Note when you feel distressed and identify:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• What happened just before you felt upset?</li>
                <li>• Where were you and who was around?</li>
                <li>• What thoughts went through your mind?</li>
                <li>• How did your body feel?</li>
              </ul>
            </div>
          </div>
        );
      
      case 'coping':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Coping Strategies That Work</h2>
              <p className="text-gray-300 text-lg mb-8">
                Effective coping strategies can be organized by timeframe. Having tools for immediate relief, 
                short-term management, and long-term wellness creates a comprehensive approach to mental health.
              </p>
            </div>

            {copingStrategies.map((category, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">{category.title}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {category.strategies.map((strategy, strategyIndex) => (
                    <div key={strategyIndex} className="bg-gray-800 rounded-lg p-4">
                      <p className="text-gray-300">{strategy}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-yellow-900/20 border border-yellow-700 rounded-xl p-6">
              <h3 className="text-yellow-400 font-semibold mb-3">Pro Tips for Coping</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Practice coping strategies when you're calm, not just in crisis</li>
                <li>• Combine multiple techniques for better results</li>
                <li>• Have a written plan you can refer to when overwhelmed</li>
                <li>• Remember: what works for others may not work for you - experiment</li>
              </ul>
            </div>
          </div>
        );

      case 'articles':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Articles & Guides</h2>
              <p className="text-gray-300 text-lg mb-8">
                Curated articles and guides to help you understand mental health topics and develop practical skills.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <div key={index} className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors cursor-pointer"
                     onClick={() => window.open(`https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007`, '_blank')}>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-medium text-purple-400 bg-purple-900/30 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 leading-tight">{article.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{article.description}</p>
                  <div className="mt-4 flex items-center text-purple-400 text-sm font-medium">
                    Read Article <span className="ml-2">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'videos':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Video Resources</h2>
              <p className="text-gray-300 text-lg mb-8">
                Educational and therapeutic videos from trusted mental health professionals and organizations.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div key={index} className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-colors cursor-pointer"
                     onClick={() => window.open(video.url, '_blank')}>
                  <div className="aspect-video bg-gray-800 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-purple-400 font-medium">{video.channel}</span>
                      <span className="text-xs text-gray-500">{video.duration}</span>
                    </div>
                    <h3 className="font-semibold text-white mb-2 text-sm leading-tight">{video.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-900/20 border border-red-700 rounded-xl p-6">
              <h3 className="text-red-400 font-semibold mb-3">Video Disclaimer</h3>
              <p className="text-gray-300 text-sm">
                These videos are for educational purposes only and do not replace professional mental health treatment. 
                If you're experiencing a crisis, please contact emergency services or a crisis helpline immediately.
              </p>
            </div>
          </div>
        );

      case 'meditation':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Meditation & Calming Resources</h2>
              <p className="text-gray-300 text-lg mb-8">
                Meditation, mindfulness, and calming audio resources to help reduce stress and promote inner peace.
              </p>
            </div>

            {meditationResources.map((category, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">{category.category}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer"
                         onClick={() => {
                           if (item.name === "Headspace") window.open("https://www.headspace.com", '_blank');
                           else if (item.name === "Calm") window.open("https://www.calm.com", '_blank');
                           else if (item.name === "Insight Timer") window.open("https://insighttimer.com", '_blank');
                         }}>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-white text-sm">{item.name}</h4>
                        <span className="text-xs text-gray-500">{item.duration}</span>
                      </div>
                      <span className="text-xs text-blue-400 font-medium">{item.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-green-900/20 border border-green-700 rounded-xl p-6">
              <h3 className="text-green-400 font-semibold mb-3">Getting Started with Meditation</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Start with just 5 minutes daily - consistency matters more than duration</li>
                <li>• Find a quiet space where you won't be interrupted</li>
                <li>• Use guided meditations if you're a beginner</li>
                <li>• Don't judge yourself - wandering thoughts are normal</li>
                <li>• Try different styles to find what resonates with you</li>
              </ul>
            </div>
          </div>
        );

      case 'crisis':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Crisis Resources</h2>
              <p className="text-gray-300 text-lg mb-8">
                If you're in immediate danger or having thoughts of self-harm, please reach out for help immediately. 
                You are not alone, and support is available 24/7.
              </p>
            </div>

            <div className="bg-red-900/20 border-2 border-red-500 rounded-xl p-6">
              <h3 className="text-red-400 font-bold mb-4 text-xl">India Crisis Helplines</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gray-900 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-1">Vandrevala Foundation</h4>
                    <p className="text-2xl font-mono text-red-400 mb-1">9999 666 555</p>
                    <p className="text-gray-400 text-sm">24/7 Crisis Support</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-1">AASRA</h4>
                    <p className="text-2xl font-mono text-red-400 mb-1">9820 466 726</p>
                    <p className="text-gray-400 text-sm">24/7 Suicide Prevention</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-1">Sneha India</h4>
                    <p className="text-2xl font-mono text-red-400 mb-1">044-2464 0050</p>
                    <p className="text-gray-400 text-sm">Chennai-based, 24/7</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-1">Kiran Mental Health</h4>
                    <p className="text-2xl font-mono text-red-400 mb-1">1800-599-0019</p>
                    <p className="text-gray-400 text-sm">Ministry of Health, 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-orange-400 font-semibold mb-4">When to Seek Immediate Help</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Having thoughts of harming yourself or others</li>
                  <li>• Feeling completely hopeless or trapped</li>
                  <li>• Hearing voices or experiencing hallucinations</li>
                  <li>• Extreme mood swings or erratic behavior</li>
                  <li>• Substance abuse that's out of control</li>
                </ul>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-blue-400 font-semibold mb-4">What to Expect When You Call</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Trained counselors who understand mental health crises</li>
                  <li>• Confidential and non-judgmental support</li>
                  <li>• Help developing a safety plan</li>
                  <li>• Information about local resources</li>
                  <li>• Follow-up support if needed</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-900/20 border border-purple-700 rounded-xl p-6">
              <h3 className="text-purple-400 font-semibold mb-3">Remember</h3>
              <p className="text-gray-300">
                Reaching out for help is a sign of strength, not weakness. Mental health crises are temporary, 
                and with proper support, you can get through this difficult time. Your life has value, and there are people who want to help.
              </p>
            </div>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-1">Sneha India</h4>
                    <p className="text-2xl font-mono text-red-400 mb-1">044-2464 0050</p>
                    <p className="text-gray-400 text-sm">Chennai-based, 24/7</p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-1">Kiran Mental Health</h4>
                    <p className="text-2xl font-mono text-red-400 mb-1">1800-599-0019</p>
                    <p className="text-gray-400 text-sm">Ministry of Health, 24/7</p>
                  </div>
                </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Home
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Mental Health Resources</h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Comprehensive guides, tools, and support to help you on your mental wellness journey
          </p>
          <div className="mt-6 text-sm text-gray-500">
            <span>Average read time: 10-15 minutes per section</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeSection === section.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            These resources are for educational purposes only and do not replace professional mental health treatment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthResources;

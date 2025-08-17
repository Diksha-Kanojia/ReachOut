import { ChatBubbleBottomCenterTextIcon, HeartIcon, QuestionMarkCircleIcon, UserCircleIcon } from '@heroicons/react/24/outline';
const assessments = [
  {
    name: 'Stress & Anxiety Check',
    description:
      'Evaluate your current stress and anxiety levels with a short guided assessment.',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'Mood Tracker',
    description:
      'Track your daily emotions and gain insights into your mental health patterns.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Self-Care Quiz',
    description:
      'Discover which self-care practices suit your lifestyle and personality best.',
    icon: HeartIcon,
  },
  {
    name: 'Personality & Wellness',
    description:
      'Learn how your personality traits may affect your mental wellbeing.',
    icon: UserCircleIcon,
  },
]

export default function AssessmentSection() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
       <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Explore Different Assessment Types
          </p>
          <p className="mt-2 text-lg text-gray-300">
            Take short, research-backed assessments to better understand your mental wellbeing and get helpful insights.
          </p>
        </div>
        {/* Grid */}
        <div className="mx-auto mt-10 max-w-2xl sm:mt-20 lg:mt-10 lg:max-w-4xl">
          <dl className=" grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {assessments.map((item) => (
              <div key={item.name} className="relative pl-16">
                <dt className="text-lg font-semibold text-white">
                  <div className=" bg-[#222831]absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-222831">
                    <item.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {item.name}
                </dt>
                <dd className="mt-2 text-base text-gray-400">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Button */}
<div className="mt-16 flex justify-center">
  <button
    onClick={() => window.location.href = '/assessment-full'}
    className="px-8 py-4 rounded-full text-xl font-semibold text-white bg-gray-900 hover:bg-[#393E46] transition duration-150 ease-in-out"
  >
    Start Assessment 
  </button>
</div>

      </div>
    </div>
  )
}

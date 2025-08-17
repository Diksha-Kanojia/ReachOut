export default function EducationalResources() {
  return (
    <div className="bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="text-center text-base font-semibold text-gray-400">Learn, Grow, Heal</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Educational Resources for Your Mental Wellbeing
        </p>

        {/* Grid layout */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-2xl bg-gray-800 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-white">Managing Stress & Anxiety</h3>
            <p className="mt-2 text-sm text-gray-400">
              Learn practical strategies—from mindfulness to structured routines—that help reduce everyday stress.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-gray-800 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-white">Breaking the Stigma</h3>
            <p className="mt-2 text-sm text-gray-400">
              Understand common myths around mental health and why open conversations matter for everyone.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-gray-800 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-white">Building Resilience</h3>
            <p className="mt-2 text-sm text-gray-400">
              Discover coping strategies and resilience-building exercises that help you bounce back from challenges.
            </p>
          </div>

          {/* CTA Card */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-md flex items-center justify-between col-span-3">
  <h3 className="text-lg font-semibold text-white">Want to learn more?</h3>
  
  
<div>
  <style>
    {`
      @keyframes gradient {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
    `}
  </style>
  <div 
    className="relative inline-block p-[1px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 via-cyan-500 to-purple-500"
    style={{
      backgroundSize: '400% 400%',
      animation: 'gradient 3s ease infinite'
    }}
  >
    <button 
      onClick={() => window.location.href = '/resources-full'}
      className="px-6 py-2 rounded-full font-medium text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-100"
    >
      Read More Articles
    </button>
  </div>
</div>
</div>

        </div>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        You are not alone. <br />
        Support is here, anytime, anywhere.
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-lg md:text-xl max-w-2xl">
        Access free helplines, chat with a counselor, explore therapy, and learn how to take care of your self.
      </p>

      {/* CTAs */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <a
          href="/helpline"
          className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-[34px] shadow-lg hover:bg-gray-600 transition"
        >
          Get Help Now
        </a>
        <a
          href="/chatbot"
          className="px-6 py-3 bg-gray-700 text-white font-bold rounded-[34px] shadow-lg hover:bg-gray-400 transition"
        >
          Chat With AI
        </a>
      </div>
    </div>
  )
}

export default HeroSection

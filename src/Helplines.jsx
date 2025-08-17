export default function CrisisHelpline() {
  const helplines = [
    {
      id: 1,
      name: "KIRAN Mental Health Helpline",
      number: "1800-599-0019",
      href: "tel:18005990019",
      description1: "24×7 toll-free support in 13 languages across India.",
      description2: "Staffed by hundreds of psychologists and psychiatrists for immediate mental health support.",
    },
    {
      id: 2,
      name: "AASRA",
      number: "+91-22-2754 6669",
      href: "tel:+912227546669",
      description1: "Mumbai-based NGO offering a confidential, volunteer-run helpline.",
      description2: "Available 24×7 for emotional crisis and suicide prevention support.",
    },
    {
      id: 3,
      name: "Vandrevala Foundation",
      number: "+91-9999 666 555",
      href: "tel:+919999666555",
      description1: "Provides free counselling and crisis intervention 24×7 for anyone in distress.",
      description2: "Operates call and WhatsApp support, with over 1 million conversations handled.",
    },
  ];

  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Need urgent help?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Free | Available 24/7 | Confidential
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {helplines.map((line) => (
            <div
              key={line.id}
              className="rounded-xl bg-gray-800 p-6 shadow-lg border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-white">
                {line.name}
              </h3>
              <p className="mt-2 text-gray-400">{line.description1}</p>
              <p className="mt-1 text-gray-400">{line.description2}</p>
              <p className="mt-2 text-lg text-gray-300">{line.number}</p>
              <a
                href={line.href}
                className="mt-4 inline-block w-full rounded-[34px] bg-gray-900 px-4 py-3 text-center font-semibold text-white hover:bg-gray-500 transition"
              >
                 Call Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

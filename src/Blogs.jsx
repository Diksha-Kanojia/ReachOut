const stories = [
  {
    id: 1,
    title: 'Finding Support During Anxiety',
    href: '#',
    description:
      'For months, I struggled silently with anxiety. Reaching out for help felt impossible at first, but when I finally did, I realized I wasn’t alone. Talking with a professional gave me tools to manage my stress and start healing.',
    date: 'Jan 22, 2023',
    datetime: '2023-01-22',
    category: { title: 'Personal Story', href: '#' },
    author: {
      name: 'Sarah M.',
      role: 'Community Member',
      href: '#',
      imageUrl:
        'https://randomuser.me/api/portraits/women/45.jpg',
    },
  },
  {
    id: 2,
    title: 'Overcoming the Fear of Reaching Out',
    href: '#',
    description:
      'I thought asking for help meant I was weak. The first step was the hardest, but reaching out opened doors I didn’t know existed. Through guidance and small changes, I found strength I didn’t believe I had.',
    date: 'Feb 10, 2023',
    datetime: '2023-02-10',
    category: { title: 'Journey', href: '#' },
    author: {
      name: 'James L.',
      role: 'Community Member',
      href: '#',
      imageUrl:
        'https://randomuser.me/api/portraits/men/32.jpg',
    },
  },
  {
    id: 3,
    title: 'Hope After Feeling Lost',
    href: '#',
    description:
      'There was a time I felt completely stuck and hopeless. Reaching out to talk about my struggles felt terrifying, but it gave me clarity and hope. Today, I can look back and see how far I’ve come thanks to that one brave step.',
    date: 'Mar 5, 2023',
    datetime: '2023-03-05',
    category: { title: 'Healing', href: '#' },
    author: {
      name: 'Emily R.',
      role: 'Community Member',
      href: '#',
      imageUrl:
        'https://randomuser.me/api/portraits/women/68.jpg',
    },
  },
]

export default function Example() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            Real Experiences from Our Community
          </h2>
          <p className="mt-2 text-lg/8 text-gray-300">
            Many people have shared how difficult it was to reach out, but also how it changed their lives once they found the support they needed.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {stories.map((story) => (
            <article key={story.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={story.datetime} className="text-gray-400">
                  {story.date}
                </time>
                <a
                  href={story.category.href}
                  className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800"
                >
                  {story.category.title}
                </a>
              </div>
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                  <a href={story.href}>
                    <span className="absolute inset-0" />
                    {story.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">{story.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <img alt="" src={story.author.imageUrl} className="size-10 rounded-full bg-gray-800" />
                <div className="text-sm/6">
                  <p className="font-semibold text-white">
                    <a href={story.author.href}>
                      <span className="absolute inset-0" />
                      {story.author.name}
                    </a>
                  </p>
                  <p className="text-gray-400">{story.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

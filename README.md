
# ReachOut

ReachOut is a mental health support web application built with React and Vite. It provides resources, assessments, helplines, a chatbot, and blogs to help users find support and information.

## Features

- **Assessment:** Quick mental health assessments for users.
- **Resources:** Curated mental health resources and articles.
- **Helplines:** List of helplines for immediate support.
- **Chatbot:** AI-powered chatbot for guidance and conversation.
- **Blogs:** Informative blog posts on mental health topics.

## Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS
- **Linting:** ESLint
- **AI Service:** Groq API (via `services/groqService.js`)

## Getting Started

### Prerequisites
- Node.js (v16 or above)
- npm

### Installation

1. Clone the repository:
	```sh
	git clone https://github.com/Diksha-Kanojia/ReachOut.git
	cd ReachOut/vite-project
	```
2. Install dependencies:
	```sh
	npm install
	```
3. Start the development server:
	```sh
	npm run dev
	```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```sh
npm run build
```

### Linting
```sh
npm run lint
```

## Project Structure
```
vite-project/
├── public/
├── src/
│   ├── App.jsx
│   ├── Assessment.jsx
│   ├── AssessmentFull.jsx
│   ├── Blogs.jsx
│   ├── Chatbot.jsx
│   ├── Footer.jsx
│   ├── Galaxy.jsx
│   ├── Helplines.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Resources.jsx
│   ├── ResourcesFull.jsx
│   ├── assets/
│   └── services/
│       └── groqService.js
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

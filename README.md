# Vinay Korrapati - Portfolio Website

A modern, responsive personal portfolio website showcasing my projects, skills, and professional experience. Built with React and deployed on GitHub Pages.

**Live Demo:** [https://vinay9977.github.io/vinay-portfolio](https://vinay9977.github.io/vinay-portfolio)

## ✨ Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Elegant fade-in effects and interactive hover states
- **Project Showcase** - Dynamic filtering system for projects (Frontend, Backend, Full-Stack, AI/ML)
- **Modern UI/UX** - Clean, professional design with gradient effects and smooth transitions
- **Performance Optimized** - Fast loading times and efficient rendering
- **GitHub Pages Deployment** - CI/CD pipeline for automatic deployment

## 🚀 Tech Stack

### Frontend
- **React** (v18.0.0) - Modern JavaScript library for building user interfaces
- **JavaScript (ES6+)** - Core programming language
- **Tailwind CSS** - Utility-first CSS framework via CDN
- **Lucide Icons** - Beautiful, consistent icon library

### Tools & Deployment
- **GitHub Pages** - Static site hosting
- **gh-pages** - Deployment automation
- **Create React App** - Project bootstrapping and build tooling

## 📂 Project Structure

```
vinay-portfolio/
├── public/
│   ├── index.html          # Main HTML file with Tailwind CDN
│   ├── favicon.ico         # Site favicon
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/
│   │   ├── Projects.js     # Projects section with filtering
│   │   └── ...             # Other components
│   ├── data/
│   │   └── projectsData.js # Project information and metadata
│   ├── App.js              # Main application component
│   └── index.js            # Application entry point
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)
- **Git**

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/vinay9977/vinay-portfolio.git
   cd vinay-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   
   The application will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   ```
   
   Creates an optimized production build in the `build` folder.

## 🚢 Deployment

### Deploy to GitHub Pages

The project is configured for automatic deployment to GitHub Pages:

```bash
npm run deploy
```

This command will:
1. Build the production version of the app
2. Deploy it to the `gh-pages` branch
3. Make it available at `https://vinay9977.github.io/vinay-portfolio`

### Configuration

The `homepage` field in `package.json` is set to:
```json
"homepage": "https://vinay9977.github.io/vinay-portfolio"
```

## 📋 Featured Projects

The portfolio showcases three major projects:

1. **CodeCritic AI** - Enterprise-grade AI-powered code review platform
   - Technologies: Next.js 14, FastAPI, PostgreSQL, Redis, OpenAI GPT-4, Docker
   - Impact: 70% reduction in manual code review time

2. **InsightFlow** - Full-stack analytics platform with real-time data visualization
   - Technologies: React, Node.js, Express, MongoDB, D3.js, Chart.js
   - Impact: Serves 10K+ requests per minute

3. **Personal Portfolio** - This website!
   - Technologies: React, JavaScript, Tailwind CSS, GitHub Pages
   - Impact: Fully responsive with smooth animations

## 🎨 Customization

### Adding New Projects

Edit `src/data/projectsData.js`:

```javascript
export const projectsData = [
  {
    name: 'Your Project Name',
    tagline: 'Catchy tagline',
    description: 'Detailed description',
    tech: ['React', 'Node.js', 'MongoDB'],
    impact: [
      'Key achievement 1',
      'Key achievement 2'
    ],
    github: 'https://github.com/username/repo',
    demo: 'https://demo-url.com',
    featured: true
  }
];
```

### Modifying Styles

The project uses Tailwind CSS via CDN. Modify classes directly in component files for styling changes.

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Launches the test runner in interactive watch mode.

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode at localhost:3000 |
| `npm test` | Launches the test runner |
| `npm run build` | Builds the app for production |
| `npm run deploy` | Deploys the built app to GitHub Pages |
| `npm run eject` | Ejects from Create React App (one-way operation) |

## 🔧 Dependencies

### Production Dependencies
```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "react-scripts": "5.0.1",
  "lucide-react": "^0.546.0",
  "web-vitals": "^2.1.4"
}
```

### Dev Dependencies
```json
{
  "gh-pages": "^6.3.0"
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Vinay Korrapati**

- Portfolio: [https://vinay9977.github.io/vinay-portfolio](https://vinay9977.github.io/vinay-portfolio)
- GitHub: [@vinay9977](https://github.com/vinay9977)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/vinay9977/vinay-portfolio/issues).

## 📝 Notes

- The portfolio uses Tailwind CSS via CDN for rapid development and easy styling
- Project filtering is implemented with React state management
- All projects data is centralized in `projectsData.js` for easy maintenance
- GitHub Pages deployment is automated through the `gh-pages` package

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Icons by [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Hosted on [GitHub Pages](https://pages.github.com/)

---

⭐ **Star this repository if you find it helpful!**

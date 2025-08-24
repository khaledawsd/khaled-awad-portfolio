# Khaled Awad Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **TypeScript**: Full type safety and better development experience
- **Fast Performance**: Built with Vite for optimal development and build times
- **Sections**: Hero, About, Experience, Education, Skills, Projects, Certificates, and Contact

## 🛠️ Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **Package Manager**: npm/bun

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/            # shadcn/ui components
│   ├── Hero.tsx       # Hero section
│   ├── Navigation.tsx # Navigation bar
│   ├── Experience.tsx # Work experience
│   ├── Education.tsx  # Educational background
│   ├── Skills.tsx     # Skills and technologies
│   ├── Projects.tsx   # Portfolio projects
│   ├── Certificates.tsx # Certifications
│   └── Contact.tsx    # Contact form
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── pages/              # Page components
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd khaled-awad-portfolio
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

The portfolio is designed to be easily customizable:

- Update personal information in the component files
- Modify colors and styling in `tailwind.config.ts`
- Add or remove sections as needed
- Customize the theme in `src/index.css`

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized layouts for all screen sizes
- Custom mobile hooks for enhanced mobile experience

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Any Static Host**: Upload the `dist` folder to your preferred hosting service

## 🤝 Contributing

This is a personal portfolio project, but if you find any bugs or have suggestions for improvements, feel free to open an issue.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

For any questions or feedback, please reach out through the contact form on the portfolio website.

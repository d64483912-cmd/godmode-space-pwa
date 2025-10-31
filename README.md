# Godmode.space - AI-Powered Task Automation Platform

## Project Overview

Godmode.space is a modern Progressive Web App (PWA) that enables users to automate repetitive tasks using advanced AI models. Built with a stunning space-themed interface, it provides an intuitive platform for task automation and AI-powered assistance.

## Key Features

- **AI-Powered Automation**: Integrated with OpenRouter API featuring free models like Qwen 2.5 7B and Llama 3.1 8B
- **Progressive Web App**: Installable on all devices with offline functionality
- **Space-Themed UI**: Stunning cosmic interface with animated starry effects
- **File Upload Support**: Attach files for AI processing with 10MB limit
- **Real-time Chat**: Interactive conversation interface with AI
- **Responsive Design**: Mobile-first approach, optimized for all screen sizes
- **Session Management**: Persistent conversation history
- **Offline Support**: Continue working even without internet connection

## Technology Stack

- **Frontend**: React 18.3 + TypeScript + Vite 6.0
- **Styling**: Tailwind CSS + CSS Modules
- **Backend**: Supabase (Database, Auth, Storage, Edge Functions)
- **AI Integration**: OpenRouter API
- **PWA**: Service Worker + Web App Manifest
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm
- Supabase account
- OpenRouter API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/d64483912-cmd/godmode-space-pwa.git
cd godmode-space-pwa
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Edit `.env.local` with your API keys:
```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
pnpm dev
```

5. Build for production:
```bash
pnpm build
```

## Project Structure

```
godmode-space-pwa/
├── public/
│   ├── manifest.json          # PWA manifest
│   ├── sw.js                  # Service worker
│   └── pwa-icon-*.png         # App icons
├── src/
│   ├── App.tsx                # Main app component
│   ├── App.css                # Space-themed styling
│   ├── components/            # Reusable components
│   ├── hooks/                 # Custom React hooks
│   └── lib/                   # Utility functions
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## PWA Installation

Once deployed, users can install the app:

- **Mobile**: Browser will prompt "Add to Home Screen"
- **Desktop**: Chrome/Edge show install button in address bar
- **Manual**: Add to bookmarks/apps menu

## API Integration

### OpenRouter Models Supported
- Qwen/Qwen2.5-7B-Instruct (Free)
- Meta-Llama-3.1-8B-Instruct (Free)
- Additional models available via OpenRouter

### Backend Features
- Session management
- Conversation history
- File upload handling
- Rate limiting
- Error handling

## Development

### Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

### Styling

The app uses a combination of:
- Tailwind CSS for utility classes
- CSS Modules for component-specific styling
- Space-themed animations and effects

### PWA Configuration

- Service worker provides offline functionality
- App manifest enables installation
- Responsive design for all devices
- Background sync for offline tasks

## Deployment

### Static Hosting
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Environment Variables
Set these in your deployment platform:
```env
OPENROUTER_API_KEY=your_key
SUPABASE_URL=your_url
SUPABASE_ANON_KEY=your_key
```

## License

MIT License - see LICENSE file for details.

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## Support

For issues and feature requests, please open an issue on GitHub.

---

**Godmode.space** - Automate your repetitive tasks with AI ✨
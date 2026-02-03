# Installation & Setup Guide

## ⚠️ Current Status

The project files have been successfully reorganized with front-end files in the `front_end/` directory, and all code errors have been fixed. However, **node_modules dependencies have not been installed yet**, which is causing TypeScript to report "cannot find module" errors in the IDE.

## ✅ What's Been Done

- ✅ All Tailwind CSS deprecation warnings fixed (bg-gradient-* → bg-linear-*)
- ✅ All TypeScript errors fixed (import.meta.env type casting, deprecated utilities)
- ✅ Project reorganized with clean front_end/ and back_end/ structure
- ✅ Configuration updated to support the new structure
- ⏳ **PENDING:** Node modules installation

## 🚀 Quick Setup (Choose One)

### Option 1: Using npm (Windows/Mac/Linux)

```bash
cd front_end
npm install
```

Then to start development:
```bash
npm run dev
```

### Option 2: Using pnpm (Faster Alternative)

```bash
cd front_end
pnpm install
```

Then to start development:
```bash
pnpm dev
```

### Option 3: Using the provided setup script

**Windows:**
```cmd
setup.bat
```

**macOS/Linux:**
```bash
bash setup.sh
```

## 📋 What Each Command Does

| Command | Purpose |
|---------|---------|
| `npm install` | Installs all dependencies listed in package.json |
| `npm run dev` | Starts the Vite development server (http://localhost:5173) |
| `npm run build` | Builds the project for production |
| `npm run lint` | Runs ESLint to check code quality |
| `npm run preview` | Previews the built project locally |

## 📁 Project Structure

```
pr3dkt/
├── front_end/          ← All React/TypeScript code
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── config/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── types/
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── index.html
├── back_end/           ← Python Flask/FastAPI code
│   ├── APIs.py
│   ├── app_template.py
│   ├── requirements.txt
│   └── SETUP.py
├── tsconfig.json       ← Root tsconfig (references front_end/)
├── tsconfig.app.json   ← Root app config
└── tsconfig.node.json  ← Root node config
```

## 🔧 Dependencies Required

The following major dependencies will be installed:

- **React 18+** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Radix UI** - Component library
- **Lucide React** - Icons
- **Sonner** - Toast notifications

...and 50+ other development dependencies.

## ✨ After Installation

Once `npm install` completes:

1. **IDE Errors Clear**: All "cannot find module" errors will disappear from VS Code
2. **Development Ready**: You can run `npm run dev` to start the development server
3. **TypeScript Happy**: Full type safety and intellisense will work
4. **Build Ready**: You can run `npm run build` to create production builds

## 🆘 Troubleshooting

**Problem**: "npm: command not found"
- **Solution**: Install Node.js from https://nodejs.org/

**Problem**: Still seeing errors after `npm install`
- **Solution**: 
  1. Close and reopen VS Code
  2. Run "TypeScript: Restart TS Server" (Cmd/Ctrl+Shift+P)

**Problem**: `pnpm` errors
- **Solution**: Install pnpm with `npm install -g pnpm`

## 📚 Additional Commands

**Check Node version:**
```bash
node --version
npm --version
```

**Clean install (if things break):**
```bash
cd front_end
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

For more information, see:
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

---

**Status**: Ready for npm install ✓

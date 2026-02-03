# INSTALL NODE.JS - QUICK GUIDE

## Current Issue
The frontend setup requires Node.js (npm) which is not currently installed in your system PATH.

---

## OPTION 1: Download & Install Node.js (Recommended)

### For Windows:
1. **Visit:** https://nodejs.org/
2. **Download:** Latest LTS (Long Term Support) version
   - Currently: Node.js 20.x LTS
3. **Run Installer:**
   - Double-click the downloaded `.msi` file
   - Click "Next" through the installation wizard
   - ✅ **IMPORTANT:** Check "Add to PATH" during installation
   - Click "Install"
4. **Restart Your Terminal/VS Code**
   - Close all terminal windows
   - Reopen terminal (PowerShell or Command Prompt)
5. **Verify Installation:**
   ```bash
   node --version
   npm --version
   ```

---

## OPTION 2: Using Chocolatey (if installed)

```bash
choco install nodejs
```

---

## OPTION 3: Using Windows Package Manager (if installed)

```bash
winget install OpenJS.NodeJS
```

---

## VERIFY INSTALLATION

After installing Node.js, run these commands in a **NEW** terminal:

```bash
node --version
# Should output: v20.x.x (or similar)

npm --version  
# Should output: 10.x.x (or similar)
```

---

## THEN COMPLETE FRONTEND SETUP

Once Node.js is installed and verified:

```bash
cd c:\Users\USER\projects\pr3dkt\front_end
npm install
npm run dev
```

**Expected Output:**
```
  Local:   http://localhost:5173/
  press h to show help
```

---

## TROUBLESHOOTING

### "npm: command not found" after installation

1. **Verify Node.js installed:**
   ```bash
   where node
   # Should show: C:\Program Files\nodejs\node.exe
   ```

2. **Add to PATH manually:**
   - Search "Environment Variables" in Windows
   - Edit System Environment Variables
   - Find "Path" variable
   - Add: `C:\Program Files\nodejs`
   - Click OK and restart terminal

### "npm ERR! Cannot find module"

```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
npm install
```

---

## WHAT GETS INSTALLED

- **Node.js Runtime:** JavaScript execution environment
- **npm:** Package manager (comes with Node.js)
- **node_modules:** ~500MB of project dependencies
- **npx:** Command runner for npm packages

---

## DISK SPACE NEEDED

- Node.js: ~300MB
- project node_modules: ~1.5GB
- **Total:** ~2GB

---

## AFTER NODE.JS INSTALLATION

Your app will run with:

```
Terminal 1 - Backend (Python Flask):
✅ Already running on http://127.0.0.1:5000

Terminal 2 - Frontend (React Vite):
npm run dev → http://localhost:5173
```

---

## NEED HELP?

- Official Node.js Guide: https://nodejs.org/en/docs/
- npm Documentation: https://docs.npmjs.com/
- Vite Frontend Tool: https://vitejs.dev/guide/

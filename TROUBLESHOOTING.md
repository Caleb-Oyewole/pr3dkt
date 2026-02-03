# 🔴 TROUBLESHOOTING - SERVICES NOT WORKING

**Issue Date:** February 3, 2026  
**Status:** Backend ✅ Running | Frontend ❌ Cannot Start

---

## 📋 Diagnostic Report

### Backend (Flask) - Status: ✅ WORKING
```
✅ Flask 3.1.2 installed
✅ Dependencies installed in venv
✅ Server successfully started on port 5000
✅ Verified: Flask app is running and responding

URL: http://127.0.0.1:5000
Status: ACTIVE RIGHT NOW
```

### Frontend (React/Vite) - Status: ❌ BLOCKED
```
❌ Node.js: NOT INSTALLED
❌ npm: NOT FOUND in PATH
❌ Cannot run: npm install
❌ Cannot run: npm run dev

Reason: Node.js installation is missing from the system
```

---

## 🎯 ROOT CAUSE

**Node.js is not installed on your computer.**

This is why:
- `npm: command not found` error
- Frontend `npm install` fails with Exit Code 1
- No npm scripts can execute

---

## ✅ THE SOLUTION

You have **3 options** to get Node.js working:

### **OPTION 1: Download & Install Node.js (RECOMMENDED)**

**Steps:**

1. **Go to:** https://nodejs.org/
2. **Click:** "Download LTS" (20.x or higher)
3. **Run:** The `.msi` installer file
4. **During Installation:**
   - Click "Next" through all screens
   - ✅ **ENSURE: "Add to PATH" is CHECKED**
   - Click "Install"
   - Wait for completion
5. **Restart VS Code & Terminal**
   - Close all terminal windows in VS Code
   - Close VS Code completely
   - Reopen VS Code
6. **Verify Installation:**
   ```bash
   node --version
   npm --version
   ```

---

### **OPTION 2: Using Chocolatey**

If you have Chocolatey installed (Windows package manager):

```bash
choco install nodejs
```

Then restart terminal and verify.

---

### **OPTION 3: Using Windows Package Manager (winget)**

If you have Windows Package Manager:

```bash
winget install OpenJS.NodeJS
```

Then restart terminal and verify.

---

## 🔧 MANUAL PATH FIX (if Node.js installed but npm not found)

If you installed Node.js but `npm` still not found:

1. **Search "Environment Variables"** in Windows Start menu
2. **Click:** "Edit the system environment variables"
3. **Click:** "Environment Variables..." button
4. **Find:** "Path" variable in System variables
5. **Click:** "Edit"
6. **Add New:** `C:\Program Files\nodejs`
7. **Click:** OK → OK → OK
8. **Restart terminal and VS Code**

---

## 📝 STEP-BY-STEP: GET EVERYTHING WORKING

### **Phase 1: Install Node.js (Critical)**

```bash
# Visit https://nodejs.org/ and download LTS installer
# Run the installer
# Restart terminal and VS Code

# Verify:
node --version    # Should show v20.x.x
npm --version     # Should show 10.x.x
```

### **Phase 2: Install Frontend Dependencies**

```bash
cd c:\Users\USER\projects\pr3dkt\front_end
npm install
```

**Expected Output:**
```
added 500+ packages in 2 minutes
```

### **Phase 3: Start Frontend Server**

```bash
npm run dev
```

**Expected Output:**
```
  Local:    http://localhost:5173/
  press h to show help
```

### **Phase 4: Verify Both Services**

**Terminal 1 - Backend (Already Running):**
```
http://127.0.0.1:5000 ✅ RUNNING
```

**Terminal 2 - Frontend (After npm run dev):**
```
http://localhost:5173 ✅ RUNNING
```

---

## 🚀 ONCE NODE.JS IS INSTALLED

Run these exact commands:

```bash
# Terminal 1: Backend (should already be running)
cd c:\Users\USER\projects\pr3dkt\back_end
# (it's already running on port 5000)

# Terminal 2: Frontend
cd c:\Users\USER\projects\pr3dkt\front_end
npm install
npm run dev
```

Then open browser to: http://localhost:5173

---

## ❓ FAQ

### **Q: Why isn't Node.js installed?**
A: Node.js was never installed on your system. It's required for React/Vite frontend development.

### **Q: Can I use Python instead?**
A: No, the frontend specifically requires Node.js (npm packages). The backend uses Python.

### **Q: Do I need admin rights?**
A: Yes, you'll need admin rights to install Node.js on Windows. Right-click installer and select "Run as Administrator".

### **Q: How long does Node.js take to install?**
A: About 2-3 minutes for download and installation.

### **Q: Will npm install work after Node.js?**
A: Yes, immediately after restart. It should work without any additional configuration.

---

## ⚠️ COMMON ISSUES AFTER NODE.JS INSTALLATION

### **Issue: "npm still not found"**
**Fix:** Restart terminal completely (not just the command prompt, close VS Code too)

### **Issue: "npm ERR! 404 package not found"**
**Fix:** Run `npm cache clean --force` then `npm install` again

### **Issue: "npm ERR! code EACCES"**
**Fix:** Run terminal as Administrator

### **Issue: "npm ERR! gyp ERR!"**
**Fix:** Install Python 3 and Microsoft C++ Build Tools, then retry

---

## 📊 CURRENT STATUS

| Service | Status | Issue | Solution |
|---------|--------|-------|----------|
| Backend | ✅ Running | None | Working perfectly |
| Frontend | ❌ Blocked | No Node.js | Install Node.js LTS |
| Database | ℹ️ Optional | N/A | Not required yet |

---

## 🎯 NEXT ACTION

### **DO THIS NOW:**

1. **Go to:** https://nodejs.org/
2. **Download:** LTS version (20.x)
3. **Install:** Run `.msi` file (check "Add to PATH")
4. **Restart:** Close & reopen VS Code
5. **Verify:** 
   ```bash
   node --version
   npm --version
   ```
6. **Run Frontend:**
   ```bash
   cd front_end && npm install && npm run dev
   ```

---

## 📞 GETTING HELP

**If npm install still fails after Node.js installation:**

1. Clear npm cache: `npm cache clean --force`
2. Delete node_modules: `rm -rf node_modules`
3. Delete lock file: `rm -rf package-lock.json` or `rm -rf pnpm-lock.yaml`
4. Try again: `npm install`

---

**The backend is working perfectly. You just need Node.js for the frontend.**

**Install Node.js → Restart → Run npm install → Problem solved!** ✨

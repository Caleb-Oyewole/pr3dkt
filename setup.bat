@echo off
REM Setup script for Windows

cd /d "%~dp0front_end"

echo Installing dependencies in front_end directory...
call npm install

echo.
echo Setup complete! You can now:
echo   - Run: npm run dev (to start development server)
echo   - Run: npm run build (to build for production)
pause

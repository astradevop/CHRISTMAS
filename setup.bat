@echo off
echo ========================================
echo   Christmas Wishing Page Setup
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed!
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo Download the LTS version and restart your computer.
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js is installed
node --version
echo.

REM Check if npm is installed
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm is not installed!
    pause
    exit /b 1
)

echo [OK] npm is installed
npm --version
echo.

REM Install dependencies
echo ========================================
echo Installing dependencies...
echo ========================================
echo.
call npm install

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Failed to install dependencies!
    pause
    exit /b 1
)

echo.
echo ========================================
echo Dependencies installed successfully!
echo ========================================
echo.
echo Choose an option:
echo   1. Run development server
echo   2. Build for production (Netlify)
echo   3. Exit
echo.

set /p choice="Enter your choice (1, 2, or 3): "

if "%choice%"=="1" (
    echo.
    echo Starting development server...
    echo Press Ctrl+C to stop the server.
    echo.
    call npm run dev
) else if "%choice%"=="2" (
    echo.
    echo Building for production...
    echo.
    call npm run build
    echo.
    echo ========================================
    echo Build complete!
    echo ========================================
    echo.
    echo The 'dist' folder is ready for deployment.
    echo.
    echo To deploy to Netlify:
    echo   1. Go to https://app.netlify.com/drop
    echo   2. Drag the 'dist' folder to the page
    echo   3. Your site will be live!
    echo.
    pause
) else (
    echo.
    echo Exiting...
    exit /b 0
)

pause

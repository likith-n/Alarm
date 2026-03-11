@echo off
title Travel Alarm App
color 0A
echo.
echo  ========================================
echo    Distance Alarm - Travel Tracker
echo  ========================================
echo.

REM Install dependencies if needed
if not exist "node_modules" (
    echo  Installing dependencies...
    npm install
    echo.
)

echo  Starting server at http://localhost:3000
echo  Press Ctrl+C to stop.
echo.

REM Open browser after 2 seconds
start "" cmd /c "timeout /t 2 >nul && start http://localhost:3000"

REM Start the server
node server.js
pause

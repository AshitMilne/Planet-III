@echo off
echo =====================================
echo   Building Eleventy site (Planet-III)
echo =====================================

REM Go to your project folder
cd /d C:\Users\Ash\planet-III

REM Run Eleventy build (this generates the _site folder with .html)
npx @11ty/eleventy --quiet

echo.
echo Build finished! HTML files are in the _site folder.
pause

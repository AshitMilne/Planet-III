@echo off
cd /d "%~dp0"

git add -A
git commit -m "Nightly commit: %date% %time%"
git push origin main
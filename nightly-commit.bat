@echo off
cd /d C:\Users\Ash\planet-III

git add -A
git commit -m "Nightly commit: %date% %time%"
git push origin main
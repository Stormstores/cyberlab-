@echo off
chcp 65001 >nul
title CyberLab
cd /d "%~dp0"
set "NODE_EXE=node"
if exist "%~dp0node\node.exe" set "NODE_EXE=%~dp0node\node.exe"
"%NODE_EXE%" -v >nul 2>&1
if errorlevel 1 (
  echo.
  echo  Node.js est introuvable sur cet ordinateur.
  echo  Solution 1 : installer Node.js LTS depuis https://nodejs.org
  echo  Solution 2 : copier Node.js portable dans le dossier "node" de ce projet.
  echo  Voir GUIDE_WINDOWS.md pour les etapes detaillees.
  echo.
  pause
  exit /b 1
)
"%NODE_EXE%" -e "const [a,b]=process.versions.node.split('.').map(Number);process.exit(a>22||(a===22&&b>=13)?0:1)"
if errorlevel 1 (
  echo.
  echo  Votre version de Node.js est trop ancienne.
  echo  Installez Node.js 22.13 ou plus recent : https://nodejs.org
  echo.
  pause
  exit /b 1
)
"%NODE_EXE%" --disable-warning=ExperimentalWarning server.js
echo.
echo  Le serveur s'est arrete.
pause

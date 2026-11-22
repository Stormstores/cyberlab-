@echo off
chcp 65001 >nul
title Reinitialiser CyberLab
cd /d "%~dp0"
echo.
echo  ATTENTION : cette action supprime TOUS les comptes et TOUTE la progression.
echo  Fermez d'abord la fenetre du serveur.
echo.
set /p OK=Tapez OUI pour confirmer : 
if /i "%OK%"=="OUI" (
  del /q "data\smith.db" 2>nul
  echo  Base de donnees supprimee. Elle sera recreee au prochain demarrage.
) else (
  echo  Annule.
)
pause

@echo off
cls
rem --------------------------------------------------------------------------------------------
rem     startnodeweb.cmd
rem --------------------------------------------------------------------------------------------
rem       Dec 07 2019    Initial
rem       Jul 14 2021    Get this proc on asusp7 new cams21 app
rem --------------------------------------------------------------------------------------------
rem
set ROOTWEB="D:\ALL\LAB\GIT\cams2021\src"
rem
@echo off
cls
cd %ROOTWEB%
npm run dev

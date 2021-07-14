@echo off
cls
rem --------------------------------------------------------------------------------------------
rem     startmongo.cmd
rem --------------------------------------------------------------------------------------------
rem       Jul 14 2021    Initial
rem --------------------------------------------------------------------------------------------
rem
set ROOTWEB="D:\ALL\LAB\GIT\cams2021\src"
set ROOTMONGO="D:\TOOLS\mongodb"
rem
@echo off
cls
cd %ROOTMONGO%
start mongod --verbose -f bin\mongod.cfg
cd %ROOTWEB%
type %ROOTMONGO%\log\mongod.log

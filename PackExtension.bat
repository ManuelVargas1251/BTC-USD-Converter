:: This script compresses all needed files to upload to chrome store
echo off
 title Android Messages Chrome Extension Compressor
 echo starting compression...
 7z a -tzip Bitcoin to USD Converter "background.js" "manifest.json" "logo_96.png" "logo_128.png"
 echo compression complete!
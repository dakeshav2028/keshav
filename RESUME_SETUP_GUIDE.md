# Resume Download Fix Guide

## 🚨 **Issue:** Resume download shows "File wasn't available on site"

## ✅ **Solution:**

### Step 1: Create the pdfs folder
1. Go to your project folder: `neural-horizons-portfolio`
2. Open the `public` folder
3. Create a new folder called `pdfs`

### Step 2: Add your resume file
1. Copy your resume PDF file
2. Rename it to: `KESHAV_SARDA_resume.pdf`
3. Place it in: `public/pdfs/KESHAV_SARDA_resume.pdf`

### Step 3: Folder structure should look like:
```
public/
├── pdfs/
│   └── KESHAV_SARDA_resume.pdf
├── images/
│   └── (your image files)
└── favicon.svg
```

### Step 4: Test the download
1. Save and refresh your website
2. Click "Download Resume" button
3. The PDF should download successfully!

## 🔧 **What I Fixed:**
- Changed resume path from `/src/assets/pdfs/` to `/pdfs/`
- Updated download function to work with public folder
- Added proper DOM cleanup for the download link

## 📝 **Note:**
The resume file must be exactly named `KESHAV_SARDA_resume.pdf` as specified in your portfolioData.js file.

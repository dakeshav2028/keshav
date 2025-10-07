# Contact Form Setup Guide

## 🚀 How to Set Up Your Contact Form to Receive Emails

### Step 1: Create Formspree Account (FREE)
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up with your email: `dakeshav000@gmail.com`
3. Verify your email address

### Step 2: Create a New Form
1. Click "New Form" in your Formspree dashboard
2. Name it: "Portfolio Contact Form"
3. Set the email to: `dakeshav000@gmail.com`
4. Copy the form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)

### Step 3: Update Your Code
1. Open `src/components/Contact.jsx`
2. Find line 55: `const response = await fetch('https://formspree.io/f/xdkobqpv', {`
3. Replace `xdkobqpv` with your actual form ID from Formspree

### Step 4: Test Your Form
1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox for the message!

## 🎯 What Happens When Someone Submits:

1. **Primary Method**: Form data is sent to Formspree
2. **Formspree forwards** the email to `dakeshav000@gmail.com`
3. **You receive** a formatted email with:
   - Sender's name and email
   - Subject line
   - Message content
   - Reply-to set to sender's email

4. **Fallback Method**: If Formspree fails, it opens the user's email client

## 📧 Email Format You'll Receive:

```
From: noreply@formspree.io
To: dakeshav000@gmail.com
Subject: New Portfolio Contact: [Subject from form]
Reply-To: [Sender's email]

Name: John Doe
Email: john@example.com
Subject: Project Collaboration
Message: Hi Keshav, I'd like to discuss a data analysis project...
```

## 🔧 Current Setup:
- ✅ Hero "Get In Touch" button scrolls to contact section
- ✅ Contact form sends emails to your inbox
- ✅ Fallback to mailto if service fails
- ✅ Beautiful success/error messages
- ✅ Form validation and loading states

## 🆓 Formspree Free Plan:
- 50 submissions per month
- Email notifications
- Spam filtering
- No credit card required

Perfect for a portfolio website!

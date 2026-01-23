🚀 Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion, featuring smooth animations, interactive UI, and a fully functional contact form powered by EmailJS.

This portfolio showcases my skills, projects, and services, and provides an easy way for clients or recruiters to get in touch.

✨ Features

⚡ Modern UI/UX with responsive design

🎨 Tailwind CSS for fast and clean styling

🎥 Framer Motion animations for smooth transitions

🌌 Animated particle background

📩 Contact form with EmailJS integration

✅ Client-side form validation

🔒 Secure and reliable email delivery

📱 Fully responsive (mobile, tablet, desktop)

🛠️ Tech Stack

Frontend: React (Vite)

Styling: Tailwind CSS

Animations: Framer Motion

Email Service: EmailJS

Build Tool: Vite

Version Control: Git & GitHub

📂 Project Structure
src/
├── assets/              # Images and static assets
├── components/          # Reusable components
│   └── ParticlesBackground.jsx
├── pages/
│   └── Contact.jsx      # Contact section with EmailJS
├── App.jsx
├── main.jsx
└── index.css
and so on..........

📩 Contact Form (EmailJS)

The contact form allows users to send messages directly to my email using EmailJS, without any backend.

Template Variables Used:
{{from_name}}
{{from_email}}
{{service}}
{{budget}}
{{message}}

Required EmailJS Settings:

To Email: rohitkumar27965@gmail.com

Reply-To: {{from_email}}

Allowed Origin: http://localhost:5173
 (for development)

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/Rohit12ka/my-portfolio.git

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev


The app will run at:

http://localhost:5173

🔐 Environment Variables (Recommended)

For production, store EmailJS keys in .env:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

📌 Future Improvements

Confirmation email to users

reCAPTCHA / spam protection

Backend email proxy for extra security

Blog / CMS integration

Dark–Light mode toggle

👨‍💻 Author

Rohit Kumar
Blockchain Developer-beginner | Web Developer

GitHub: https://github.com/rohit12ka

LinkedIn: https://www.linkedin.com/in/rohit-kumar-5309b022a

Email: rohitkumar27965@gmail.com

📄 License

This project is open source and available under the MIT License.



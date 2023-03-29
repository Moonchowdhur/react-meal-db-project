/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#a57bed",
        
"secondary": "#a4b6e8",
        
"accent": "#e8c14e",
        
"neutral": "#22182B",
        
"base-100": "#FFFFFF",
        
"info": "#3289E7",
        
"success": "#2AE57B",
        
"warning": "#FBB637",
        
"error": "#EB6081",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

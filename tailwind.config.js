/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["selector"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		colors: {
  			'dark-yellow': '#ebc446'
  		},
  		fontFamily: {
  			poppins: 'Poppins, Arial, sans-serif'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}


import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "15px",
	},
	screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	},
	fontFamily: {
		primary: "var(--font-notosansMono)",
	},
  	extend: {
  		colors: {
  			primary: "#181818",
			secondary: "#0E50D2",
			terciary: "#F70000",
			accent: {
				default: "#F6B30D",
				hover: "#D9980B"
			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
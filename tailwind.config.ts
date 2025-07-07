
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Manrope', 'Inter', 'sans-serif'],
				'mono': ['JetBrains Mono', 'monospace'],
				'pro': ['Outfit', 'Manrope', 'sans-serif'],
				'heading': ['Outfit', 'Manrope', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(263 85% 60%)',
					foreground: 'hsl(0 0% 100%)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(263 85% 60%)',
					foreground: 'hsl(0 0% 100%)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(263 85% 60%)',
					'primary-foreground': 'hsl(0 0% 100%)',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(263 85% 60%)'
				},
				violet: {
					DEFAULT: 'hsl(263 85% 60%)',
					light: 'hsl(263 85% 70%)',
					dark: 'hsl(263 85% 50%)',
					50: 'hsl(263 85% 97%)',
					100: 'hsl(263 85% 95%)',
					200: 'hsl(263 85% 87%)',
					300: 'hsl(263 85% 85%)',
					400: 'hsl(263 85% 70%)',
					500: 'hsl(263 85% 60%)',
					600: 'hsl(263 85% 50%)',
					700: 'hsl(263 85% 40%)',
					800: 'hsl(263 85% 30%)',
					900: 'hsl(263 85% 25%)',
				},
				purple: {
					DEFAULT: 'hsl(271 91% 65%)',
					light: 'hsl(271 91% 75%)',
					dark: 'hsl(271 91% 55%)',
					50: 'hsl(271 91% 97%)',
					100: 'hsl(271 91% 95%)',
					200: 'hsl(271 91% 87%)',
					300: 'hsl(271 91% 85%)',
					400: 'hsl(271 91% 75%)',
					500: 'hsl(271 91% 65%)',
					600: 'hsl(271 91% 55%)',
					700: 'hsl(271 91% 45%)',
					800: 'hsl(271 91% 35%)',
					900: 'hsl(271 91% 25%)',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

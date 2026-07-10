/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        // figma:achik (mzD4Vedn) — start
        "figma-accent-4": "hsl(var(--figma-accent-4))",
        "figma-muted": "hsl(var(--figma-muted))",
        "figma-border-3": "hsl(var(--figma-border-3))",
        "figma-text-2-4": "hsl(var(--figma-text-2-4))",
        // figma:achik (mzD4Vedn) — end
      
        // figma:achik (mzD4Vedn) — start
        "figma-surface-4": "hsl(var(--figma-surface-4))",
        // figma:achik (mzD4Vedn) — end
      
        // figma:achik (mzD4Vedn) — start
        "figma-accent-3": "hsl(var(--figma-accent-3))",
        "figma-text-1-3": "hsl(var(--figma-text-1-3))",
        // figma:achik (mzD4Vedn) — end
      
        // figma:achik-dise-c3-91o-de-pantallas (FQzjXvWq) — start
        "figma-primary-2": "hsl(var(--figma-primary-2))",
        "figma-accent-2": "hsl(var(--figma-accent-2))",
        "figma-surface-3": "hsl(var(--figma-surface-3))",
        "figma-border-2": "hsl(var(--figma-border-2))",
        "figma-text-1-2": "hsl(var(--figma-text-1-2))",
        "figma-text-2-3": "hsl(var(--figma-text-2-3))",
        "figma-text-3-3": "hsl(var(--figma-text-3-3))",
        "figma-text-4": "hsl(var(--figma-text-4))",
        "figma-text-5": "hsl(var(--figma-text-5))",
        // figma:achik-dise-c3-91o-de-pantallas (FQzjXvWq) — end
      
        // figma:achik-dise-c3-91o-de-pantallas (FQzjXvWq) — start
        "figma-primary": "hsl(var(--figma-primary))",
        "figma-secondary": "hsl(var(--figma-secondary))",
        "figma-accent": "hsl(var(--figma-accent))",
        "figma-surface-2": "hsl(var(--figma-surface-2))",
        "figma-border": "hsl(var(--figma-border))",
        "figma-highlight-2": "hsl(var(--figma-highlight-2))",
        "figma-subtle": "hsl(var(--figma-subtle))",
        "figma-color-9": "hsl(var(--figma-color-9))",
        "figma-text-2-2": "hsl(var(--figma-text-2-2))",
        "figma-text-3-2": "hsl(var(--figma-text-3-2))",
        // figma:achik-dise-c3-91o-de-pantallas (FQzjXvWq) — end
      
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  		
  		
  		'figma-text-1': 'hsl(var(--figma-text-1))',
  		
  		'figma-text-3': 'hsl(var(--figma-text-3))',
  		
  		'figma-text-2': 'hsl(var(--figma-text-2))',
  		
  		'figma-highlight': 'hsl(var(--figma-highlight))',
  		
  		'figma-surface': 'hsl(var(--figma-surface))',
  		
  		
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
  		},
  		
  		
  		fontSize: {
        // figma:achik (mzD4Vedn) — start
        "figma-12": "12px",
        "figma-14": "14px",
        "figma-20": "20px",
        "figma-24": "24px",
        "figma-30": "30px",
        // figma:achik (mzD4Vedn) — end
      
        // figma:achik (mzD4Vedn) — start
        "figma-12": "12px",
        "figma-14": "14px",
        "figma-16": "16px",
        "figma-18": "18px",
        "figma-24": "24px",
        // figma:achik (mzD4Vedn) — end
      
        // figma:achik (mzD4Vedn) — start
        "figma-16": "16px",
        "figma-24": "24px",
        // figma:achik (mzD4Vedn) — end
      
        // figma:achik (mzD4Vedn) — start
        "figma-14": "14px",
        "figma-20": "20px",
        "figma-24": "24px",
        "figma-30": "30px",
        "figma-48": "48px",
        // figma:achik (mzD4Vedn) — end
      
        // figma:achik (mzD4Vedn) — start
        "figma-12": "12px",
        "figma-14": "14px",
        "figma-24": "24px",
        "figma-48": "48px",
        // figma:achik (mzD4Vedn) — end
      
        // figma:achik-dise-c3-91o-de-pantallas (FQzjXvWq) — start
        "figma-12": "12px",
        "figma-14": "14px",
        "figma-24": "24px",
        "figma-48": "48px",
        // figma:achik-dise-c3-91o-de-pantallas (FQzjXvWq) — end
      
        // figma:achik-dise-c3-91o-de-pantallas (FQzjXvWq) — start
        "figma-12": "12px",
        "figma-14": "14px",
        "figma-16": "16px",
        // figma:achik-dise-c3-91o-de-pantallas (FQzjXvWq) — end
      
  			
  			'figma-12': '12px',
  			
  			'figma-16': '16px',
  			
  			'figma-18': '18px',
  			
  		},
  		
  		
  		fontWeight: {
        // figma:achik (mzD4Vedn) — start
        "figma-normal": "400",
        "figma-medium": "500",
        "figma-semibold": "600",
        "figma-bold": "700",
        // figma:achik (mzD4Vedn) — end
      
        // figma:achik (mzD4Vedn) — start
        "figma-normal": "400",
        "figma-medium": "500",
        "figma-bold": "700",
        // figma:achik (mzD4Vedn) — end
      
        // figma:achik (mzD4Vedn) — start
        "figma-normal": "400",
        "figma-medium": "500",
        "figma-bold": "700",
        // figma:achik (mzD4Vedn) — end
      
        // figma:achik (mzD4Vedn) — start
        "figma-normal": "400",
        "figma-medium": "500",
        "figma-bold": "700",
        "figma-black": "900",
        // figma:achik (mzD4Vedn) — end
      
        // figma:achik (mzD4Vedn) — start
        "figma-normal": "400",
        "figma-medium": "500",
        "figma-bold": "700",
        // figma:achik (mzD4Vedn) — end
      
        // figma:achik-dise-c3-91o-de-pantallas (FQzjXvWq) — start
        "figma-normal": "400",
        "figma-medium": "500",
        "figma-bold": "700",
        // figma:achik-dise-c3-91o-de-pantallas (FQzjXvWq) — end
      
        // figma:achik-dise-c3-91o-de-pantallas (FQzjXvWq) — start
        "figma-normal": "400",
        "figma-medium": "500",
        "figma-bold": "700",
        // figma:achik-dise-c3-91o-de-pantallas (FQzjXvWq) — end
      
  			
  			'figma-normal': '400',
  			
  			'figma-medium': '500',
  			
  			'figma-bold': '700',
  			
  		},
  		
  		
  		lineHeight: {
        // figma:achik (mzD4Vedn) — start
        "figma-16": "16px",
        "figma-20": "20px",
        "figma-28": "28px",
        "figma-32": "32px",
        "figma-36": "36px",
        // figma:achik (mzD4Vedn) — end
      
        // figma:achik (mzD4Vedn) — start
        "figma-16": "16px",
        "figma-20": "20px",
        "figma-24": "24px",
        "figma-28": "28px",
        "figma-32": "32px",
        // figma:achik (mzD4Vedn) — end
      
        // figma:achik (mzD4Vedn) — start
        "figma-24": "24px",
        "figma-32": "32px",
        // figma:achik (mzD4Vedn) — end
      
        // figma:achik (mzD4Vedn) — start
        "figma-20": "20px",
        "figma-28": "28px",
        "figma-32": "32px",
        "figma-36": "36px",
        "figma-48": "48px",
        // figma:achik (mzD4Vedn) — end
      
        // figma:achik (mzD4Vedn) — start
        "figma-16": "16px",
        "figma-20": "20px",
        "figma-32": "32px",
        "figma-48": "48px",
        // figma:achik (mzD4Vedn) — end
      
        // figma:achik-dise-c3-91o-de-pantallas (FQzjXvWq) — start
        "figma-16": "16px",
        "figma-20": "20px",
        "figma-32": "32px",
        "figma-48": "48px",
        // figma:achik-dise-c3-91o-de-pantallas (FQzjXvWq) — end
      
        // figma:achik-dise-c3-91o-de-pantallas (FQzjXvWq) — start
        "figma-16": "16px",
        "figma-20": "20px",
        "figma-24": "24px",
        // figma:achik-dise-c3-91o-de-pantallas (FQzjXvWq) — end
      
  			
  			'figma-16': '16px',
  			
  			'figma-24': '24px',
  			
  			'figma-28': '28px',
  			
  		},
  		
  		
  		fontFamily: {
        // figma:achik (mzD4Vedn) — start
        "figma-inter": ['"Inter"', 'sans-serif'],
        // figma:achik (mzD4Vedn) — end
      
  			
  			'heading': ['"Segoe UI Emoji"', 'sans-serif'],
  			
  		},
  		
  		
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
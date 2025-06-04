/** @type {import('tailwindcss').Config} */
    module.exports = {
      darkMode: ['class'],
      content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
      ],
      theme: {
        container: {
          center: true,
          padding: '2rem',
          screens: {
            '2xl': '1400px',
          },
        },
        extend: {
          colors: {
            border: 'hsl(var(--border))', 
            input: 'hsl(var(--input))', 
            ring: 'hsl(var(--ring))', 
            background: 'hsl(var(--background))', 
            foreground: 'hsl(var(--foreground))', 
            
            primary: 'hsl(var(--primary))',        // Azul institucional moderno
            secondary: 'hsl(var(--secondary))',    // Azul claro para fundos leves
            accent: 'hsl(var(--accent))',          // Coral suave para botões e CTA
            base: 'hsl(var(--base))',            // Branco neutro
            text: 'hsl(var(--text))',            // Grafite

            destructive: { 
              DEFAULT: 'hsl(var(--destructive))',
              foreground: 'hsl(var(--destructive-foreground))',
            },
            muted: { 
              DEFAULT: 'hsl(var(--muted))',
              foreground: 'hsl(var(--muted-foreground))',
            },
            popover: { 
              DEFAULT: 'hsl(var(--popover))',
              foreground: 'hsl(var(--popover-foreground))',
            },
            card: { 
              DEFAULT: 'hsl(var(--card))',
              foreground: 'hsl(var(--card-foreground))',
            },
          },
          borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
          },
          keyframes: {
            'accordion-down': {
              from: { height: 0 },
              to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
              from: { height: 'var(--radix-accordion-content-height)' },
              to: { height: 0 },
            },
          },
          animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'], 
            serif: ['Playfair Display', 'serif'],
          },
        },
      },
      plugins: [require('tailwindcss-animate'), require('@tailwindcss/aspect-ratio')],
    };
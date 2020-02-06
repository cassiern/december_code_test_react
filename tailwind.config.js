module.exports = {
  theme: {
  	gradients: theme => ({
  		'gradientGray': ['to top', '#1A202C', '#2D3748'],
  		'gradientLight': ['to top', '#2D3748', '#4A5568']
  	}),
    extend: {}
  },
  variants: {
  	pointerEvents: ['responsive', 'hover', 'focus']
  },
  plugins: [
  	require('tailwindcss-plugins/gradients')
  ]
}

// postcss.config.js
// Location: git-rbautomotive/postcss.config.js
module.exports = {
  plugins: {
    // Use the separate package name if installed, otherwise use 'tailwindcss'
    // If you installed '@tailwindcss/postcss', use that here.
    // If you encountered errors with that, try 'tailwindcss' again.
    // Let's assume '@tailwindcss/postcss' is correct based on the previous error message.
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}

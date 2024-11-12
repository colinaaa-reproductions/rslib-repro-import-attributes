import pkg from 'tailwindcss/package.json' with { type: 'json' }

console.log(pkg.version)

import('tailwindcss/package.json', { with: { type: 'json' }}).then(({ default: pkg }) => {
  console.log('from dynamic import', pkg.version)
})

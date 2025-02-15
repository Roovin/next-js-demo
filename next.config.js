// @type {import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// module.exports = {
//   serverRuntimeConfig: {
//       PROJECT_ROOT: __dirnames
//   }
// }

module.exports = {
  serverRuntimeConfig: {
      PROJECT_ROOT: __dirname
  }
}

// module.exports = (phase, {defaultConfig}) => {
//   if ('sassOptions' in defaultConfig) {
//       defaultConfig['sassOptions'] = {
//           includePaths: ['./src'],
//           prependData: `@import "~@styles/common/variables.scss";`,
//       }
//   }
//   return defaultConfig;
// }

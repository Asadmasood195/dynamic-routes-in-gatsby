

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',

    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] }
    },
  ],
}

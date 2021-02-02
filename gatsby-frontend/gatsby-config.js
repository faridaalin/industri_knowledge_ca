require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Farida Alin`,
    titleTemplate: "%s · Portfolio",
    description: `Frontend developer based in Oslo, Norway. Love creating and building design-focused websites.`,
    author: `Farida Alin`,
    siteUrl: `https://www.faridaalin.com`,
    image:
      "https://res.cloudinary.com/djey7uz4e/image/upload/v1612274626/mini_logo_qz25mw.png",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-H1MJVGL7MK", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/mini_logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `9wdbtffm`,
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
        graphqlTag: "default",
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
  ],
}

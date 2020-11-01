require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Portfolio site`,
    description: `Frontend developer based in Oslo, Norway. Love creating and building design-focused websites.`,
    author: `Farida Alin`,
    url: `www.faridaalin.com`,
    image: "/initials.png"
  },
  plugins: [
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `600`, `700`]
          },
          {
            family: `Montserrat`,
            variants: [`400`, `600`, `900`]
          },
        ],
      },
      
    },
 
    ]
}

module.exports = {
  siteMetadata: {
    title: `Power Mind Club`,
    siteUrl: `https://test.powermindclub.com`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Über uns",
        link: "/about-us",
      },
    ],
  },
  plugins: [
    //   {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     "trackingId": ""
    //   }
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-layout",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/img/",
      },
      __key: "images",
    },
  ],
};

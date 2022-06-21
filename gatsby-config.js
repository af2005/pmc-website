module.exports = {
  siteMetadata: {
    title: `Power Mind Club`,
    author: {
      name: "Power Mind Club",
    },
    description: "Empower your relationship",
    siteUrl: `https://www.powermindclub.com`,
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
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-layout",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true, // GitHub Flavored Markdown mode (default: true)
        gfm: true, // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-FGYP3R34TT", // Google Analytics / GA
          //   "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //   "DC-FLOODIGHT_ID" // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ], // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          //optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        }, // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false, // Setting this parameter is also optional
          respectDNT: true, // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"], // Defaults to https://www.googletagmanager.com
          origin: "powermindclub.com",
        },
      },
    },
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
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/img/logo/favicon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/img/`,
      },
      __key: "images",
    },
  ],
};

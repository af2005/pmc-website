module.exports = {
    siteMetadata: {
        title: `PMC website`, siteUrl: `https://www.yourdomain.tld`
    }, plugins: [//   {
        //   resolve: 'gatsby-plugin-google-analytics',
        //   options: {
        //     "trackingId": ""
        //   }
        // },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sharp",
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
            resolve: 'gatsby-source-filesystem', options: {
                "name": "images", "path": "./src/img/"
            }, __key: "images"
        },

    ]
};
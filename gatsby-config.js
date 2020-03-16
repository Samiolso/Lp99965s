require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Pizzeria Lucky Petržalka - Objednajte si pizzu online`,
    description: `Navštívte nás alebo si objednajte najlepšiu pizzu v Petržalke. Pozrite si naše obedové menu a jedálny lístok.`,
    author: `pizza lucky`,
    siteUrl: `https://pizzerialucky.sk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-159174866-1",
        head: true
      },
    },
    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        spreadsheetId: "1FfMKhOm_qI7Av3Vhm4FO6tIetn2HjoLDrPTleLyuDec",
        spreadsheetName: "",
        typePrefix: "GoogleSpreadsheet",
        credentials: {
          client_email: "project@pizzalucky-268811.iam.gserviceaccount.com",
          private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCml6znbQ+kYnvG\nQiHbCY8hwAEkvdH+Leg0vGQXBpdei9Ww/iGuEY+t/L/BgZxshcGyCrFYvgdjsfKG\n0GiguLudhPoRHawzTBH4dOCB9eDD8VseMb2AS2amymYs/Br/hna88hUk0/JippTy\n+ULw943koT0cY3f659tjVGccyHa5saa7dJ06eBBYIr13H5hEd9B5eImwobUpk2CA\n18ZDTRwVKvbwtGDi8iBs/28wZJiQJnacbNg7jhoxeM1DJola/R5BZijmbyY1UJkh\nhzYrdZu8NhQrI+hqdafLDgwpUwruTv9a5BmVRl4iROnNhGSWBARRwQUVEb7Y/RRu\naXzIcqdTAgMBAAECggEAP2jCDkBr0MUPmbH4Uvf7e/wqM0LxGA9/L/t5GW6P1RPi\nnYDNbwUOLEpk7pGX6ZKr3EnHoSCLjX3g80GGYY6PEvDXggZKUiglOu25up3NFKfc\nZ8zE9X09sESfyYWX/STAM0DtnVvzCWugjC8mNLP1VU2uBg0yUNVJozAwIzuGPT1s\njy2f4GePek9ShObbYofVGOaAvM7IrSPbPM7uEP5MJe4Kk1adbxPyN9HQF67gOHyW\nHzyzwiyINL4HqDgDE+8wJtIssZrlZVhjexx1LHTUOGqwTulhlMcKm202QWiQL3Sw\nOOPGYW7mUdcxxYfhOpuwE9GebrvNbnSuUSmv6wMeCQKBgQDhEy/lEBX74ufL9y+d\nowmG75D1CS3UXvU4f3h3W4NZm8Ew9hmlk6GcxFQpbYxwAW3ijkyBayy3OYejcnRB\ny7pvj+fcYQLNN1WqEE3rTg5eoCEQNhbkHlJcKV9NenBF8Zc3B7eaVH6p2qfdNEiX\nhMaoH7miJE5KNGIKApxqRAe27wKBgQC9e2tJHSkSj4kIdxESqVyOri/afN4sQ2SB\n61OZk6Q6W/+p0ySSGTTQA8znZEEn5aBiGUiWyCrY7HyQ67ieZu+jARDnoc2wK5Q8\n70FbHISiURQ3wa34UcFgUO2gfpotGdBIWDkYxNDHZC3g8cMdl8CMxfTuiejXK92A\n5NZ+F7n13QKBgDtBd+yQjZkhJfGXBFw2Hj3+OGWqovw0e88CEE8sMqqWzQf84seq\n1HOXZKj7hGvAlJN+7zlrY/xhEwq/CUiBQHY6pspoZ/prRQxe+oSmqjXTZqED/IbW\nTMyiv8qAH6rqbes5BueEs0w4mtUr/KiXdk2w/IhpkosKu3zzLwbzHizVAoGBAKOj\nMJYl3tCusPNkkJQDO3HlMGKKL/0d/nDM4JfjD5Nu3C63r/+UUS3L+mtjA3oHLylJ\nGI1PNOG96h3l1LzHvPCS/RxtegtIt26gWVrsGAdt6f30/99SC6S4f195toB4qI2x\n0y1226827wAzCgRGh/2K/+n5o+Ifed3UwwCGUQzpAoGAZpiP/0E2f9gfpcWHEwRu\nC4yz6wF8SZekRpgizXMbB0iduyMyNlFTrMmob5p+aykc61vjfHmqRqeIEwzvf0eL\nFcOh0lFQajHXmg2hfEpI3g/wLCcC7+W4spdj3ZeWnkfAtYvt/xvyVf300U2eeuxW\nOI4U7eZTdOS/s4y9XUyuDu0=\n-----END PRIVATE KEY-----\n"
        },
      }
    },

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
        name: `Pizzeria Lucky`,
        short_name: `Pizza Lucky`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        display: `minimal-ui`,
        icon: `src/images/logo-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
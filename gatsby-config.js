require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config = require('./config/website')

const contentfulConfig = {
  // spaceId: process.env.CONTENTFUL_SPACE_ID,
  // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  spaceId: 'p6ekm7xm59kw',
  accessToken: 'x2YuD-5shiz6Llr7wC64v4m71G686bJC-bhEeY_Ltrs',
}

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}
const siteUrl = 'https://www.archgako.com/';

module.exports = {
  siteMetadata: {
    languages: {
      langs: ['en', 'ru'],
      defaultLangKey: 'ru',
    },
    title: config.siteTitle,
    twitterHandle: config.twitterHandle,
    description: config.siteDescription,
    keywords: config.keywords,
    canonicalUrl: siteUrl,
    image: config.siteLogo,
    author: {
      name: config.author,
      minibio: config.minibio,
    },
    organization: {
      name: config.organization,
      url: siteUrl,
      logo: config.siteLogo,
    },
  },
  // pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',

    'gatsby-transformer-sharp',
    `gatsby-plugin-sharp`,

    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: 1000
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'ru',
        langKeyDefault: 'ru',
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
  ],
}

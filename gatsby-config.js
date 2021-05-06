require('dotenv').config({
  path: `.env`,
})

const config = require('./config/website')
const { prismicRepo, releaseID, accessToken } = require('./prismic-configuration')
const linkResolver = require('./src/utils/linkResolver')

const reponame = process.env.PRISMIC_REPO_NAME || prismicRepo
// eslint-disable-next-line no-unused-vars
const apiKey = process.env.PRISMIC_API_KEY || accessToken
// eslint-disable-next-line no-unused-vars
const prismicReleaseID = process.env.PRISMIC_RELEASE_ID || releaseID

const bloghomeSchema = require('./custom_types/bloghome.json')
const projecthomeSchema = require('./custom_types/projecthome.json')
const postSchema = require('./custom_types/post.json')
const projectSchema = require('./custom_types/project.json')
const navigationSchema = require('./custom_types/navigation.json')

const gastbySourcePrismicConfig = {
  resolve: 'gatsby-source-prismic',
  options: {
    repositoryName: reponame,
    prismicToolbar: true,
    linkResolver: () => (doc) => linkResolver(doc),
    schemas: {
      bloghome: bloghomeSchema,
      contact: bloghomeSchema,
      navigation: navigationSchema,
      projecthome: projecthomeSchema,
      post: postSchema,
      project: projectSchema,
    },
  },
}

module.exports = {
  siteMetadata: {
    siteTitle: config.siteTitle,
    siteTitleAlt: config.siteTitleAlt,
    siteDescription: config.siteDescription,
    siteShortName: config.siteShortName,
    siteUrl: config.siteUrl,
    siteLogo: config.siteLogo,
    siteLogoSmall: config.siteLogoSmall,
    siteBanner: config.siteBanner,
    siteBannerWidth: config.siteBannerWidth,
    siteBannerHeight: config.siteBannerHeight,
  },
  plugins: [
    gastbySourcePrismicConfig,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        // eslint-disable-next-line global-require
        postCssPlugins: [require(`autoprefixer`)],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteShortName,
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicons/android-chrome-192x192.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-netlify',
  ],
}

const {
  prismicRepo,
  releaseID,
  accessToken,
} = require('./prismic-configuration')
const linkResolver = require('./src/utils/linkResolver')

const reponame = process.env.PRISMIC_REPO_NAME || prismicRepo
const apiKey = process.env.PRISMIC_API_KEY || accessToken
const prismicReleaseID = process.env.PRISMIC_RELEASE_ID || releaseID

const bloghomeSchema = require('./custom_types/bloghome.json')
const postSchema = require('./custom_types/post.json')
const projectSchema = require('./custom_types/project.json')
const navigationSchema = require('./custom_types/navigation.json')

const gastbySourcePrismicConfig = {
  resolve: 'gatsby-source-prismic',
  options: {
    repositoryName: reponame,
    accessToken: apiKey,
    releaseID: prismicReleaseID,
    prismicToolbar: true,
    linkResolver: () => (doc) => linkResolver(doc),
    schemas: {
      bloghome: bloghomeSchema,
      post: postSchema,
      project: projectSchema,
      navigation: navigationSchema,
    },
  },
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Prismic Blog',
    description: 'Blog example for Gatsby & Prismic',
    author: '@levimykel',
  },
  plugins: [
    gastbySourcePrismicConfig,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`autoprefixer`)],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ],
}

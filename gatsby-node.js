const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogpages = await graphql(`
    {
      allPrismicPost {
        nodes {
          id
          uid
          lang
          type
          url
        }
      }
    }
  `)
  const projectpages = await graphql(`
    {
      allPrismicProject {
        nodes {
          id
          uid
          lang
          type
          url
        }
      }
    }
  `)

  blogpages.data.allPrismicPost.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/post.js'),
      context: { ...page },
    })
  })
  projectpages.data.allPrismicProject.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/project.js'),
      context: { ...page },
    })
  })
}

import React from 'react'
import { graphql } from 'gatsby'
// import { RichText } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic'
import { Layout } from 'components'

// import BlogPosts from '../components/BlogPosts'

// // Query for the Blog Home content in Prismic

export const query = graphql`
  query BlogQuery {
    prismicNavigation {
      ...HeaderQuery
    }
  }
`
// // Using the queried Blog Home document data, we render the top section
// const BlogHomeHead = ({ home }) => {
//   const avatar = { backgroundImage: `url(${home.image.url})` }
//   return (
//     <div className="home-header container" data-wio-id={home.id}>
//       <div className="blog-avatar" style={avatar} />
//       <h1>{RichText.asText(home.headline)}</h1>
//       <p className="blog-description">{RichText.asText(home.description)}</p>
//     </div>
//   )
// }

export const blog = ({ data }) => {
  //   if (!data) return null
  //   // Define the Blog Home & Blog Post content returned from Prismic
  //   const home = data.prismicBloghome.data
  //   const posts = data.allPrismicPost.edges
  const { prismicNavigation } = data

  return (
    <Layout navigation={prismicNavigation}>
      {/* <BlogHomeHead home={home} />
        <BlogPosts posts={posts} /> */}
    </Layout>
  )
}

export default withPreview(blog)

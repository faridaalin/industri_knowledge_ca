const path = require(`path`)
// const templateFile = path.resolve('src/template/project.js')

async function createProjectPages (graphql, actions, reporter) {
    const { createPage } = actions
    const result = await graphql(`
      {
        allSanityProject(filter: { slug: { current: { ne: null } } }) {
          edges {
            node {
              id
              slug {
                current
              }
            }
          }
        }
      }
    `)
  
    if (result.errors) throw result.errors
  
    const projectEdges = (result.data.allSanityProject || {}).edges || []
  
    projectEdges.forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `/work/${slug}/`
  
      reporter.info(`Creating project page: ${path}`)
  
      createPage({
        path,
        component: require.resolve('./src/templates/project.js'),
        context: { id }
      })
    })
  }
async function createBlogPages (graphql, actions, reporter) {
    const { createPage } = actions
    const result = await graphql(`
      {
        allSanityPost(filter: { slug: { current: { ne: null } } }) {
          edges {
            node {
              id
              publishedAt
              slug {
                current
              }
            }
          }
        }
      }
    `)
  
    if (result.errors) throw result.errors
  
    const projectEdges = (result.data.allSanityPost || {}).edges || []
  
    projectEdges.forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.slug.current
      const path = `/blog/${slug}/`
  
      reporter.info(`Creating blog page: ${path}`)
  
      createPage({
        path,
        component: require.resolve('./src/templates/blog.js'),
        context: { id }
      })
    })
  }
  
  exports.createPages = async ({ graphql, actions, reporter }) => {
    await createBlogPages(graphql, actions, reporter)
    await createProjectPages(graphql, actions, reporter)
  }
  
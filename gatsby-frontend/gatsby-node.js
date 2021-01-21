const path = require(`path`)
// const templateFile = path.resolve('src/template/project.js')

async function createProjectPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityProject(
        filter: { slug: { current: { ne: null } } }
        sort: { order: DESC, fields: date }
      ) {
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

  const projects = (result.data.allSanityProject || {}).edges || []

  projects.forEach((edge, index) => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `/projects/${slug}/`

    reporter.info(`Creating project page: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/templates/project.js"),
      context: {
        id,
        prev: index === 0 ? null : projects[index - 1].node,
        next: index === projects.length - 1 ? null : projects[index + 1].node,
      },
    })
  })
}
async function createBlogPages(graphql, actions, reporter) {
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

  const posts = (result.data.allSanityPost || {}).edges || []

  posts.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `/blog/${slug}/`

    reporter.info(`Creating blog page: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/templates/blog.js"),
      context: { id },
    })
  })
}
async function createPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPage(filter: { slug: { current: { ne: null } } }) {
        nodes {
          slug {
            current
          }
          title
          id
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pages = (result.data.allSanityPage || {}).edges || []

  pages.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `/${slug}/`

    reporter.info(`Creating page: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/templates/page.js"),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPages(graphql, actions, reporter)
  await createProjectPages(graphql, actions, reporter)
  await createPages(graphql, actions, reporter)
}

const path = require('path')
const fetch = require('node-fetch')
const {
  createFilePath,
  createRemoteFileNode,
} = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions, graphql }) =>
  graphql(`
    query {
      allPodcastEpisodeControlRemoto(
        sort: { order: DESC, fields: published_at }
      ) {
        edges {
          node {
            id
            title
            slug
            audio_url
            published_at(fromNow: true, locale: "es")
            description
            tags
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    const { edges } = data.allPodcastEpisodeControlRemoto
    edges.forEach(({ node }, i) => {
      const prev = i === 0 ? null : edges[i - 1].node
      const next = i === edges.length - 1 ? null : edges[i + 1].node
      actions.createPage({
        path: `episodios/${node.slug}`,
        component: path.resolve(`./src/templates/episodio.tsx`),
        context: {
          id: node.id,
          prev,
          next,
        },
      })
    })
  })

exports.onCreateNode = async ({
  node,
  getNode,
  actions,
  createNodeId,
  getCache,
}) => {
  const { createNode, createNodeField } = actions
  if (node.internal.type === `PodcastEpisodeControlRemoto`) {
    const parent = getNode(node.parent)
    createNodeField({
      name: 'id',
      node,
      value: node.id,
    })

    createNodeField({
      name: 'title',
      node,
      value: node.title,
    })

    createNodeField({
      name: 'description',
      node,
      value: node.description,
    })

    createNodeField({
      name: 'slug',
      node,
      value: node.slug,
    })

    createNodeField({
      name: 'published_at',
      node,
      value: node.published_at || '',
    })

    createNodeField({
      name: 'tags',
      node,
      value: node.tags || [],
    })

    if (node.artwork_url) {
      const fileNode = await createRemoteFileNode({
        // the url of the remote image to generate a node for
        url: node.artwork_url,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        getCache,
      })
      if (fileNode) {
        //node.remoteImage___NODE = fileNode.id;
        node.artwork___NODE = fileNode.id
      }
    }
  }
}

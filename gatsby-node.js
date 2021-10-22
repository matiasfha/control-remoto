// const path = require('path')
// const fetch = require('node-fetch')
// const {
//   createFilePath,
//   createRemoteFileNode,
// } = require(`gatsby-source-filesystem`)

// const getPath = (slug) => {
//   let path = slug
//   if (slug.includes(':')) {
//     path = slug.split(':')[1].trim().substring(1)
//   }
//   const n = path.toLowerCase().replace(',', '')
//   return n
// }

// const createEpisodesPage = ({ edges, createPage, context }) => {
//   edges.forEach(({ node }, i) => {
//     const prev = i === 0 ? null : edges[i - 1].node
//     const next = i === edges.length - 1 ? null : edges[i + 1].node
//     const [, , ...title] = node.slug.split('-')
//     actions.createPage({
//       path: `episodios`,
//       component: path.resolve(`./src/templates/episodios.tsx`),
//       context: {
//         id: node.id,
//         prev,
//         next,
//       },
//     })
//   })
// }

// exports.createPages = ({ actions, graphql }) =>
//   graphql(`
//     query {
//      allFeedPodcast(sort: { order: DESC, fields: isoDate }) {
//       nodes {
//         id
//         title
//         content
//         enclosure {
//           url
//         }
//         isoDate(fromNow: true, locale: "es")
//         link
//         itunes {
//           image {
//             attrs {
//               href
//             }
//           }
//         }
//       }
//     }
//   `).then(({ data, errors }) => {
//     if (errors) {
//       return Promise.reject(errors)
//     }

//     const { edges } = data.allFeedPodcast
//     edges.forEach(({ node }, i) => {
//       const prev = i === 0 ? null : edges[i - 1].node
//       const next = i === edges.length - 1 ? null : edges[i + 1].node
//       const location = getPath(node.title)
//       actions.createPage({
//         path: `episodios/${location}`,
//         component: path.resolve(`./src/templates/episodio.tsx`),
//         context: {
//           id: node.id,
//           prev,
//           next,
//         },
//       })
//     })
//   })

// exports.onCreateNode = async ({
//   node,
//   getNode,
//   actions,
//   createNodeId,
//   getCache,
// }) => {
//   const { createNode, createNodeField } = actions
//   if (node.internal.type === `PodcastEpisodeControlRemoto`) {
//     const parent = getNode(node.parent)
//     createNodeField({
//       name: 'id',
//       node,
//       value: node.id,
//     })

//     createNodeField({
//       name: 'title',
//       node,
//       value: node.title,
//     })

//     createNodeField({
//       name: 'description',
//       node,
//       value: node.description,
//     })

//     createNodeField({
//       name: 'slug',
//       node,
//       value: node.slug,
//     })

//     createNodeField({
//       name: 'published_at',
//       node,
//       value: node.published_at || '',
//     })

//     createNodeField({
//       name: 'tags',
//       node,
//       value: node.tags || [],
//     })

//     if (node.artwork_url) {
//       const fileNode = await createRemoteFileNode({
//         // the url of the remote image to generate a node for
//         url: node.artwork_url,
//         parentNodeId: node.id,
//         createNode,
//         createNodeId,
//         getCache,
//       })
//       if (fileNode) {
//         //node.remoteImage___NODE = fileNode.id;
//         node.artwork___NODE = fileNode.id
//       }
//     }
//   }
// }

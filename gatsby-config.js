const path = require('path')

require('dotenv').config({
  path: '.env',
})
const baseUrl = 'https://www.controlremoto.io',
  {
    NODE_ENV,
    URL: NETLIFY_SITE_URL = baseUrl,
    DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
    CONTEXT: NETLIFY_ENV = NODE_ENV,
    BUZZSPROUT_TOKEN,
  } = process.env,
  isNetlifyProduction = NETLIFY_ENV === 'production',
  siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

const descripciones = {
  camilo: `Novio de Pamela, viven con una perrita que es la encarnación de Satanás. Autodidacta, aspirante a cocinero, a veces carpintero, ama series y películas por igual. Actualmente trata de aprender a tocar el bajo. 7 años trabajando remoto.`,
  matias: `Papá de Mia e Inti y compañero de Nicole. Hace más de 8 años balancea toda su vida trabajando desde casa. Ávido lector, machaca teclados, se las da de gimnasta y siempre trata de estar al día con la contingencia para opinar con propiedad.`,
}

const controlRemotoEs = `Después de 8 años de trabajo remoto, Camilo y Matias se embarcan en la idea de comunicar sus experiencias y nos hablan del trabajo a distancia y la vida en un intento de mantener la cordura desde su encierro.`

const hero = `Control Remoto es el podcast donde Camilo y Matías conversan sobre la vida y el trabajo remoto`

const playList = `¿Ya escuchaste el último episodio, quieres más? Publicamos un episodio nuevo todos los Martes, escucha nuestros episodios anteriores y súmate a la conversación.`
module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: 'https://www.controlremoto.io',
    author: 'Matías Henrández & Camilo Muñoz',
    title: 'Control Remoto Podcast',
    description: 'Un Pocast sobre la vida y el trabajo remoto',
    keywords: ['Trabajo Remoto', 'Remote Work'],
    titter: '@ControlRemoto7',
    instagram: '@controlremoto_podcast',
    organization: 'Control Remoto',
    image: 'assets/ilustracion.svg',
    pageContent: {
      descripciones,
      controlRemotoEs,
      hero,
      playList,
    },
  },
  plugins: [
    /*
     *    {
     *    resolve: 'gatsby-source-filesystem',
     *    options: {
     *    path: `${__dirname}/content/blog`,
     *    name: 'blog',
     *    },
     *    },
     */
    {
      resolve: 'gatsby-source-buzzsprout-api',
      options: {
        name: 'ControlRemoto',
        token: BUZZSPROUT_TOKEN,
        podcastId: '1057351',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/page.js'),
        },
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'A learning, teaching and writing software engineer',
        short_name: 'RWieruch',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#525dce',
        display: 'standalone',
        icon: 'assets/favicon.svg',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: { rule: { include: /assets/ } },
    },
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@/assets': path.resolve(__dirname, 'assets'),
          '@/components': path.resolve(__dirname, 'src/components'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        prettier: {
          patterns: [
            // The pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            '**/*.{css,scss,less}',
            '**/*.{json,json5}',
            '**/*.{graphql}',
            '**/*.{md,mdx}',
            '**/*.{html}',
            '**/*.{yaml,yml}',
          ],
        },
        eslint: {
          patterns: '**/*.{js,jsx,ts,tsx}',
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Chivo:400,700', 'Playfair Display:ital@1'],
        },
        typekit: {
          id: 'muli',
          api: '//use.edgefonts.net',
        },
      },
    },
  ],
}

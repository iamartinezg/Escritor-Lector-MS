module.exports = {
  siteMetadata: {
    title: `Escritor Lector App`,
    description: `Una aplicación para enviar y leer mensajes almacenados en una base de datos MySQL.`,
    author: `@tu_usuario`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`, // Para gestionar metadatos del head de cada página
    {
      resolve: `gatsby-source-filesystem`, // Plugin para manejar archivos locales
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`, // Para transformar imágenes
    `gatsby-plugin-sharp`, // Para optimización de imágenes
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // Icono para PWA
      },
    },
  ],
};

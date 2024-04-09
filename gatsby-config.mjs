import config from './config.mjs';

export const siteMetadata = {
  title: "Mugdha Behere",
};

export const plugins = [
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Mugdha Behere`,
      short_name: `Mugdha`,
      icon: `./src/images/gatsby-icon.png`,
    },
  },

  'gatsby-plugin-image',
  'gatsby-plugin-netlify',
];

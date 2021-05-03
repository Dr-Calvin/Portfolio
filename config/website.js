const meta = {
  // Metadata
  // Used by gatsby-config and SEO component
  siteTitle: 'Mitchel Follett - Full Stack Developer',
  siteDescription:
    'Hi! Ich heiße Lennart und bin sowohl autodidaktischer als auch leidenschaftlicher Kommunikationsdesigner & Front-End Entwickler. Ich entwerfe, gestalte und entwickle plattformübergreifende Design-Konzepte, um das volle Potential aus deiner Marke herauszuholen.',
  siteHeadline: 'Full Stack Developer',
  siteTitleAlt: 'MitchelFollett',
  siteShortName: 'MitchelFollett',
  siteUrl: 'https://www.MitchelFollett.com', // No trailing slash!
}

const social = {
  siteLogo: `${meta.siteUrl}/social/avatar.png`,
  siteLogoSmall: `${meta.siteUrl}/social/avatar_small.png`,
  siteBanner: `${meta.siteUrl}/social/banner_`, // Locale ending + filetype gets added in SEO component
  siteBannerWidth: '776',
  siteBannerHeight: '382',
}

const website = {
  ...meta,
  ...social,
  // googleAnalyticsID: '',

  // Manifest
  themeColor: '#3497DC',
  backgroundColor: '#ffffff',
}

module.exports = website

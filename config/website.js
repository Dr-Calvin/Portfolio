const meta = {
  // Metadata
  // Used by gatsby-config and SEO component
  siteTitle: 'Mitchel Follett - Full Stack Developer',
  siteDescription: `Hello, my name is Mitch and I'm a freelance developer/ IT Specialist, based in Birmingham, UK.`,
  siteHeadline: 'Full Stack Developer',
  siteTitleAlt: 'Mitchel Follett',
  siteShortName: 'MF',
  siteUrl: 'https://www.mitchelfollett.com', // No trailing slash!
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

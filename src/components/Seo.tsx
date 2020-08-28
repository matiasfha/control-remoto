import React from 'react'
import { Helmet } from 'react-helmet'
// import SchemaOrg from '@/components/SchemaOrg'

export type SiteT = {
  siteUrl: string
  title: string
  description: string
  keywords: Array<string>
  twitter: string
}

export type FrontMatterT = {
  title?: string
}
export type Props = {
  site: SiteT
  frontmatter: FrontMatterT
}

const Seo: React.FC<Props> = ({ site, frontmatter }: Props) => {
  let ogImage

  return (
    <Helmet title={site.title}>
      <html lang="es" />
      <title>{site.title}</title>
      {/* OpenGraph tags */}
      <meta property="og:url" content={site.siteUrl} />
      <meta property="og:title" content={site.title} />
      <meta property="og:description" content={site.description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.siteUrl} />
      <meta property="keywords" content={site.keywords.join(',')} />
      <meta property="description" content={site.description} />
      {/* <meta property="fb:app_id" content={seo.social.fbAppID} />*/}

      {/* Twitter Card tags */}
      <meta name="twitter:creator" content={site.twitter} />
      <meta name="twitter:title" content={site.title} />
      <meta name="twitter:site" content={site.siteUrl} />
      <meta name="twitter:description" content={site.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="image" content={ogImage} />
      <meta itemProp="image" content={ogImage} />
      <meta name="twitter:image" content={ogImage} />
      <meta property="og:image" content={ogImage} />

      {/*<SchemaOrg
        url={site.siteUrl}
        title={site.title}
        image={`${site.siteUrl}`}
        datePublished={frontmatter.date ? frontmatter.date : null}
        description={site.description}
        canonicalUrl={site.siteUrl}
        author={site.author}
        organization={site.organization}
        defaultTitle={site.title}
        />*/}
      <noscript>This site runs best with JavaScript enabled.</noscript>
    </Helmet>
  )
}

export default Seo

import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/theme/logo'
import { useRouter } from 'next/router'
import CustomFooter from './components/theme/custom-footer'

const config: DocsThemeConfig = {
  logo: Logo,
  logoLink: false,
  project: {
    link: 'https://github.com/schedule-x/schedule-x',
  },
  chat: {
    link: 'https://discord.gg/yHbT3C4M8w',
  },
  docsRepositoryBase:
    'https://github.com/schedule-x/schedule-x/tree/main/website',
  footer: {
    component: CustomFooter,
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Schedule-X',
      }
    }
  },
  darkMode: false,
  feedback: {
    useLink: () => 'https://github.com/schedule-x/schedule-x/issues/new/choose'
  },

  nextThemes: {
    forcedTheme: 'light',
  },

  head: () => {
    // using useRouter, get full current path including host
    const { asPath, basePath } = useRouter()
    const url = `https://schedule-x.dev${basePath}${asPath}`

    return (
      <>
        <link rel="shortcut icon" href="/images/favicon_io/favicon.ico"/>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon_io/favicon-16x16.png"
        />
        <meta
          property="og:image"
          content="https://schedule-x.s3.eu-west-1.amazonaws.com/logo_open_graph.png"
        />
        <meta property="og:image:width" content="1600"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:url" content={url} />
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="og:locale" content="en_US"/>
      </>
    )
  },

  // banner: {
  //   key: 'newsletter-signup-1.0',
  //   text: (
  //     <a href="/newsletter" target="_blank">
  //       Get the latest project news. Click here for the newsletter signup 📬
  //     </a>
  //   )
  // }
  banner: {
      key: 'v2-1.0',
      text: (
        <a href="/docs/migration-v2">
          v2 is now here 🎉 Click here for the migration guide!
        </a>
      )
    }
}

export default config

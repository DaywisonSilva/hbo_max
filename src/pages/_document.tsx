import { Html, Head, Main, NextScript } from 'next/document'
import { DefaultTheme } from '@themes/index'

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head>
        <style
          id='stitches'
          dangerouslySetInnerHTML={{ __html: DefaultTheme.getCssText() }}
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
          rel='stylesheet'
        />
        favi
        <meta property='og:title' content='HBO MAX Redesign' />
        <meta property='og:type' content='movie' />
        <meta
          property='og:url'
          content='https://hbo-max-redesign.netlify.app/'
        />
        <meta property='og:image' content='/img/hbo-max.jpg' />
        <meta
          property='og:description'
          content='A Redesign of HBO MAX made with React + Next.js'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

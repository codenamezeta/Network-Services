import '../public/css/bootstrap.min.css'
import '../public/css/animate.min.css'
// import '../public/css/fontawesome.min.css'
// import '../public/css/fontawesome6.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import 'react-image-lightbox/style.css'
import 'react-sweet-progress/lib/style.css'
import '../public/css/style.scss'
import '../public/css/responsive.css'

import { Preloader, Placeholder } from 'react-preloading-screen'
import App from 'next/app'
import Head from 'next/head'
import Loader from '../components/Layouts/Loader'
import GoTop from '../components/Layouts/GoTop'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <title>Network Services</title>
        </Head>

        <Preloader>
          <Component {...pageProps} />

          <GoTop scrollStepInPx='50' delayInMs='16.66' />

          <Placeholder>
            <Loader />
          </Placeholder>
        </Preloader>
      </>
    )
  }
}

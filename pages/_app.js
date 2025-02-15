import '../styles/common/globals.scss'
import variales from  '../styles/common/variables.scss'
// import '../styles/common/variables.scss'
// import '../styles/common/button.module.scss'
// import '../styles/common/default.module.scss'
// import '../styles/common/media-queries.module.scss'
// import '../styles/common/typography.scss'
// import '../styles/common/utility.scss'


import Layout from '../component/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout color={variales.$colors}>
      <Component {...pageProps} />
      </Layout>
     
    </>
  )
}

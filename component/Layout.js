import Header from './global/Header'
import Footer from './global/Footer'
import Head from './global/Head'

export default function layout ({children}) {
    return (
        <>
            <Head />
            <Header />
            {children}
            <Footer />
        </>
    )
}
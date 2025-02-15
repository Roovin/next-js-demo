import footerCss from '../../styles/global/Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
export default function Footer () {
    // <div className={headerCss.logo}>
    //     <Link href="/" className='emptyLink'>.</Link>
    //     <img src="/header/bansal.png" alt="Logo" />
    // </div>
    return (
        <>
            <footer className={footerCss.footer}>
                <div className='container'>
                    <div className={footerCss.outerWrapper}>
                        <div className={footerCss.socialWrapper}>
                            <div className={footerCss.logoWrap}>
                                <Link href="/" className='emptyLink'>.</Link>
                                <Image src="/header/logo.png" alt="Logo" width={150} height={52} />
                            </div>
                            <div className={footerCss.address}>
                                <p>Vill + Post Barla,</p>
                                <p>Aligarh 202129</p>
                            </div>
                            <div className={footerCss.follow}>
                                <p>Follow us:</p>
                            </div>
                            <div className={footerCss.socialWrap}>

                                <div className={footerCss.socialIcon}>
                                    <Link href="/" className='emptyLink'>.</Link>
                                    <Image src="/footer-icon/linkedIn.svg" alt="LinkedIn Icon" width={20} height={20} />
                                </div>
                                <div className={footerCss.socialIcon}>
                                    <Link href="/" className='emptyLink'>.</Link>
                                    <Image src="/footer-icon/twitter.svg" alt="Twitter" width={20} height={20} />
                                </div>
                                <div className={footerCss.socialIcon}>
                                    <Link href="/" className='emptyLink'>.</Link>
                                    <Image src="/footer-icon/facebook.svg" alt="Facebook" width={20} height={20}/>
                                </div>
                                {/* <div className={footerCss.socialIcon}>
                                    <img src="" alt=""/>
                                </div> */}
                            </div>
                        </div>
                        <div className={footerCss.colEight}>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
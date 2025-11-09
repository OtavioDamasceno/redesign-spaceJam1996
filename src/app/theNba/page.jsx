import nbalogo from '@/assets/theNbaImages/nbalogo.png'
import nbaLasted from '@/assets/theNbaImages/nbaLasted.png'
import NCAA_logo from '@/assets/theNbaImages/NCAA_logo.svg.png'
import fiba from '@/assets/theNbaImages/fiba.png'
import Image from 'next/image'
import Card from '@/components/Card.jsx'
import TheNbaaa from '@/assets/theNbaImages/TheNbaaa.png'
import spacejamlogo from '@/assets/spacejam-logo.png'
import languageIcon from '@/assets/language-icon.png'
import SideMenu from '@/components/SideMenu'
import Link from 'next/link'

export default function TheNba() {
    return (
        <div className='main-container'>
            <div className='header'>
                <div className='header-left'>
                    <SideMenu />
                    <Link href={'/home'}>
                        <Image src={spacejamlogo} alt="Space Jam Logo" width={125} height={75} />
                    </Link>
                </div>
                <div className='header-center'>
                    <Image src={TheNbaaa} alt="The NBA" width={250} height={75} />
                </div>
                <div className='header-right'>
                    <div className="language-box">
                        <Image src={languageIcon} alt="global" resizemode="cover" width={25} height={25}></Image>
                        <label>English</label>
                        <p className='arrow-down'>&#10095;</p>
                    </div>
                </div>
            </div>
            <div className='main'>
                <div className="theNbaBody">
                    <Card image={nbalogo} name={'NBA'} link={'https://www.nba.com/'} legenda={"NBA Home Page"} />
                    <Card image={nbaLasted} name={'NBA Latest'} link={'https://www.nba.com/news'} legenda={"The Latest NBA News"} />
                    <Card image={NCAA_logo} name={'NCAA'} link={'https://www.ncaa.com/'} legenda={"NCAA NEWS"} />
                    <Card image={fiba} name={'FIBA'} link={'https://www.fiba.basketball/'} legenda={"Basketball around the world"} />
                </div>
            </div>
            <div className='footer'>
                <p>SPACE JAM, characters, names, and all related <br />indicia are trademarks of Warner Bros. © 2025</p>
            </div>
        </div>
    )
}

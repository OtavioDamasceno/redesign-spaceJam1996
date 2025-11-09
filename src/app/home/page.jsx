import Image from 'next/image'
import spacejamlogo from '@/assets/spacejam-logo.png'
import warnerlogo from '@/assets/warner-logo.png'
import languageIcon from '@/assets/language-icon.png'
import CardPlanet from '@/components/CardPlanet'
//import das imagens
import nbaPlanet from '@/assets/planets/nba.png'
import lineupPlanet from '@/assets/planets/lineup.png'
import juniorJamPlanet from '@/assets/planets/juniorJam.png'
import stellarSouvenirPlanet from '@/assets/planets/stellarSouvenir.png'
import behindJamPlanet from '@/assets/planets/behindJam.png'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="main-container">

      <div className="header">
        <div className="header-left">
          <Image src={warnerlogo} alt="Warner Logo" resizemode="cover" width={60} height={70}></Image>
          <label>Warner Bros.</label>
        </div>

        <div className="header-center">
          <Image src={spacejamlogo} alt="Space Jam Logo" resizemode="cover" width={180} height={130}></Image>
        </div>

        <div className="header-right">
          <div className="language-box">
            <Image src={languageIcon} alt="global" resizemode="cover" width={25} height={25}></Image>
            <label>English</label>
            <p className='arrow-down'>&#10095;</p>
          </div>
        </div>

      </div>

      <div className="main">
        <div className='row'>
          <Link href={'/theNba'} style={{ textDecoration: 'none', color: 'yellow' }}>
            <CardPlanet name={'The NBA'} image={nbaPlanet} widthImage={70} heightImage={70} />
          </Link>
          <CardPlanet name={'Lineup'} image={lineupPlanet} widthImage={70} heightImage={70} />
          <CardPlanet name={'Junior Jam'} image={juniorJamPlanet} widthImage={95} heightImage={70} />
        </div>
        <div className='row'>
          <CardPlanet name={'Stellar Souvenir'} image={stellarSouvenirPlanet} widthImage={70} heightImage={70} />
          <CardPlanet name={'Behind the Jam'} image={behindJamPlanet} widthImage={70} heightImage={70} />
        </div>
      </div>

      <div className="footer">
        <p>SPACE JAM, characters, names, and all related <br />indicia are trademarks of Warner Bros. © 2025</p>
      </div>
    </div>
  )
}

'use client'
import { useState } from "react"
import nbaPlanet from '../assets/planets/nba.png'
import lineupPlanet from '../assets/planets/lineup.png'
import juniorJamPlanet from '../assets/planets/juniorJam.png'
import stellarSouvenirPlanet from '../assets/planets/stellarSouvenir.png'
import behindJamPlanet from '../assets/planets/behindJam.png'
import CardPlanet from "./CardPlanet"

export default function SideMenu() {
    const [visible, setVisible] = useState(false)

    return (
        <div className={`sidemenu ${visible ? 'open' : ''}`}>
            <div className="menu-toggle" onClick={() => setVisible(!visible)}>
                <p>{visible ? '✖' : '☰'}</p>
            </div>

            <div className="menu-content">
                <CardPlanet name={'The NBA'} image={nbaPlanet} widthImage={30} heightImage={30} />
                <CardPlanet name={'Lineup'} image={lineupPlanet} widthImage={30} heightImage={30} />
                <CardPlanet name={'Junior Jam'} image={juniorJamPlanet} widthImage={55} heightImage={30} />
                <CardPlanet name={'Stellar Souvenir'} image={stellarSouvenirPlanet} widthImage={30} heightImage={30} />
                <CardPlanet name={'Behind the Jam'} image={behindJamPlanet} widthImage={30} heightImage={30} />
            </div>
        </div>
    )
}

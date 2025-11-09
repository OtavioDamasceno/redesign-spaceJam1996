import Image from "next/image";
import Link from "next/link";

export default function CardPlanet({ image, name, widthImage, heightImage }) {
    return (
        <div className="card-planet">
            <div className="planet-image">
                <Image src={image} alt={name} resizemode="cover" width={widthImage} height={heightImage}></Image>
            </div>
            <h1>{name}</h1>
        </div>
    )

}
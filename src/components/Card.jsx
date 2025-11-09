import Image from "next/image";
import Link from "next/link";

export default function Card({ image, name, link, legenda }) {
    return (
        <div className="card">
            <Link href={link} style={{ textDecoration: 'none', color: 'white' }}>
                <Image src={image} alt={name} />
                <p>{legenda}</p>
            </Link>
        </div>
    )

}
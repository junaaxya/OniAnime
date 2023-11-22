import Image from "next/image";

const AnimeList = ({title, images}) => {
    return (
            <div className="bg-blue-500">
                <Image src={images} alt="" width={600} height={600}/>
                <p className="py-2">Tittle : {title}</p>
            </div>
    )
}

export default AnimeList ;
import Image from "next/image";
import Link from "next/link";

const AnimeList = ({title, images,id}) => {
    return (
            <Link href={`/${id}`} className=" cursor-pointer">  
                <Image src={images} alt="" width={350} height={350}/>
                <p className="p-4 md:text-xl lg:text-xl xl:text-xl text-md  font-bold">Tittle : {title}</p>
            </Link>
    )
}

export default AnimeList ;
import Image from "next/image";
import Link from "next/link";

const AnimeList = ({title, images,id}) => {
    return (
            <Link href={`/${id}`} className=" cursor-pointer">  
                <Image src={images} alt="" width={350} height={350} className=" w-full md:bg-cover md:max-h-full 2xl:object-cover lg:max-h-80 2xl:max-h-96 2xl:w-full "/>
                <p className="p-4 md:text-xl lg:text-xl xl:text-xl text-md  font-bold">Tittle : {title}</p>
            </Link>
    )
}

export default AnimeList ;
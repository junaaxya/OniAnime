import Link from "next/link"
import AnimeList from "./components/AnimeList"

const Home = async () => {
const response = await fetch (`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
const anime = await response.json()
 return (
  <div>
    <div className="p-2 flex justify-between items-center">
      <h1 className="font-semibold">Top Anime</h1>
      <Link href="/populer" className="text-sm font-bold underlinehover:text-zinc-700 transition-all">Lihat Semua</Link>
    </div>
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-2"> 
    {anime.data.map(
      data => {
       return (
       <div key={data.mal_id} className="shadow-xl 2xl:w-96 2xl:px-10 ">
        <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id}/>
       </div>
       ) 

      })}
      </div>  
  </div>
 )

}

export default Home;
import Link from "next/link"

const Navbar = () => {
return (
    <header className=" bg-slate-900 ">
        <div className=" flex justify-between p-4" >
             <Link href="/" className="text-xl text-zinc-400 font-semibold">OniAnime</Link>
             <input placeholder="cari anime..." className=" placeholder:pl-2 placeholder:font-bold border-double rounded-md"/>    
        </div>
        
    </header>
)
}

export default Navbar
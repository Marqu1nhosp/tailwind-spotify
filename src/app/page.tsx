import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
            <Sidebar/>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-2">Boa noite</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">

            <a href="#" className="bg-white/10 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/jordan.png" width={120} height={120} alt="Picture of the author" />
              <strong>Jordan Boyz 3000</strong>
              <button className="w-8 h-8 flex items-center pl-0.5 justify-center rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible">
                <Play width={18} />
              </button>
            </a>

            <a href="#" className="bg-white/10 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/jordan.png" width={120} height={120} alt="Picture of the author" />
              <strong>Jordan Boyz 3000</strong>
              <button className="w-8 h-8 flex items-center pl-0.5 justify-center rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible">
                <Play width={18} />
              </button>
            </a>

            <a href="#" className="bg-white/10 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/jordan.png" width={120} height={120} alt="Picture of the author" />
              <strong>Jordan Boyz 3000</strong>
              <button className="w-8 h-8 flex items-center pl-0.5 justify-center rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible">
                <Play width={18} />
              </button>
            </a>

            <a href="#" className="bg-white/10 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/jordan.png" width={120} height={120} alt="Picture of the author" />
              <strong>Jordan Boyz 3000</strong>
              <button className="w-8 h-8 flex items-center pl-0.5 justify-center rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible">
                <Play width={18} />
              </button>
            </a>

            <a href="#" className="bg-white/10 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/jordan.png" width={120} height={120} alt="Picture of the author" />
              <strong>Jordan Boyz 3000</strong>
              <button className="w-8 h-8 flex items-center pl-0.5 justify-center rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible">
                <Play width={18} />
              </button>
            </a>

            <a href="#" className="bg-white/10 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/jordan.png" width={120} height={120} alt="Picture of the author" />
              <strong>Jordan Boyz 3000</strong>
              <button className="w-8 h-8 flex items-center pl-0.5 justify-center rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible">
                <Play width={18} />
              </button>
            </a>


          </div>

          <h2 className="font-semibold text-2xl mt-2">Seus Programas</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">

            <a href="" className="bg-white/5 p-2 rounded hover:bg-white/10 flex flex-col gap-2">
              <Image src="/jordan.png" className="w-full" width={120} height={120} alt="Picture of the author" />
              <strong className="font-semibold">Compilado do Código fonte</strong>
              <span className="text-sm text-zinc">Código fonte</span>
            </a>

            <a href="" className="bg-white/5 p-2 rounded hover:bg-white/10 flex flex-col gap-2">
              <Image src="/jordan.png" className="w-full" width={120} height={120} alt="Picture of the author" />
              <strong className="font-semibold">Compilado do Código fonte</strong>
              <span className="text-sm text-zinc">Código fonte</span>
            </a>

            <a href="" className="bg-white/5 p-2 rounded hover:bg-white/10 flex flex-col gap-2">
              <Image src="/jordan.png" className="w-full" width={120} height={120} alt="Picture of the author" />
              <strong className="font-semibold">Compilado do Código fonte</strong>
              <span className="text-sm text-zinc">Código fonte</span>
            </a>
            <a href="" className="bg-white/5 p-2 rounded hover:bg-white/10 flex flex-col gap-2">
              <Image src="/jordan.png" className="w-full" width={120} height={120} alt="Picture of the author" />
              <strong className="font-semibold">Compilado do Código fonte</strong>
              <span className="text-sm text-zinc">Código fonte</span>
            </a>

            <a href="" className="bg-white/5 p-2 rounded hover:bg-white/10 flex flex-col gap-2">
              <Image src="/jordan.png" className="w-full" width={120} height={120} alt="Picture of the author" />
              <strong className="font-semibold">Compilado do Código fonte</strong>
              <span className="text-sm text-zinc">Código fonte</span>
            </a>

          </div>
        </main>
      </div>
     <Footer/>
    </div>
  )
}

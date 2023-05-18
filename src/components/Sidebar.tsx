import { HomeIcon, Library, Search } from "lucide-react";

export default function Sidebar(){
    return(
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-5">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <HomeIcon />
              Início
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search />
              Buscar
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library />
              Sua Biblioteca
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className="text-small text-zinc-400 hover:text-zinc-100">Eminem</a>
            <a href="" className="text-small text-zinc-400 hover:text-zinc-100">Jordan Boyz 3000</a>
            <a href="" className="text-small text-zinc-400 hover:text-zinc-100">Aleatórias</a>
            <a href="" className="text-small text-zinc-400 hover:text-zinc-100">Banda 100 parea</a>
            <a href="" className="text-small text-zinc-400 hover:text-zinc-100">Alan Jackson</a>

          </nav>
        </aside>
    )
}
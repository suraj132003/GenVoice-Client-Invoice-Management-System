import { Link } from "react-router";
import { Github } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="border-t-4 border-black bg-[#FFFAF0] px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2">
            <div className="rounded-md border-4 border-black bg-[#FF90E8] p-1 text-xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              GV
            </div>
            <span className="text-xl font-black">Genvoice</span>
          </div>

          <p className="mt-4 max-w-md">
            A modern, client-side web application for managing invoices,
            clients, and products. Privacy-first, no server, no cloud.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="https://github.com/suraj132003"
              className="rounded-full border-2 border-black p-2 hover:bg-[#BFDBFE]"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <p className="text-sm">Created with ♥ by</p>
            
              S Suraj
            
          </div>

          <p className="mt-4 text-sm">© {new Date().getFullYear()} Genvoice</p>
        </div>
      </div>
    </footer>
  );
}

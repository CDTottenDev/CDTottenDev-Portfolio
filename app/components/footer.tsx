import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-6 md:py-0 bg-gradient-to-r from-slate-50 to-slate-100">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            Crafted with <span className="font-semibold">excessive</span> coffee and surprisingly functional code by Central Oregon's finest keyboard warriors.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-2 md:items-end">
          <Link 
            href="https://centraloregonwebdesigns.com" 
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center gap-1">
              <span>Visit Central Oregon Web Designs</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </span>
          </Link>
          
          <div className="flex items-center space-x-4 mt-1">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <span className="text-xs text-muted-foreground">
              © {currentYear} Central Oregon Web Designs
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
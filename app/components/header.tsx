import Link from 'next/link'
import { ThemeSwitch } from './ui/themeswitch'

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="text-xl font-bold text-primary hover:text-primary/90 transition-colors">
              CDTotten Dev
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            {[
              ['Projects', '/projects'],
              ['Contact', '/#contact'],
            ].map(([title, url]) => (
              <Link 
                key={url} 
                href={url} 
                className="text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {title}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform" />
              </Link>
            ))}
          </nav>
          <div className="flex items-center pl-6 border-l">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  )
}
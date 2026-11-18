import { useState } from 'react'
import { Icon } from './Icon'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const navLink = 'border-b border-white/15 py-[18px] text-sm font-medium uppercase text-white transition hover:text-white/70 md:border-0 md:py-0 md:text-[10px] xl:text-xs'

  return (
    <header className="relative z-30 flex h-[66px] items-center justify-between border-b border-white/20 px-[19px] md:h-[74px] md:justify-center md:px-[26px] xl:h-[88px] xl:px-[4.2%]">
      <a className="relative z-50 font-sans text-lg font-extrabold tracking-[-.06em] text-white md:hidden" href="#home" aria-label="Brickline home">
        BRICKLINE<span className="text-[#e96d4a]">.</span>
      </a>
      <button
        className="relative z-50 grid size-[42px] place-items-center rounded-full border border-white/55 bg-transparent text-white md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <Icon name={menuOpen ? 'close' : 'menu'} className="size-5" />
      </button>
      <nav
        className={`${menuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-0 min-h-svh flex-col items-stretch justify-start gap-0 bg-[#20231f] px-6 pb-[30px] pt-[100px] md:static md:flex md:min-h-0 md:w-full md:flex-row md:items-center md:justify-between md:bg-transparent md:p-0`}
        aria-label="Main navigation"
      >
        <div className="flex flex-col gap-0 md:flex-row md:items-center md:gap-[18px] xl:gap-[4vw]">
          <a className={navLink} href="#projects" onClick={closeMenu}>Projects</a>
          <a className={navLink} href="#highlights" onClick={closeMenu}>Services</a>
          <a className={navLink} href="#about" onClick={closeMenu}>About us</a>
        </div>
        <a className="absolute left-1/2 hidden -translate-x-1/2 font-sans text-[20px] font-extrabold tracking-[-.06em] text-white md:block" href="#home">
          BRICKLINE<span className="text-[#e96d4a]">.</span>
        </a>
        <div className="mt-1 flex flex-col gap-0 md:mt-0 md:flex-row md:items-center md:gap-[18px] xl:gap-[4vw]">
          <a className={navLink} href="#projects" onClick={closeMenu}>Properties</a>
          <a className={navLink} href="#contact" onClick={closeMenu}>Loan</a>
          <a
            className="mt-[25px] inline-flex min-h-12 items-center justify-center bg-[#e96d4a] px-5 text-center text-xs font-semibold uppercase text-white transition hover:-translate-y-0.5 hover:bg-[#d65b39] md:mt-0 md:min-h-0 md:px-[14px] md:py-3 md:text-[10px] xl:px-[22px] xl:py-[14px] xl:text-[11px]"
            href="#contact"
            onClick={closeMenu}
          >
            Contact us
          </a>
        </div>
      </nav>
    </header>
  )
}

import { Icon } from './Icon'

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center gap-x-[18px] gap-y-2 border-t border-[#e9e9e6] px-5 py-7 md:gap-7 md:px-[4.2%] md:py-9">
      <a className="font-sans text-lg font-extrabold tracking-[-.06em] text-[#242522] md:text-[20px]" href="#home" aria-label="Brickline home">
        BRICKLINE<span>.</span>
      </a>
      <p className="order-3 m-0 basis-full text-[11px] text-[#72746f] md:order-none md:basis-auto md:text-[13px]">Thoughtful homes. Exceptional living.</p>
      <a className="ml-auto inline-flex items-center gap-2 text-[11px] md:text-[13px]" href="mailto:hello@brickline.com">
        Let’s find your place <Icon name="arrow" className="size-4 text-[#e96d4a]" />
      </a>
      <span className="basis-full text-[10px] text-[#858781] md:text-[11px]">© 2025 Brickline Properties</span>
    </footer>
  )
}

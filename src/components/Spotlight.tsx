import { useEffect, useState } from 'react'
import { ArrowButton } from './ArrowButton'
import { Icon } from './Icon'

const spotlights = [
  {
    place: 'Arizona, United States',
    title: <>Where every home lives in<br />balance with nature</>,
    name: 'Stillwater Retreat',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=88',
  },
  {
    place: 'Big Bear, California',
    title: <>A slower pace, a little<br />closer to everything</>,
    name: 'Pinecrest Lodge',
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=2200&q=88',
  },
]

export default function Spotlight() {
  const [active, setActive] = useState(0)
  const spotlight = spotlights[active]
  const changeSlide = (step: number) => setActive((current) => (current + step + spotlights.length) % spotlights.length)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % spotlights.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section
      className="relative isolate flex min-h-[600px] items-center bg-cover bg-[60%_center] px-5 py-[60px] text-white md:min-h-[520px] md:bg-center md:px-[4.2%] md:py-20 xl:min-h-[560px]"
      style={{ backgroundImage: `url("${spotlight.image}")` }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/50 via-black/15 to-black/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <span className="absolute left-5 top-[34%] inline-flex rounded-full border border-white/50 px-[13px] py-[7px] text-[11px] leading-none md:left-[4.2%] md:top-[35%]">Property spotlight</span>
      <div className="absolute right-5 top-5 grid grid-cols-[auto_1fr] items-center gap-x-2 rounded-full border border-white/40 bg-black/15 px-[13px] py-[9px] text-[9px] md:right-[4.2%] md:top-[42px] md:text-[11px]">
        <Icon name="pin" className="size-[14px]" />
        <span>{spotlight.place}</span>
        <strong className="col-start-2 mt-1 text-sm font-medium md:text-[17px]">{spotlight.name}</strong>
      </div>
      <h2 key={active} className="mt-[72px] text-[clamp(39px,10vw,55px)] font-medium leading-[1.02] tracking-[-.055em] md:mt-[60px] md:text-[clamp(42px,6vw,78px)]">
        {spotlight.title}
      </h2>
      <div className="absolute bottom-6 left-5 right-5 flex flex-wrap items-center gap-2 md:bottom-[45px] md:left-[4.2%] md:right-[4.2%] md:gap-[14px]">
        <a className="inline-flex min-h-10 items-center justify-center border border-white/55 px-2.5 text-[9px] font-semibold uppercase transition hover:bg-white hover:text-[#242522] md:min-h-11 md:px-5 md:text-xs" href="#contact">+ 4 BRK rental</a>
        <a className="inline-flex min-h-10 items-center justify-center gap-2 bg-white px-2.5 text-[9px] font-semibold uppercase text-[#242522] transition hover:bg-[#e96d4a] hover:text-white md:min-h-11 md:gap-5 md:px-5 md:text-xs" href="#projects">
          Find property <Icon name="arrow" className="size-4" />
        </a>
        <div className="ml-auto flex gap-2.5">
          <ArrowButton direction="previous" onClick={() => changeSlide(-1)} label="Previous property" className="size-[42px] md:size-[54px]" />
          <ArrowButton onClick={() => changeSlide(1)} label="Next property" className="size-[42px] !border-[#E85429] !bg-[#E85429] text-white hover:!border-white hover:!bg-white md:size-[54px]" />
        </div>
      </div>
    </section>
  )
}

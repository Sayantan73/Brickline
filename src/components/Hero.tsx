import { useEffect, useState } from 'react'
import { ArrowButton } from './ArrowButton'
import Header from './Header'
import { Icon } from './Icon'

const heroSlides = [
  {
    label: 'Signature home',
    title: <>Your high-end<br />haven awaits</>,
    description: 'Discover lavish interiors, curated design, premium amenities, and personalized services that define an elevated lifestyle.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=88',
    tag: 'Quiet residence',
  },
  {
    label: 'A new perspective',
    title: <>Find your place<br />in the world</>,
    description: 'Thoughtful architecture, considered details, and room to make every day feel like your own.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=88',
    tag: 'Modern living',
  },
  {
    label: 'The art of arriving',
    title: <>Come home<br />to something more</>,
    description: 'Explore a carefully chosen collection of homes shaped around the way you want to live.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=88',
    tag: 'Private retreat',
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const slide = heroSlides[active]
  const changeSlide = (step: number) => setActive((current) => (current + step + heroSlides.length) % heroSlides.length)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section
      className="relative isolate h-[94svh] min-h-[710px] max-h-[840px] bg-cover bg-[center_58%] text-white md:h-[82vh] md:min-h-[660px] md:bg-center lg:h-[min(87vh,880px)] lg:min-h-[710px]"
      id="home"
      style={{ backgroundImage: `url("${slide.image}")` }}
    >
      <Header />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/25 to-black/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/45 via-transparent to-slate-900/20" />
      <div className="absolute left-[22px] top-[25%] w-[calc(100%-44px)] md:left-[4.2%] md:top-[27%] md:w-[70%] lg:top-[18%] lg:w-[min(590px,60%)]">
        <span className="inline-flex rounded-full border border-white/50 px-[13px] py-[7px] text-[11px] leading-none">{slide.label}</span>
        <h1 key={active} className="my-5 text-[clamp(52px,13vw,72px)] font-medium leading-[.99] tracking-[-.055em] md:text-[clamp(54px,9vw,76px)] lg:my-6 lg:text-[clamp(58px,7.3vw,106px)]">
          {slide.title}
        </h1>
        <p className="max-w-[360px] text-[13px] leading-[1.65] text-white/90 md:max-w-[400px] md:text-sm">{slide.description}</p>
        <span className="absolute -bottom-[94px] left-0 inline-flex items-center gap-[7px] whitespace-nowrap rounded-full border border-white/40 bg-black/10 px-[13px] py-2 text-[11px] md:bottom-auto md:top-[150px] md:left-[min(66vw,800px)] md:right-auto">
          <span className="size-1.5 rounded-full bg-[#e96d4a]" />{slide.tag}
        </span>
      </div>
      <div className="absolute bottom-[38px] left-5 right-5 flex items-end justify-between md:bottom-[76px] md:left-[4.2%] md:right-[4.2%]">
        <a className="inline-flex min-h-[45px] items-center justify-center gap-2 bg-white px-[14px] text-[10px] font-semibold uppercase text-[#242522] transition hover:-translate-y-0.5 hover:bg-[#e96d4a] hover:text-white md:min-h-12 md:gap-5 md:px-5 md:text-xs" href="#projects">
          Find property <Icon name="arrow" className="size-4" />
        </a>
        <div className="absolute bottom-0 left-0 right-0 flex w-full flex-col-reverse md:bottom-auto md:left-1/2 md:right-auto md:w-auto md:-translate-x-1/2 md:flex-col md:text-center">
          <div className="ml-auto flex w-[52%] items-center gap-[9px] md:ml-0 md:w-auto md:gap-[26px]">
            <ArrowButton direction="previous" onClick={() => changeSlide(-1)} label="Previous hero slide" className="size-9 md:size-[38px]" />
            <span className="relative block h-px flex-1 overflow-hidden bg-white/50 md:w-[clamp(110px,17vw,240px)] md:flex-none">
              <span className="block h-0.5 bg-white transition-transform duration-300" style={{ width: `${100 / heroSlides.length}%`, transform: `translateX(${active * 100}%)` }} />
            </span>
            <ArrowButton onClick={() => changeSlide(1)} label="Next hero slide" className="size-9 md:size-[38px]" />
          </div>
          <p className="mb-[18px] mt-0 w-full text-center text-[10px] leading-[1.4] text-white/90 md:mb-0 md:mt-[17px] md:w-auto md:text-xs md:leading-normal">
            Unlock the potential of real estate with strategic insights,<br className="hidden md:block" /> innovative solutions, and exceptional service.
          </p>
        </div>
      </div>
      <a className="absolute -bottom-[85px] right-[18px] z-20 hidden w-[150px] text-[#242522] lg:block md:-bottom-[88px] md:right-[4%] md:w-[205px] xl:-bottom-[108px] xl:right-[4.2%] xl:w-[250px]" href="#contact">
        <span className="flex h-[45px] items-center gap-[7px] whitespace-nowrap bg-[#e96d4a] px-[10px] text-[10px] text-white transition hover:bg-[#d65b39] md:h-[52px] md:px-[14px] md:text-xs xl:h-[58px] xl:gap-3 xl:px-5 xl:text-[13px]">
          <Icon name="phone" className="size-[14px] xl:size-[17px]" /> Book a consultation
        </span>
        <img className="block h-[112px] w-[92px] object-cover object-top md:h-[150px] md:w-[125px] xl:h-[185px] xl:w-[155px]" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=420&q=85" alt="Brickline property consultant" />
      </a>
    </section>
  )
}

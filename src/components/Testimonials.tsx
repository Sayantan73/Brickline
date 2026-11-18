import { useEffect, useState } from 'react'
import { ArrowButton } from './ArrowButton'
import { Icon } from './Icon'

const testimonials = [
  {
    name: 'Gregg Bergstrom',
    email: 'bergstrom@gmail.com',
    quote: <>Working with <strong>Brickline</strong> was a fantastic experience from start to finish. They listened to exactly what I wanted, and within a few short weeks, I found my dream home.<br /><br />They went above and beyond to ensure everything went smoothly. Communication was always clear and timely.</>,
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85',
    home: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    quote: <>From our first conversation, Brickline made the entire process feel effortless. They understood what mattered to us and found a home that felt right from the moment we walked in.<br /><br />Thoughtful, responsive, and genuinely invested in helping us find our place.</>,
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85',
    home: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const testimonial = testimonials[active]
  const changeTestimonial = (step: number) => setActive((current) => (current + step + testimonials.length) % testimonials.length)
  const sectionWidth = 'mx-auto w-[calc(100%-36px)] md:w-[calc(100%-52px)] md:max-w-[720px] lg:w-[calc(100%-96px)] lg:max-w-none xl:max-w-[1440px]'

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className={`${sectionWidth} py-[63px] md:py-[76px] xl:py-[86px]`} id="about">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[31px] font-medium tracking-[-.055em] md:text-[clamp(34px,4vw,54px)]">Our client testimonial</h2>
        <a className="inline-flex min-h-[38px] shrink-0 items-center gap-[7px] border border-[#bdbfba] px-[10px] text-[8px] font-semibold uppercase transition hover:border-[#e96d4a] hover:bg-[#e96d4a] hover:text-white md:min-h-11 md:gap-5 md:px-5 md:text-xs" href="#contact">
          Our clients <Icon name="arrow" className="size-[13px] md:size-4" />
        </a>
      </div>
      <div className="mt-6 flex flex-col gap-5 md:grid md:min-h-[430px] md:grid-cols-[.9fr_1.2fr] md:items-center md:gap-[30px] md:mt-7 xl:grid-cols-[.85fr_1.35fr_.8fr] xl:gap-[42px]">
        <div className="contents md:flex md:flex-col md:justify-center">
          <img className="order-1 h-[260px] w-full object-cover md:order-none md:h-[300px]" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=85" alt="Contemporary Brickline residence" />
          <div className="order-2 -mt-1.5 flex items-center gap-3 md:order-none md:mt-[15px]">
            <img className="size-[42px] rounded-full object-cover" src={testimonial.photo} alt="" />
            <div className="flex flex-col gap-[3px]">
              <strong className="text-[13px]">{testimonial.name}</strong>
              <span className="text-[11px] text-[#777975]">{testimonial.email}</span>
            </div>
          </div>
        </div>
        <div className="order-3 self-center md:order-none">
          <blockquote key={active} className="text-sm leading-[1.7] text-[#484a46] md:text-base">
            {testimonial.quote}
          </blockquote>
          <div className="mt-5 flex items-center gap-5 md:mt-8">
            <ArrowButton direction="previous" onClick={() => changeTestimonial(-1)} label="Previous testimonial" className="size-[34px] border-[#d2d3cf] text-[#242522] hover:border-[#e96d4a] hover:bg-[#e96d4a] hover:text-white" />
            <span className="relative block h-px flex-1 overflow-hidden bg-[#dededb]">
              <span className="block h-0.5 bg-[#686a66] transition-transform duration-300" style={{ width: `${100 / testimonials.length}%`, transform: `translateX(${active * 100}%)` }} />
            </span>
            <ArrowButton onClick={() => changeTestimonial(1)} label="Next testimonial" className="size-[34px] border-[#d2d3cf] text-[#242522] hover:border-[#e96d4a] hover:bg-[#e96d4a] hover:text-white" />
          </div>
        </div>
        <img className="order-4 -mr-[18px] mb-[-53px] h-[170px] w-[65%] self-end object-cover md:hidden" src={testimonial.home} alt="A home from the Brickline collection" />
        <img className="hidden h-[230px] w-full self-end object-cover xl:block xl:mb-[-75px]" src={testimonial.home} alt="A home from the Brickline collection" />
      </div>
    </section>
  )
}

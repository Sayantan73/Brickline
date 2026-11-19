import { useEffect, useState } from 'react'
import { ArrowButton } from './ArrowButton'
import { Icon } from './Icon'

const projects = [
  {
    name: 'Golden Horizon Villa',
    location: 'South Carolina, 2025',
    description: 'Experience elevated living in luxury high-rise apartments offering stunning views, modern comforts, and convenience.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Maison Noire',
    location: 'Oklahoma City, 2024',
    description: 'A striking modern home with warm materials and room for every kind of gathering.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Villa Bellagio',
    location: 'San Francisco, 2024',
    description: 'Architectural lines meet natural light in a truly one-of-a-kind retreat.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85',
  },
  {
    name: 'Stillwater House',
    location: 'Austin, Texas, 2025',
    description: 'Calm, considered design with a seamless connection to the outdoors.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
  },
]

export default function Projects() {
  const [active, setActive] = useState(0)
  const visible = [0, 1, 2].map((offset) => projects[(active + offset) % projects.length])
  const changeProject = (step: number) => setActive((current) => (current + step + projects.length) % projects.length)
  const sectionWidth = 'mx-auto w-[calc(100%-36px)] md:w-[calc(100%-52px)] md:max-w-[720px] lg:w-[calc(100%-96px)] lg:max-w-none xl:max-w-[1440px]'

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % projects.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className={`${sectionWidth} pt-[110px] md:pt-[102px] xl:pt-[84px]`} id="projects">
      <div className="md:flex md:items-end md:justify-between md:gap-7 xl:relative xl:gap-[60px]">
        <h2 className="font-sans text-[clamp(38px,10.5vw,52px)] font-medium leading-[1.03] tracking-[-.055em] md:flex-1 md:text-[clamp(40px,5vw,68px)] xl:w-[58%] xl:flex-none">
          Executed &amp; in-progress<br />projects <span className="text-[#bdbfba]">–</span>
        </h2>
        <div className="pt-[23px] md:w-[37%] md:pb-[3px] md:pt-0 xl:absolute xl:right-0 xl:top-full xl:w-[37%] xl:translate-y-[10px]">
          <p className="mb-[18px] text-[13px] leading-relaxed md:mb-7 md:text-sm">
            Designed with innovation, built in prime locations, and rooted in sustainability—our projects redefine modern living with comfort and elegance.
          </p>
          <div className="flex items-center gap-5">
            <ArrowButton direction="previous" onClick={() => changeProject(-1)} label="Previous projects" className="size-[34px] border-[#d2d3cf] text-[#242522] hover:border-[#e96d4a] hover:bg-[#e96d4a] hover:text-white" />
            <span className="relative block h-px flex-1 overflow-hidden bg-[#dededb]">
              <span className="block h-0.5 bg-[#686a66] transition-transform duration-300" style={{ width: `${100 / projects.length}%`, transform: `translateX(${active * 100}%)` }} />
            </span>
            <ArrowButton onClick={() => changeProject(1)} label="Next projects" className="size-[34px] border-[#d2d3cf] text-[#242522] hover:border-[#e96d4a] hover:bg-[#e96d4a] hover:text-white" />
          </div>
          <a className="mt-4 inline-flex items-center gap-2 text-xs transition hover:text-[#e96d4a] md:ml-11 md:mt-5" href="#urban">
            Explore more project <span className="text-[#777975]">that we have done</span><Icon name="arrow" className="size-[15px] transition-transform hover:translate-x-1" />
          </a>
        </div>
      </div>
      <div className="mt-6 flex gap-4 overflow-hidden md:mt-[38px] md:grid md:grid-cols-[1.2fr_1fr] md:gap-5 xl:mt-[10px] xl:grid-cols-[1.6fr_.8fr_.8fr] xl:gap-7">
        {visible.map((project, index) => (
          <article className={`min-w-0 flex-[0_0_82%] md:flex-none ${index === 0 ? 'md:col-span-1' : 'xl:mt-[180px]'} ${index === 2 ? 'md:hidden xl:block' : ''}`} key={project.name}>
            <a className={`group relative block h-[250px] overflow-hidden bg-[#eee9e4] md:h-[250px] ${index === 0 ? 'md:h-[320px] xl:h-[390px]' : 'xl:h-[290px]'}`} href="#contact" aria-label={`Learn about ${project.name}`}>
              <img className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]" src={project.image} alt={`${project.name} contemporary residence`} />
              <span className="absolute bottom-3.5 right-3.5 grid size-[38px] translate-y-2 place-items-center rounded-full bg-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Icon name="arrow" className="size-4" />
              </span>
            </a>
            <div className="mt-3.5 flex min-h-[3.2rem] flex-wrap items-baseline justify-between gap-2 md:min-h-0 xl:min-h-[4.25rem]">
              <h3 className="text-lg font-medium tracking-[-.04em] xl:text-xl">{project.name}</h3>
              <span className="whitespace-nowrap text-[10px] text-[#676965] md:text-xs">{project.location}</span>
            </div>
            <p className={`mt-1.5 min-h-[5rem] max-w-[490px] text-xs leading-relaxed text-[#686a66] md:min-h-[2.65rem] xl:min-h-[5rem] ${index !== 0 ? 'xl:max-w-[320px] xl:text-xs' : 'md:text-[13px]'}`}>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

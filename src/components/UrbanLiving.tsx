import { Icon } from './Icon'

const urbanProjects = [
  {
    name: 'Botaniq kitchen & restaurant',
    text: 'Eco-friendly space fueled by the sun and enriched with nature.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85',
    position: 'side',
  },
  {
    name: 'Prime edge business park',
    text: "It's an innovative business center created with a focus on sustainable development.",
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
    position: 'center',
  },
  {
    name: 'Renewashpere district',
    text: 'A circular economy in action — fully recycled, fully renewable.',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=85',
    position: 'side',
  },
]

export default function UrbanLiving() {
  const sectionWidth = 'mx-auto w-[calc(100%-36px)] md:w-[calc(100%-52px)] md:max-w-[720px] lg:w-[calc(100%-96px)] lg:max-w-none xl:max-w-[1440px]'

  return (
    <section className={`${sectionWidth} py-16 md:py-[76px] xl:py-[92px]`} id="urban">
      <div className="text-center">
        <span className="mb-[14px] inline-flex rounded-full border border-[#d5d5d1] px-[13px] py-[7px] text-[11px] leading-none text-[#585a56] md:mb-[17px]">Recent projects</span>
        <h2 className="text-[clamp(31px,8.5vw,42px)] font-medium tracking-[-.055em] md:text-[clamp(36px,4.2vw,57px)]">
          <span className="text-[#aeb0ac]">–</span> Redefining urban living <span className="text-[#aeb0ac]">–</span>
        </h2>
      </div>
      <div className="mt-[26px] grid grid-cols-1 gap-[14px] md:grid-cols-[1fr_1.35fr] md:gap-[18px] md:mt-[42px] xl:grid-cols-[.82fr_1.65fr_.82fr]">
        {urbanProjects.map((project, index) => (
          <article className={`border border-[#e1e0dc] ${index !== 1 ? 'hidden xl:block' : ''}`} key={project.name}>
            <a className="group relative block h-[210px] overflow-hidden bg-[#eee9e4] md:h-[246px]" href="#contact" aria-label={`View ${project.name}`}>
              <img className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.045]" src={project.image} alt="" />
              {index === 1 && (
                <span className="absolute left-4 top-[15px] flex w-[220px] flex-wrap gap-1.5">
                  {['◉ Rent', '$150k', '⌂ Rooms', 'Four', '⌖ Place', 'Arizona'].map((label) => (
                    <span className="rounded-full border border-white/60 bg-black/40 px-[10px] py-1.5 text-[10px] text-white backdrop-blur-sm" key={label}>{label}</span>
                  ))}
                </span>
              )}
            </a>
            <div className="p-[14px] md:p-[16px_17px_18px]">
              <h3 className="text-lg font-medium leading-[1.16] tracking-[-.04em] md:text-xl">{project.name}</h3>
              <p className="my-2 text-xs leading-[1.45] text-[#676965] md:min-h-11">{project.text}</p>
              <a className={`flex min-h-10 items-center justify-between border px-4 text-xs font-semibold uppercase transition ${index !== 1 ? 'border-[#e96d4a] bg-[#e96d4a] text-white hover:bg-[#d65b39]' : 'border-[#bdbfba] hover:border-[#e96d4a] hover:bg-[#e96d4a] hover:text-white'}`} href="#contact">
                View details <Icon name="arrow" className="size-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

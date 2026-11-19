import { Icon } from './Icon'

const highlights = [
  { icon: 'home' as const, title: <>Anywhere feels<br />like home</>, text: 'Every home is thoughtfully equipped for immediate comfort, offering a space where no detail is left to chance.' },
  { icon: 'lock' as const, title: <>Live securely&nbsp; without<br />boundaries</>, text: 'Each residence is crafted to provide immediate comfort, where every element is purposefully chosen.' },
  { icon: 'globe' as const, title: <>Just a click away<br />from the world</>, text: 'Step into a home where comfort greets you instantly and every detail reflects refined, solid taste.' },
]

export default function Highlights() {
  const sectionWidth = 'mx-auto w-[calc(100%-36px)] md:w-[calc(100%-52px)] md:max-w-[720px] lg:w-[calc(100%-96px)] lg:max-w-none xl:max-w-[1440px]'

  return (
    <section className={`${sectionWidth} pt-[73px] md:pt-[90px] xl:pt-[106px]`} id="highlights">
      <div className="flex items-start justify-between gap-4 md:items-center">
        <h2 className="text-[34px] font-medium leading-tight tracking-[-.055em] md:text-[clamp(34px,4vw,54px)]">
          Outstanding highlights
        </h2>
        <a className="inline-flex min-h-[38px] shrink-0 items-center gap-[7px] border border-[#bdbfba] px-[10px] text-[9px] font-semibold uppercase transition hover:border-[#e96d4a] hover:bg-[#e96d4a] hover:text-white md:min-h-11 md:gap-5 md:px-5 md:text-xs" href="#contact">
          Get started <Icon name="arrow" className="size-[13px] md:size-4" />
        </a>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-[18px] md:mt-[34px]">
        {highlights.map((item, index) => (
          <article className="min-h-0 bg-[#FDF8F4] p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_48px_rgba(48,39,30,.08)] md:min-h-[270px] md:p-[26px_22px] xl:p-8" key={index}>
            <Icon name={item.icon} className="size-[39px] text-[#cf8267] md:size-12" />
            <h3 className="mb-[11px] mt-[14px] text-[21px] font-medium leading-[1.15] tracking-[-.04em] md:mt-5 md:text-xl xl:text-[23px]">{item.title}</h3>
            <p className="mb-[22px] max-w-[330px] text-xs leading-relaxed text-[#61635e] md:text-[13px]">{item.text}</p>
            <a className="inline-flex items-center gap-2 text-xs transition hover:text-[#e96d4a]" href="#contact">
              Learn more <Icon name="arrow" className="size-[15px] transition-transform group-hover:translate-x-1" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

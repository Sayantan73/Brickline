import { Icon } from './Icon'

export function ArrowButton({
  direction = 'next',
  onClick,
  label,
  className = '',
}: {
  direction?: 'next' | 'previous'
  onClick: () => void
  label: string
  className?: string
}) {
  return (
    <button
      type="button"
      className={`grid shrink-0 place-items-center rounded-full border border-white/65 bg-transparent text-current transition duration-200 hover:scale-105 hover:bg-white hover:text-[#242522] ${direction === 'previous' ? '[&_svg]:rotate-180' : ''} ${className}`}
      onClick={onClick}
      aria-label={label}
    >
      <Icon name="arrow" className="size-4" />
    </button>
  )
}

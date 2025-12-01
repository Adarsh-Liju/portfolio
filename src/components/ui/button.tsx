// Simple Tailwind-only Button component (no helper libs)
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  href?: string
  variant?: 'default' | 'outline' | 'primary'
  size?: 'sm' | 'default' | 'lg'
}

export default function Button({ className = '', href, variant = 'default', size = 'default', children, ...props }: ButtonProps & any) {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantClass = variant === 'primary'
    ? 'bg-gradient-to-r from-[#646cff] to-[#4ab3ff] text-black shadow-sm'
    : variant === 'outline'
      ? 'bg-transparent border border-white/10 text-white'
      : 'bg-white/5 border border-white/5 text-white'

  const sizeClass = size === 'sm' ? 'h-8 px-3 text-sm' : size === 'lg' ? 'h-12 px-6' : 'h-10 px-4'

  const cls = `${base} ${variantClass} ${sizeClass} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} {...props}>{children}</button>
  )
}

export default Button

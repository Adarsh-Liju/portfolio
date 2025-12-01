// Simple Tailwind-only Button component (no helper libs)
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  href?: string
  variant?: 'default' | 'outline' | 'primary'
  size?: 'sm' | 'default' | 'lg'
}

export default function Button({ className = '', href, variant = 'default', size = 'default', children, ...props }: ButtonProps & any) {
  const base = 'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variantClass = variant === 'primary'
    ? 'bg-foreground text-background hover:opacity-90'
    : variant === 'outline'
      ? 'bg-transparent border border-border hover:bg-accent'
      : 'bg-accent hover:bg-accent/80'

  const sizeClass = size === 'sm' ? 'h-9 px-4' : size === 'lg' ? 'h-12 px-8' : 'h-10 px-6'

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

 

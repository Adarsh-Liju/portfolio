export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  href?: string
  variant?: 'default' | 'outline' | 'primary'
  size?: 'sm' | 'default' | 'lg'
}

export default function Button({ className = '', href, variant = 'default', size = 'default', children, ...props }: ButtonProps & any) {
  const base = 'btn'
  const variantClass = variant === 'primary' ? 'btn-primary' : variant === 'outline' ? 'btn-outline' : ''
  const sizeClass = size === 'sm' ? 'btn-sm' : ''
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

 

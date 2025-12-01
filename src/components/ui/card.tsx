export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className = '', children, ...props }: CardProps) {
  const cls = `rounded-xl border border-white/5 bg-gradient-to-b from-white/3 to-transparent p-4 ${className}`.trim()

  return (
    <div className={cls} {...props}>{children}</div>
  )
}

export default Card

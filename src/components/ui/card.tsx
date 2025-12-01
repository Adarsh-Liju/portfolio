export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className = '', children, ...props }: CardProps) {
  const cls = `${className}`.trim()

  return (
    <div className={cls} {...props}>{children}</div>
  )
}

export default Card

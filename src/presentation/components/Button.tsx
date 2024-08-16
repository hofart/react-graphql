interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

export default Button
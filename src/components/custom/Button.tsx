import type { ButtonProps } from '../../../types/types'

const Button = ({children, variant = "primary"}: ButtonProps) => {
    const base = 'bg-gray-800 text-white rounded-md px-3 py-1 cursor-pointer hover:opacity-90'

    const variants = {
        primary: 'bg-green-800 text-white font-bold px-3 py-1 rounded-md hover:opacity-85 cursor-pointer transition-all',

        secondary: 'bg-blue-800 text-black font-bold px-3 py-1 rounded-md hover:opacity-90 cursor-pointer transition-all',

        danger: 'bg-red-800 text-white font-bold px-3 py-1 rounded-md hover:opcaity-90 cursor-pointer transition-all'
    }
  return (
    <button className={`${base} ${variants[variant]}`}>
        {children}
    </button>
  )
}

export default Button
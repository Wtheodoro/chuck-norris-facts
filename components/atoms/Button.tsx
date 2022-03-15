interface ButtonProps {
    children: string
    onClick?: () => void
}

const Button = ({ children, onClick }: ButtonProps) => (
    <button
        className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        onClick={onClick}
    >
        {children}
    </button>
)

export default Button
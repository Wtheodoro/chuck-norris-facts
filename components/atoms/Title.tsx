interface TitleProps {
    children: string
}

const Title = ({ children }: TitleProps) => (
    <h2 className='text-4xl font-semibold pb-5'>{children}</h2>
)

export default Title
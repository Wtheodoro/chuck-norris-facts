import Image from "next/image"

interface SmallCardProps {
  fact: string
  img_url: string
  updated_at: string
}

const SmallCard = ({ fact, img_url, updated_at }: SmallCardProps) => {

  const dateFormat = (date: string) => {
    const event = new Date(date)
    return event.toDateString()
  }

  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="hidden md:block relative h-16 w-16">
        <Image
          src={img_url}
          layout="fill"
          className="rounded-lg"
          alt="Chuck norris icon"
        />
      </div>

      <div>
        <h2>{dateFormat(updated_at)}</h2>
        <h3 className="text-gray-500">{fact}</h3>
      </div>
    </div>
  )
}

export default SmallCard
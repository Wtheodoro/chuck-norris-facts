import Image from 'next/image'
import pic from '../../assets/images/canva-dark-chuck.png'
import Button from '../atoms/Button'

interface BannerProps {
  fact?: string
  buttonClick: () => void
}

const Banner = ({ fact, buttonClick }: BannerProps) => {
  return (
    <div className="relative mx-auto w-11/12 h-[300px] sm:h-[400px] lg:h-[500px] xl-h[600px] 2xl:h-[700px] cy_banner">
      <Image
        src={pic}
        layout="fill"
        objectFit="cover"
        className="rounded-2xl"
        alt="Chuck Norris with two machine guns ready to defeat the enemy"
        priority
      />
      <div className="absolute top-1/4 md:top-1/3 lg:top-1/2 w-full text-center">
        <p className="text-white text-sm sm:text-lg">
          { fact || 'Here comes a real facts about chuck norris, those facts genereate after 5s or when btn is hited'}
        </p>
        <Button onClick={buttonClick}>Another Fact</Button>
      </div>
    </div>
  )
}

export default Banner
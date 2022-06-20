import React, { useState } from 'react'

interface DimensionWidth {
  [key: number]: string
}

const MySpacePage = () => {
  const [squareAmount, setSquareAmout] = useState<number>(1)
  const [test, showTest] = useState<boolean>(false)

  const decreaseSquareAmount = () => {
    if (!squareAmount) return
    setSquareAmout(squareAmount - 1)
  }

  const increaseSquareAmount = () => {
    setSquareAmout(squareAmount + 1)
  }

  const defineWidthForMobile = (): string => {
    if (squareAmount <= 2) return '100%'

    return '48%'
  }

  const defineWidthForDesktop = (): string => {
    // First verify if the number of users is a perfect square
    if (Math.sqrt(squareAmount) % 1 === 0) {
      const square = Math.sqrt(squareAmount)
      const size = 100 / square - square
      return `${size % 1 === 0 ? size : size.toFixed(1)}%`
    }

    if (squareAmount === 1) return '100%'
    if (squareAmount <= 4) return '48%'
    if (squareAmount <= 6) return '30.3%'

    return '21%'
  }

  return (
    <div className='relative w-screen h-screen p-2 bg-[#0E1010]'>
      <div className='fixed top-5 left-5 flex space-x-5 p-4 bg-gray-400'>
        <button className='cursor-pointer' onClick={increaseSquareAmount}>
          +
        </button>
        <h1 onClick={() => console.log(defineWidthForDesktop())}>
          {squareAmount}
        </h1>
        <button className='cursor-pointer' onClick={decreaseSquareAmount}>
          -
        </button>
      </div>

      <div className='fixed top-5 right-5 flex space-x-5 p-4 bg-gray-400'>
        <h1>{defineWidthForDesktop()}</h1>
      </div>

      {/* this div must be the wrapper who holds all the users cam */}
      <div className='w-full h-full flex flex-row flex-wrap justify-center item-center gap-2'>
        {new Array(squareAmount).fill('x').map((_, index) => (
          <div
            key={index}
            className={`flex-grow flex justify-center items-center
            bg-green-200 text-7xl
            w-[${defineWidthForMobile()}]
            min-h-[270px]
            md:bg-blue-400
            md:w-[${defineWidthForDesktop()}]
            md:min-w-[300px]
            ${
              squareAmount === 3
                ? 'md:max-w-[50%]'
                : squareAmount % 1 === 0 &&
                  squareAmount % squareAmount === 0 &&
                  squareAmount > 12
                ? 'md:max-w-[25%]'
                : ''
            }
            `}
          >
            W
          </div>
        ))}
      </div>

      {/* DEBUUG PURPOUSE */}
      {test && (
        <div className='w-full h-full bg-red-300 absolute top-32 pointer-events-none' />
      )}
    </div>
  )
}

export default MySpacePage

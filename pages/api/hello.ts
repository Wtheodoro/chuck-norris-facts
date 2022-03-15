// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

const BASE_URL = 'https://api.chucknorris.io/jokes'

export const getFact = async () => {
  const fact = await fetch(`${BASE_URL}/random`)
    .then((response) => response.json())

  return fact
}

export const getFactByCategory = async (category: string) => {
  const fact = await fetch(`${BASE_URL}/random?category=${category}`)
    .then((response) => response.json())

  return fact
}

export const getFactByQuery = async (query: string) => {
  const fact = await fetch(`${BASE_URL}/random?query=${query}`)
    .then((response) => response.json())

  return fact
}

import axios from 'axios'
import { useEffect, useState } from 'react'

async function getPasta() {
  const { data } = await axios.get('http://localhost:3000/pasta')
  console.log('APIHIVÁS:')
  console.log(data)
  return data
}

export { getPasta }

import axios from 'axios'
import { useEffect, useState } from 'react'

async function getRecipes(category) {
  console.log('Itt hivodik meg az api')
  const { data } = await axios.get(`http://localhost:3001/recipe/${category}`)
  console.log('APIHIVÁS:')
  console.log(data)
  return data
}

export { getRecipes }

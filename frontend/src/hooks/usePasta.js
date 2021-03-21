import { getPasta } from '../api/recipeAPI'
import { useCallback, useEffect, useState } from 'react'

export default function usePasta() {
  console.log('HAHÓÓÓ')
  const [pasta, setPasta] = useState()

  const updatePasta = useCallback(async function () {
    const data = await getPasta()
    if (data) {
      setPasta(data)
    }
  }, [])

  useEffect(() => {
    updatePasta()
  }, [updatePasta])

  return {
    pasta,
    updatePasta,
  }
}

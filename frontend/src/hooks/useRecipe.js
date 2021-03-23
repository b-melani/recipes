import { getRecipes } from '../api/recipeAPI'
import { useCallback, useEffect, useState } from 'react'

export default function useRecipe() {
  console.log('HAHÓÓÓ')
  const [recipe, setRecipe] = useState()
  const [category, setCategory] = useState('')

  const updatePasta = useCallback(async function () {
    const data = await getRecipes(category)
    if (data) {
      setRecipe(data)
    }
  }, [])

  useEffect(() => {
    updatePasta()
  }, [updatePasta])

  return {
    recipe,
    updatePasta,
    setCategory,
  }
}

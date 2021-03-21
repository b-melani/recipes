import React from 'react'
import usePasta from './hooks/usePasta'

export default function Recipes() {
  const { pasta } = usePasta()

  console.log('receptek:' + pasta)
  return <div>Szia</div>
}

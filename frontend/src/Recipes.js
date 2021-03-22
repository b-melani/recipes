import React from 'react'
import usePasta from './hooks/usePasta'
import OneRecipe from './OneRecipe'

export default function Recipes() {
  const { pasta } = usePasta()
  console.log(pasta)

  return (
    <>
      {pasta ? (
        <div>
          {pasta.map((oneItem) => (
            // <div>
            //   <div className="d-flex">
            //     <div>
            <OneRecipe text={oneItem.name} image={oneItem.img} />
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
      ) : (
        <div>'nkutya'</div>
      )}
    </>
  )
}

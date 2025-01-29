import React from 'react'

interface AnimalType {
    type: string;
}
const AnimalShows = ({type}: AnimalType) => {
  return (
    <div>
      {type}
    </div>
  )
}

export default AnimalShows

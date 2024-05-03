import React from 'react'
import wondersImages, { WonderImage } from '../wonders'
import Image from 'next/image'


const PhotoPage = ({ params: { id } , }: {
    params : {id : string}
}) => {

    const photo : WonderImage = wondersImages.find((each) => each.id == id)

  return (
      <div>
          <Image
              src={photo.src}
              alt=""
              width={400}
              height={400}
              objectFit='cover'
              objectPosition='center'
          />
          <p>{photo.name}</p>
          <p>{photo.location}</p>
          <p>{photo.photographer}</p>

    </div>
  )
}

export default PhotoPage
import React from 'react'

const MagicHoverButton = ({
  colorHover, textColorHover, link, image, name,
}) => (
  <div
    className={`${textColorHover} shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-4 ${colorHover} flex-col flex flex-1  lg:mx-12 mx-4 bg-white content-center  text-center rounded-xl`}
  >
    <a href={link} className="h-full py-16">
      {image}
      {name}
    </a>
  </div>
)

export default MagicHoverButton

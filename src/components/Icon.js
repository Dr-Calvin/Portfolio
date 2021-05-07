/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'

const Icon = ({ data }) => (
  <a href={data.link} className="h-5 w-5 text-black hover:text-blue-600">
    {data.icon}
  </a>
)

export default Icon

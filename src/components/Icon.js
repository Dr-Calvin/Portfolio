/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { Link } from 'gatsby'

const Icon = ({ data }) => (
  <li key={data.alt} className="w-5 inline-block mx-4">
    <Link to={data.link} className="h-5 w-5">
      <img src={Object.values(data.icon)} className="fill-current text-red-600" alt={data.alt} />
    </Link>
  </li>
)

export default Icon

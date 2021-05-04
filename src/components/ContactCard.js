import React from 'react'
import nepal from './img/nepal.png'

const PostPreview = ({ title, objText }) => (
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl xl:mr-0">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img
          className="h-48 w-full object-cover md:w-48"
          src={nepal}
          alt="Man looking at item at a store"
        />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {title}
        </div>
        <a
          href="#"
          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >
          Finding customers for your new business
        </a>
        <p className="mt-2 text-gray-500">{objText}</p>
      </div>
    </div>
  </div>
)

export default PostPreview

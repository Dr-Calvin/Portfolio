import React from 'react'
import nepal from './img/nepal.png'

const PostPreview = () => (
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl mb-8">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img
          className="h-52 w-full object-cover md:w-48"
          src={nepal}
          alt="Man looking at item at a store"
        />
      </div>
      <div className="pb-8 pt-4 pl-8">
        <div className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
          Project Atlas
        </div>
        <a
          href="#"
          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >
          An API demonstration
        </a>
        <p className="mt-2 text-gray-500 h-10">
          I have recently been studying the University of Helsinki’s full stack
          web-development course to learn more about the MERN stack. One project
          I made early on stood out as an interesting demonstration of the
          utility of API’s and I decided to style the app beyond the
          requirements of the course.
        </p>
      </div>
    </div>
  </div>
)

export default PostPreview

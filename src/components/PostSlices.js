/* eslint-disable react/no-array-index-key */
import React from 'react'
import { ImageCaption, Quote, Text } from './slices'

const PostSlices = ({ slices }) => slices.map((slice, index) => {
  const res = (() => {
    switch (slice.slice_type) {
      case 'text':
        return (
          <div key={index} className="homepage-slice-wrapper">
            <Text slice={slice} />
          </div>
        )

      case 'quote':
        return (
          <div key={index} className="homepage-slice-wrapper">
            <Quote slice={slice} />
          </div>
        )

      case 'image_with_caption':
        return (
          <div key={index} className="homepage-slice-wrapper">
            <ImageCaption slice={slice} />
          </div>
        )

      default:
        return null
    }
  })()
  return res
})

export default PostSlices

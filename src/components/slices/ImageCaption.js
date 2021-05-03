import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'

// Default Image
const DefaultImage = ({ slice }) => (
  <div className="post-image container">
    <figcaption className="block-img">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      {slice.primary.caption &&
      RichText.asText(slice.primary.caption.raw) !== '' ? (
        <figcaption className="image-label italic text-xs">
          {RichText.asText(slice.primary.caption.raw)}
        </figcaption>
      ) : null}
    </figcaption>
    <br />
  </div>
)

// Emphasized Image
const EmphasizedImage = ({ slice }) => (
  <div className="post-image container">
    <figcaption className="block-img emphasized">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      {slice.primary.caption &&
      RichText.asText(slice.primary.caption.raw) !== '' ? (
        <figcaption className="image-label italic text-xs">
          {RichText.asText(slice.primary.caption.raw)}
        </figcaption>
      ) : null}
    </figcaption>
    <br />
  </div>
)

// Function to determine the image type
const renderSwitch = (slice) => {
  switch (slice.slice_label) {
    case 'emphasized':
      return <EmphasizedImage slice={slice} />
    default:
      return <DefaultImage slice={slice} />
  }
}

export default ({ slice }) => <>{renderSwitch(slice)}</>

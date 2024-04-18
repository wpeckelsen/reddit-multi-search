import React from 'react'

export default function SearchSnippet({displayLink, formattedUrl, snippet}) {
  return (
    <>
    <p>{displayLink}</p>
    <p>{formattedUrl}</p>
    <p>{snippet}</p>
    </>
  )
}



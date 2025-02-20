import React from 'react'

export default function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-blue/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  )
}

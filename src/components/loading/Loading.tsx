import React from 'react'
import Spinner from '../../assets/icons/Spinner'

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      {/* <p className="text-2xl text-teal-600">Loading</p> */}
      <Spinner />
    </div>
  )
}

export default Loading

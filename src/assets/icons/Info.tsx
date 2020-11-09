import React from 'react'

interface IProps {
  width?: string,
  height?: string,
  color?: string
}

const Info = ({ width = "w-6", height = "w-8", color = "text-black" }: IProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`${width} ${height} ${color}`}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export default Info
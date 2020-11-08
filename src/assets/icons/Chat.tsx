import React from 'react'

interface IProps {
  width?: string,
  height?: string,
  color?: string
}

const Chat = ({ width = "w-6", height = "w-8", color = "text-black" }: IProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`${width} ${height} ${color}`}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  )
}

export default Chat
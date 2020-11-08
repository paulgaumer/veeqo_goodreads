import React from 'react'

const AuthorDescription = ({ content }: { content: string }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  )
}

export default AuthorDescription

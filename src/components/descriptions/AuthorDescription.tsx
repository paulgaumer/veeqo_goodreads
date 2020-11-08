import React from 'react'
import Pen from "../../assets/icons/Pen"
import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.div`
  a {
    ${tw`underline`}
  }
`

const AuthorDescription = ({ content }: { content: string }) => {
  return (
    <Container>
      <h3 className="inline-flex items-center pb-2 pr-8 mb-10 space-x-2 text-2xl border-b border-gray-200">
        <Pen color={"text-gray-700"} width={"w-6"} height={"h-6"} />
        <span>About the author</span>
      </h3>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  )
}

export default AuthorDescription

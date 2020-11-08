import React from 'react'
import Pen from "../../assets/icons/Pen"
import styled from "styled-components"
import tw from "twin.macro"

const StyledContainer = styled.div`
  a {
    ${tw`underline`}
  }
`

const AuthorDescription = ({ content }: { content: string }) => {
  return (
    <div>
      <h3 className="inline-flex items-center pb-2 pr-8 mb-10 space-x-2 text-2xl font-medium border-b border-gray-200">
        <Pen color={"text-gray-700"} width={"w-6"} height={"h-6"} />
        <span>About the author</span>
      </h3>
      <StyledContainer>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </StyledContainer>
    </div>
  )
}

export default AuthorDescription

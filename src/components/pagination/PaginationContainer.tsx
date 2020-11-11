import styled from 'styled-components';
import tw from 'twin.macro';

const PaginationContainer = styled.nav`
  .pagination {
    ${tw`inline-flex shadow-sm`}
  }
  .active,
  .activeLink {
    ${tw`text-white focus:text-white`}
  }
  .active {
    ${tw`text-white bg-teal-800`}
  }
  .disabled {
    ${tw`hidden`}
  }
  li {
    ${tw`flex items-center justify-center px-3 py-1 text-sm text-gray-600 border border-gray-300 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-400`}
  }
  li:first-of-type {
    ${tw`rounded-l-md`}
  }
  li:last-of-type {
    ${tw`rounded-r-md`}
  }
`;

export default PaginationContainer
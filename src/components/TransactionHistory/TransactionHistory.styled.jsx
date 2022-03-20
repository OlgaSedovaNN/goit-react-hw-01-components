import styled from "@emotion/styled";

export const Table = styled.table`
border-collapse: collapse;
table-layout: fixed;
 border: 1px solid;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
`
export const Thead = styled.thead`
background-color: rebeccapurple;
`
export const Th = styled.th`
padding: 10px;
  border: 1px solid;
`

export const Tr = styled.tr`
&:nth-of-type(2n+1) {
  background-color: #ff33cc;
  &:nth-of-type(2n) {
  background-color: #e495e4;
}`

export const Td = styled.td`
text-align: center;
  padding: 10px;
  border: 1px solid;
  width: 200px;
`
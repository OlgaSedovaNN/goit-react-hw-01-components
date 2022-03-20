import {Table, Thead, Th, Tr, Td} from "./TransactionHistory.styled"

export const TransactionHistory = ({transactions}) => {
    return (
        <Table>
  <Thead>
    <tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
  </Thead>

            <tbody>
                {transactions.map(({ id, type, amount, currency }) => {
                    return (
<Tr key={id}>
                    <Td>{type}</Td>
                    <Td>{amount}</Td>
                    <Td>{currency}</Td>
    </Tr>
                    )
                }
                
            )}    
    
    
  </tbody>
</Table>
    )
}
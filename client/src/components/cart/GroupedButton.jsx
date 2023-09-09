import { Button, styled, ButtonGroup } from '@mui/material'
import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/DataProvider'
import { addToCart } from '../../service/api'

const Component = styled(ButtonGroup)`
    margin-top : 30px;
`

const StyledButton = styled(Button)`
  border-radius : 50%;
`

function GroupedButton({item}) {
  const { token } = useContext(DataContext);
  const [quantity, setQuantity] = useState(item.quantity);

  const decrement = async(flag) => {
    let response = await addToCart(item.id, flag, token);
    console.log(response[0])
    setQuantity(response[0].quantity);
  }
  

  return (
    <Component>
        <StyledButton onClick={() => decrement(true)}>-</StyledButton>
        <Button disabled>{quantity}</Button>
        <StyledButton onClick={() => decrement(false)}>+</StyledButton> 
    </Component>
  )
}

export default GroupedButton
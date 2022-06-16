import { Button } from 'app/App.components/Button/Button.view'
import { Input } from 'app/App.components/Input/Input.view'
import { useState } from 'react'

// prettier-ignore
import { NewStyled } from './New.style'

type NewViewProps = {
  tempTxCallback: (amount: number) => void
  loading: boolean
}

export const NewView = ({ tempTxCallback, loading }: NewViewProps) => {
  const [inputAmount, setInputAmount] = useState(0)

  return (
    <NewStyled>
      <h1>Under development!</h1>
      <Input
        icon="user"
        name="username"
        placeholder="Test input"
        type="text"
        onChange={(value: any) => setInputAmount(value)}
        value={inputAmount}
        onBlur={() => {}}
        inputStatus={undefined}
        errorMessage={undefined}
      />

      <Button icon="in" loading={loading} clickCallback={() => tempTxCallback(inputAmount)}>
        Submit
      </Button>
    </NewStyled>
  )
}

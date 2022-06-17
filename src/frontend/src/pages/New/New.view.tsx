import { Button } from 'app/App.components/Button/Button.view'
import { Input } from 'app/App.components/Input/Input.view'
import { useState } from 'react'
import { Link } from 'react-router-dom'

// prettier-ignore
import { NewBgLeft, NewBgRight, NewGrid, NewStyled } from './New.style'

type NewViewProps = {
  tempTxCallback: (amount: number) => void
  loading: boolean
  accountPkh?: string
}

export const NewView = ({ tempTxCallback, loading, accountPkh }: NewViewProps) => {
  const [inputAmount, setInputAmount] = useState(0)

  return (
    <NewGrid>
      <NewBgLeft>
        <Link to="/">
          <img alt="bg-left" src="/bg2-left.svg" />
        </Link>
      </NewBgLeft>
      <NewStyled>
        <img alt="logo" src="/logo.svg" />
        <div>
          You are about to create an NFT airdrop. This page will allow you to deploy a new FA2 smart contract. You will be the owner of the
          contract and have full admin rights over it, not drop.museum. You will then receive a link and a QR code that you can share and
          will allow people to mint an NFT from your contract.
        </div>
        <div>
          Logged in as <b>{accountPkh}</b>
        </div>
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
      <NewBgRight>
        <img alt="bg-right" src="/bg2-right.svg" />
      </NewBgRight>
    </NewGrid>
  )
}

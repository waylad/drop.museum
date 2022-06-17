import { Link } from 'react-router-dom'

// prettier-ignore
import { MintBgLeft, MintBgRight, MintGrid, MintNftGrid, MintStyled } from './Mint.style'

type MintViewProps = {
  tempTxCallback: (amount: number) => void
  loading: boolean
  accountPkh?: string
  address?: string
}

export const MintView = ({ tempTxCallback, loading, accountPkh, address }: MintViewProps) => {
  return (
    <MintGrid>
      <MintBgLeft>
        <img alt="bg-left" src="/bg2-left.svg" />
      </MintBgLeft>
      <MintStyled>
        <Link to="/">
          <img alt="logo" src="/logo.svg" />
        </Link>
        <div>Congratulation, you can participate in this airdrop and mint the NFT below!</div>

        <MintNftGrid>
          <img alt="nft" src="/demo-nft.svg" />
          <div>
            <b>Demo NFT</b>
            <div>This is the official DROP MUSEUM NFT</div>
          </div>
        </MintNftGrid>

        <img alt="button-mint" src="/button-mint.svg" />
      </MintStyled>
      <MintBgRight>
        <img alt="bg-right" src="/bg2-right.svg" />
      </MintBgRight>
    </MintGrid>
  )
}

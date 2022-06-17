import styled from 'styled-components/macro'
import { textColor } from 'styles'

export const MintGrid = styled.div`
  display: grid;
  grid-template-columns: calc(50vw - 430px) 800px calc(50vw - 430px);
  grid-gap: 30px;
`

export const MintBgLeft = styled.div`
  > img {
  }
`

export const MintBgRight = styled.div`
  > img {
  }
`

export const MintStyled = styled.div`
  > a > img {
    margin: 20px 0;
  }

  > div {
    margin-bottom: 20px;
  }

  > label {
    margin-bottom: 10px;
  }
`

export const MintNftGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  border: 1px solid #bdbdb8;
  border-radius: 1px;

  > div {
    margin: 20px 10px;

    > div {
      margin-top: 10px;
    }
  }
`

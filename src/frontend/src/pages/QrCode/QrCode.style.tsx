import styled from 'styled-components/macro'

export const QrCodeGrid = styled.div`
  display: grid;
  grid-template-columns: calc(50vw - 430px) 800px calc(50vw - 430px);
  grid-gap: 30px;
`

export const QrCodeBgLeft = styled.div`
  > img {
  }
`

export const QrCodeBgRight = styled.div`
  > img {
  }
`

export const QrCodeStyled = styled.div`
  > a > img {
    margin: 20px 0;
  }

  > div {
    margin-bottom: 20px;
  }

  > label {
    margin-bottom: 10px;
  }

  > svg {
    margin: 0;
  }
`

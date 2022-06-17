import styled from 'styled-components/macro'

export const NewGrid = styled.div`
  display: grid;
  grid-template-columns: calc(50vw - 430px) 800px calc(50vw - 430px);
  grid-gap: 30px;
`

export const NewBgLeft = styled.div`
  > img {
    float: left;
  }
`

export const NewBgRight = styled.div`
  > img {
    float: right;
  }
`

export const NewStyled = styled.div`
  > img {
    margin: 20px 0;
  }

  > div {
    margin-bottom: 20px;
  }
`

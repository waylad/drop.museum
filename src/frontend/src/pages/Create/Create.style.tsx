import styled from 'styled-components/macro'
import { textColor } from 'styles'

export const CreateGrid = styled.div`
  display: grid;
  grid-template-columns: calc(50vw - 430px) 800px calc(50vw - 430px);
  grid-gap: 30px;
`

export const CreateBgLeft = styled.div`
  > img {
  }
`

export const CreateBgRight = styled.div`
  > img {
  }
`

export const CreateStyled = styled.div`
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

export const UploaderFileSelector = styled.div`
  > input {
    display: none;
  }
`

export const UploaderLabel = styled.label`
  height: 40px;
  width: 200px;
  border: 1px solid #bdbdb8;
  box-sizing: border-box;
  border-radius: 1px;
  cursor: pointer;
  user-select: none;
  color: ${textColor};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`
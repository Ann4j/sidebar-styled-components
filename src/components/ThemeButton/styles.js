import styled from 'styled-components'

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 14px;
  background: ${props => props.theme.button.closed.default};
  color: ${props => props.theme.text.default};
  cursor: pointer;
  display: grid;
  place-items: center;
  &:active { background: ${props => props.theme.button.closed.active}; }
  margin-left: auto;
`
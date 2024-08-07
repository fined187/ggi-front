'use client'

import styled from '@emotion/styled'

interface ButtonProps {
  active?: boolean
}

export const Button = styled.button<ButtonProps>`
  width: 160px;
  height: 50px;
  background-color: ${({ active }) => (active ? '#F3F8FF' : '#fff')};
  border-radius: 16px;
  font-weight: 700;
  color: ${({ active }) => (active ? '#2563EB' : '#6b7280')};
  font-size: 18px;
  border: ${({ active }) =>
    active ? '1px solid #2563EB' : ' 1px solid #E5E7EB'};
`

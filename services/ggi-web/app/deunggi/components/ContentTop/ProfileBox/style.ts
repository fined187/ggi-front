'use client'

import styled from '@emotion/styled'
import { mobile } from 'app/shared/styles/responsive'

export const Box = styled.div`
  min-width: 540px;
  padding: 25px;
  background-color: #fff;
  border-radius: 12px;
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  box-sizing: border-box;

  @media (max-width: 640px) {
    min-width: auto;
    padding: 12px;
  }
`

export const ProfileName = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  ${mobile} {
    font-size: 14px;
  }
`

export const CashBox = styled.div`
  width: 100%;
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  ${mobile} {
    padding: 12px 10px;
  }
`

export const CashTitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 16px;
    font-weight: 400;
    color: #4b5563;
  }

  ${mobile} {
    gap: 4px;

    span {
      font-size: 12px;
    }
  }
`

export const CashValue = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  span {
    color: #4b5563;
  }

  ${mobile} {
    font-size: 12px;
  }
`

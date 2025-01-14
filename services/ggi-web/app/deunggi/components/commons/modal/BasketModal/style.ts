'use client'

import styled from '@emotion/styled'
import { small } from 'app/shared/styles/responsive'
import Image from 'next/image'

export const BasketModalContainer = styled.div`
  width: 540px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 16px;
  box-shadow:
    0px 20px 13px rgba(0, 0, 0, 0.03),
    0px 8px 5px rgba(0, 0, 0, 0.08);
  position: relative;
  box-sizing: border-box;

  @media (max-width: 640px) {
    min-width: auto;
  }

  @media (max-width: 620px) {
    width: 100%;
  }

  ${small} {
    padding: 20px;
  }
`

export const BasketIcon = styled(Image)`
  display: block;
  margin-bottom: 22px;
`

export const ModalText = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.coolGray};
  margin-bottom: 25px;
  line-height: 1.35;
  text-align: center;

  ${small} {
    font-size: ${({ theme }) => theme.fonts.smallText};
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
`

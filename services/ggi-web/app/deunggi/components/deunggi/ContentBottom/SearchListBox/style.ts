'use client'

import styled from '@emotion/styled'

export const ListContainer = styled.div`
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  overflow: hidden;
`

export const ListHead = styled.ul`
  display: flex;
  background-color: #f8fafc;
  border-bottom: 1px solid #e5e7eb;
`

interface HeadListProps {
  width: string
}
export const HeadList = styled.li<HeadListProps>`
  width: ${({ width }) => width};
  padding: 15px 0;
  font-size: 16px;
  font-weight: 700;
  color: #6b7280;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const EmptyContent = styled.div`
  width: 100%;
  padding: 180px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: #000;
`

export const ListContent = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`

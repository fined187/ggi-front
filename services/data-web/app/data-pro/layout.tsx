'use client'
import React, { useEffect, useState } from 'react'
import './globals.css'
import { ModalContextProvider } from './context/useModalContext'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) {
    return null
  }
  return (
    <div className="content-area">
      <main>
        <ModalContextProvider>{children}</ModalContextProvider>
      </main>
    </div>
  )
}

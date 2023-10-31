import React from 'react'

interface MasStickerProps {
  className?: string
}

export default function Mas({ className = '' }: MasStickerProps) {
  return (
    <svg
      className={className}
      fill="none"
      height="79"
      viewBox="0 0 78 79"
      width="78"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        fill="currentColor"
        height="77.7958"
        rx="9.61964"
        width="22.0177"
        x="27.8887"
        y="0.745117"
      />
      <rect
        fill="currentColor"
        height="77.7958"
        rx="9.61964"
        transform="rotate(90 77.7957 28.6335)"
        width="22.0177"
        x="77.7957"
        y="28.6335"
      />
    </svg>
  )
}

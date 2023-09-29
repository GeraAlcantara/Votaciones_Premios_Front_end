import React, { MouseEventHandler } from 'react'

interface ButtonsProps {
  className?: string
  icon?: React.ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

export default function Button({ className, icon, onClick, children }: ButtonsProps) {
  return (
    <button
      className={`flex gap-3 rounded-[35px] justify-center items-center py-2 px-7 font-jet-brains font-normal text-xl border border-brand-dark ${className}`}
      onClick={onClick}
    >
      {icon && icon} {children}
    </button>
  )
}

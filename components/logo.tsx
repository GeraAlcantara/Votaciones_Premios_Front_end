import React from 'react'
import Link from 'next/link'

import StickerLogo from './icons/sticker-logo'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link className="m-4 " href="/">
      <div
        className={`flex w-[300px] relative py-[13px] px-[10px] bg-brand-dark dark:bg-brand-yellow text-brand-yellow dark:text-brand-dark font-monserrat font-black text-[56px] leading-[.8] ${className}`}
      >
        <div className="flex flex-col h-full justify-center items-center">
          <span>DISCORD</span>
          <span>AWARDS</span>
        </div>
        <StickerLogo className="absolute top-[-12px] right-[-18px]" />
      </div>
    </Link>
  )
}

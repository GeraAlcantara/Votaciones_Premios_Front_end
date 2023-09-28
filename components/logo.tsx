import React from 'react'

import StickerLogo from './icons/sticker-logo'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <article className={`flex relative h-full max-h-[103px] m-5 ${className}`} role="logo">
      <h1 className="flex flex-col bg-brand-dark dark:bg-brand-yellow p-3 h-full justify-center items-center">
        <span className="text-brand-yellow dark:text-brand-dark font-monserrat font-black text-5xl">
          DISCORD
        </span>
        <span className="text-brand-yellow dark:text-brand-dark font-monserrat font-black text-5xl">
          AWARDS
        </span>
      </h1>
      <StickerLogo className="absolute top-[-20px] right-[-20px]" />
    </article>
  )
}

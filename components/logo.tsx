import React from 'react'

import StickerLogo from './icons/sticker-logo'

export default function Logo() {
  return (
    <article className="flex relative h-[95%] max-h-[103px] m-5">
      <h1 className="flex flex-col bg-brand-dark dark:bg-brand-yellow p-3 h-[100%] justify-center items-center">
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

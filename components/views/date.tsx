import React from 'react'

import StickerGroup from '../icons/sticker-group'

export default function Date() {
  return (
    <section className="flex flex-col grow shrink h-auto min-h-full w-full mt-20">
      <article className="flex flex-col w-full grow shrink relative">
        <div className="absolute bg-gradient-radial-blurred-purple w-full h-[400%] z-[-1] rounded-[50%] top-[-150%]" />
        <h2 className="flex flex-col font-monserrat font-black [&_span]:leading-[0.75] items-center">
          <span className="text-[8.8rem] text-brand-yellow">ARRANCAMOS</span>
          <span className="flex gap-4">
            <span className="text-[20rem] text-brand-purple">15</span>
            <span className="text-[20rem] text-brand-dark dark:text-brand-light">NOV</span>
          </span>
        </h2>
        <h3 className="flex justify-center text-5xl text-brand-dark dark:text-brand-light font-light mt-4">
          Pre registro
        </h3>
      </article>
      <StickerGroup className="self-center mt-10" />
    </section>
  )
}

import React from 'react'

import StickerHeroL from '../icons/sticker-hero-L'
import StickerHeroR from '../icons/sticker-hero-R'
import DiscordIcon from '../icons/discord'
import GithubIcon from '../icons/github'
import Button from '../base/button'

export default function Hero() {
  return (
    <section className="flex flex-col grow shrink h-auto w-full">
      <article className="flex grow shrink min-h-screen w-full justify-center items-center relative overflow-hidden">
        <StickerHeroL className="absolute top-0 left-0 z-40" />
        <h2 className="flex flex-col">
          <span className="relative z-50 font-monserrat text-[9.3rem] leading-[8rem] font-black text-brand-purple drop-shadow-2xl">
            DISCORD
          </span>
          <span className="relative z-50 font-monserrat text-[9.3rem] leading-[8rem] font-black text-brand-dark dark:text-brand-light drop-shadow-2xl">
            AWARDS
          </span>
          <span className="relative z-50 font-monserrat text-[8.8rem] leading-[8rem] font-black text-brand-purple drop-shadow-2xl">
            MIDUDEV
          </span>
          <span className="relative z-50 font-monserrat text-[18rem] leading-[13rem] font-black text-brand-yellow drop-shadow-2xl stroke-black">
            2023
          </span>
        </h2>
        <StickerHeroR className="absolute bottom-0 right-0 z-40" />
      </article>
      <div className="flex gap-3 justify-center mt-20 mb-10">
        <Button className="bg-brand-yellow text-brand-dark" icon={<GithubIcon />}>
          Ingresar con Github
        </Button>
        <Button className="bg-brand-purple text-brand-light" icon={<DiscordIcon />}>
          Ingresar con Discord
        </Button>
      </div>
    </section>
  )
}

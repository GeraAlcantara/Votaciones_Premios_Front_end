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
        <StickerHeroL className="absolute top-0 left-0 z-40 max-w-[50%]" />
        <h2 className="flex flex-col font-monserrat relative z-50 font-black drop-shadow-2xl [&>span]:leading-[0.8]">
          <span className="text-[3.3rem] xsm:text-[5.3rem] sm:text-[6.25rem] md:text-[7.3rem] lg:text-[8.3rem] xl:text-[9.3rem] 2xl:text-[11.3rem] text-brand-purple">
            DISCORD
          </span>
          <span className="text-[3.25rem] xsm:text-[5.3rem] sm:text-[6.2rem] md:text-[7.3rem] lg:text-[8.3rem] xl:text-[9.3rem] 2xl:text-[11.3rem] text-brand-dark dark:text-brand-light">
            AWARDS
          </span>
          <span className="text-[3.1rem] xsm:text-[5rem] sm:text-[5.8rem] md:text-[6.8rem] lg:text-[7.8rem] xl:text-[8.8rem] 2xl:text-[10.8rem] text-brand-purple">
            MIDUDEV
          </span>
          <span className="text-[6.5rem] xsm:text-[10.5rem] sm:text-[12rem] md:text-[14rem] lg:text-[16rem] xl:text-[18rem] 2xl:text-[22.5rem] text-brand-yellow stroke-black">
            2023
          </span>
        </h2>
        <StickerHeroR className="absolute bottom-0 right-0 z-40 max-w-[50%]" />
      </article>
      <div className="flex gap-3 justify-center items-center mt-20 mb-10 flex-col lg:flex-row">
        <Button
          className="bg-brand-yellow text-brand-dark max-w-[80%] lg:max-w-full text-base lg:text-xl"
          icon={<GithubIcon className="h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]" />}
        >
          Ingresar con Github
        </Button>
        <Button
          className="bg-brand-purple text-brand-light max-w-[80%] lg:max-w-full text-base lg:text-xl"
          icon={<DiscordIcon className="h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]" />}
        >
          Ingresar con Discord
        </Button>
      </div>
    </section>
  )
}

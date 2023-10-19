/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import Mas from '@/components/icons/mas'
import And from '@/components/icons/and'
import Copa from '@/components/icons/copa'
import Star from '@/components/icons/star'

import Surprised from './icons/surprised'

export function About() {
  return (
    <>
      <div className="grid h-screen place-content-center bg-black">
        <div className="p-10 relative">
          <Mas className="text-brand-yellow absolute top-[-3rem] left-[-2.5rem]" />
          <h2 className="flex flex-col font-monserrat relative z-50 font-black drop-shadow-2xl [&>span]:leading-[0.76]">
            <span className="font-monserrat text-[120px] font-black uppercase text-zinc-100">
              Pre Registrate
            </span>
            <span className=" relative font-monserrat text-[110px] font-black uppercase text-lime-400">
              COMO CANDIDAT
              <And className="absolute right-[-2%] top-[-4%]" />
            </span>
            <span className="font-monserrat text-[185px] font-black uppercase text-indigo-600">
              participa
            </span>
          </h2>
          <Mas className="text-brand-orange absolute bottom-[-10%] right-[1%]" />
        </div>
        {/* cards */}
        <div className="grid grid-cols-3 grid-rows-2 gap-6 w-[1222px] pt-10 pb-10 text-brand-dark font-monserrat ">
          {/* carta una */}
          <div className="text-center row-span-2 col-span-1 bg-brand-yellow rounded-xl px-5 py-10">
            <div className="relative w-[198px] h-[256px] mx-auto">
              <Star className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
              <Copa className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
            </div>
            <h3 className="flex flex-col relative z-50 font-black drop-shadow-2xl [&>span]:leading-[0.85]">
              <span className="text-4xl ">PREMIOS</span>
              <span className="text-brand-purple text-xl">INCREIBLEMENTE</span>
              <span className="text-5xl">CHAFA</span>
            </h3>
            <p className="text-xl py-5 font-medium">
              La participación en los premios es bajo tu propia responsabilidad
            </p>
            <p className="font-medium">
              Por favor, ten en cuenta que los premios son digitales y carecen de valor menetario
            </p>
          </div>
          {/* carta dos */}
          <div className="px-14 col-span-2 bg-brand-purple rounded-xl py-10 space-y-8">
            <div className="flex justify-between">
              <h3 className="flex flex-col text-6xl font-black gap-1">
                <span className="text-brand-orange">GANA</span>
                <span className="text-brand-yellow">STICKERS</span>
              </h3>
              <Surprised />
            </div>
            <p className="text-white font-medium">
              ¡Los premios son tan chafas que al ganar te dan stickers digitales que puedes
              conseguir más fácil que encontrar un unicornio en tu jardín! ¡Literalmente los sacamos
              de Figma Community, donde son más gratis que el aire que respiramos! ¡Y pensar que nos
              emocionamos por estas "recompensas"! 😂🦄💨
            </p>
          </div>
          {/* carta tres */}
          <div className="col-span-2 bg-brand-yellow rounded-xl px-5 py-10 space-y-8">
            <div className="flex justify-between">
              <h5 className="font-monserrat text-brand-purple text-6xl font-black">CUIDADO</h5>
              <Surprised />
            </div>
            <p className="font-medium">
              ¡Los premios son tan chafas que al ganar te dan stickers digitales que puedes
              conseguir más fácil que encontrar un unicornio en tu jardín! ¡Literalmente los sacamos
              de Figma Community, donde son más gratis que el aire que respiramos! ¡Y pensar que nos
              emocionamos por estas "recompensas"! 😂🦄💨
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

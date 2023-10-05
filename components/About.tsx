/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'

import MasAmarillo from '@/components/icons/mas-amarillo.svg'
import MasNaranja from '@/components/icons/mas-naranja.svg'
import And from '@/components/icons/and.svg'
import Copa from '@/components/icons/copa.svg'
import Star from '@/components/icons/star.svg'
import Surprised from '@/components/icons/surprised.svg'

export function About() {
  return (
    <>
      <div className="grid h-screen place-content-center bg-black">
        <Image alt="MasAmarillo" className="-ml-20" src={MasAmarillo} />
        <div className="p-10">
          <div className="font-['Montserrat'] text-[111.42px] font-black uppercase leading-[101.28px] text-zinc-100">
            Pre Registrate
          </div>
          <div className="font-['Montserrat'] text-[99.11px] font-black uppercase leading-[90.09px] text-lime-400">
            COMO CANDIDAT
          </div>
          <div className="grid justify-end -mt-28">
            <Image alt="and" src={And} />
          </div>
          <div className="font-['Montserrat'] text-[172.96px] font-black uppercase leading-[158.95px] text-indigo-600">
            participa
          </div>
          <div className="grid justify-items-end -mr-20">
            <Image alt="MasNaranja" src={MasNaranja} />
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-6 w-[1222px] h-[558px] pt-10 pb-10">
            <div className="row-span-2 col-span-1 bg-brand-yellow rounded-xl">
              <div className="relative w-[198px] h-[256px] mx-auto text-brand-dark">
                <Image
                  alt="star"
                  className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                  src={Star}
                />
                <Image
                  alt="copa"
                  className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                  src={Copa}
                />
              </div>
              <h5>PREMIOS</h5>
              <h5 className="text-brand-purple">INCREIBLES</h5>
              <h5>CHAFA</h5>
              <p>La participación en los premios es bajo tu propia responsabilidad</p>
              <p>
                Por favor, ten en cuenta que los premios son digitales y carecen de valor menetario
              </p>
            </div>
            <div className="col-span-2 bg-brand-purple rounded-xl">
              <h5>GANA</h5>
              <h5>STICKERS</h5>
              <Image alt={'carita'} src={Surprised} />
              <p>
                ¡Los premios son tan chafas que al ganar te dan stickers digitales que puedes
                conseguir más fácil que encontrar un unicornio en tu jardín! ¡Literalmente los
                sacamos de Figma Community, donde son más gratis que el aire que respiramos! ¡Y
                pensar que nos emocionamos por estas "recompensas"! 😂🦄💨
              </p>
            </div>
            <div className="col-span-2 bg-brand-yellow rounded-xl">
              <h5>cuidado</h5>
              <Image alt={'carita'} src={Surprised} />
              <p>
                ¡Los premios son tan chafas que al ganar te dan stickers digitales que puedes
                conseguir más fácil que encontrar un unicornio en tu jardín! ¡Literalmente los
                sacamos de Figma Community, donde son más gratis que el aire que respiramos! ¡Y
                pensar que nos emocionamos por estas "recompensas"! 😂🦄💨
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

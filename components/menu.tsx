'use client'

import type { MenuOptions } from '@/types/menu.type'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Logo from './logo'

interface MenuProps {
  options: MenuOptions[]
}

function Menu({ options }: MenuProps) {
  const pathname = usePathname()

  return (
    <nav
      className={`flex justify-between border-b-2 border-brand-dark dark:border-brand-yellow bg-brand-purple dark:bg-brand-dark text-brand-light h-[138px]`}
    >
      <Logo />
      <ul className="flex gap-10 mr-10 items-center">
        {options.map((option, index) => (
          <li key={`option.path-${index}`}>
            <Link
              className={`
								${
                  (pathname || pathname.includes(option?.customActive as string)) === option.path
                    ? 'underline'
                    : ''
                } font-jet-brains
							`}
              href={option.path}
            >
              {option.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu

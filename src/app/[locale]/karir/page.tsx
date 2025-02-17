'use client'

import { useTranslations } from 'next-intl'
import * as React from 'react'
import { FiClock } from 'react-icons/fi'

export default function Karir() {
  const t = useTranslations('')

  return (
    <div>
      <div className='h-[100px] w-full'></div>
      <section className="relative h-[282px] w-full bg-[url('/image/karirHeader.png')] bg-cover bg-no-repeat">
        <div className='absolute inset-0 h-full w-full bg-black/70' />
        <div className='container relative z-10 mx-auto my-auto flex h-full flex-col justify-center gap-10 text-white'>
          <h1 className='text-5xl font-bold md:text-[64px]'>
            Karir
          </h1>
        </div>
      </section>

      <section className="container mx-auto min-h-[50vh]">
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="mb-8 text-[#0199CB]">
            <FiClock className="text-8xl" />
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            We’re not open right now
          </h2>
          <p className="text-lg text-gray-600 md:text-xl">
            But feel free to send your CV to our email: <br />
            <span className="font-bold text-[#0199CB]">hr@cartenz.co.id</span>
          </p>
        </div>
      </section>
    </div>
  )
}

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
          {t('karirhr').toUpperCase()}
          </h1>
        </div>
      </section>
      <section className='container mx-auto min-h-[50vh] py-12'>
  <div className='flex flex-col items-center justify-center py-24 text-center max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 border border-gray-200 dark:border-gray-700 animate-fade-in-up'>
    <div className='mb-8 text-[#0199CB] dark:text-[#66CCFF]'>
      <FiClock className='text-9xl' />
    </div>
    <h2 className='mb-4 text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-wide'>
      {t('karirh2')}
    </h2>
    <p className='text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
      {t('karirh3')}
    </p>
    <br />
    <p className='text-2xl md:text-3xl text-gray-600 dark:text-gray-300'>
      <a href="mailto:hrd@cartenz.co.id" className="font-bold text-[#0199CB] hover:underline">
        hrd@cartenz.co.id
      </a>
    </p>
  </div>
</section>

    </div>
  )
}

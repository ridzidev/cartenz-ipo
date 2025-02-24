'use client'

import { useTranslations } from 'next-intl'
import * as React from 'react'
import { FiClock } from 'react-icons/fi'

export default function HubunganInvestor() {
  const t = useTranslations('')

  return (
    <div>
      {/* Spacer */}
      <div className='h-[100px] w-full'></div>

      {/* Header Section */}
      <section className="relative h-[282px] w-full bg-[url('/image/karirHeader.png')] bg-cover bg-no-repeat">
        <div className='absolute inset-0 h-full w-full bg-black/70' />
        <div className='container relative z-10 mx-auto my-auto flex h-full flex-col justify-center gap-10 text-white'>
          <h1 className='text-5xl font-bold md:text-[64px]'>
            {t('Hubungan Investor')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className='container mx-auto min-h-[50vh]'>
        <div className='flex flex-col items-center justify-center py-24 text-center'>
          <div className='mb-8 text-[#0199CB] dark:text-[#66CCFF]'>
            <FiClock className='text-8xl' />
          </div>
          <h2 className='mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl'>
            
            {t('comingsoon')}
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 md:text-xl'>
            {t('comingsoonmsg')}
          </p>
        </div>
      </section>
    </div>
  )
}
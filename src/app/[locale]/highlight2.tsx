'use client'

import React from 'react'
import { useTranslations } from 'next-intl'

function BoxHighlight2({
  title,
  description
}: {
  title: string
  description: string
}) {
  return (
    <div className='relative h-full rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 md:hover:scale-[1.02]'>
      <div className='absolute right-4 top-4'>
        <img 
          src='/image/arrow-yellow-right-up.svg' 
          alt='icon-arrow-yellow' 
          className='w-8 md:w-10'
        />
      </div>
      <div className='flex h-full flex-col justify-between'>
        <h3 className='text-2xl font-bold text-[#0199CB] dark:text-[#4FD1C5] md:text-3xl md:leading-[2.5rem]'>
          {title}
        </h3>
        <p className='mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:mt-4 md:text-base'>
          {description}
        </p>
      </div>
    </div>
  )
}

export function Highlight2() {
  const t = useTranslations('')

  const FEATURES2 = [
    { title: '50+', description: t('features1') },
    { title: '500+', description: t('features2') },
    { title: '50+', description: t('features3') },
    { title: '175+', description: t('features4') },
    { title: '300 ' + t('Ribu'), description: t('features5') },
    { title: '2,5 ' + t('Juta'), description: t('features6') }
  ]

  return (
    <section className='relative overflow-hidden bg-gray-50 py-12 dark:bg-gray-900 md:py-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='mb-8 text-center text-2xl font-bold text-gray-800 dark:text-gray-200 md:mb-12 md:text-3xl'>
          {t('cartenzDalamAngka')}
        </h2>

        <div className='relative mt-8 md:mt-12'>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
            {FEATURES2.map(({ title, description }) => (
              <BoxHighlight2
                key={title}
                title={title}
                description={description}
              />
            ))}
          </div>

          <div className='mt-8 flex justify-center md:absolute md:-right-10 md:-top-10 md:mt-0 lg:-right-20 lg:-top-20 xl:-right-30 xl:-top-30'>
            <div className='relative w-[120px] md:w-[200px] lg:w-[300px]'>
              <img
                src='/image/bintang.png'
                alt='Bintang Besar'
                className='rotate-[5deg] transition-transform hover:rotate-12'
              />
              <div className='absolute inset-0 flex flex-col items-center justify-center'>
                <h4 className='text-4xl font-bold text-black dark:text-white md:text-5xl lg:text-6xl'>
                  4.5
                </h4>
                <p
                  className='text-center text-sm font-medium text-gray-600 dark:text-gray-300 md:text-base'
                  dangerouslySetInnerHTML={{ __html: t('kepuasanPelanggan') }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlight2
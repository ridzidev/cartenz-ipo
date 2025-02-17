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
    <div className='relative max-w-[18rem] rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl'>
      <div className='absolute right-4 top-4'>
        <img src='/image/arrow-yellow-right-up.svg' alt='icon-arrow-yellow' />
      </div>
      <div className='flex h-full flex-col justify-between'>
        <h3 className='text-3xl font-bold leading-[2.5rem] text-[#0199CB]'>
          {title}
        </h3>
        <p className='mt-2 text-sm leading-5 text-gray-600'>{description}</p>
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
    <section className='relative overflow-hidden bg-gray-50 py-16'>
      {/* Full-width content container */}
      <div className='mx-auto px-6 lg:px-20'>
        <p className='mb-10 text-center text-[24px] font-bold leading-8 text-gray-800'>
          {t('cartenzDalamAngka')}
        </p>

        <div className='relative mt-10 lg:mt-20'>
          {/* Full-width grid container */}
          <div className='mt-10 w-full'>
            <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>
              {FEATURES2.map(({ title, description }) => (
                <BoxHighlight2
                  key={title}
                  title={title}
                  description={description}
                />
              ))}
            </div>
          </div>

          {/* Bintang Besar - Updated positioning */}
          <div className='mt-12 flex justify-center opacity-70 md:absolute md:-right-20 md:-top-20 md:mt-0 md:block lg:-right-40 lg:-top-80 xl:-right-60 xl:-top-20'>
            <div className='relative'>
              <img
                src='/image/bintang.png'
                alt='Bintang Besar'
                className='w-[150px] rotate-[5deg] lg:h-[500px] lg:w-[500px]'
              />
              <div className='absolute inset-0 z-10 flex flex-col items-center justify-center'>
                <h4 className='text-6xl font-bold text-black'>4.5</h4>
                <p
                  className='text-center text-lg font-medium text-gray-600'
                  dangerouslySetInnerHTML={{ __html: t('kepuasanPelanggan') }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlight2

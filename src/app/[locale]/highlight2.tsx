'use client'

import React from 'react'
import { useTranslations } from 'next-intl'

function BoxHighlight({
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
      <div>
        <h3 className='text-[2.5rem] font-bold leading-[3rem] text-[#0199CB]'>
          {title}
        </h3>
        <p className='mt-2 text-lg leading-7 text-gray-600'>{description}</p>
      </div>
    </div>
  )
}

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
      <div>
        <h3 className='text-[2.5rem] font-bold leading-[3rem] text-[#0199CB]'>
          {title}
        </h3>
        <p className='mt-2 text-lg leading-7 text-gray-600'>{description}</p>
      </div>
    </div>
  )
}

export function Highlight2() {
  const t = useTranslations('')

  const FEATURES = [
    {
      title: '50+',
      description: t('features1')
    },
    {
      title: '500+',
      description: t('features2')
    },
    {
      title: '50+',
      description: t('features3')
    },
    {
      title: '175+',
      description: t('features4')
    }
  ]
  
  const FEATURES2 = [
    {
      title: '50+',
      description: t('features1')
    },
    {
      title: '500+',
      description: t('features2')
    },
    {
      title: '50+',
      description: t('features3')
    },
    {
      title: '175+',
      description: t('features4')
    },
    {
      title: '300 ' + t('Ribu'),
      description: t('features5')
    },
    {
      title: '2,5 ' + t('Juta'),
      description: t('features6')
    }
  ]

  return (
    <section className='relative overflow-hidden bg-gray-50 py-16'>
      <div className='container mx-auto px-6 lg:px-20'>
        <h2 className='mb-10 text-center text-[24px] font-bold leading-8 text-gray-800 lg:text-[36px]'>
          {t('cartenzDalamAngka')}
        </h2>
      </div>

      {/* <div className='bg-tertiary'>
        <div className='container mx-auto flex flex-wrap justify-center gap-20 py-10 md:justify-between lg:justify-between'>
          <div>
            <img src='/image/logos/1Daerah.svg' alt='1daerah' />
          </div>
          <div>
            <img src='/image/logos/2Daerah.svg' alt='2daerah' />
          </div>
          <div>
            <img src='/image/logos/3Daerah.svg' alt='3daerah' />
          </div>
          <div>
            <img src='/image/logos/5Daerah.svg' alt='4daerah' />
          </div>
          <div>
            <img src='/image/logos/5Daerah.svg' alt='5daerah' />
          </div>
          <div className='text-center'>
            <h3 className='text-[3rem] font-semibold leading-[3.657rem] text-[#0199CB]'>
              100++
            </h3>
            <p className='text-[24px] leading-7'>{t('pemerintahDaerah')}</p>
          </div>
        </div>
      </div> */}

      <div className='container relative mx-auto mt-10 lg:mt-20'>
        {/* 
        <div className='flex flex-wrap justify-center gap-24 md:justify-between md:gap-0 lg:justify-between lg:gap-0'>
          {FEATURES.map(({ title, description }) => (
            <BoxHighlight key={title} title={title} description={description} />
          ))}
        </div>
        */}

        <div className='mt-10 md:w-4/5 lg:w-4/5'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {FEATURES2.map(({ title, description }) => (
              <BoxHighlight2
                key={title}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>

        {/* Bintang Besar */}
        <div className='absolute right-[-100px] top-[-50px] opacity-70'>
          <div className='relative'>
            <img
              src='/image/bintang.png'
              alt='Bintang Besar'
              className='w-[150px] rotate-[5deg] lg:h-[500px] lg:w-[500px]'
            />
            <div className='absolute inset-0 z-10 flex flex-col items-center justify-center'>
              <h4 className='text-6xl font-bold text-black-500'>4.5</h4>
              {/* <div>
                <p>Kepuasan</p>
                <p>Pelanggan</p>
              </div> */}
              <p
                className='text-center text-lg font-medium text-gray-600'
                dangerouslySetInnerHTML={{ __html: t('kepuasanPelanggan') }}
              ></p>
            </div>
          </div>
        </div>

        {/* <div className='mt-20 text-center md:mt-0 lg:mt-0 lg:w-3/5 lg:text-left'>
          <p className='text-2xl font-bold lg:text-4xl'>{t('klien')}</p>
          <p className='text-[#828282} text-lg lg:mt-10 lg:text-2xl'>
            {t('dataTahun')}
          </p>
        </div> */}
      </div>
    </section>
  )
}

export default Highlight2

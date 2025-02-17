'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Button from '../components/Button'
import * as React from 'react'
import moment from 'moment'

interface ContentData {
  image: string
  title: string
  description: string
}

// Tipe untuk mapping tahun ke data konten
const contentData: Record<string, ContentData> = {
  '2024': {
    image: '/image/pDayat.png',
    title: 'Judul untuk Tahun 2024',
    description:
      'Pak Dayat kepencet foto, eh jadi selfie di grup Cartenz Family 2024'
  },
  '2023': {
    image: '/image/pDayat.png',
    title: 'Judul untuk Tahun 2023',
    description:
      'Pak Dayat kepencet foto, eh jadi selfie di grup Cartenz Family 2023'
  },
  '2022': {
    image: '/image/pDayat.png',
    title: 'Judul untuk Tahun 2022',
    description:
      'Pak Dayat kepencet foto, eh jadi selfie di grup Cartenz Family 2022'
  },
  '2021': {
    image: '/image/pDayat.png',
    title: 'Judul untuk Tahun 2021',
    description:
      'Pak Dayat kepencet foto, eh jadi selfie di grup Cartenz Family 2021'
  }
}

export default function Informasi() {
  const t = useTranslations('')
  const yearsArray = []
  for (let i = 0; i < 4; i++) {
    yearsArray.push(moment().subtract(i, 'years').format('YYYY'))
  }
  const [activeTab, setActiveTab] = React.useState(yearsArray[0])

  return (
    <div className='mt-[100px]'>
      <section className='container py-8'>
        <h1 className='mb-10 text-3xl font-bold'>Sosial Media</h1>
        <div className='flex flex-wrap items-center justify-center gap-6 text-[24px] md:justify-between'>
          <Link
            href='https://www.instagram.com/cartenztechnology'
            target='_blank'
            className='flex flex-col justify-center'
          >
            <img src='/image/tiktok.png' alt='tiktok' />
            <p className='mt-4 font-bold'>@cartenz</p>
          </Link>
          <Link
            href='https://www.instagram.com/cartenztechnology'
            target='_blank'
            className='flex flex-col justify-center'
          >
            <img src='/image/instagram.png' alt='isntagram' />
            <p className='mt-4 font-bold'>@cartenz</p>
          </Link>
          <Link
            href='https://www.instagram.com/cartenztechnology'
            target='_blank'
            className='flex flex-col justify-center'
          >
            <img src='/image/youtube.png' alt='youtube' />
            <p className='mt-4 font-bold'>@cartenz</p>
          </Link>
          <Link
            href='https://www.instagram.com/cartenztechnology'
            target='_blank'
            className='flex flex-col justify-center'
          >
            <img src='/image/twitterX.png' alt='twitterX' className='' />
            <p className='mt-4 font-bold'>@cartenz</p>
          </Link>
          <Link
            href='https://www.instagram.com/cartenztechnology'
            target='_blank'
            className='flex flex-col justify-center'
          >
            <img src='/image/facebook.png' alt='facebook' />
            <p className='mt-4 font-bold'>@cartenz</p>
          </Link>
        </div>
      </section>
      <section className='container mt-8 py-8'>
        <h1 className='text-uppercase mb-10 text-3xl font-bold'>
          Berita Terakhir
        </h1>
        <div className='md:flex'>
          <ul className='flex-column text-sm font-medium text-gray-500 md:me-10 md:w-[126px]'>
            {yearsArray.map(year => (
              <li key={year}>
                <a
                  href='#'
                  onClick={e => {
                    e.preventDefault()
                    setActiveTab(year)
                  }}
                  className={`inline-flex w-full items-center px-4 py-4 ${
                    activeTab === year
                      ? 'border-b-2 border-l-8 border-b-gray-300 border-l-[#0199CB] font-bold hover:bg-gray-100'
                      : 'border-b-2 border-b-gray-300 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {year}
                </a>
              </li>
            ))}
          </ul>
          <div className='text-medium w-full'>
            {contentData[activeTab] && (
              <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                {[...new Array(6)].map((_, i) => (
                  <div className='flex flex-col gap-y-5' key={i}>
                    <img
                      src={contentData[activeTab].image}
                      alt={contentData[activeTab].title}
                      className='h-[405px] object-cover'
                    />
                    <p className='font-light'>{contentData[activeTab].title}</p>
                    <p className='font-xl'>
                      {contentData[activeTab].description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className='mt-20 flex justify-center'>
          <Button rounded size='large' variant='outline'>
            Lebih Banyak
          </Button>
        </div>
      </section>
    </div>
  )
}

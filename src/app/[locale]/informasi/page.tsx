'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import * as React from 'react'
import { FiClock } from 'react-icons/fi'
import Image from 'next/image' // Add this import

export default function Informasi() {
  const t = useTranslations('')

  return (
    <div className='mt-[100px]'>
      {/* Social Media Section - Unchanged */}
      <section className='container py-12'>
        <h1 className='mb-12 text-center text-4xl font-bold text-gray-800 md:text-5xl'>
          Follow Us on Social Media
        </h1>

        <div className='grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12'>
          {/* TikTok */}
          <Link
            href='https://www.tiktok.com/@cartenztechnology'
            target='_blank'
            className='group flex flex-col items-center p-6 transition-all duration-300 hover:scale-105'
          >
            <div className='mb-4 rounded-2xl bg-white p-4 shadow-lg transition-colors duration-300 group-hover:bg-[#ff0050]'>
              <Image
                src='/image/tiktok.png'
                alt='TikTok'
                width={64} // Specify width
                height={64} // Specify height
                className='object-contain'
              />
            </div>
            <p className='text-center text-lg font-semibold text-gray-600 transition-colors duration-300 group-hover:text-[#ff0050] md:text-xl'>
              @cartenztechnology
            </p>
          </Link>

          {/* Instagram */}
          <Link
            href='https://www.instagram.com/cartenztechnology/'
            target='_blank'
            className='group flex flex-col items-center p-6 transition-all duration-300 hover:scale-105'
          >
            <div className='mb-4 rounded-2xl bg-white p-4 shadow-lg transition-colors duration-300 group-hover:bg-[#e1306c]'>
              <Image
                src='/image/instagram.png'
                alt='Instagram'
                width={64} // Specify width
                height={64} // Specify height
                className='object-contain'
              />
            </div>
            <p className='text-center text-lg font-semibold text-gray-600 transition-colors duration-300 group-hover:text-[#e1306c] md:text-xl'>
              @cartenztechnology
            </p>
          </Link>

          {/* YouTube */}
          <Link
            href='https://www.youtube.com/channel/UCHS5IQaoNke7ony6tzzed0A'
            target='_blank'
            className='group flex flex-col items-center p-6 transition-all duration-300 hover:scale-105'
          >
            <div className='mb-4 rounded-2xl bg-white p-4 shadow-lg transition-colors duration-300 group-hover:bg-[#ff0000]'>
              <Image
                src='/image/youtube.png'
                alt='YouTube'
                width={64} // Specify width
                height={64} // Specify height
                className='object-contain'
              />
            </div>
            <p className='text-center text-lg font-semibold text-gray-600 transition-colors duration-300 group-hover:text-[#ff0000] md:text-xl'>
              @cartenztechnology
            </p>
          </Link>

          {/* Facebook */}
          <Link
            href='https://www.facebook.com/cartenztechnologyinternational'
            target='_blank'
            className='group flex flex-col items-center p-6 transition-all duration-300 hover:scale-105'
          >
            <div className='mb-4 rounded-2xl bg-white p-4 shadow-lg transition-colors duration-300 group-hover:bg-[#1877f2]'>
              <Image
                src='/image/facebook.png'
                alt='Facebook'
                width={64} // Specify width
                height={64} // Specify height
                className='object-contain'
              />
            </div>
            <p className='text-center text-lg font-semibold text-gray-600 transition-colors duration-300 group-hover:text-[#1877f2] md:text-xl'>
              @cartenztechnology
            </p>
          </Link>
        </div>
      </section>

      {/* News Section Changed to Coming Soon */}
      <section className='container mt-8 py-8'>
        <hr></hr>

        <h1 className='mb-10 mt-10 text-3xl font-bold'>Berita</h1>
        <div className='flex flex-col items-center justify-center py-24 text-center'>
          <div className='mb-8 text-[#0199CB]'>
            <FiClock className='text-8xl' />
          </div>
          <h2 className='mb-4 text-4xl font-bold md:text-5xl'>Coming Soon</h2>
          <p className='text-lg text-gray-600 md:text-xl'>
            We&apos;re preparing something amazing for you. Please check back soon!
          </p>
        </div>
      </section>
    </div>
  )
}

'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import * as React from 'react'
import { FiClock } from 'react-icons/fi'
import dynamic from 'next/dynamic'

// Dynamically import Image component
const Image = dynamic(() => import('next/image'), { ssr: false })

export default function Informasi() {
  const t = useTranslations('')

  const socialMediaLinks = [
    {
      platform: 'TikTok',
      url: 'https://www.tiktok.com/@cartenztechnology',
      icon: '/image/tiktok.png',
      color: '#ff0050',
      handle: 'TikTok'
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/cartenztechnology/',
      icon: '/image/instagram.png',
      color: '#e1306c',
      handle: 'Instagram'
    },
    {
      platform: 'YouTube',
      url: 'https://www.youtube.com/channel/UCHS5IQaoNke7ony6tzzed0A',
      icon: '/image/youtube.png',
      color: '#ff0000',
      handle: 'YouTube'
    },
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/cartenztechnologyinternational',
      icon: '/image/facebook.png',
      color: '#1877f2',
      handle: 'Facebook'
    }
  ]

  return (
    <div className='mt-[100px]'>
      {/* Social Media Section */}
      <section className='container py-12'>
        <h1 className='mb-12 text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl'>
          {t('followUs')}
        </h1>

        <div className='grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12'>
          {socialMediaLinks.map((social) => (
            <Link
              key={social.platform}
              href={social.url}
              target='_blank'
              className={`group flex flex-col items-center p-6 transition-all duration-300 hover:scale-105 rounded-xl border-2 border-transparent hover:border-[${social.color}]`}
            >
              <div className={`mb-4 rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-lg transition-colors duration-300 group-hover:bg-[${social.color}]`}>
                <Image
                  src={social.icon}
                  alt={social.platform}
                  width={64}
                  height={64}
                  className='object-contain'
                />
              </div>
              <p className={`text-center text-lg font-semibold text-gray-600 dark:text-gray-300 transition-colors duration-300 group-hover:text-[${social.color}] md:text-xl`}>
                {social.handle}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className='container mx-auto min-h-[50vh]'>
        <div className='flex flex-col items-center justify-center py-24 text-center max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12'>
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
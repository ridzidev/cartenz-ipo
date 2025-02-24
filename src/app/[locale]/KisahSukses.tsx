'use client'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface IconProps {
  className?: string
}

const MapPinIcon = ({ className }: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className={className}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
    />
  </svg>
)

export function KisahSukses() {
  const t = useTranslations('')
  const { locale } = useParams()
  const kisahSuksesData = Array.from({ length: 3 }, (_, index) => ({
    pemda: t(`kisahSukses${index + 1}_pemda`),
    judul: t(`kisahSukses${index + 1}_judul`),
    isi: t(`kisahSukses${index + 1}_isi`),
    foto: t(`kisahSukses${index + 1}_foto`),
    tautan: t(`kisahSukses${index + 1}_tautan`)
  }))

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 1.5,
      partialVisibilityGutter: 80
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 1.3,
      partialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1.1,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    }
  }

  const getArticleLink = (tautan: string) => {
    const basePath = window.location.pathname.split('/')[1] // Extract base path (e.g., "en" or "id")
    return `/${basePath}/article/${tautan}` // Construct the new path
  }

  return (
    <div className='rounded-t-[40px] bg-tertiary py-8 dark:bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='mb-8 text-center text-2xl font-bold text-gray-800 dark:text-gray-100 md:mb-12 md:text-3xl'>
          {t('kisahSukses')}
        </h2>

        <div className='px-2 sm:px-4'>
          <Carousel
            autoPlay
            autoPlaySpeed={4000}
            infinite
            showDots
            responsive={responsive}
            partialVisible
            containerClass='pb-12'
            itemClass='px-2'
            dotListClass='!mt-8 [&>li:not(.react-multi-carousel-dot--active)>button]:bg-gray-300 [&>li:not(.react-multi-carousel-dot--active)>button]:dark:bg-gray-600'
          >
            {kisahSuksesData.map(({ pemda, judul, isi, foto, tautan }, index) => (
              <div
                key={index}
                className='h-full min-h-[400px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 md:rounded-3xl md:hover:scale-[1.02]'
              >
                <div className='flex h-full flex-col lg:flex-row'>
                  <div className='relative h-56 flex-shrink-0 overflow-hidden lg:h-full lg:w-[320px]'>
                    <img
                      src={foto}
                      alt={pemda}
                      className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
                    />
                    <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent dark:from-black/80' />
                    <div className='absolute bottom-4 left-4 flex items-center gap-2'>
                      <MapPinIcon className='h-5 w-5 text-blue-500 dark:text-blue-400' />
                      <p className='truncate text-sm font-semibold uppercase tracking-wide text-white'>
                        {pemda}
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-1 flex-col p-6 lg:p-8'>
                    <div className='flex flex-1 flex-col'>
                      <h3 className='mb-4 line-clamp-2 text-xl font-bold leading-tight text-gray-900 dark:text-gray-100 md:text-2xl'>
                        {judul}
                      </h3>
                      <p className='mb-4 line-clamp-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:text-base'>
                        {isi}
                      </p>
                    </div>
                    <button className='mt-4 flex w-fit items-center gap-2 text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300'>
                      <Link href={getArticleLink(tautan)} className='text-sm font-semibold'>
                        {t('Read More')}
                      </Link>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4 transition-transform group-hover:translate-x-1'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default KisahSukses
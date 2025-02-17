'use client'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useTranslations } from 'next-intl'

// Add interface for props
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
  const kisahSuksesData = Array.from({ length: 3 }, (_, index) => ({
    pemda: t(`kisahSukses${index + 1}_pemda`),
    judul: t(`kisahSukses${index + 1}_judul`),
    isi: t(`kisahSukses${index + 1}_isi`),
    foto: t(`kisahSukses${index + 1}_foto`)
  }))

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1.5,
      partialVisibilityGutter: 40,
      partialVisible: true
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20
    }
  }

  return (
    <div className='kisah-sukses rounded-t-[40px] bg-tertiary py-8'>
      <div className='container mx-auto px-6 lg:px-20'>

        <p className='mb-10 text-center text-[24px] font-bold leading-8 text-gray-800'>
          {t('kisahSukses')}
        </p>
      </div>
      <div className='px-6 lg:px-20'>
        <Carousel
          autoPlay
          autoPlaySpeed={3000}
          infinite
          showDots
          responsive={responsive}
          partialVisible={true}
          containerClass='pb-10'
          dotListClass='!mt-6' // Add margin-top to dots container
        >
          {kisahSuksesData.map(({ pemda, judul, isi, foto }, index) => (
            <div
              key={index}
              className='mx-2 h-[300px] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl'
            >
              <div className='flex h-full flex-col lg:flex-row'>
                <div className='relative h-48 flex-shrink-0 lg:h-full lg:w-[320px]'>
                  <img
                    src={foto}
                    alt={pemda}
                    className='h-full w-full object-cover'
                  />
                  <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent' />
                </div>

                <div className='flex flex-1 flex-col p-6 lg:p-8'>
                  <div className='flex flex-1 flex-col overflow-hidden'>
                    <div className='mb-4 flex items-center gap-2'>
                      <MapPinIcon className='h-5 w-5 text-blue-600' />
                      <p className='truncate text-sm font-semibold uppercase tracking-wide text-slate-600'>
                        {pemda}
                      </p>
                    </div>
                    <h3 className='mb-4 line-clamp-2 text-2xl font-bold leading-tight text-gray-900'>
                      {judul}
                    </h3>
                    <p className='mb-4 line-clamp-4 text-sm leading-relaxed text-gray-600'>
                      {isi}
                    </p>
                  </div>
                  <button className='mt-auto flex w-fit items-center gap-2 text-blue-600 transition-colors hover:text-blue-800'>
                    <span className='text-sm font-semibold'>Read More</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4'
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
  )
}

export default KisahSukses

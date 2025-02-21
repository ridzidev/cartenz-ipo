'use client'
import { useTranslations } from 'next-intl'
import { useState, useEffect, useRef } from 'react'
import { useTentangKami } from '@/hooks/useTentangKami'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function TentangKami() {
  const [activeSection, setActiveSection] = useState('perkenalan')
  const [isHovered, setIsHovered] = useState('')
  const {
    dataPerkenalan,
    dataPresisi,
    dataMisiKami,
    dataPerjalananKami,
    dataDirektur,
    dataTenagaAhli,
    dataPenghargaan,
    isLoading,
    isError
  } = useTentangKami()
  const t = useTranslations('')

  const perkenalanRef = useRef(null)
  const direkturRef = useRef(null)
  const tenagaAhliRef = useRef(null)
  const penghargaanPublikasiRef = useRef(null)

  const dataCardPerkenalan = [
    {
      id: '1',
      title: 'Profesional',
      description:
        'Komitmen Individu untuk mencapai HASIL EXCELLENT dalam setiap tugas yang diberikan, menjaga etika, kualitas, dan kecepatan kerja yang diterima dalam perusahaan dan lingkungan bisnis secara umum.',
      srcImg: '/image/profesional.png',
      color: '#FFFF00'
    },
    {
      id: '2',
      title: 'Efisien',
      description:
        'Mampu memberikan hasil sesuai KPI yang diminta perusahaan tanpa membuang uang, sumber daya, waktu, dan energi yang tidak perlu.',
      srcImg: '/image/efisien.png',
      color: '#FFE300'
    },
    {
      id: '3',
      title: 'Sigap',
      description:
        'Mampu bergerak cepat dan tepat sesuai dengan ekspektasi dari pelanggan dan perusahaan, serta memiliki growth mindset.',
      srcImg: '/image/sigap.png',
      color: '#EBD205'
    },
    {
      id: '4',
      title: 'Sinergis',
      description:
        'Individu yang memiliki attitude positif, fokus pada pencapaian tim, bukan pencapaian individu atau memenuhi ego pribadi.',
      srcImg: '/image/sinergis.png',
      color: '#F2C94C'
    }
  ]

  useEffect(() => {
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5 // Adjust this value to trigger the active state earlier or later
    })

    if (perkenalanRef.current) {
      observer.observe(perkenalanRef.current)
    }
    if (direkturRef.current) {
      observer.observe(direkturRef.current)
    }
    // if (tenagaAhliRef.current) {
    //   observer.observe(tenagaAhliRef.current)
    // }
    // if (penghargaanPublikasiRef.current) {
    //   observer.observe(penghargaanPublikasiRef.current)
    // }

    return () => {
      if (perkenalanRef.current) {
        observer.unobserve(perkenalanRef.current)
      }
      if (direkturRef.current) {
        observer.unobserve(direkturRef.current)
      }
      // if (tenagaAhliRef.current) {
      //   observer.unobserve(tenagaAhliRef.current)
      // }
      // if (penghargaanPublikasiRef.current) {
      //   observer.unobserve(penghargaanPublikasiRef.current)
      // }
    }
  }, [])

  if (isLoading) {
    return (
      <div className='mt-36'>
        <div className='container'>
          <div className='grid grid-cols-1 overflow-hidden rounded-[40px] bg-tertiary md:grid-cols-2'>
            <div className='px-8 py-10 md:px-16 md:py-20'>
              <h1 className='text-4xl font-bold md:text-6xl'>
                <Skeleton width={300} height={40} />
              </h1>
              <p className='mt-10 text-lg md:text-xl'>
                <Skeleton count={3} />
              </p>
            </div>
            <div className='flex h-[270px] items-center justify-center bg-slate-400 md:h-[611px]'>
              <Skeleton width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (isError) return <div className='mt-36'>Error loading user data</div>

  return (
    <div className=''>
      <div className='h-[150px] '></div>

      <section id='perkenalan' ref={perkenalanRef} className='mt-10'>
      <div className='container w-full'>
  {/* Section 1: Introduction */}
  <div className='relative w-full overflow-hidden'>
    {/* Full width wrapper */}
    <div className='relative mx-auto grid max-w-[1440px] grid-cols-1 overflow-hidden rounded-[40px] md:grid-cols-2'>
      {/* Centered container */}
      {/* Background Image Container */}
      <div className='absolute inset-0 z-0 h-full w-full'>
        <img
          src={dataPerkenalan[0].img}
          alt='cartenzFamily'
          className='h-full w-full object-cover object-center'
        />
      </div>
      {/* Left Content */}
      <div className='relative z-10 bg-black/50 px-6 py-8 backdrop-blur-lg md:px-12 md:py-16'>
        {/* Use a darker background for better contrast */}
        <h1 className='text-2xl font-bold md:text-5xl text-white'>
          {t(dataPerkenalan[0].judul)}
        </h1>
        <p className='mt-6 text-base md:text-lg text-gray-200'>
          {t(dataPerkenalan[0].text)}
        </p>
      </div>
      {/* Right Content - Empty Spacer */}
      <div className='relative z-0 h-[150px] md:h-[300px]'>
        <div className='absolute inset-0 bg-gradient-to-l from-black/30 via-black/10 to-transparent md:hidden' />
      </div>
    </div>
  </div>
</div>


        {/* Section 2: Culture */}
        <div className='container px-6'>
  <div className='rounded-[40px] py-20 bg-light-background dark:bg-dark-background'>
    <h1 className='customShadow my-10 text-center font-poppins text-5xl font-bold tracking-widest text-primary-light dark:text-primary-dark lg:text-6xl lg:leading-[120px]'>
      {t('Presisi')}
    </h1>
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
    {dataPresisi?.map((item: any, index: any) => (
        <div
          className='overflow-hidden rounded-lg bg-light-card dark:bg-dark-card shadow-md'
          key={index}
        >
          <div
            className='relative'
            style={{ backgroundColor: item.color }}
          >
            <img
              className='h-28 w-full rounded-md object-cover'
              src={item.srcImg}
              alt={`Image for ${item.judul}`}
            />
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
              <h2 className='text-xl font-bold uppercase text-white'>
                {t(item.judul)}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

        <hr className='mx-auto mb-12 mt-10 w-80 rounded-full border-t-4 border-blue-500' />
        {/* Section 3: Mission */}
        <div className='container relative'>
          <div
            className='rounded-[40px] bg-tertiary px-6 py-12 md:py-24'
            style={{
              backgroundImage: `url(${dataPerkenalan[0].img2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}
          >
            <div className='absolute inset-0 rounded-[40px] bg-black opacity-50' />
            <div className='relative mx-auto max-w-4xl rounded-lg bg-transparent p-6'>
              {/* Title with decorative element */}
              <div className='mb-12 flex flex-col items-center md:mb-16'>
                <h1 className='mb-6 text-center text-2xl font-bold uppercase text-white md:text-3xl'>
                  {t('MisiKami')}
                </h1>
                <div className='h-1 w-24 rounded-full bg-blue-500' />
              </div>

              {/* Content */}
              <div className='space-y-8 text-center md:space-y-12'>
                <p className='mx-auto max-w-2xl text-base leading-relaxed text-white md:text-lg'>
                  {t(dataMisiKami[0]['1'])}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br></br>
    </div>
  )
}

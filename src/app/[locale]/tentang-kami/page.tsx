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
    if (tenagaAhliRef.current) {
      observer.observe(tenagaAhliRef.current)
    }
    if (penghargaanPublikasiRef.current) {
      observer.observe(penghargaanPublikasiRef.current)
    }

    return () => {
      if (perkenalanRef.current) {
        observer.unobserve(perkenalanRef.current)
      }
      if (direkturRef.current) {
        observer.unobserve(direkturRef.current)
      }
      if (tenagaAhliRef.current) {
        observer.unobserve(tenagaAhliRef.current)
      }
      if (penghargaanPublikasiRef.current) {
        observer.unobserve(penghargaanPublikasiRef.current)
      }
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
            <div className='flex h-[300px] items-center justify-center bg-slate-400 md:h-[611px]'>
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
      <div className='h-[100px] w-full'></div>
      <section className='flex h-auto flex-col items-center justify-center space-y-3 bg-tertiary text-[#828282] sm:flex-row sm:space-x-5 sm:space-y-0 lg:h-[100px] lg:space-x-7 lg:text-base'>
        <div
          className={`relative text-base font-bold ${activeSection === 'perkenalan' || isHovered === 'perkenalan' ? 'text-[#0199cb]' : 'text-[#828282]'}`}
          onMouseEnter={() => setIsHovered('perkenalan')}
          onMouseLeave={() => setIsHovered('')}
          onClick={() => {
            const element = document.getElementById('perkenalan')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          <p className='cursor-pointer py-2'>{t('Perkenalan')}</p>
          {(activeSection === 'perkenalan' || isHovered === 'perkenalan') && (
            <div className='absolute inset-x-0 bottom-0 h-[4px] rounded-b-lg bg-[#0199cb]'></div>
          )}
        </div>
        <div
          className={`relative text-base font-bold ${activeSection === 'direktur' || isHovered === 'direktur' ? 'text-[#0199cb]' : 'text-[#828282]'}`}
          onMouseEnter={() => setIsHovered('direktur')}
          onMouseLeave={() => setIsHovered('')}
          onClick={() => {
            const element = document.getElementById('direktur')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          <p className='cursor-pointer py-2'>{t('Direktur1')}</p>
          {(activeSection === 'direktur' || isHovered === 'direktur') && (
            <div className='absolute inset-x-0 bottom-0 h-[4px] rounded-b-lg bg-[#0199cb]'></div>
          )}
        </div>
        <div
          className={`relative text-base font-bold ${activeSection === 'tenagaAhli' || isHovered === 'tenagaAhli' ? 'text-[#0199cb]' : 'text-[#828282]'}`}
          onMouseEnter={() => setIsHovered('tenagaAhli')}
          onMouseLeave={() => setIsHovered('')}
          onClick={() => {
            const element = document.getElementById('tenagaAhli')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          <p className='cursor-pointer py-2'>{t('TenagaAhli')}</p>
          {(activeSection === 'tenagaAhli' || isHovered === 'tenagaAhli') && (
            <div className='absolute inset-x-0 bottom-0 h-[4px] rounded-b-lg bg-[#0199cb]'></div>
          )}
        </div>
        <div
          className={`relative text-base font-bold ${activeSection === 'penghargaanPublikasi' || isHovered === 'penghargaanPublikasi' ? 'text-[#0199cb]' : 'text-[#828282]'}`}
          onMouseEnter={() => setIsHovered('penghargaanPublikasi')}
          onMouseLeave={() => setIsHovered('')}
          onClick={() => {
            const element = document.getElementById('penghargaanPublikasi')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          <p className='cursor-pointer py-2'>{t('PenghargaanDanPublikasi')}</p>
          {(activeSection === 'penghargaanPublikasi' ||
            isHovered === 'penghargaanPublikasi') && (
            <div className='absolute inset-x-0 bottom-0 h-[4px] rounded-b-lg bg-[#0199cb]'></div>
          )}
        </div>
      </section>

      <section id='perkenalan' ref={perkenalanRef} className='mt-10'>
        <div className='container'>
          {/* Section 1: Introduction */}
          <div className='grid grid-cols-1 overflow-hidden rounded-[40px] bg-tertiary md:grid-cols-2'>
            {/* Left Content */}
            <div className='px-8 py-10 md:px-16 md:py-20'>
              <h1 className='text-4xl font-bold md:text-6xl'>
                {t(dataPerkenalan[0].judul)}
              </h1>
              <p className='mt-10 text-lg md:text-xl'>
                {t(dataPerkenalan[0].text)}
              </p>
            </div>
            {/* Right Content */}
            <div className='flex h-[300px] justify-center bg-tertiary md:h-[611px]'>
              <img src={dataPerkenalan[0].img} alt='cartenzFamily' />
            </div>
          </div>
        </div>

        <br></br>

        {/* Section 2: Culture */}
        <div className='container px-6'>
          <div className='rounded-[40px] py-20'>
            {/* <p className='text-center text-3xl font-bold'>{t('BudayaKami')}</p> */}
            <h1 className='customShadow my-10 text-center font-poppins text-7xl font-bold tracking-widest text-[#0199cb] lg:text-9xl lg:leading-[192px]'>
              {t('Presisi')}
            </h1>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
              {dataPresisi?.map((item: any, index: any) => (
                <div
                  className='overflow-hidden rounded-lg bg-background shadow-[0px_4px_4px_0px_#00000040]'
                  key={index}
                >
                  <div
                    className='relative'
                    style={{ backgroundColor: item.color }}
                  >
                    <img
                      className='h-28 w-full rounded-md object-cover'
                      src={item.srcImg}
                      alt='Random image'
                    />
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <h2 className='text-3xl font-bold uppercase'>
                        {t(item.judul)}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <br></br>

        {/* Section 3: Mission */}
        <div className='container relative'>
          <div className='rounded-[40px] bg-tertiary py-20'>
            <h1 className='text-left text-3xl font-bold uppercase lg:text-center'>
              {t('MisiKami')}
            </h1>
            <div className='mt-10 flex flex-col gap-14 px-4 text-lg md:mt-20 md:px-12 md:text-xl'>
              <div className='misikami flex flex-col items-center justify-between gap-8 md:flex-row'>
                <p className='w-full md:w-auto'>{t(dataMisiKami[0]['1'])}</p>
                <p className='w-full md:w-auto'>{t(dataMisiKami[0]['2'])}</p>
                <p className='w-full md:w-auto'>{t(dataMisiKami[0]['3'])}</p>
              </div>
              <div className='misikami flex flex-col items-center justify-between gap-8 md:flex-row md:px-10'>
                <p className='w-full md:w-auto'>{t(dataMisiKami[0]['4'])}</p>
                <p className='w-full md:w-auto'>{t(dataMisiKami[0]['6'])}</p>
              </div>
              <div className='misikami flex flex-col items-center justify-between gap-8 md:flex-row'>
                <p className='w-full md:w-auto'>{t(dataMisiKami[0]['5'])}</p>
                <p className='w-full md:w-auto'>{t(dataMisiKami[0]['7'])}</p>
              </div>
            </div>
          </div>
          <br></br>

          {/* Visual Enhancements */}
          <span className='absolute h-[2px] w-full bg-secondary'></span>
          <span className='absolute right-8 top-32 hidden h-[600px] w-[2px] bg-secondary md:block'></span>

          <br></br>
          {/* Section 4: Journey */}
          <section
            id='perjalananKami'
            ref={perkenalanRef}
            className='to-tertiary/90 bg-gradient-to-b from-tertiary py-24'
          >
            <div className='container mx-auto flex flex-col items-center px-6 lg:px-16'>
              {/* Enhanced Header */}
              <h1
                className='relative mb-16 text-center text-4xl font-bold
         text-gray-800 lg:text-5xl'
              >
                <span className='relative inline-block'>
                  {t('PerjalananKami')}
                  <div
                    className='bg-primary/60 absolute bottom-0 left-0 h-1 w-full
            -skew-x-12 transform'
                  ></div>
                </span>
              </h1>

              <div className='relative mt-10 flex w-full flex-col items-center justify-center lg:flex-row'>
                {/* Enhanced Timeline Line */}
                <div
                  className='from-primary/20 to-primary/20 absolute top-1/2 h-1 w-full
            -translate-y-1/2 transform bg-gradient-to-r via-primary'
                ></div>

                <div className='flex w-full flex-col items-center justify-center gap-8 lg:flex-row'>
                  {dataPerjalananKami?.map((item: any, index: number) => (
                    <div
                      key={index}
                      className='relative mb-16 flex w-full flex-col items-center lg:mb-0 lg:w-1/2'
                    >
                      {/* Enhanced Timeline Dot */}
                      <div
                        className={`absolute top-1/2 z-10 flex h-8 w-8
               -translate-y-1/2 transform items-center justify-center rounded-full
               shadow-lg
               ${
                 index % 2 === 0
                   ? 'shadow-primary/30 bg-primary text-white'
                   : 'shadow-primary/20 border-2 border-primary bg-white text-primary'
               }`}
                      >
                        <span className='text-xs font-bold'>{item.tahun}</span>
                      </div>

                      {/* Enhanced Content Container with Fixed Width */}
                      <div
                        className={`flex min-h-[300px] w-full max-w-[350px] flex-col items-center
               rounded-xl bg-white p-6 shadow-lg
               ${index % 2 === 0 ? 'lg:items-start lg:text-right' : 'lg:items-end lg:text-left'}`}
                        data-aos='fade-up'
                        data-aos-delay={index * 100}
                      >
                        {/* Enhanced Title */}
                        <h2
                          className='border-primary/20 mb-4 w-full border-b-2 pb-2
                 text-xl font-bold text-gray-800 lg:text-2xl'
                        >
                          {item.judul}
                        </h2>

                        {/* Enhanced Text Content with Wrapping */}
                        <p className='overflow-wrap break-word mb-8 w-full leading-relaxed text-gray-600'>
                          {item.text}
                        </p>

                        {/* Enhanced Additional Info */}
                        <div className='mt-auto w-full px-4'>
                          <p
                            className='overflow-wrap break-word rounded-lg border border-gray-100
                   bg-gray-50 p-3 text-sm italic text-gray-500'
                          >
                            {item.keterangan}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <br></br>

      <section className='bg-tertiary' id='direktur' ref={direkturRef}>
        <div className='container py-20'>
          <h1 className='text-center text-3xl font-bold'>{t('Direktur')}</h1>
          <div className='mt-16 flex justify-center'>
            <div className='flex max-w-sm transform flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105'>
              <div
                className='relative w-full'
                style={{ paddingTop: '133.33%' }}
              >
                <img
                  src={dataDirektur[0].image} // Assuming you have only one item
                  alt='Direktur'
                  className='absolute left-0 top-0 h-full w-full rounded-lg object-cover'
                />
              </div>
              <p className='mt-4 text-2xl font-bold'>{dataDirektur[0].nama}</p>
              <p className='text-xl text-gray-600'>{dataDirektur[0].jabatan}</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='bg-tertiary' id='tenagaAhli' ref={tenagaAhliRef}>
        <div className='container py-20'>
          <h1 className='text-center text-3xl font-bold'>{t('TenagaAhli')}</h1>
          <div className='mt-16 grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-4'>
            {dataTenagaAhli.map((item: any, i: any) => (
              <div className='flex flex-col gap-y-3' key={i}>
                <img src='/image/kangNasduk.png' alt='kangNasduk' />
                <p className='text-2xl font-bold'>{item.nama}</p>
                <p className='text-xl'>{item.jabatan}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* 
      <section
        id='penghargaanPublikasi'
        ref={penghargaanPublikasiRef}
        className='bg-[#121212]'
      >
        <div className='py-14 text-white'>
          <h1 className='text-center text-3xl font-bold'>{t('Penghargaan')}</h1>
          <div className='py-6'>
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlay
              autoPlaySpeed={3000}
              centerMode={true}
              className='container py-12'
              containerClass=''
              dotListClass='custom-carousel-dots'
              draggable
              focusOnSelect
              infinite
              itemClass=''
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 5,
                  partialVisibilityGutter: 40
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 4,
                  partialVisibilityGutter: 30
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 2,
                  partialVisibilityGutter: 30
                }
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots
              sliderClass=''
              slidesToSlide={2}
              swipeable
            >
              {dataPenghargaan.map((item: any, i: any) => (
                <div className='text-center' key={i}>
                  <img
                    src='/image/sabukCartenz.png'
                    alt={'sabuk' + i}
                    className='mx-auto mb-2 w-24'
                  />
                  <p className='font-bold'>{item.nama}</p>
                  <p className='text-[#828282]'>{item.tahun}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className='pb-14 text-white'>
          <h1 className='text-center text-3xl font-bold'>{t('Publikasi')}</h1>
          <div className='py-6'>
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlay
              autoPlaySpeed={3000}
              centerMode={true}
              className='container py-12'
              containerClass=''
              dotListClass='custom-carousel-dots'
              draggable
              focusOnSelect
              infinite
              itemClass=''
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 5,
                  partialVisibilityGutter: 40
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 4,
                  partialVisibilityGutter: 30
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 2,
                  partialVisibilityGutter: 30
                }
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots
              sliderClass=''
              slidesToSlide={2}
              swipeable
            >
              {dataPenghargaan.map((item: any, i: number) => (
                <div className='text-center' key={i}>
                  <img
                    src='/image/sabukCartenz.png'
                    alt={'sabuk' + i}
                    className='mx-auto mb-2 w-24'
                  />
                  <p className='font-bold'>{item.nama}</p>
                  <p className='text-[#828282]'>{item.tahun}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section> */}
    </div>
  )
}

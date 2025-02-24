'use client'

import Button from '../../components/Button'
import { Section1 } from '../components/section1'
import { useTranslations } from 'next-intl'
import { useProdukSmartgov } from '@/hooks/useProduk'
import { formattedTextEnter } from '@/lib/utils'

export default function Smartgov() {
  const t = useTranslations('')
  const { dataProdukSmartgov, isLoading, isError } = useProdukSmartgov()

  const handleWhatsAppClick = () => {
    const basePath = window.location.pathname.split('/')[1] // Extract base path (e.g., "en" or "id")
    const newPath = `/${basePath}/hubungi-kami` // Construct the new path
    window.open(newPath, '_blank') // Open the new path in a new tab
  }

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  if (isError) {
    return <div className="flex items-center justify-center h-screen">Error</div>
  }

  const textSmg = {
    image: t(dataProdukSmartgov[0].gambar2),
    logo: '/image/logos/smartgov-svg.svg',
    first: 'Smartgov',
    mid: t(dataProdukSmartgov[0].text1),
    end: t(dataProdukSmartgov[0].text2)
  }

  const urlLogo = [
    '/image/logoSmartgov/jakarta.png',
    '/image/logoSmartgov/bandung.png',
    '/image/logoSmartgov/kabBadung.png',
    '/image/logoSmartgov/kabTangerang.png',
    '/image/logoSmartgov/banjarmasin.png',
    '/image/logoSmartgov/malang.png',
    '/image/logoSmartgov/semarang.png',
    '/image/logoSmartgov/80+.png'
  ]

  return (
    <div className='container mx-auto px-4'>
      <Section1 textLogo={textSmg} />

      <div className='my-16 flex flex-col items-center gap-8 md:flex-row md:my-24'>
        <div className='h-[350px] w-full flex-shrink-0 rounded-lg bg-slate-500 md:h-[450px] md:w-[300px]'>
          <img
            src={formattedTextEnter(t(dataProdukSmartgov[0].gambar1))}
            alt='Product Image'
            className='h-full w-full rounded-lg object-cover'
          />
        </div>
        <div className='misikami w-full md:w-auto md:pl-8'>
          <p className='whitespace-pre-line text-lg md:text-xl md:leading-8'>
            {formattedTextEnter(t(dataProdukSmartgov[0].text3))}
          </p>
        </div>
      </div>

      <p className='mb-6 text-left text-2xl font-bold md:text-3xl md:mb-10'>
        {t('pemda')}
      </p>
      <div className='my-16 flex flex-wrap items-center justify-center gap-12 md:my-24'>
        {urlLogo.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Logo ${index}`}
            className='h-16 w-auto md:h-20'
          />
        ))}
      </div>

      <div className='my-16 flex justify-center md:my-24'>
        <Button
          className='rounded-xl bg-[#0199CB] px-6 py-3 text-lg font-semibold hover:bg-[#01b3ee]'
          onClick={handleWhatsAppClick}
        >
          {t('ujicoba')}
        </Button>
      </div>
    </div>
  )
}

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
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  const textSmg = {
    image: '/image/smartgovPict1.png',
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
    <div className='container mx-auto'>
      <Section1 textLogo={textSmg} />

      <div className='my-32 flex flex-col items-center gap-8 md:flex-row'>
        <div className='h-[560px] w-full flex-shrink-0 rounded-3xl bg-slate-500 md:h-[752px] md:w-[438px]'>
          <img
            src={formattedTextEnter(t(dataProdukSmartgov[0].gambar1))}
            alt='Product Image'
            className='h-full w-full rounded-3xl object-cover'
          />
        </div>
        <div className='misikami w-full md:w-auto'>
          <p className='whitespace-pre-line text-sm md:text-sm md:leading-5'>
            {formattedTextEnter(t(dataProdukSmartgov[0].text3))}
          </p>
        </div>
      </div>

      <p className='mb-6 text-left text-2xl font-bold md:text-2xl'>
        Pemerintah Daerah
      </p>
      <div className='my-32 flex flex-wrap items-center justify-center gap-12'>
        {urlLogo.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Logo ${index}`}
            className='h-20 w-auto'
          />
        ))}
      </div>

      <div className='my-32 flex justify-center'>
        <Button
          className='rounded-3xl bg-[#0199CB] px-5 py-3 hover:bg-[#01b3ee]'
          onClick={handleWhatsAppClick}
        >
          Ajukan Uji Coba
        </Button>
      </div>
    </div>
  )
}

'use client'

import { Section1 } from '../components/section1'
import Button from '../../components/Button'
import { useTranslations } from 'next-intl'

export default function Konsultan() {
  const t = useTranslations('')

  const textEfd = {
    image: '/image/consultanPict1.png',
    logo: '/image/logos/consultan-svg.svg',
    first: t('layananKonsultasi'),
    mid: t('cartenzProject'),
    end: t('projectConsultant')
  }

  const urlLogo = [
    '/image/logoConsultan/logo-nagara.svg',
    '/image/logoConsultan/logo-bkpm.svg',
    '/image/logoConsultan/logo-kementrian-dalam-negri.svg',
    '/image/logoConsultan/logo-bappenas.svg',
    '/image/logoConsultan/logo-kominfo.svg',
    '/image/logoConsultan/logo-adb.svg',
    '/image/logoConsultan/logo-twb.svg',
    '/image/logoConsultan/logo-oss.svg',
    '/image/logoConsultan/logo-prospera.svg',
    '/image/logoConsultan/logo-nle.svg',
    '/image/logoConsultan/logo-oecd.svg'
  ]

  const handleWhatsAppClick = () => {
    const basePath = window.location.pathname.split('/')[1] // Extract base path (e.g., "en" or "id")
    const newPath = `/${basePath}/hubungi-kami` // Construct the new path
    window.open(newPath, '_blank') // Open the new path in a new tab
  }

  return (
    <div className='container mx-auto'>
      <Section1 textLogo={textEfd} />

      <div className='mt-20'>
        <div className='misikami flex justify-center'>
          <p className='text-2xl leading-9'>
            {t('saatIniProjectConsultant')}
          </p>
        </div>
        <div className='my-20 flex flex-wrap items-center justify-center gap-20'>
          {urlLogo.map((url, index) => (
            <img src={url} alt={`Logo ${index}`} key={index} />
          ))}
        </div>
        <div className='flex justify-center my-20'>
          <Button
            className='rounded-3xl !bg-[#0199CB] !px-5 !py-3 hover:!bg-[#01b3ee]'
            onClick={handleWhatsAppClick}
          >
            {t('ujicoba')}
          </Button>
        </div>
      </div>
    </div>
  )
}

'use client'

import { Section1 } from '../components/section1'
import Button from '../../components/Button'
import { useProdukCitigov } from '@/hooks/useProduk'
import { useTranslations } from 'next-intl'
import { formattedTextEnter } from '@/lib/utils'

export default function Citigov() {
  const t = useTranslations('')
  const { dataProdukCitigov, isLoading, isError } = useProdukCitigov()

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

  if (!dataProdukCitigov || dataProdukCitigov.length === 0) {
    return <div className="flex items-center justify-center h-screen">No data available</div>
  }

  const textCitigov = {
    image: '/image/citigovPict1.png',
    logo: '/image/logos/citigov-svg.svg',
    first: t('layananPemerintah'),
    mid: t(dataProdukCitigov[0].text1),
    end: t(dataProdukCitigov[0].text2)
  }

  return (
    <div className='container mx-auto px-4'>
      <Section1 textLogo={textCitigov} />

      <div className='my-16 flex flex-col items-center gap-8 md:flex-row md:my-24'>
        <div className='h-[350px] w-full flex-shrink-0 rounded-lg bg-slate-500 md:h-[450px] md:w-[300px]'>
          <img
            src={formattedTextEnter(t(dataProdukCitigov[0].gambar1))}
            alt='Product Image'
            className='h-full w-full rounded-lg object-cover'
          />
        </div>
        <div className='misikami w-full md:w-auto md:pl-8'>
          <p className='whitespace-pre-line text-lg md:text-xl md:leading-8'>
            {formattedTextEnter(t(dataProdukCitigov[0].text3))}
          </p>
        </div>
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

'use client'
import FacebookIcon from '../../icons/facebook'
import InstagramIcon from '../../icons/instagram'
import TiktokIcon from '../../icons/tiktok'
import YoutubeIcon from '../../icons/youtube'
import Button from './Button'
import { FaWhatsapp } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

const LINKS = [
  {
    title: 'PRODUK',
    items: [
      { name: 'Smartgov', path: 'smartgov' },
      { name: 'EFD', path: 'efd' },
      { name: 'Citigov', path: 'citigov' },
      { name: 'Konsultan', path: 'konsultan' }
    ]
  }
]

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  const t = useTranslations('')

  const handleWhatsAppClick = () => {
    const basePath = window.location.pathname.split('/')[1]
    const newPath = `/${basePath}/hubungi-kami`
    window.open(newPath, '_blank')
  }

  const getLink = (path: string) => {
    const basePath = window.location.pathname.split('/')[1]
    return `/${basePath}/produk/${path}`
  }

  return (
    <footer className='w-full bg-gray-100 text-gray-800'>
      {/* Full-width background container */}
      <div className='relative w-full'>
        <div className='absolute inset-0 h-full w-full bg-gray-100' />

        {/* Content container */}
        <div className='relative mx-auto px-6 py-24 lg:px-20'>
          <div className='border-t border-gray-300 pt-8'>
            <div className='grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12'>
              {/* Logo Section */}
              <div className='flex flex-col items-start'>
                <img
                  src='/image/logo_cartenz_abu.png'
                  alt='Cartenz Logo'
                  className='mb-4 w-48 max-w-full'
                />
                <p
                  className='text-sm font-normal text-gray-600'
                  dangerouslySetInnerHTML={{ __html: t('CartenzLocation') }}
                />
              </div>

              {/* Social Media Section */}
              <div className='flex flex-col items-center md:items-start'>
                <p className='mb-4 text-sm font-bold text-gray-900'>
                  {t('IkutiKami')}
                </p>

                <div className='my-4 flex flex-wrap justify-center gap-4 md:justify-start'>
                  {[
                    {
                      icon: <FacebookIcon />,
                      href: 'https://www.facebook.com/cartenztechnologyinternational',
                      color: 'hover:text-blue-500'
                    },
                    {
                      icon: <InstagramIcon />,
                      href: 'https://www.instagram.com/cartenztechnology/',
                      color: 'hover:text-pink-500'
                    },
                    {
                      icon: <TiktokIcon />,
                      href: 'https://www.tiktok.com/@cartenztechnology',
                      color: 'hover:text-red-500'
                    },
                    {
                      icon: <YoutubeIcon />,
                      href: 'https://www.youtube.com/channel/UCHS5IQaoNke7ony6tzzed0A',
                      color: 'hover:text-red-600'
                    }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`flex size-8 items-center justify-center transition-colors ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <Button
                  size='large'
                  type='button'
                  className='mt-4 inline-flex items-center gap-3 bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600'
                  onClick={handleWhatsAppClick}
                >
                  <FaWhatsapp size={24} />
                  <span className='text-sm md:text-base'>{t('contactUs')}</span>
                </Button>
              </div>

              {/* Links Section */}
              <div className='flex flex-col items-start'>
                <div className='grid grid-cols-2 gap-8 md:flex md:gap-16 lg:gap-24'>
                  {LINKS.map(({ title, items }) => (
                    <ul key={title} className='space-y-3'>
                      <p className='mb-4 text-sm font-bold text-gray-900'>
                        {t(title)}
                      </p>

                      {items.map(({ name, path }) => (
                        <li key={name}>
                          <a
                            href={getLink(path)}
                            className='text-sm text-gray-600 transition-colors hover:text-gray-900 md:text-base'
                          >
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright Section */}
            <div className='mt-12 text-center text-sm text-gray-600'>
              © Copyright {CURRENT_YEAR} Cartenz Technology. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

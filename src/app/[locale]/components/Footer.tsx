'use client'
import FacebookIcon from '../../icons/facebook'
import GithubIcon from '../../icons/github'
import InstagramIcon from '../../icons/instagram'
import TiktokIcon from '../../icons/tiktok'
import TwitterIcon from '../../icons/twitter'
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
  // {
  //   title: 'INFORMASI',
  //   items: [
  //     { name: 'Tentang Kami', path: 'tentang-kami' },
  //     { name: 'Kebijakan Privasi', path: 'kebijakan-privasi' },
  //     { name: 'Artikel', path: 'artikel' },
  //     { name: 'FAQ', path: 'faq' },
  //     { name: 'Hubungi Kami', path: 'hubungi-kami' },
  //     { name: 'Karir', path: 'karir' },
  //   ],
  // },
]

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  const t = useTranslations('')

  const handleWhatsAppClick = () => {
    const basePath = window.location.pathname.split('/')[1] // Extract base path (e.g., "en" or "id")
    const newPath = `/${basePath}/hubungi-kami` // Construct the new path
    window.open(newPath, '_blank') // Open the new path in a new tab
  }

  const getLink = (path: string) => {
    const basePath = window.location.pathname.split('/')[1] // Extract base path (e.g., "en" or "id")
    return `/${basePath}/produk/${path}`
  }

  return (
    <footer className='bg-gray-100 px-8 pb-8 pt-24 text-gray-800'>
      <div className='container mx-auto flex flex-col border-t border-gray-300'>
        <div className='grid w-full grid-cols-1 gap-x-10 lg:mt-10 lg:grid-cols-3'>
          <div className='col mb-5'>
            <img
              src='/image/logo_cartenz_abu.png'
              alt='Cartenz Logo'
              className='mb-4'
            />
            <p
              className='mb-4 mt-8 text-sm font-normal'
              dangerouslySetInnerHTML={{ __html: t('CartenzLocation') }}
            />
          </div>

          <div className='col mx-auto mb-10'>
            <h6 className='mb-4 text-xl text-blue-gray-900'>{t('IkutiKami')}</h6>
            <div className='my-4 flex justify-between gap-4'>
              <a
                href='https://www.facebook.com/cartenztechnologyinternational'
                target='_blank'
                rel='noopener noreferrer'
                className='flex size-8 flex-grow items-center justify-center transition-colors hover:text-blue-500'
              >
                <FacebookIcon />
              </a>
              <a
                href='https://www.instagram.com/cartenztechnology/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex size-8 flex-grow items-center justify-center transition-colors hover:text-pink-500'
              >
                <InstagramIcon />
              </a>
              <a
                href='https://www.tiktok.com/@cartenztechnology'
                target='_blank'
                rel='noopener noreferrer'
                className='flex size-8 flex-grow items-center justify-center transition-colors hover:text-red-500'
              >
                <TiktokIcon />
              </a>
              <a
                href='https://www.youtube.com/channel/UCHS5IQaoNke7ony6tzzed0A'
                target='_blank'
                rel='noopener noreferrer'
                className='flex size-8 flex-grow items-center justify-center transition-colors hover:text-red-600'
              >
                <YoutubeIcon />
              </a>
            </div>
            <div>
              <Button
                size='large'
                type='button'
                className='inline-flex w-fit min-w-[95px] items-center justify-between gap-3 bg-blue-500 text-white transition-colors hover:bg-blue-600'
                id='contact-us'
                onClick={handleWhatsAppClick}
              >
                <FaWhatsapp size={30} />
                <span className='ml-2'>{t('contactUs')}</span>
              </Button>
            </div>
          </div>

          <div className='col mb-10 flex gap-5 lg:gap-36'>
            {LINKS.map(({ title, items }) => (
              <ul key={title} className='flex flex-col gap-y-4'>
                <h6 className='mb-4 text-xl text-blue-gray-900'>{t(title)}</h6>
                {items.map(({ name, path }) => (
                  <li key={name}>
                    <a
                      href={getLink(path)}
                      className='py-1 font-normal transition-colors hover:text-gray-900'
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className='mt-16 text-center font-normal text-gray-600'>
          © Copyright {CURRENT_YEAR} Cartenz Technology. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

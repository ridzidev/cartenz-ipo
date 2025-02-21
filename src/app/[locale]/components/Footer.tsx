'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
import Button from './Button'
import FacebookIcon from '../../icons/facebook'
import InstagramIcon from '../../icons/instagram'
import TiktokIcon from '../../icons/tiktok'
import YoutubeIcon from '../../icons/youtube'

// Define the types for the props
interface SocialLink {
  href: string
  icon: React.ReactNode
  ariaLabel: string
  colorClass: string
}

interface ProductLinkItem {
  name: string
  path: string
  imgSrc: string
}

interface ProductLink {
  title: string
  items: ProductLinkItem[]
}

interface FooterProps {
  socialLinks?: SocialLink[]
  productLinks?: ProductLink[]
  companyLogoSrc?: string
  companyLocationText?: string
}

const CURRENT_YEAR = new Date().getFullYear()

export function Footer({
  socialLinks = [
    {
      href: 'https://www.facebook.com/cartenztechnologyinternational',
      icon: <FacebookIcon />,
      ariaLabel: 'Facebook',
      colorClass: 'hover:text-blue-500 dark:hover:text-blue-400'
    },
    {
      href: 'https://www.instagram.com/cartenztechnology/',
      icon: <InstagramIcon />,
      ariaLabel: 'Instagram',
      colorClass: 'hover:text-pink-500 dark:hover:text-pink-400'
    },
    {
      href: 'https://www.tiktok.com/@cartenztechnology',
      icon: <TiktokIcon />,
      ariaLabel: 'TikTok',
      colorClass: 'hover:text-red-500 dark:hover:text-red-400'
    },
    {
      href: 'https://www.youtube.com/channel/UCHS5IQaoNke7ony6tzzed0A',
      icon: <YoutubeIcon />,
      ariaLabel: 'YouTube',
      colorClass: 'hover:text-red-600 dark:hover:text-red-500'
    }
  ],
  productLinks = [
    {
      title: 'PRODUK',
      items: [
        { name: 'Smartgov', path: 'smartgov', imgSrc: '/image/smartgov.png' },
        { name: 'EFD', path: 'efd', imgSrc: '/image/efd.png' },
        { name: 'Citigov', path: 'citigov', imgSrc: '/image/citigov.png' },
        { name: 'Konsultan', path: 'konsultan', imgSrc: '/image/konsultan.png' }
      ]
    }
  ],
  companyLogoSrc = '/image/logo_cartenz_abu.png',
  companyLocationText
}: FooterProps) {
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
    <footer className='w-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'>
      <div className='relative w-full'>
        <div className='relative mx-auto px-6 py-24 lg:px-20'>
          <div className='border-t border-gray-300 dark:border-gray-700 pt-8'>
            <div className='grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12'>
              {/* Logo Section */}
              <div className='flex justify-center md:justify-start'>
                <div className='flex flex-col items-start'>
                  <Image
                    src={companyLogoSrc}
                    alt='Cartenz Logo'
                    width={200}
                    height={50}
                    className='mb-4 max-w-full object-contain'
                  />
                  <p
                    className='text-sm font-normal text-gray-600 dark:text-gray-400'
                    dangerouslySetInnerHTML={{ __html: companyLocationText || t('CartenzLocation') }}
                  />
                </div>
              </div>

              {/* Social Media Section */}
              <div className='flex justify-center'>
                <div className='flex flex-col items-center'>
                  <p className='mb-4 text-sm font-bold text-gray-900 dark:text-gray-100 text-center'>
                    {t('IkutiKami')}
                  </p>

                  <div className='my-4 flex flex-wrap justify-center gap-4'>
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`flex size-8 items-center justify-center transition-colors ${social.colorClass}`}
                        aria-label={social.ariaLabel}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  <Button
                    size='large'
                    type='button'
                    className='mt-4 inline-flex items-center gap-3 bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800'
                    onClick={handleWhatsAppClick}
                  >
                    <FaWhatsapp size={24} />
                    <span className='text-sm md:text-base'>{t('contactUs')}</span>
                  </Button>
                </div>
              </div>

              {/* Links Section */}
              <div className='flex justify-center md:justify-end'>
                <nav className='flex flex-col items-start' aria-label='Footer Navigation'>
                  <div className='grid grid-cols-2 gap-8 md:flex md:gap-16 lg:gap-24'>
                    {productLinks.map(({ title, items }) => (
                      <ul key={title} className='space-y-3'>
                        <p className='mb-4 text-sm font-bold text-gray-900 dark:text-gray-100'>
                          {t(title)}
                        </p>

                        {items.map(({ name, path, imgSrc }) => {
                          const linkHref = getLink(path)

                          return (
                            <li key={name} className='flex items-center gap-2'>
                              <Image
                                src={imgSrc}
                                alt={`${name} icon`}
                                width={32}
                                height={32}
                                className='object-contain'
                              />
                              <Link
                                href={linkHref}
                                className='text-sm text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-gray-200 md:text-base'
                              >
                                {name}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    ))}
                  </div>
                </nav>
              </div>
            </div>

            {/* Copyright Section */}
            <div className='mt-12 text-center text-sm text-gray-600 dark:text-gray-400'>
              © Copyright {CURRENT_YEAR} Cartenz Technology. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

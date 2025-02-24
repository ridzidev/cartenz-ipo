'use client'

import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC, useState, useEffect, useRef } from 'react'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

interface Props {
  locale: string
}

interface NavItemProps {
  children: React.ReactNode
  href:
    | '/'
    | '/hubungi-kami'
    | '/informasi'
    | '/produk'
    | '/tentang-kami'
    | '/karir'
    | '/hubungan-investor'
  isActive: boolean
  isScrolling: boolean
  locale?: string
  onClick?: () => void
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text
  }
  return text.slice(0, maxLength - 3) + '...'
}

function NavItem({
  children,
  href,
  isActive,
  isScrolling,
  locale,
  onClick
}: NavItemProps) {
  const pathname = usePathname()
  const isHomePage = pathname === '/' + locale
  const [maxLength, setMaxLength] = useState<number>(
    typeof children === 'string' ? children.length : 0
  )
  const spanRef = useRef<HTMLSpanElement>(null)

  const computeMaxChars = () => {
    if (!spanRef.current || typeof children !== 'string') return

    if (window.innerWidth >= 1280) {
      setMaxLength(children.length)
      return
    }

    const element = spanRef.current
    const availableWidth = element.offsetWidth
    const computedStyle = window.getComputedStyle(element)
    const font = computedStyle.font || `${computedStyle.fontSize} ${computedStyle.fontFamily}`

    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    if (!context) return

    context.font = font
    const fullText = children

    if (context.measureText(fullText).width <= availableWidth) {
      setMaxLength(fullText.length)
      return
    }

    let low = 0
    let high = fullText.length
    let best = 0
    while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      const candidate = fullText.slice(0, mid) + '...'
      const candidateWidth = context.measureText(candidate).width

      if (candidateWidth <= availableWidth) {
        best = mid
        low = mid + 1
      } else {
        high = mid - 1
      }
    }
    setMaxLength(best)
  }

  useEffect(() => {
    computeMaxChars()
    window.addEventListener('resize', computeMaxChars)
    return () => window.removeEventListener('resize', computeMaxChars)
  }, [children])

  const borderColor = isHomePage
    ? isScrolling
      ? 'border-yellow-500'
      : 'border-[#0199cb]'
    : 'border-yellow-500'

  const hoverBorderColor = isHomePage
    ? isScrolling
      ? 'hover:border-yellow-500'
      : 'hover:border-[#0199cb]'
    : 'hover:border-yellow-500'

  const truncatedText = truncateText(children?.toString() || '', maxLength)

  return (
    <li>
      <Link
        href={href as any}
        onClick={onClick}
        className={`cursor-pointer hover:rounded-sm hover:py-2 ${hoverBorderColor} font-medium hover:border-b-4 ${
          isActive ? `rounded-sm border-b-4 py-2 ${borderColor}` : ''
        }`}
      >
        <span
          ref={spanRef}
          className="block w-full truncate overflow-hidden text-ellipsis"
        >
          {truncatedText}
        </span>
      </Link>
    </li>
  )
}

export const Header: FC<Props> = ({ locale }) => {
  const [open, setOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('')

  const isHomePage = pathname === '/' + locale

  const handleOpen = () => setOpen(cur => !cur)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Added useEffect to reset 'open' state on pathname change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActivePage = (path: string) =>
    pathname.startsWith(`/${locale}${path}`)

  return (
    <>
      {/* Header */}
      {!open && (
        <div
          className={`fixed top-0 z-50 mx-auto w-full border-0 md:h-[100px] ${isHomePage && isScrolling ? 'bg-secondary' : isHomePage ? 'bg-black bg-opacity-25' : 'bg-secondary'} transition-transform duration-300`}
        >
          <div className='container mx-auto max-w-none px-6 lg:px-20 h-full items-center gap-6 py-5 text-white md:flex md:justify-between'>
            <div className='flex w-full items-center justify-between md:w-auto'>
              <Link
                lang={locale}
                href='/'
                className='flex flex-1 items-center px-2 py-3 text-white'
              >
                {isHomePage && isScrolling ? (
                  <img
                    src='/image/logo_cartenz_white.png'
                    style={{ width: '150px', height: 'auto' }}
                    alt='logoCartenz'
                  />
                ) : isHomePage ? (
                  <img
                    src='/image/logo_cartenz.png'
                    style={{ width: '150px', height: 'auto' }}
                    alt='logoCartenz'
                  />
                ) : (
                  <img
                    src='/image/logo_cartenz_white.png'
                    style={{ width: '150px', height: 'auto' }}
                    alt='logoCartenz'
                  />
                )}
              </Link>
              {/* Mobile Menu Button */}
              <div className='flex items-center md:hidden'>
                <button
                  className='mobile-menu-button'
                  onClick={handleOpen}
                  aria-label='Toggle Menu'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                  >
                    <title>bars-3-bottom-left</title>
                    <g fill='none'>
                      <path
                        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>

            <div className='w-full md:w-auto'>
              <ul
                className={`flex flex-col items-center justify-start gap-6 transition-all duration-100 ease-in-out md:flex-row md:gap-6 md:space-x-1 md:pb-0 ${
                  open
                    ? 'max-h-[500px] scale-100 opacity-100 bg-secondary'
                    : 'max-h-0 scale-95 opacity-0'
                } md:max-h-full md:scale-100 md:opacity-100`}
              >
                <NavItem
                  href='/'
                  isActive={pathname === `/${locale}`}
                  isScrolling={isScrolling}
                  locale={locale}
                  onClick={handleOpen}
                >
                  {t('hBeranda')}
                </NavItem>
                <NavItem
                  href='/tentang-kami'
                  isActive={pathname === `/${locale}/tentang-kami`}
                  isScrolling={isScrolling}
                  locale={locale}
                  onClick={handleOpen}
                >
                  {t('hTentangKami')}
                </NavItem>
                <NavItem
                  href='/produk'
                  isActive={isActivePage('/produk')}
                  isScrolling={isScrolling}
                  locale={locale}
                  onClick={handleOpen}
                >
                  {t('hProduk')}
                </NavItem>
                <NavItem
                  href='/hubungan-investor'
                  isActive={pathname === `/${locale}/hubungan-investor`}
                  isScrolling={isScrolling}
                  locale={locale}
                  onClick={handleOpen}
                >
                  {t('hHubunganInvestor')}
                </NavItem>
                <NavItem
                  href='/informasi'
                  isActive={pathname === `/${locale}/informasi`}
                  isScrolling={isScrolling}
                  locale={locale}
                  onClick={handleOpen}
                >
                  {t('hInformasi')}
                </NavItem>
                <NavItem
                  href='/karir'
                  isActive={pathname === `/${locale}/karir`}
                  isScrolling={isScrolling}
                  locale={locale}
                  onClick={handleOpen}
                >
                  {t('hKarir')}
                </NavItem>
                <NavItem
                  href='/hubungi-kami'
                  isActive={pathname === `/${locale}/hubungi-kami`}
                  isScrolling={isScrolling}
                  locale={locale}
                  onClick={handleOpen}
                >
                  {t('hHubungi Kami')}
                </NavItem>

                <div className='flex items-center'>
                  <LangSwitcher />
                  <ThemeSwitch />
                </div>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-secondary transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className='flex h-full flex-col'>
          <div className='flex items-center justify-between p-4'>
            <Link
              lang={locale}
              href='/'
              className='flex items-center px-2 py-3 text-white'
            >
              <img
                src='/image/logo_cartenz_white.png'
                style={{ width: '150px', height: 'auto' }}
                alt='logoCartenz'
              />
            </Link>
            <button onClick={handleOpen} className='text-white' aria-label='Close Menu'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <title>close</title>
                <g fill='none'>
                  <path
                    d='M6.75 6.75L17.25 17.25M6.75 17.25L17.25 6.75'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                </g>
              </svg>
            </button>
          </div>
          <ul className='flex flex-col gap-6 p-4'>
            <NavItem
              href='/'
              isActive={pathname === `/${locale}`}
              isScrolling={isScrolling}
              locale={locale}
              onClick={handleOpen}
            >
              {t('hBeranda')}
            </NavItem>
            <NavItem
              href='/tentang-kami'
              isActive={pathname === `/${locale}/tentang-kami`}
              isScrolling={isScrolling}
              locale={locale}
              onClick={handleOpen}
            >
              {t('hTentangKami')}
            </NavItem>
            <NavItem
              href='/produk'
              isActive={isActivePage('/produk')}
              isScrolling={isScrolling}
              locale={locale}
              onClick={handleOpen}
            >
              {t('hProduk')}
            </NavItem>
            <NavItem
              href='/hubungan-investor'
              isActive={pathname === `/${locale}/hubungan-investor`}
              isScrolling={isScrolling}
              locale={locale}
              onClick={handleOpen}
            >
              {t('hHubunganInvestor')}
            </NavItem>
            <NavItem
              href='/informasi'
              isActive={pathname === `/${locale}/informasi`}
              isScrolling={isScrolling}
              locale={locale}
              onClick={handleOpen}
            >
              {t('hInformasi')}
            </NavItem>
            <NavItem
              href='/karir'
              isActive={pathname === `/${locale}/karir`}
              isScrolling={isScrolling}
              locale={locale}
              onClick={handleOpen}
            >
              {t('hKarir')}
            </NavItem>
            <NavItem
              href='/hubungi-kami'
              isActive={pathname === `/${locale}/hubungi-kami`}
              isScrolling={isScrolling}
              locale={locale}
              onClick={handleOpen}
            >
              {t('hHubungi Kami')}
            </NavItem>
            <div className='flex items-center'>
              <LangSwitcher />
              <ThemeSwitch />
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}
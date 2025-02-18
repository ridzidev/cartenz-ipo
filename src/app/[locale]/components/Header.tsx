'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
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
  return (
    <li>
      <Link
        href={href as any}
        onClick={onClick}
        className={`cursor-pointer hover:rounded-sm hover:py-2 ${hoverBorderColor} font-medium hover:border-b-4 ${
          isActive ? `rounded-sm border-b-4 py-2 ${borderColor}` : ''
        }`}
      >
        {children}
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

  // console.log(pathname, 'pathname')

  const handleOpen = () => setOpen(cur => !cur)
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpen(false)
    )
  }, [])

  const isActivePage = (path: string) =>
    pathname.startsWith(`/${locale}${path}`)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div
      className={`fixed top-0 z-50 mx-auto w-full border-0 md:h-[100px] ${isHomePage && isScrolling ? 'bg-secondary' : isHomePage ? 'bg-black bg-opacity-25' : 'bg-secondary'}`}
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
            <button className='mobile-menu-button' onClick={handleOpen}>
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

        <div className=''>
          <ul
            className={`flex flex-col items-center justify-start gap-6 transition-all duration-100 ease-in-out md:flex-row md:gap-6 md:space-x-1 md:pb-0 ${
              open
                ? 'max-h-[500px] scale-100 opacity-100'
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
        {/* <div className='hidden items-center gap-3 md:flex'> */}
        {/* <nav className='mr-10 inline-flex gap-5'>
          <Link lang={locale} href={`/about`}>
            {t('About')}
          </Link>
          <a href=''>{t('Support')}</a>
          <a href=''>{t('Other')}</a>
        </nav> */}
        {/* <ThemeSwitch />
          <LangSwitcher />
        </div> */}
      </div>
    </div>
  )
}

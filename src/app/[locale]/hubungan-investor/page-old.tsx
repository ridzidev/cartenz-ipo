'use client'

import { useTranslations } from 'next-intl'
import { title } from 'process'
import * as React from 'react'
import { FiFileText, FiDownload } from 'react-icons/fi'

interface Item {
  id: number
  label: string
}

export default function HubunganInvestor() {
  const t = useTranslations('')
  const dataTabs = [
    {
      titleTab: 'Informasi Saham',
      id: 1
    },
    {
      titleTab: 'Laporan tahunan',
      id: 2
    },
    {
      titleTab: 'RUPS',
      id: 3
    },
    {
      titleTab: 'Berita Investor',
      id: 4
    }
  ]

  const laporanTahunan = [
    'Laporan Tahunan 2024',
    'Laporan Tahunan 2023',
    'Laporan Tahunan 2022',
    'Laporan Tahunan 2021',
    'Laporan Tahunan 2020',
    'Laporan Tahunan 2019',
    'Laporan Tahunan 2018'
  ]
  const RSUP = [
    'Pengumuman RUPS Luar Biasa',
    'Panggilan RUPS - Agustus 2024',
    'Pengumuman Ringkasan Risalah Rapat Umum Pemegang Saham Luar Biasa - Agustus 2024',
    'Pengumuman RUPS Luar Biasa',
    'Pengumuman RUPS Luar Biasa',
    'Panggilan RUPS - Januari 2024'
  ]

  const berita = [
    {
      date: '3 September 2024',
      title:
        'Keterbukaan Informasi Sehubungan dengan Aksi Korporasi Penggabungan Perusahaan Anak',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint doloribus cumque natus possimus omnis ratione dolorum, voluptate facere inventore incidunt ducimus perspiciatis iure sit? Itaque explicabo repellat temporibus veniam!'
    },
    {
      date: '2 September 2024',
      title:
        'Keterbukaan Informasi Sehubungan dengan Aksi Korporasi Penggabungan Perusahaan Anak',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint doloribus cumque natus possimus omnis ratione dolorum, voluptate facere inventore incidunt ducimus perspiciatis iure sit? Itaque explicabo repellat temporibus veniam!'
    },
    {
      date: '1 September 2024',
      title:
        'Keterbukaan Informasi Sehubungan dengan Aksi Korporasi Penggabungan Perusahaan Anak',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint doloribus cumque natus possimus omnis ratione dolorum, voluptate facere inventore incidunt ducimus perspiciatis iure sit? Itaque explicabo repellat temporibus veniam!'
    },
    {
      date: '3 Juli 2024',
      title:
        'Keterbukaan Informasi Sehubungan dengan Aksi Korporasi Penggabungan Perusahaan Anak',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint doloribus cumque natus possimus omnis ratione dolorum, voluptate facere inventore incidunt ducimus perspiciatis iure sit? Itaque explicabo repellat temporibus veniam!'
    }
  ]

  const [activeTab, setActiveTab] = React.useState(dataTabs[0].titleTab)
  return (
    <div>
      <div className='h-[100px] w-full'></div>
      <section className="relative h-[282px] w-full bg-[url('/image/karirHeader.png')] bg-cover bg-no-repeat">
        <div className='absolute inset-0 h-full w-full bg-black/70' />
        <div className='container relative z-10 mx-auto my-auto flex h-full flex-col justify-center gap-10  text-white'>
          <h1 className='text-5xl font-bold md:text-[64px]'>
            Hubungan Investor
          </h1>
        </div>
      </section>

      <section className='container mx-auto mt-20'>
        <div className='md:flex'>
          <ul className='flex-column text-sm font-medium text-gray-500 md:me-16 md:w-[223px]'>
            {dataTabs.map((item, index) => (
              <li key={index}>
                <a
                  href='#'
                  onClick={e => {
                    e.preventDefault()
                    setActiveTab(item.titleTab)
                  }}
                  className={`inline-flex w-full items-center px-4 py-4 ${
                    activeTab === item.titleTab
                      ? 'border-b-2 border-l-8 border-b-gray-300 border-l-[#0199CB] font-bold hover:bg-gray-100'
                      : 'border-b-2 border-b-gray-300 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.titleTab}
                </a>
              </li>
            ))}
          </ul>
          <div className='text-medium w-full border-t border-t-gray-300'>
            {activeTab === 'Informasi Saham' && (
              <div className='h-[800px] w-full rounded-md bg-slate-500 p-2'>
                gambar
              </div>
            )}
            {activeTab === 'Laporan tahunan' && (
              <div className='flex flex-col gap-10 px-6 py-10'>
                {laporanTahunan.map((item, index) => (
                  <div
                    key={index}
                    className='flex cursor-pointer items-center justify-between rounded-xl p-2 hover:bg-gray-300'
                  >
                    <div className='flex items-center gap-4'>
                      <FiFileText className='text-2xl text-[#0199CB]' />
                      <p className='font-bold'>{item}</p>
                    </div>
                    <FiDownload className='text-2xl text-[#0199CB]' />
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'RUPS' && (
              <div className='flex flex-col gap-10 px-6 py-10'>
                {RSUP.map((item, index) => (
                  <div
                    key={index}
                    className='flex cursor-pointer items-center justify-between rounded-xl p-2 hover:bg-gray-300'
                  >
                    <div className='flex items-center gap-4'>
                      <FiFileText className='text-2xl text-[#0199CB]' />
                      <p className='font-bold'>{item}</p>
                    </div>
                    <FiDownload className='text-2xl text-[#0199CB]' />
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'Berita Investor' && (
              <div className='flex flex-col gap-4 py-4'>
                {berita.map((item, index) => (
                  <div
                    key={index}
                    className=' rounded-xl p-6 hover:bg-gray-300'
                  >
                    <p className='text-xs'>{item.date}</p>
                    <h1 className='text-sm font-bold'>{item.title}</h1>
                    <p className='text-sm'>{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

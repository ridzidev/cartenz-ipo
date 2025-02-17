'use client'

import { useTranslations } from 'next-intl'
import { IoIosSearch } from 'react-icons/io'

interface Item {
  id: number
  label: string
}

const items: Item[] = [
  { id: 1, label: 'Apple' },
  { id: 2, label: 'Banana' },
  { id: 3, label: 'Cherry' },
  { id: 4, label: 'Durian' },
  { id: 5, label: 'Elderberry' }
]
export default function Karir() {
  const t = useTranslations('')
  const listKarir = [
    {
      nameJob: 'Technical Operation (Yogyakarta Area)',
      divisi: 'EFD',
      location: 'D.I. Yogyakarta'
    },
    {
      nameJob: 'Technical Operation (Yogyakarta Area)',
      divisi: 'EFD',
      location: 'D.I. Yogyakarta'
    },
    {
      nameJob: 'Technical Operation (Yogyakarta Area)',
      divisi: 'EFD',
      location: 'D.I. Yogyakarta'
    },
    {
      nameJob: 'Technical Operation (Yogyakarta Area)',
      divisi: 'EFD',
      location: 'D.I. Yogyakarta'
    }
  ]

  return (
    <div>
      <div className='h-[100px] w-full'></div>
      <section className="relative h-[282px] w-full bg-[url('/image/karirHeader.png')] bg-cover bg-no-repeat">
        <div className='absolute inset-0 h-full w-full bg-black/70' />
        <div className='container relative z-10 mx-auto my-auto flex h-full flex-col justify-center gap-10  text-white'>
          <h1 className='text-[64px] font-bold'>Karir</h1>
          <p className='text-xl'>
            Yuk bergabung bersama kami untuk Pemerintahan Indonesia lebih baik
          </p>
        </div>
      </section>

      <section className='container mx-auto'>
        <div className='mt-10 flex flex-wrap items-center gap-10'>
          <div className='flex-[1_1_60%]'>
            <div className='relative'>
              <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5'>
                <IoIosSearch />
              </div>
              <input
                type='text'
                id='input-group-1'
                className='block w-full rounded-full border border-gray-300 bg-background p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
                placeholder='Cari'
              />
            </div>
          </div>
          <div className='flex-[1_1_150px]'>
            <select className='block w-full rounded-full border border-gray-300 bg-background p-3 text-base focus:border-blue-500 focus:ring-blue-500 '>
              <option selected value='' disabled>
                Semua Divisi
              </option>
              <option value='1'>Pilih1</option>
              <option value='2'>Pilih2</option>
              <option value='3'>Pilih3</option>
            </select>
          </div>
          <div className='flex-[1_1_150px]'>
            <select className='block w-full rounded-full border border-gray-300 bg-background p-3 text-base focus:border-blue-500 focus:ring-blue-500 '>
              <option selected value='' disabled>
                Semua Divisi
              </option>
              <option value='1'>Pilih1</option>
              <option value='2'>Pilih2</option>
              <option value='3'>Pilih3</option>
            </select>
          </div>
        </div>
        <div className='my-12 flex justify-center'>
          <p>
            <span className='font-bold'>4 pekerjaan</span> tersedia di{' '}
            <span className='font-bold'>semua divisi</span> dan di{' '}
            <span className='font-bold'>semua lokasi</span>
          </p>
        </div>

        <div className=''>
          {listKarir.map((item, index) => (
            <div
              key={index}
              className='flex cursor-pointer justify-between gap-5 border-b-4 border-gray-500/10 bg-background p-[3.1rem] transition duration-300 hover:bg-gray-300 hover:shadow-lg'
            >
              <div className='font-bold'>
                <p className=''>{item.nameJob}</p>
                <p className='text-[#1286B1]'>{item.divisi}</p>
              </div>
              <div>
                <p>Divisi</p>
                <p className='font-bold'>{item.divisi}</p>
              </div>
              <div>
                <p>Lokasi</p>
                <p className='font-bold'>{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

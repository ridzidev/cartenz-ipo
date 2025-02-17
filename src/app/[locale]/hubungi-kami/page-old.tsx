'use client'

import { useTranslations } from 'next-intl'
import Button from '../components/Button'
import React, { useState } from 'react'

export default function HubungiKami() {
  const t = useTranslations('')
  const [selectedValue, setSelectedValue] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value)
  }
  return (
    <div>
      <div className='h-[100px] w-full'></div>
      <section className="relative h-[282px] w-full bg-[url('/image/imageContactUs.png')] bg-cover bg-no-repeat">
        <div className='absolute inset-0 h-full w-full bg-black/70' />
        <div className='container relative z-10 mx-auto my-auto flex h-full flex-col justify-center text-white'>
          <h1 className='text-4xl font-bold md:text-[64px]'>Hubungi Kami</h1>
        </div>
      </section>

      <section className='container mx-auto'>
        <p className='my-10 text-lg md:text-2xl'>
          Kami senang menggenal dan mendengar anda Yuk jangan ragu untuk
          menghubungi kami
        </p>
        <div className='w-full bg-[#F7F8FC80] p-10'>
          <div className='mb-6 flex flex-col items-center gap-x-10 gap-y-2 md:flex-row'>
            <label className='w-full text-xl font-medium md:w-1/2'>Tipe</label>
            <select
              value={selectedValue}
              onChange={handleChange}
              className='block w-full p-3 text-base focus:border-blue-500 focus:ring-blue-500 md:w-1/2 '
            >
              <option value='' disabled>
                Pilih Tipe Keperluan
              </option>
              <option value='1'>Pilih1</option>
              <option value='2'>Pilih2</option>
              <option value='3'>Pilih3</option>
            </select>
          </div>
          <div className='mb-6 flex flex-col items-center gap-x-10 gap-y-2 md:flex-row'>
            <label className='w-full text-xl font-medium md:w-1/2'>
              Produk
            </label>
            <select
              value={selectedValue}
              onChange={handleChange}
              className='block w-full p-3 text-base focus:border-blue-500 focus:ring-blue-500 md:w-1/2 '
            >
              <option value='' disabled>
                Pilih Tipe Keperluan
              </option>
              <option value='1'>Pilih1</option>
              <option value='2'>Pilih2</option>
              <option value='3'>Pilih3</option>
            </select>
          </div>
          <div className='mb-6 flex flex-col items-center gap-x-10 gap-y-2 md:flex-row'>
            <label className='w-full text-xl font-medium md:w-1/2'>Nama</label>
            <input
              className='block w-full p-3 text-base focus:border-blue-500 focus:ring-blue-500 md:w-1/2'
              placeholder='Masukkan Nama'
            ></input>
          </div>
          <div className='mb-6 flex flex-col items-center gap-x-10 gap-y-2 md:flex-row'>
            <label className='w-full text-xl font-medium md:w-1/2'>
              Apakah kamu merupakan pegawai di instansi pemerintah?
            </label>
            <div className='flex items-center gap-10'>
              <div className='flex items-center'>
                <input
                  id='default-radio-1'
                  type='radio'
                  value=''
                  name='default-radio'
                  className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                />
                <label
                  htmlFor='default-radio-1'
                  className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Ya
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  id='default-radio-2'
                  type='radio'
                  value=''
                  name='default-radio'
                  className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                />
                <label
                  htmlFor='default-radio-2'
                  className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Tidak
                </label>
              </div>
            </div>
          </div>
          <div className='mb-6 flex flex-col items-center gap-x-10 gap-y-2 md:flex-row'>
            <label className='w-full text-xl font-medium md:w-1/2'>
              Jika kamu merupakan pegawai instansi pemerintah, di instansi mana
              kamu bekerja?
            </label>
            <input
              className='block w-full p-3 text-base focus:border-blue-500 focus:ring-blue-500 md:w-1/2'
              placeholder='Nama Instansi Pemerintah tempat Anda bekerja'
            ></input>
          </div>
          <div className='mb-6 flex flex-col items-center gap-x-10 gap-y-2 md:flex-row'>
            <label className='w-full text-xl font-medium md:w-1/2'>
              Nomor Handphone yang dapat kami hubungi
            </label>
            <input
              className='block w-full p-3 text-base focus:border-blue-500 focus:ring-blue-500 md:w-1/2'
              placeholder='08xxx'
            ></input>
          </div>
          <div className='mb-6 flex flex-col items-center gap-x-10 gap-y-2 md:flex-row'>
            <label className='w-full text-xl font-medium md:w-1/2'>Email</label>
            <input
              className='block w-full p-3 text-base focus:border-blue-500 focus:ring-blue-500 md:w-1/2'
              placeholder='johndoe@domain.com'
            ></input>
          </div>
          <div className='mb-6 flex flex-col items-center gap-x-10 gap-y-2 md:flex-row'>
            <label className='w-full text-xl font-medium md:w-1/2'>
              Keperluan
            </label>
            <textarea
              rows={5}
              className='block w-full p-3 text-base focus:border-blue-500 focus:ring-blue-500 md:w-1/2'
              placeholder='Jabarkan keperluan anda'
            ></textarea>
          </div>

          <div className='mt-14 flex justify-center'>
            <Button
              className='rounded-full !bg-[#0199CB] !px-14 !py-3 hover:!bg-[#01b3ee]'
              size='large'
            >
              Kirim
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

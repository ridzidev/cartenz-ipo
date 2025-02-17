'use client'

import { useTranslations } from 'next-intl'
import Button from '../components/Button'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function HubungiKami() {
  const t = useTranslations('')
  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_81utf71', // Replace with your service ID
          'template_89b0wsb', // Replace with your template ID
          formRef.current,
          'K0aaFCCajpj4iwcx4' // Replace with your public key
        )
        .then(
          () => {
            alert('Pesan berhasil dikirim!')
            formRef.current?.reset()
          },
          error => {
            alert('Gagal mengirim pesan. Silakan coba lagi.')
          }
        )
    }
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
          <form ref={formRef} onSubmit={sendEmail}>
            <div className='mb-6 flex flex-col items-center gap-x-10 gap-y-2 md:flex-row'>
              <label className='w-full text-xl font-medium md:w-1/2'>
                Tipe
              </label>
              <select
                name='tipe'
                className='block w-full p-3 text-base focus:border-blue-500 focus:ring-blue-500 md:w-1/2'
                required
              >
                <option value='' disabled>
                  Pilih Tipe Keperluan
                </option>
                <option value='Pertanyaan Umum'>Pertanyaan Umum</option>
                <option value='Dukungan Pelanggan'>Dukungan Pelanggan</option>
                <option value='Hubungan Investor'> Hubungan Investor</option>
                <option value='Media dan Permintaan Pers'>
                  {' '}
                  Media dan Permintaan Pers
                </option>
                <option value='Kemitraan atau Pengembangan Bisnis'>
                  {' '}
                  Kemitraan atau Pengembangan Bisnis
                </option>
              </select>
            </div>

            <div className='mb-6 flex flex-col items-center gap-x-10 gap-y-2 md:flex-row'>
              <label className='w-full text-xl font-medium md:w-1/2'>
                Produk
              </label>
              <select
                name='produk'
                className='block w-full p-3 text-base focus:border-blue-500 focus:ring-blue-500 md:w-1/2'
                required
              >
                <option value='' disabled>
                  Pilih Produk
                </option>
                <option value='SmartGov'>SmartGov</option>
                <option value='CityGov'>CityGov</option>
                <option value='EFD'>EFD</option>
                <option value='Konsultan'>Konsultan</option>
                <option value='other'>other</option>
              </select>
            </div>

            <div className='mb-6 flex flex-col items-center gap-x-10 gap-y-2 md:flex-row'>
              <label className='w-full text-xl font-medium md:w-1/2'>
                Nama
              </label>
              <input
                name='nama'
                className='block w-full p-3 text-base focus:border-blue-500 focus:ring-blue-500 md:w-1/2'
                placeholder='Masukkan Nama'
                required
              />
            </div>

            <div className='mb-6 flex flex-col items-center gap-x-10 gap-y-2 md:flex-row'>
              <label className='w-full text-xl font-medium md:w-1/2'>
                Apakah kamu merupakan pegawai di instansi pemerintah?
              </label>
              <div className='flex items-center gap-10'>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    name='pegawai_pemerintah'
                    value='Ya'
                    className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500'
                  />
                  <label className='ms-2 text-sm font-medium text-gray-900'>
                    Ya
                  </label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    name='pegawai_pemerintah'
                    value='Tidak'
                    className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500'
                  />
                  <label className='ms-2 text-sm font-medium text-gray-900'>
                    Tidak
                  </label>
                </div>
              </div>
            </div>

            <div className='mb-6 flex flex-col items-center gap-x-10 gap-y-2 md:flex-row'>
              <label className='w-full text-xl font-medium md:w-1/2'>
                Jika kamu merupakan pegawai instansi pemerintah, di instansi
                mana kamu bekerja?
              </label>
              <input
                name='nama_instansi'
                className='block w-full p-3 text-base focus:border-blue-500 focus:ring-blue-500 md:w-1/2'
                placeholder='Nama Instansi Pemerintah tempat Anda bekerja'
              />
            </div>

            <div className='mb-6 flex flex-col items-center gap-x-10 gap-y-2 md:flex-row'>
              <label className='w-full text-xl font-medium md:w-1/2'>
                Nomor Handphone yang dapat kami hubungi
              </label>
              <input
                name='nomor_hp'
                type='tel'
                className='block w-full p-3 text-base focus:border-blue-500 focus:ring-blue-500 md:w-1/2'
                placeholder='08xxx'
                required
              />
            </div>

            <div className='mb-6 flex flex-col items-center gap-x-10 gap-y-2 md:flex-row'>
              <label className='w-full text-xl font-medium md:w-1/2'>
                Email
              </label>
              <input
                name='email'
                type='email'
                className='block w-full p-3 text-base focus:border-blue-500 focus:ring-blue-500 md:w-1/2'
                placeholder='johndoe@domain.com'
                required
              />
            </div>

            <div className='mb-6 flex flex-col items-center gap-x-10 gap-y-2 md:flex-row'>
              <label className='w-full text-xl font-medium md:w-1/2'>
                Keperluan
              </label>
              <textarea
                name='keperluan'
                rows={5}
                className='block w-full p-3 text-base focus:border-blue-500 focus:ring-blue-500 md:w-1/2'
                placeholder='Jabarkan keperluan anda'
                required
              />
            </div>

            <div className='mt-14 flex justify-center'>
              <Button
                type='submit'
                className='rounded-full !bg-[#0199CB] !px-14 !py-3 hover:!bg-[#01b3ee]'
                size='large'
              >
                Kirim
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

'use client'

import { useTranslations } from 'next-intl'
import Button from '../components/Button'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function HubungiKami() {
  const t = useTranslations('')
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [showModal, setShowModal] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

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
            setModalMessage('Thank You for Reaching Out! We will respond to your inquiry as soon as possible.')
            formRef.current?.reset()
          },
          error => {
            setModalMessage('Failed to send message. Please try again.')
          }
        )
        .finally(() => {
          setLoading(false)
          setShowModal(true)
        })
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="font-sans">
      <div className='h-[100px] w-full'></div>
      <section className="relative h-[282px] w-full bg-[url('/image/imageContactUs.png')] bg-cover bg-no-repeat">
        <div className='absolute inset-0 h-full w-full bg-black/50' />
        <div className='container relative z-10 mx-auto my-auto flex h-full flex-col justify-center text-white'>
          <h1 className='text-4xl font-bold md:text-[64px]'>Hubungi Kami</h1>
        </div>
      </section>

      <section className='container mx-auto p-6'>
        <p className='my-10 text-lg md:text-2xl text-gray-700'>
          We\'re excited to get to know you! Feel free to reach out to us.
        </p>
        <div className='w-full bg-gray-100 p-8 rounded-lg shadow-md'>
          <form ref={formRef} onSubmit={sendEmail}>
            <div className='mb-6'>
              <label className='block text-xl font-medium mb-2'>
                Type
              </label>
              <select
                name='tipe'
                className='block w-full p-3 text-base border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500'
                required
              >
                <option value='' disabled>
                  Select Type of Inquiry
                </option>
                <option value='General Question'>General Question</option>
                <option value='Customer Support'>Customer Support</option>
                <option value='Investor Relations'>Investor Relations</option>
                <option value='Media and Press Requests'>Media and Press Requests</option>
                <option value='Partnership or Business Development'>Partnership or Business Development</option>
              </select>
            </div>

            <div className='mb-6'>
              <label className='block text-xl font-medium mb-2'>
                Product
              </label>
              <select
                name='produk'
                className='block w-full p-3 text-base border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500'
                required
              >
                <option value='' disabled>
                  Select Product
                </option>
                <option value='SmartGov'>SmartGov</option>
                <option value='CityGov'>CityGov</option>
                <option value='EFD'>EFD</option>
                <option value='Consultant'>Consultant</option>
                <option value='Other'>Other</option>
              </select>
            </div>

            <div className='mb-6'>
              <label className='block text-xl font-medium mb-2'>
                Name
              </label>
              <input
                name='nama'
                className='block w-full p-3 text-base border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500'
                placeholder='Enter Name'
                required
              />
            </div>

            <div className='mb-6'>
              <label className='block text-xl font-medium mb-2'>
                Are you a government employee?
              </label>
              <div className='flex items-center gap-4'>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    name='pegawai_pemerintah'
                    value='Yes'
                    className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500'
                  />
                  <label className='ms-2 text-sm font-medium text-gray-900'>
                    Yes
                  </label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    name='pegawai_pemerintah'
                    value='No'
                    className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500'
                  />
                  <label className='ms-2 text-sm font-medium text-gray-900'>
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className='mb-6'>
              <label className='block text-xl font-medium mb-2'>
                If yes, which government institution do you work for?
              </label>
              <input
                name='nama_instansi'
                className='block w-full p-3 text-base border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500'
                placeholder='Name of Government Institution'
              />
            </div>

            <div className='mb-6'>
              <label className='block text-xl font-medium mb-2'>
                Phone Number
              </label>
              <input
                name='nomor_hp'
                type='tel'
                className='block w-full p-3 text-base border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500'
                placeholder='08xxx'
                required
              />
            </div>

            <div className='mb-6'>
              <label className='block text-xl font-medium mb-2'>
                Email
              </label>
              <input
                name='email'
                type='email'
                className='block w-full p-3 text-base border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500'
                placeholder='johndoe@domain.com'
                required
              />
            </div>

            <div className='mb-6'>
              <label className='block text-xl font-medium mb-2'>
                Inquiry
              </label>
              <textarea
                name='keperluan'
                rows={5}
                className='block w-full p-3 text-base border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500'
                placeholder='Describe your inquiry'
                required
              />
            </div>

            <div className='mt-14 flex justify-center'>
              <Button
                type='submit'
                className='rounded-full bg-blue-500 px-8 py-3 text-white hover:bg-blue-600 transition-colors'
                size='large'
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send'}
              </Button>
            </div>
          </form>
        </div>
      </section>

      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded-lg shadow-lg text-center'>
            <p className='text-lg text-gray-800'>{modalMessage}</p>
            <button
              onClick={closeModal}
              className='mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

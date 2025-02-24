'use client'

import { useTranslations } from 'next-intl'
import Button from '../components/Button'
import React, { useRef, useState } from 'react'

export default function HubungiKami() {
  const t = useTranslations('')
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [showModal, setShowModal] = useState(false)

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (formRef.current) {
        const emailjs = (await import('@emailjs/browser')).default
        await emailjs.sendForm(
          'service_81utf71',
          'template_89b0wsb',
          formRef.current,
          'K0aaFCCajpj4iwcx4'
        )
        setModalMessage(t('thankYouMessage'))
        formRef.current.reset()
      }
    } catch (error) {
      setModalMessage(t('errorMessage'))
    } finally {
      setLoading(false)
      setShowModal(true)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="font-sans bg-white dark:bg-gray-900">
      <div className='h-[100px] w-full'></div>
      <section className="relative h-[282px] w-full bg-[url('/image/imageContactUs.png')] bg-cover bg-no-repeat">
        <div className='absolute inset-0 h-full w-full bg-black/50' />
        <div className='container relative z-10 mx-auto my-auto flex h-full flex-col justify-center text-white'>
          <h1 className='text-4xl font-bold md:text-[64px]'>{t('contactUs')}</h1>
        </div>
      </section>

      <section className='container mx-auto p-6'>
        <p className='my-10 text-lg md:text-2xl text-gray-700 dark:text-gray-300'>
          {t('contactDescription')}
        </p>
        <div className='w-full bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md'>
          <form ref={formRef} onSubmit={sendEmail}>
            <div className='mb-6'>
              <label className='block text-xl font-medium mb-2 text-gray-900 dark:text-gray-100'>
                {t('inquiryType')}
              </label>
              <select
                name='tipe'
                className='block w-full p-3 text-base border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                required
              >
                <option value='' disabled>{t('selectInquiryType')}</option>
                <option value='General Question'>{t('generalQuestion')}</option>
                <option value='Customer Support'>{t('customerSupport')}</option>
                <option value='Investor Relations'>{t('investorRelations')}</option>
                <option value='Media and Press Requests'>{t('mediaRequests')}</option>
                <option value='Partnership or Business Development'>{t('partnership')}</option>
              </select>
            </div>

            <div className='mb-6'>
              <label className='block text-xl font-medium mb-2 text-gray-900 dark:text-gray-100'>
                {t('product')}
              </label>
              <select
                name='produk'
                className='block w-full p-3 text-base border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                required
              >
                <option value='' disabled>{t('selectProduct')}</option>
                <option value='SmartGov'>SmartGov</option>
                <option value='CityGov'>CityGov</option>
                <option value='EFD'>EFD</option>
                <option value='Consultant'>{t('consultant')}</option>
                <option value='Other'>{t('other')}</option>
              </select>
            </div>

            <div className='mb-6'>
              <label className='block text-xl font-medium mb-2 text-gray-900 dark:text-gray-100'>
                {t('name')}
              </label>
              <input
                name='nama'
                className='block w-full p-3 text-base border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                placeholder={t('enterName')}
                required
              />
            </div>

            <div className='mb-6'>
              <label className='block text-xl font-medium mb-2 text-gray-900 dark:text-gray-100'>
                {t('governmentEmployee')}
              </label>
              <div className='flex items-center gap-4'>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    name='pegawai_pemerintah'
                    value='Yes'
                    className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700'
                  />
                  <label className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-100'>
                    {t('yes')}
                  </label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    name='pegawai_pemerintah'
                    value='No'
                    className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700'
                  />
                  <label className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-100'>
                    {t('no')}
                  </label>
                </div>
              </div>
            </div>

            <div className='mb-6'>
              <label className='block text-xl font-medium mb-2 text-gray-900 dark:text-gray-100'>
                {t('ifyes')}
              </label>
              <input
                name='nama_instansi'
                className='block w-full p-3 text-base border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                placeholder={t('namegov')}
              />
            </div>

            <div className='mb-6'>
              <label className='block text-xl font-medium mb-2 text-gray-900 dark:text-gray-100'>
                {t('phoneNumber')}
              </label>
              <input
                name='nomor_hp'
                type='tel'
                className='block w-full p-3 text-base border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                placeholder='08xxx'
                required
              />
            </div>

            <div className='mb-6'>
              <label className='block text-xl font-medium mb-2 text-gray-900 dark:text-gray-100'>
                {t('email')}
              </label>
              <input
                name='email'
                type='email'
                className='block w-full p-3 text-base border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                placeholder='johndoe@domain.com'
                required
              />
            </div>

            <div className='mb-6'>
              <label className='block text-xl font-medium mb-2 text-gray-900 dark:text-gray-100'>
                {t('inquiry')}
              </label>
              <textarea
                name='keperluan'
                rows={5}
                className='block w-full p-3 text-base border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                placeholder='Describe your inquiry'
                required
              />
            </div>

            <div className='mt-14 flex justify-center'>
              <Button
                type='submit'
                className='rounded-full bg-blue-500 px-8 py-3 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors'
                size='large'
                disabled={loading}
              >
                {loading ? t('sending') : t('send')}
              </Button>
            </div>
          </form>
        </div>
      </section>

      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center'>
            <p className='text-lg text-gray-800 dark:text-gray-200'>{modalMessage}</p>
            <button
              onClick={closeModal}
              className='mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors'
            >
              {t('close')}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

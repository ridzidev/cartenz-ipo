'use client'

import { useTranslations } from 'next-intl'
import React from 'react'
import { FiClock } from 'react-icons/fi'

export default function Karir() {
  const t = useTranslations('')

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="h-[100px] w-full" /> {/* Spacer for navbar */}
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-xl dark:shadow-gray-900/30 p-8 md:p-12 transition-all duration-300">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('articleTitle').toUpperCase()}
            </h1>
            
            <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-4">
              <div className="flex items-center">
                <FiClock className="mr-2 text-gray-600 dark:text-gray-400" />
                <span className="text-sm">{t('articleDate')}</span>
              </div>
            </div>
          </header>

          <div className="prose dark:prose-invert max-w-full text-gray-700 dark:text-gray-300">
            {t('articleContent')}
          </div>
        </article>
      </main>
    </div>
  );
}
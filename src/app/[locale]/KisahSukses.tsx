'use client'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTranslations } from 'next-intl';

export function KisahSukses() {
  const t = useTranslations('');
  const kisahSuksesData = Array.from({ length: 3 }, (_, index) => ({
    pemda: t(`kisahSukses${index + 1}_pemda`),
    judul: t(`kisahSukses${index + 1}_judul`),
    isi: t(`kisahSukses${index + 1}_isi`),
    foto: t(`kisahSukses${index + 1}_foto`),
  }));

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 10, // Show partial next card
    },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="kisah-sukses rounded-t-[40px] bg-tertiary py-8">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-center text-[24px] font-bold leading-8 text-gray-800 lg:text-[36px] mb-10">
          {t('kisahSukses')}
        </h2>
      </div>
      <div className="px-6 lg:px-20">
        <Carousel
          autoPlay
          autoPlaySpeed={3000}
          infinite
          showDots
          responsive={responsive}
          partialVisible={false}  // Enable partial visibility
        >
          {kisahSuksesData.map(({ pemda, judul, isi, foto }, index) => (
            <div key={index} className="mx-auto mb-8 flex h-auto w-full max-w-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg border border-gray-200 mr-5">
              <div className="flex flex-col lg:flex-row p-4">
                <div className="flex items-center justify-center lg:w-1/4">
                  {/* Updated image styling */}
                  <img
                    src={foto}
                    alt={pemda}
                    className="h-full w-full object-cover rounded-l-3xl"
                  />
                </div>
                <div className="p-4 lg:p-6 lg:w-3/4 flex flex-col justify-between">
                  <p className="text-sm lg:text-base text-[#737679]">{pemda}</p>
                  <h3 className="text-base lg:text-lg font-bold">{judul}</h3>
                  <p className="text-xs lg:text-sm">{isi}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default KisahSukses;

import { Section1 } from '../components/section1'
import Button from '../../components/Button'

export default function Konsultan() {
  const textEfd = {
    image: '/image/consultanPict1.png',
    logo: '/image/logos/consultan-svg.svg',
    first: 'Layanan Konsultasi & Project',
    mid: 'Cartenz mulai secara aktif mengikuti kegiatan project sebagai salah satu layanan utama pada tahun 2022.',
    end: 'Project Consultant bertujuan untuk memberikan layanan konsultasi dan rekomendasi, khususnya di bidang teknologi informasi, kepada  seluruh tingkat instansi pemerintahan.'
  }

  const urlLogo = [
    '/image/logoConsultan/logo-nagara.svg',
    '/image/logoConsultan/logo-bkpm.svg',
    '/image/logoConsultan/logo-kementrian-dalam-negri.svg',
    '/image/logoConsultan/logo-bappenas.svg',
    '/image/logoConsultan/logo-kominfo.svg',
    '/image/logoConsultan/logo-adb.svg',
    '/image/logoConsultan/logo-twb.svg',
    '/image/logoConsultan/logo-oss.svg',
    '/image/logoConsultan/logo-prospera.svg',
    '/image/logoConsultan/logo-nle.svg',
    '/image/logoConsultan/logo-oecd.svg'
  ]
  return (
    <div className='container mx-auto'>
      <Section1 textLogo={textEfd} />

      <div className='mt-20'>
        <div className='misikami flex justify-center'>
          <p className='text-2xl leading-9'>
            <span></span>
            Saat ini Project Consultant Cartenz telah bekerja sama dengan:
          </p>
        </div>
        <div className='my-20 flex flex-wrap items-center justify-center gap-20'>
          {urlLogo.map((url, index) => (
            <img src={url} alt={url + index} key={index} />
          ))}
        </div>
        <div className='flex justify-center my-20'>
          <Button className='rounded-3xl !bg-[#0199CB] !px-5 !py-3 hover:!bg-[#01b3ee]'>
            Hubungi Kami
          </Button>
        </div>
      </div>
    </div>
  )
}

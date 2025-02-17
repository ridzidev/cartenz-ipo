interface Section1Props {
  textLogo: {
    image: string
    logo: string
    first: string
    mid: string
    end: string
  }
}

export const Section1: React.FC<Section1Props> = ({ textLogo }) => (
  <section className=''>
  <div className='flex flex-col items-center gap-6 md:flex-row'>
    {/* Kolom Kiri (66%) */}
    <div className='flex w-full flex-col gap-10 text-2xl md:w-2/3'>
      <img src={textLogo.logo} alt='logo' className='w-[320px] mt-10' />
      <p className='text-2xl font-bold leading-[32px]'>{textLogo.first}</p>
      <div className='misikami'>
        <p className='w-full text-sm md:text-sm'>{textLogo.mid}</p>
      </div>
      <p className='text-sm md:text-sm'>{textLogo.end}</p>
    </div>

    {/* Kolom Kanan (34%) */}
    <div className='h-full w-full md:w-1/3'>
      <img src={textLogo.image} alt='image1' className='rounded-tr-[64px]' />
    </div>
  </div>
</section>

)

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
  <section className="container mx-auto px-4">
    <div className="flex flex-col items-center gap-6 md:flex-row">
      {/* Kolom Kiri (66%) */}
      <div className="flex w-full flex-col gap-10 text-2xl md:w-2/3">
        <img src={textLogo.logo} alt="logo" className="w-[320px] mt-10" />
        <p className="text-2xl font-bold leading-[32px] md:text-3xl">{textLogo.first}</p>
        <div className="misikami">
          <p className="w-full text-sm md:text-lg">{textLogo.mid}</p>
        </div>
        <p className="text-sm md:text-lg">{textLogo.end}</p>
      </div>

      {/* Kolom Kanan (34%) */}
      <div className="h-full w-full md:w-1/3">
        <img
          src={textLogo.image}
          alt="image1"
          className="w-full h-auto rounded-tr-[64px] shadow-lg md:rounded-tr-[96px] transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  </section>
)
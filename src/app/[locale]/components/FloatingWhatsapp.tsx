import { FaWhatsapp } from 'react-icons/fa'
const FloatingWhatsapp = () => {
  return (
    <div className='fixed bottom-10 right-10 z-[1000] flex h-16 w-16 transform items-center justify-center rounded-full bg-green-500 p-2 text-4xl text-white shadow-md transition-transform hover:scale-110 hover:bg-green-600'>
      <a
        href='https://wa.me/6282127082062'
        target='_blank'
        rel='noopener noreferrer'
        className=''
      >
        <FaWhatsapp />
      </a>
    </div>
  )
}

export default FloatingWhatsapp

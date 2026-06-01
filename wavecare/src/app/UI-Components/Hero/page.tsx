import Image from 'next/image'

export default function Hero() {
  return (
    <section className='relative overflow-hidden bg-[var(--prim-light)] px-[8%] py-12 lg:px-[10%]'>

      <Image
        src="/hero-shape-2.png"
        alt=""
        aria-hidden
        width={240}
        height={240}
        className='hero-shape4'
      />

      <div className='mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between gap-10 lg:flex-row'>

        {/*Titulo Principal*/}
        <div className='w-full lg:w-1/2'>
          <div className='hero-content'>

            <h1 className='GolosText text-5xl font-semibold leading-[1.05] text-[var(--black)] md:text-6xl lg:text-[4.5rem]'>
              Drinks encantados
              <span className='mt-2 flex items-center gap-3'>
                <span className='text-[var(--second)]'>
                  sabores mágicos
                </span>
              </span>
              <span className='block'>
                em cada poção servida.
              </span>
            </h1>

            <p className='GolosText mt-5 text-lg text-[var(--black)] md:text-xl'>
              Viva uma experiência única no{' '}
              <span className='font-mono text-[var(--second)]'>
                Poções Mágicas
              </span>
            </p>

            {/*Buttons*/}
            <div className='mt-8 flex flex-wrap items-center gap-4'>
              <button className='GolosText rounded-md bg-[var(--second)] px-6 py-3 text-lg text-[var(--white)] transition-all duration-300 hover:opacity-90'>
                Comprar
              </button>

              <button className='GolosText rounded-md border border-[var(--black)] px-6 py-3 text-lg text-[var(--black)] transition-all duration-300 hover:bg-[var(--black)] hover:text-[var(--white)]'>
                Ver Detalhes
              </button>
            </div>

          </div>
        </div>

        {/*Imagem*/}
        <div className='w-full lg:w-1/2'>
          <div className='hero-image'>
            <div className='hero-shape1'></div>
            <div className='hero-shape2'></div>

            <Image
              src="/bebida do header.png"
              alt='Imagem Banner'
              width={1200}
              height={1200}
              className="relative z-10 w-[130%] max-w-none h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
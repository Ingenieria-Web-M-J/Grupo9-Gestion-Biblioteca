import React from 'react';

  const Feature = ({ iconPath, title, description }: { iconPath: string, title: string, description: string }) => (
    <div className='md:flex md:items-start md:-mx-4'>
      <span className='inline-block p-2 text-blue-500 bg-white rounded-xl md:mx-4 dark:text-black dark:bg-white'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d={iconPath}
          />
        </svg>
      </span>
      <div className='mt-4 md:mx-4 md:mt-0'>
        <h1 className='text-xl font-semibold text-black-700 capitalize dark:text-black'>
          {title}
        </h1>
        <p className='mt-3 text-black-500 dark:text-black-300'>
          {description}
        </p>
      </div>
    </div>
  );
  
  const Index = () => {
    const features = [
      {
        iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
        title: '¡Bienvenido a la Biblioteca Virtual!',
        description: 'Explora nuestro extenso catálogo de libros y recursos educativos. Desde clásicos de la literatura hasta las últimas novedades, tenemos algo para todos los gustos e intereses. ¡Comienza tu viaje de descubrimiento literario hoy mismo!'
      },
      {
        iconPath: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
        title: 'Descubre un Mundo de Conocimiento',
        description: 'Sumérgete en un océano de sabiduría con nuestra biblioteca virtual. Con miles de títulos disponibles, estamos aquí para alimentar tu curiosidad y nutrir tu mente. ¡Encuentra tu próxima aventura entre páginas!'
      },
      {
        iconPath: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657zM9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z',
        title: 'Tu Portal Personalizado de Lectura',
        description: 'Bienvenido a tu rincón personalizado de lectura. Aquí, puedes explorar tus géneros favoritos, descubrir nuevas obras y seguir el rastro de tus lecturas pasadas. Con herramientas de búsqueda avanzadas y recomendaciones personalizadas, encontrarás exactamente lo que necesitas para tu próximo viaje literario.'
      }
    ];
  
    return (
      <div>
        <section className='bg-white dark:bg-white'>
          <div className='container px-6 py-10 mx-auto'>
            <div className='lg:flex lg:items-center'>
              <div className='w-full space-y-12 lg:w-1/2 '>
                <div>
                  <h1 className='text-2xl font-semibold text-black-800 capitalize lg:text-3xl dark:text-black'>
                    Explora nuestro <br /> catálogo de libros
                  </h1>
                  <div className='mt-2'>
                    <span className='inline-block w-40 h-1 bg-blue-500 rounded-full'></span>
                    <span className='inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full'></span>
                    <span className='inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full'></span>
                  </div>
                </div>
                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    iconPath={feature.iconPath}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
              <div className='hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center'>
                <img
                  className='w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full'
                  src='/libro-og.webp'
                  alt='Feature illustration'
                />
              </div>
            </div>
            <hr className='my-12 border-black-200 dark:border-black-700' />
            <div className='grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
              {/* Add your brand logos here */}
              <div className='flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1'>
                {/* Example logo */}
                <svg
                  className='h-12 text-black-500 fill-current dark:text-black-300'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 266 100'
                >
                  {/* SVG path */}
                </svg>
              </div>
              {/* Repeat for more logos */}
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Index;

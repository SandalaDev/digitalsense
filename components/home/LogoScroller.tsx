'use client';

const logos = [
  { name: 'Jenny Internet', src: '/icons/companies/jenny.svg' },
  { name: 'Elsewedy Electric', src: '/icons/companies/elsewedy.svg' },
  { name: 'Exmile Solutions', src: '/icons/companies/exmile.svg' },
  { name: 'Mkango Resources', src: '/icons/companies/mkango.svg' },
  { name: 'Sarovar Hotels', src: '/icons/companies/sarovar.svg' },
  { name: 'SFQ', src: '/icons/companies/sfq.svg' },
  { name: 'Botswana Government', src: '/icons/companies/bw.svg' },
];

export function LogoScroller() {
  return (
    <section className="py-16 bg-white overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] relative z-10">
      <div className="container-custom mb-10">
        <h2 className="text-center text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          Trusted by teams who take{' '}
          <span className="text-gradient-energy font-bold">reliability</span>{' '}
          seriously
        </h2>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/*
          Marquee track — two identical sets of logos side-by-side.
          The parent has `w-max` so its width = 2 × one set.
          translateX(-50%) scrolls exactly one set, and the jump
          back to 0% is invisible because set 2 is the same as set 1.
        */}
        <div className="flex w-max animate-logo-scroll">
          {[0, 1].map((setIndex) => (
            <div
              key={setIndex}
              className="flex items-center shrink-0"
              aria-hidden={setIndex === 1 ? 'true' : undefined}
            >
              {logos.map((logo) => (
                <div
                  key={`${logo.name}-${setIndex}`}
                  className="flex-shrink-0 mx-8 md:mx-14 flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-10 md:h-12 w-auto object-contain select-none"
                    draggable={false}
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

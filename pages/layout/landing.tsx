export default function Landing() {
  const sections = [
    ['home', 'biuro rachunkowe podatnik'],
    ['about', 'o mnie'],
    ['office', 'biuro'],
    ['offer', 'oferta'],
    ['contact', 'kontakt'],
  ];
  
  return (
    <>
      <nav className="fixed z-20">
        <ul className="list-none bg-slate-900 text-white uppercase w-screen pl-2 pr-6 flex justify-between">
          {sections.map((section, idx) => (
            <li
              key={section[0]}
              className={idx === 0 ? 'mr-auto' : ''}
            >
              <a
                href={`#${section[0]}`}
                className={`inline-block mx-1 px-3 py-4 ${idx === 0 ? 'font-semibold' : 'hover:bg-main'}`}
              >{section[1]}</a>
            </li>
          ))}
        </ul>
      </nav>
      <section className="relative bg-cover bg-center bg-no-repeat bg-[url('../public/landing.webp')]" id="home">
        
        <div className="min-h-screen-mobile flex justify-center items-center bg-indigo-300/40">
          home page
        </div>
      
      </section>
    </>
  );
}
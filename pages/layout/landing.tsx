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
      <nav className="fixed">
        <ul className="list-none bg-slate-900 text-white uppercase w-screen pl-2 pr-6 flex justify-between">
          {sections.map((section, idx) => (
            <li
              key={section[0]}
              className={idx === 0 ? 'mr-auto' : ''}
            >
              <a
                href={`#${section[0]}`}
                className={`inline-block mx-1 px-3 py-4 ${idx === 0 ? 'font-semibold' : 'hover:bg-yellow-500'}`}
              >{section[1]}</a>
            </li>
          ))}
        </ul>
      </nav>
      <section className="h-screen flex justify-center items-center bg-indigo-300" id="home">
        home page
      </section>
    </>
  );
}
export default function Landing() {
  const sections = ['home', 'about', 'office', 'calculation', 'contact'];
  
  return (
    <>
      <nav className="fixed">
        <ul className="list-none bg-black text-white w-screen py-2 flex justify-center">
          {sections.map((section) => (
            <li key={section} className="mx-1">
              <a href={`#${section}`}>{section}</a>
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
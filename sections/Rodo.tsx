export default function Rodo() {
  const rodoList = [
    `Administratorem Pana/Pani danych osobowych jest <span class="font-semibold">Biuro Rachunkowe ,,Podatnik'' Wieńczysława Śliwińska</span> z&nbsp;siedzibą w&nbsp;Chorzowie, ul.&nbsp;Dąbrowskiego&nbsp;58/6.`,
    `Celem zbierania danych jest dopełnienie obowiązków określonych przepisami prawa lub realizacja umowy.`,
    `Osobą kontaktową w&nbsp;sprawie przetwarzanych danych jest właściciel firmy: <span class="font-semibold">Wieńczysława Śliwińska.</span>`,
    `Przysługuje Panu/Pani prawo do dostępu do treści swoich danych oraz ich sprostowania, usunięcia lub ograniczenia przetwarzania, a&nbsp;także prawo sprzeciwu, zażądania zaprzestania przetwarzania i&nbsp;przenoszenia danych, jak również prawo do cofnięcia zgody w&nbsp;dowolnym momencie oraz prawo do wniesienia skargi do organu nadzorczego, tj.: Prezesa Urzędu Ochrony Danych Osobowych.`,
    `Podanie danych jest dobrowolne, lecz niezbędne do realizacji celów wynikających z&nbsp;przepisów prawa lub realizacji umowy. W&nbsp;przypadku niepodania danych, wypełnienie powyższego celu nie będzie możliwe.`,
    `Dane udostępnione przez Pana/Panią nie będą podlegały udostępnieniu podmiotom trzecim. Odbiorcami danych będą tylko instytucje upoważnione z&nbsp;mocy prawa lub podmioty, którym dane muszą zostać udostępnione dla realizacji umowy.`,
    `Dane udostępnione przez Pana/Panią nie będą podlegały profilowaniu.`,
    `Administrator danych nie ma zamiaru przekazywać danych osobowych do państwa trzeciego ani organizacji międzynarodowej.`,
    `Dane osobowe będą przechowywane przez okres nie dłuższy, niż ten wymagany ustawą o&nbsp;narodowym zasobie archiwalnym i&nbsp;archiwach, licząc od początku roku następującego po roku, w&nbsp;którym dane osobowe zostały podane.`
  ];

  return (
    <section className="bg-light-bg py-12" id="rodo">
      <div className="mx-auto py-4 sm:py-8 xl:py-10 px-6 sm:px-10 xl:px-20 max-w-7xl bg-main-bg text-light-text rounded-xl shadow-xl">
        <h2 className="mb-4 text-xl sm:text-2xl lg:text-3xl font-semibold">RODO - obowiązek informacyjny</h2>
        <div className="font-light">
          Informujemy, że:
          <ul className="list-inside space-y-1 mt-2">
            {rodoList.map((item, idx) => (
              <li className="flex">
                <div className="w-8 px-2">{idx+1}.</div>
                <div
                  key={idx}
                  className="w-fit"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </li>

            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

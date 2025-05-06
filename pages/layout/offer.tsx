import { useState, useEffect } from "react";
import axios from "axios";

export default function Offer() {
  const [calc, setCalc] = useState<string>('');
  
  // TODO: .env nie działa na serwerze
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? '';

  // temporary
  useEffect(() => {
    axios
      .get(apiUrl)
      .then(res => {
        setCalc(res.data.calculation);
      })
      .catch(err => {
        // TODO: error snackbar
        console.error(err);
      })
  }, []);

  return (
    <section className="h-screen flex justify-center items-center bg-red-300" id="offer">
      {calc}
    </section>
  );
}
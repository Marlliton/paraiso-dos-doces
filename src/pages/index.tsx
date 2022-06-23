import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Sales } from "../components/Sale";
import Sale from "../core/sale/Sale";
import { getSalesService } from "../core/sale/SalesService";

export default function Home() {
  const [sales, setSales] = useState<Sale[] | null>(null);
  useEffect(() => {
    getSalesService()
      .getAll()
      .then(res => setSales(res));
  }, []);

  function renderSales() {
    return (
      <>
        {sales.map((s, i) => {
          return <Sales key={i} sale={s} />;
        })}
      </>
    );
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-zinc-900">
      <Header />
      <Main>{sales ? renderSales() : "Carregando"}</Main>
    </div>
  );
}

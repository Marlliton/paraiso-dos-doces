import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Modal } from "../components/Modal";
import { Sales } from "../components/Sale";
import { SearchInput } from "../components/SearchInput";
import Sale from "../core/sale/Sale";
import { getSalesService } from "../services";
import Image from "next/image";
import noData from "/public/no-data.gif";

export default function Home() {
  const [sales, setSales] = useState<Array<Sale> | null>(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    getSalesService().getAll(handleOnSnapshot);
  }, []);

  function handleOnSnapshot(data: Array<Sale>) {
    setSales(data);
  }

  function renderSales() {
    return (
      <>
        {sales?.map((s, i) => {
          return <Sales key={i} sale={s} />;
        })}
      </>
    );
  }

  async function onSubmit(data: any) {
    await getSalesService().save(
      new Sale({
        name: data.name,
        order: data.order,
        street: data.street,
        num: data.num,
        reference: data.ref,
      })
    );
    setShowModal(false);
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-zinc-900">
      <Header />
      <SearchInput />

      <Main showModal={setShowModal}>
        {sales ? (
          renderSales()
        ) : (
          <div className=" flex h-full items-center">
            <div className=" h-96 w-96">
              <Image width="500" height="500" src={noData} />
            </div>
          </div>
        )}
      </Main>
      {showModal && <Modal showModal={setShowModal} onSubmit={onSubmit} />}
    </div>
  );
}

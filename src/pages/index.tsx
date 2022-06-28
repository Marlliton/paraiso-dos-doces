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
import User from "../core/User/User";
import Order from "../core/Order/Order";

export default function Home() {
  const [sales, setSales] = useState<Array<Sale> | null>(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    getSalesService().getAll(handleOnSnapshot);
  }, []);

  //  TODO O id não está vinho, tenho que verificar isso.
  function handleOnSnapshot(data: Array<Sale>) {
    setSales(data);
  }

  function renderSales() {
    return (
      <>
        {sales?.map((s, i) => {
          return (
            <Sales
              finishOrder={e => getSalesService().finishOrder(e)}
              key={i}
              sale={s}
            />
          );
        })}
      </>
    );
  }

  async function onSubmit(user: User, order: Order) {
    await getSalesService().save(
      new Sale({
        user: new User({
          name: user.name,
          street: user.street,
          num: user.num,
          reference: user.reference,
        }),
        order: Order.createPendingOrder({ description: order.description }),
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

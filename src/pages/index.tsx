import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Widget } from "../components/Widget";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col bg-zinc-900">
      <Header />
      <Main>
        <h1>Aqui é um teste do main</h1>
      </Main>
      <Footer />
    </div>
  );
}

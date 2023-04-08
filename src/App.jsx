
import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";

export const App = () => {

  return (
    <div>
      <Header titulo="Negociações" />
      <div className="container">
      <Formulario quandoAdicionar={adicionarNegociacao} />
      </div>
    </div>
  );
};

import PropTypes from "prop-types";

export const Tabela = ({ negociacoes }) => {
  function totalizador() {
    const valorTotal = negociacoes.reduce((totalizador, negociacao) => {
      return (
        totalizador + Number(negociacao.valor) * Number(negociacao.quantidade)
      );
    }, 0);

    return valorTotal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
  }
  
    return (
    <div class="my-5">
      <table class="table table-hover table-bordered">
        <thead class="table-primary">
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
          </tr>
        </thead>
    )
}

Tabela.propTypes = {
  negociacoes: PropTypes.array.isRequired,
};

import { GrupoInput } from "./GrupoInput"

function handleAdicionarNegociacao() {
    const negociacao = {
        data: data,
        quantidade: quantidade,
        valor: valor,
    };

    return (
        <form className="form-container">

            <div className="row">
                <GrupoInput
                id="data" tipo="texto" etiqueta="Data" 
                aoDigitar={(e) => setData(e.target.value)} valor={data} />
                <GrupoInput
                id="quantidade" tipo="number" etiqueta="Quantidade" 
                aoDigitar={(e) => setQuantidade(e.target.value)} valor={quantidade} min="1" step="1" />
                <GrupoInput
                id="valor" tipo="number" etiqueta="Valor"
                aoDigitar={(e) => setValor(e.target.value)} valor={valor} min="0.01" step="0.01" />

                <div className="col-1 d-flex align-items-end justify-content-end">
                    <button className="btn btn-primary" type="button" onclick={handleAdicionarNegociacao}>Incluir</button>
                </div>

            </div>

        </form>
    )
}

export default Formulario;


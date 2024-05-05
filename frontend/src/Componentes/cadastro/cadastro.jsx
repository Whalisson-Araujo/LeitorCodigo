import React from 'react'
import "./cadastro.css";

const cadastro = () => {
  return (
    <div className="container">
        <form>
            <h1>Cadastro de produto</h1>
            <div className="cod">
              <label id="codigo" for="codprod">Código do produto:</label>
              <input type="text" id="codprod"placeholder="produto"/>
            </div>
            <br/>
            <div className="cod">
              <label id="descricao" for="decprod">Descrição do produto:</label>
              <input type="text" id="decprod"placeholder="produto"/>
            </div>
            <br/>
            <div className="cod">
              <label id="preco" for="preprod">Preço do produto:</label>
              <input type="text"  id ="preprod"placeholder="produto"/>
            </div>
            <br/>
              <button id="cad">Cadastrar</button>
              <button id="del">Deletar</button>
            <div>

            </div>
        </form>
    </div>
  )
}

export default cadastro
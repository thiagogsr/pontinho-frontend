import React from "react";

export default () => (
  <div>
    <div>
      <h2>Novo jogo</h2>
      <form>
        <fieldset>
          <label>Seu nome</label>
          <input type="text" />
        </fieldset>
        <input type="submit" value="Criar jogo" />
      </form>
    </div>

    <div>
      <h2>Entrar em jogo já criado</h2>
      <form>
        <fieldset>
          <label>Código do jogo</label>
          <input type="text" />
        </fieldset>

        <fieldset>
          <label>Seu nome</label>
          <input type="text" />
        </fieldset>
        <input type="submit" value="Entrar" />
      </form>
    </div>
  </div>
);

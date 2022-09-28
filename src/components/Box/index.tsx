import "./index.css";

export function Box() {
  return (
    <div className="containerBox">
      <header>
        <h1>Edit</h1>
      </header>

      <form className="form">
        <div className="divInput">
          <label htmlFor="">Choose an Option</label>
          <select>
            <option value="">Teste</option>
            <option value="">Teste</option>
            <option value="">Teste</option>
            <option value="">Teste</option>
            <option value="">Teste</option>
          </select>
        </div>

        <div className="divInput">
          <label htmlFor="">Texto</label>
          <textarea name="" id="" placeholder="teste"></textarea>
        </div>

        <div className="divInput">
          <label htmlFor="">Choose an Option</label>
          <select>
            <option value="">Teste</option>
            <option value="">Teste</option>
            <option value="">Teste</option>
            <option value="">Teste</option>
            <option value="">Teste</option>
          </select>
        </div>

        <div className="submit">
          <button className="cancel">Cancelar</button>
          <button className="send">Salvar</button>
        </div>
      </form>
    </div>
  );
}

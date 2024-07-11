import { useState } from "react";

const Checkboxes = () => {
  const [_checkboxes, _setCheckboxes] = useState<Array<string>>([]);

  return (
    <section className="checkboxes">
      <header className="checkboxes__header">
        <h2>Checkboxes</h2>
      </header>
      <div className="boxes">
        <form className="form-box">
          <div className="bx">
            <div className="check">
              <input type="checkbox" id="foto" name="foto" value="foto" />
              <label htmlFor="foto">Foto + ID</label>
            </div>
            <div className="check">
              <input type="checkbox" id="id" name="id" value="id" />
              <label htmlFor="id">Identidade</label>
            </div>
            <div className="check">
              <input type="checkbox" id="pis" name="pis" value="pis" />
              <label htmlFor="pis">PIS/PASEP ou NIT</label>
            </div>
            <div className="check">
              <input
                type="checkbox"
                id="residencia"
                name="residencia"
                value="residencia"
              />
              <label htmlFor="residencia">C. Residência</label>
            </div>
            <div className="check">
              <input
                type="checkbox"
                id="casamento"
                name="casamento"
                value="casamento"
              />
              <label htmlFor="casamento">D. União/Casamento</label>
            </div>
            <div className="check">
              <input
                type="checkbox"
                id="nascimento"
                name="nascimento"
                value="nascimento"
              />
              <label htmlFor="nascimento">C. Nascimento</label>
            </div>
            <div className="check">
              <input
                type="checkbox"
                id="contracheque"
                name="contracheque"
                value="contracheque"
              />
              <label htmlFor="contracheque">Contracheque</label>
            </div>
            <div className="check">
              <input type="checkbox" id="posse" name="posse" value="posse" />
              <label htmlFor="posse">Termo de Posse</label>
            </div>
            <div className="check">
              <input
                type="checkbox"
                id="veracidade"
                name="veracidade"
                value="veracidade"
              />
              <label htmlFor="veracidade">Termo de Veracidade</label>
            </div>
            <div className="check">
              <input
                type="checkbox"
                id="certidoes"
                name="certidoes"
                value="certidoes"
              />
              <label htmlFor="certidoes">Certidão Nasc/Cas/União</label>
            </div>
            <div className="check">
              <input
                type="checkbox"
                id="estadoc"
                name="estadoc"
                value="estadoc"
              />
              <label htmlFor="estadoc">Declaração de Estado Civil</label>
            </div>
            <div className="check">
              <input type="checkbox" id="depid" name="depid" value="depid" />
              <label htmlFor="depid">Dependente ID</label>
            </div>
          </div>
          <div>
            <input
              type="submit"
              value="Generate Text"
              className="submit def-btn"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkboxes;

import useForm from "hooks/useForms";
import * as S from "./styled";

function Admin() {
  const [form, onChange, clear] = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <S.Title>Painel do Administrador</S.Title>
      <S.FormControlImage onSubmit={handleSubmit}>
        <label>
          Nome do produto
          <input type="text" />
        </label>
        <label>
          Descrição do produto
          <input type="text" />
        </label>
        <label>
          Valor do produto
          <input type="number" />
        </label>
        <label>
          Onde o produto será adicionado
          <S.ContainerCheckBox>
            <select>
              <option value="0">Selecione uma opção:</option>
              <option value="1">Galeria de Imagens</option>
              <option value="2">Carrossel de Novidades</option>
            </select>
          </S.ContainerCheckBox>
        </label>
        <label>
          Selecione a Imagem
          <input type="file" />
        </label>
        <button type="submit">ENVIAR</button>
      </S.FormControlImage>
    </>
  );
}

export default Admin;

import useForm from "hooks/useForms";
import * as S from "./styled";

function Admin() {
  const [form, onChange, clear] = useForm({
    name: "",
    price: "",
    description: "",
    folder: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //enviar o form
    clear();
  };

  return (
    <>
      <S.Title>Painel do Administrador</S.Title>
      <S.FormControlImage onSubmit={handleSubmit}>
        <label>
          Nome do produto
          <input
            type="text"
            name={"name"}
            value={form.name}
            onChange={onChange}
          />
        </label>
        <label>
          Descrição do produto
          <input
            type="text"
            name={"description"}
            value={form.description}
            onChange={onChange}
          />
        </label>
        <label>
          Valor do produto
          <input
            type="number"
            name={"price"}
            value={form.price}
            onChange={onChange}
          />
        </label>
        <label>
          Onde o produto será adicionado
          <S.ContainerCheckBox>
            <select onChange={onChange} name={"folder"}>
              <option value="0">Selecione uma opção:</option>
              <option value="galeria">Galeria de Imagens</option>
              <option value="slide">Carrossel de Novidades</option>
            </select>
          </S.ContainerCheckBox>
        </label>
        <label>
          Selecione a Imagem
          <input type="file" />
        </label>
        <S.ButtonSendForm type="submit">ENVIAR</S.ButtonSendForm>
      </S.FormControlImage>
    </>
  );
}

export default Admin;

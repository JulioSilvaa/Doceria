import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    price: yup
      .string()
      .matches(
        "[0-9]+(.[0-9]{2})?",
        "Preencha conforme indicação abaixo, use ponto para centavos"
      )
      .required("Campo obrigatório"),
  })
  .required();

export default schema;

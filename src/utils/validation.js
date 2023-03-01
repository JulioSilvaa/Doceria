import * as yup from "yup";

export const schemaProduct = yup
  .object()
  .shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    email: yup.string().email("E-mail inválido.").required("Campo obrigatório"),
    price: yup
      .string()
      .matches(
        "[0-9]+(.[0-9]{2})?",
        "Preencha conforme indicação abaixo, use ponto para centavos"
      )
      .required("Campo obrigatório"),
  })
  .required();

export const schemaLogin = yup
  .object()
  .shape({
    email: yup.string().email("E-mail inválido.").required("Campo obrigatório"),
  })
  .required();

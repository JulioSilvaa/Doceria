import { yupResolver } from "@hookform/resolvers/yup";
// import ButtonForm from "components/formComp/button/Button";
import Field from "components/formComp/field/index";
import Form from "components/formComp/form/index";
import { useForm } from "react-hook-form";
import { schemaLogin } from "utils/validation";

const FormNew = () => {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const newUser = (user) => {
    console.log(user, "clicou");

    reset();
  };

  return (
    <Form onSubmit={handleSubmit(newUser)}>
      <Field.Text
        label={"Email"}
        type={"text"}
        name="email"
        register={{ ...register("email") }}
      />

      <Field.Text
        label={"Senha"}
        name="senha"
        type={"password"}
        register={{ ...register("password") }}
      />
      {/* <ButtonForm type="submit">Enviar</ButtonForm> */}
      <button type="submit">Send</button>
    </Form>
  );
};

export default FormNew;

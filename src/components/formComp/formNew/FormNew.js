import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonForm, ButtonHome } from "components/formComp/button/Button";
import Field from "components/formComp/field/index";
import Form from "components/formComp/form/index";
import { useAuthentication } from "hooks/useAuthentication";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { schemaLogin } from "utils/validation";

const FormNew = () => {
  const { login, loading } = useAuthentication();

  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const newUser = (user) => {
    login(user);
    reset();
    if (!loading) {
      navigate("/admin");
    }
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

      <ButtonForm type="submit">Enviar</ButtonForm>
      <ButtonHome onClick={() => navigate("/")}>Home</ButtonHome>
    </Form>
  );
};

export default FormNew;

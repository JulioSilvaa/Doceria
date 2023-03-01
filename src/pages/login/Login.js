import FormNew from "components/formComp/formNew/FormNew";
import Main from "components/formComp/main/Main";

const Login = () => {
  return (
    <>
      <Main>
        <h1
          style={{
            textAlign: "center",
            paddingTop: "20px",
            fontSize: "3.2rem",
          }}
        >
          Login
        </h1>
        <FormNew />
      </Main>
    </>
  );
};

export default Login;

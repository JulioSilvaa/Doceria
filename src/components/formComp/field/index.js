import Content from "./content/content";
import Input from "./input";
import Label from "./label/index";

const Text = ({ label, type, name, register }) => (
  <Label>
    <Content>{label}</Content>
    <Input type={type} name={name} {...register} />
  </Label>
);

const Field = {
  Text,
};

export default Field;

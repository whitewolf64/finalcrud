import axios from "axios";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 100px;
  flex-wrap: wrap;
  background-color: #ADD8E6;
  opacity: 0.7;
  padding: 5px;
  box-shadow: 10px 10px 2px #000000;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 210px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label`
color: #191970`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
      if (onEdit) {
        const user = ref.current;
        user.nouveauargonaute.value = onEdit.nouveauargonaute;
      }
    }, [onEdit]);

    const handleSubmit = async (e) => {
      e.preventDefault();

      const user = ref.current;

      if (
        !user.nouveauargonaute.value
      ) {
        return toast.warn("Veuillez saisir un Nom d'argonaute ;)");
      }

      if (onEdit) {
        await axios
         .put("http://localhost:88OO/" + onEdit.id, {
           nouveauargonaute: user.nouveauargonaute.value,
          })
         .then(({ data }) => toast.success(data))
         .catch(({ data }) => toast.error(data));
      } else {
        await axios
          .post("http://localhost:8800", {
             nouveauargonaute: user.nouveauargonaute.value,
          })
          .then(({ data }) => toast.success(data))
          .catch(({ data }) => toast.error(data));
      }

      user.nouveauargonaute.value = "";
      
      setOnEdit(null);
      getUsers();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
            <Label>Ajouter un Nouvel Argonaute.</Label>
              <Input name="nouveauargonaute" />
            </InputArea> 
            <Button type="submit">Ajouter</Button>   
        </FormContainer>
    );
};

export default Form;
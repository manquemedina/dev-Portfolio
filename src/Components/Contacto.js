import { useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import {
  SectionTitle,
  ContactoWrapper,
  Form,
  FormBg,
  Input,
  TextArea,
  ContactButton,
} from "../styles";
const Contacto = () => {
  //estado para almacenar el user input (en react el componente contacto controla el formulario, no el DOM)
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMessage, setNewMessage] = useState("");
  //la linea de abajo crea el vínculo entre el estado del componente y la db de firestore mediante la función collection() y guardamos esa ref en la const
  const inputsRef = collection(db, "contacto");

  //addDoc recibe dos argumentos, el donde y el qué: la referecia, con nuestra db y la collection a la que queremos agregar los datos, y un objeto con el nombre de cada campo y ka asignación de nuestro estado con el user input
  const createContact = async () => {
    await addDoc(inputsRef, {
      name: newName,
      email: newEmail,
      message: newMessage,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createContact();
  };

  return (
    <ContactoWrapper>
      <SectionTitle>Contacto</SectionTitle>
      <FormBg>
        <Form onSubmit={handleSubmit}>
          <Input
            type={"text"}
            name={"name"}
            placeholder="Nombre"
            onChange={(event) => setNewName(event.target.value)}
          />

          <Input
            type={"email"}
            name={"email"}
            placeholder="Email"
            onChange={(event) => setNewEmail(event.target.value)}
          />

          <TextArea
            type={"text"}
            name={"message"}
            placeholder="Mensaje"
            onChange={(event) => setNewMessage(event.target.value)}
          />
          <ContactButton type="submit">Enviar</ContactButton>
        </Form>
      </FormBg>
    </ContactoWrapper>
  );
};

export { Contacto };

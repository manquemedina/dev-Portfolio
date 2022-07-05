import { useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { SectionTitle, SectionWrapper } from "../styles";
const Contacto = () => {
  //estado para almacenar el user input (en react el componente contacto controla el formulario, no el DOM)

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMessage, setNewMessage] = useState("");
  //la linea de abajo crea el vínculo entre el estado del componente y la db de firestore
  const inputsRef = collection(db, "contacto");

  const handleSubmit = (event) => {
    event.preventDefault();
    createContact();
  };

  const createContact = async () => {
    await addDoc(inputsRef, {
      name: newName,
      email: newEmail,
      message: newMessage,
    });
  };

  return (
    <SectionWrapper>
      <SectionTitle>Contacto</SectionTitle>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre
          <input
            type={"text"}
            name={"name"}
            placeholder="Nombre"
            onChange={(event) => setNewName(event.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type={"email"}
            name={"email"}
            placeholder="Email"
            onChange={(event) => setNewEmail(event.target.value)}
          />
        </label>
        <label>
          Mensaje
          <textarea
            type={"text"}
            name={"message"}
            placeholder="Mensaje"
            onChange={(event) => setNewMessage(event.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </SectionWrapper>
  );
};

export { Contacto };

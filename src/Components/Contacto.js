import { useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const Contacto = () => {
  //estado para almacenar el user input (en react el componente contacto controla el formulario, no el DOM)
  const [inputs, setInputs] = useState([]);

  //la linea de abajo crea el vínculo entre el estado del componente y la db de firestore
  const inputsRef = collection(db, "contacto");

  const getInputs = async () => {
    const data = await getDocs(inputsRef);
    console.log(data.docs);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const email = event.target.email;
    const message = event.target.message;
    setInputs((values) => ({ ...values, [name]: [email][message] }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);

    getInputs();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre
          <input
            type={"text"}
            name={"name"}
            /* value={"name"} */
            placeholder="Nombre"
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            type={"email"}
            name={"email"}
            /* value={"email"} */
            placeholder="Email"
            onChange={handleChange}
          />
        </label>
        <label>
          Mensaje
          <textarea
            type={"text"}
            name={"message"}
            /* value={"message"} */
            placeholder="Mensaje"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export { Contacto };

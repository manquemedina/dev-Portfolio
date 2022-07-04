import { async } from "@firebase/util";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
const Contacto = (props) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const nameRef = collection(db, "contacto");

  useEffect(() => {
    const getName = async () => {
      const data = await getDocs(nameRef);
      console.log(data.docs);
    };
    /*     const getMail = async (e) => {
      e.target.value;
    };
    const getMessage = async (e) => {
      e.target.value;
    }; */
    getName();
    /*    getMail();
    getMessage(); */
  }, []);

  return (
    <>
      <form type="submit">
        <label placeholder="Nombre">
          <input type={"string"} />
        </label>
      </form>
    </>
  );
};

export { Contacto };

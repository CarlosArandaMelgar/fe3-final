import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState("");  // Estado para el nombre
  const [email, setEmail] = useState(""); // Estado para el email
  const [error, setError] = useState(""); // Estado para el mensaje de error
  const [success, setSuccess] = useState(false); // Estado para el mensaje de éxito

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    // Validar el nombre y el email
    if (name.length <= 5) {
      setError("Por favor verifique su información nuevamente");
      setSuccess(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el email
    if (!emailRegex.test(email)) {
      setError("Por favor verifique su información nuevamente");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);
    console.log({ name, email });
  };

   return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre completo:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>

      {/* Mensaje de error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Mensaje de éxito */}
      {success && (
        <p style={{ color: "green" }}>
          Gracias {name}, te contactaremos cuando antes vía mail.
        </p>
      )}
    </div>
  );
};

export default Form;

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <form className="form-container">
        <h3>
          <span className="green">CONTACTA CONMIGO</span>
        </h3>
        <div className="name-email">
          <div className="name">
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ingresa tu nombre completo"
              required
            />
          </div>
          <div className="email">
            <label htmlFor="email">Correo electronico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu correo electronico"
              required
            />
          </div>
        </div>
        <div className="message">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            placeholder="Escribi tu mensaje..."
            required
          />
        </div>
        <button className="submit" type="submit">
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default Contact;

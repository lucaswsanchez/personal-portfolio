import "../styles/Contact.css";
import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xdovypeg");
  const [valorCampo1, setValorCampo1] = useState("");
  const [valorCampo2, setValorCampo2] = useState("");
  const [valorCampo3, setValorCampo3] = useState("");

  const handleToast = () => {
    toast.success("Tu mensaje fue enviado con éxito!", {
      style: { fontSize: "14px", fontFamily: "Montserrat , sans-serif" },
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  useEffect(() => {
    if (state.succeeded) {
      setValorCampo1("");
      setValorCampo2("");
      setValorCampo3("");
      handleToast();
    }
  }, [state.succeeded]);

  return (
    <div className="contact-container fade-in-fwd">
      <form onSubmit={handleSubmit} className="form-container">
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
              value={valorCampo1}
              onChange={(event) => setValorCampo1(event.target.value)}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="email">
            <label htmlFor="email">Correo electronico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu correo electronico"
              required
              value={valorCampo2}
              onChange={(event) => setValorCampo2(event.target.value)}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
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
            value={valorCampo3}
            onChange={(event) => setValorCampo3(event.target.value)}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button className="submit" type="submit" disabled={state.submitting}>
          Enviar mensaje
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;

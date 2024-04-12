import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function NewsletterForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setIsSubmitted(true);
      //CONTINUAR A LOGICA PARA INSCREVER O USUARIO NA BASE DE DADOS DA NEWSLETTER
    } else {
      alert("Please enter your email.");
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCloseModal = () => {
    setIsSubmitted(false);
    setEmail("");
  };

  window.onclick = (e) => {
    const modal = document.querySelector(".modal-confirmation");
    if (modal && !modal.contains(e.target)) {
      handleCloseModal();
    }
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <label>
          Subscribe to our newsletter
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Subscribe</button>
      </form>
      {isSubmitted && (
        <div className="modal-confirmation">
          <p>Thank you for subscribing to our newsletter!</p>
          <button
            className="close-btn"
            onClick={handleCloseModal}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
      )}
    </>
  );
}

export default NewsletterForm;

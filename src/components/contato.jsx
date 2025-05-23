import React, { useState } from "react";
import styles from "./contato.module.css";
import Title from "./title";
import Notification from "./notification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [mensagem, setMensagem] = useState("");
  const [tipo, setTipo] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.erro || "Erro desconhecido");
      }

      setMensagem("Contato enviado com sucesso!");
      setTipo("success");
      setFormData({ nome: "", email: "", mensagem: "" });
    } catch (err) {
      console.error("Erro ao enviar o formulário:", err);
      setMensagem("Erro ao enviar o formulário.");
      setTipo("error");
    }

    // Some depois de 4 segundos
    setTimeout(() => {
      setMensagem("");
      setTipo("");
    }, 4000);
  };

  return (
    <section id="contato" className={styles.contatoSection}>
      <Notification mensagem={mensagem} tipo={tipo} onClose={() => setMensagem("")} />
      <Title text="Entre em contato" color="black" />

      <div className={styles.conteudoContato}>
        <div className={styles.redes}>
          <h3>Redes Sociais</h3>
          <div className={styles.linksSociais}>
            <a href="https://www.linkedin.com/in/lucas-ramos-coelho" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> Linkedin
            </a>
            <a href="https://github.com/Lucas-Ramos-Coelho" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a href="mailto:lucas.rc2105@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} /> E-mail
            </a>
          </div>
        </div>

        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Nome"
            />
            <label>E-mail:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
            />
            <label>Mensagem:</label>
            <input
              type="text"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Mensagem"
              className={styles.mensagem}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contato;

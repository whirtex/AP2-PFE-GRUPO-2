import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo-Ibmec.svg";
import "../styles/styleCadastro.css";

function maskCNPJ(value) {
  const d = (value || "").replace(/\D/g, "").slice(0, 14);
  const p = [];
  if (d.length > 0) p.push(d.substring(0, 2));
  if (d.length >= 3) p.push(d.substring(2, 5));
  if (d.length >= 6) p.push(d.substring(5, 8));

  if (d.length <= 2) return p[0] || "";
  if (d.length <= 5) return `${p[0]}.${p[1]}`;
  if (d.length <= 8) return `${p[0]}.${p[1]}.${p[2]}`;
  if (d.length <= 12) return `${p[0]}.${p[1]}.${p[2]}/${d.substring(8, 12)}`;
  return `${p[0]}.${p[1]}.${p[2]}/${d.substring(8, 12)}-${d.substring(12, 14)}`;
}

export default function Cadastro({ onOpenLogin }) {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    cnpj: "",
    senha: "",
    porte: "",
    vinculo: "",
    area: "",
    demanda: "",
  });

  function setField(name, value) {
    setForm((f) => ({ ...f, [name]: value }));
  }

  function onChange(e) {
    const { name, value } = e.target;
    if (name === "cnpj") {
      setField("cnpj", maskCNPJ(value));
      e.target.setCustomValidity("");
      return;
    }
    setField(name, value);
    e.target.setCustomValidity("");
  }

  function onSubmit(e) {
    e.preventDefault();
    const formEl = formRef.current;
    [...formEl.querySelectorAll("input, select")].forEach((el) =>
      el.setCustomValidity("")
    );

    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return;
    }

    console.log("Form OK:", form);
  }

  return (
    <main className="reg">
      <section className="reg-card">
        <div className="reg-header">
          <Link to="/" className="reg-logo" aria-label="Logo Ibmec">
            <img src={logo} alt="Logo Ibmec" />
          </Link>
          <h2>Abra uma conta</h2>
          <p>Digite seu e-mail para se inscrever neste aplicativo</p>
        </div>

        <form ref={formRef} className="reg-form" noValidate onSubmit={onSubmit}>
          <div className="form-group">
            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Nome Completo"
              inputMode="text"
              autoComplete="name"
              required
              minLength={3}
              pattern="^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s+[A-Za-zÀ-ÖØ-öø-ÿ]+)+$"
              title="Digite nome e sobrenome, apenas letras e espaços."
              value={form.nome}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email@dominio.com"
              inputMode="email"
              autoComplete="email"
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
              title="Digite um e-mail válido (ex.: nome@dominio.com)."
              value={form.email}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              id="cnpj"
              name="cnpj"
              type="text"
              placeholder="CNPJ"
              inputMode="numeric"
              autoComplete="on"
              required
              pattern="^\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2}$|^\d{14}$"
              title="Digite um CNPJ válido (com ou sem pontuação)."
              value={form.cnpj}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              id="senha"
              name="senha"
              type="password"
              placeholder="Senha"
              autoComplete="new-password"
              required
              minLength={8}
              pattern="^(?=.*[A-Za-z])(?=.*\d).{8,}$"
              title="Mínimo 8 caracteres, com pelo menos 1 letra e 1 número."
              value={form.senha}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <select
              id="porte"
              name="porte"
              required
              value={form.porte}
              onChange={onChange}
            >
              <option value="">Qual o porte da sua empresa?</option>
              <option value="micro">Microempresa</option>
              <option value="pequena">Pequena Empresa</option>
              <option value="media">Média Empresa</option>
              <option value="grande">Grande Empresa</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="vinculo"
              name="vinculo"
              required
              value={form.vinculo}
              onChange={onChange}
            >
              <option value="">Tem vínculo com o IBMEC Hubs</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="area"
              name="area"
              required
              value={form.area}
              onChange={onChange}
            >
              <option value="">Área de atuação</option>
              <option value="tecnologia">Tecnologia</option>
              <option value="saude">Saúde</option>
              <option value="educacao">Educação</option>
              <option value="financeiro">Financeiro</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="demanda"
              name="demanda"
              required
              value={form.demanda}
              onChange={onChange}
            >
              <option value="">Tipo de demanda</option>
              <option value="consultoria">Consultoria</option>
              <option value="desenvolvimento">Desenvolvimento</option>
              <option value="pesquisa">Pesquisa</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <button type="submit" className="reg-btn reg-btn--accent">
            Cadastre-se
          </button>

          <div className="reg-or">ou continue com</div>

          <button
            type="button"
            className="reg-btn reg-btn--primary"
            onClick={onOpenLogin}
          >
            Login
          </button>
        </form>

        <div className="reg-footer">
          Ao continuar, você concorda com os nossos{" "}
          <a href="#">Termos de Serviço</a> e{" "}
          <a href="#">Política de Privacidade</a>
        </div>
      </section>
    </main>
  );
}

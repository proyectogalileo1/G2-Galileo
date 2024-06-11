import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import styles from "../assets/css/Login.module.css";
import Logo from "../assets/img/Logo_educación.png";
import { Link, useNavigate } from "react-router-dom";

const Contrasena = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const handleResetPassword = async (event) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Se ha enviado un enlace para restablecer tu contraseña a tu correo electrónico.');
      navigate('/');  // O redirigir a la página de login o donde prefieras después del envío
    } catch (error) {
      setError(error.message);
      console.error("Error al enviar email de recuperación:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles["logo-container"]}>
          <img src={Logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles["login-form"]}>
          <form onSubmit={handleResetPassword}>
            <div className={styles["form-group"]}>
              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Introduzca su correo electrónico"
                required
              />
            </div>
            <button type="submit" className={styles["btn-login"]}>Enviar enlace de recuperación</button>
            {error && <p className={styles.error}>{error}</p>}
          </form>
          <div className={styles["register-link"]}>
            <Link to="/">Volver al inicio de sesión</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contrasena;

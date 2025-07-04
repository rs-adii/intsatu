import React from "react";

import { Link } from 'react-router-dom';

function Login() {
  return (
    <header className="head">
      <div>
        <div className="logo">
          <img className="logo" src="src/assets/Logo.png" alt="Logo" /><br />
          <h3>MASUK</h3>
          <p>Selamat datang kembali</p>
        </div>
         <br />
        <form>
          <label htmlFor="username">Username</label><br />
          <input type="text" id="username" name="Username" /><br />

          <label htmlFor="password">Kata Sandi</label><br />
          <input type="password" id="password" name="password" /><br />

          <div className="second">
            <p>
              Belum punya akun? <Link to="/Registrasi">Daftar</Link>
            </p>
            <a href="#">Lupa kata sandi?</a>
          </div>

          <p className="btn">
            <Link to="/Homepage">Masuk</Link>
          </p>

          <p>Atau</p>

          <p className="btn">
            <Link to="/Homepage">Masuk Dengan Google</Link>
          </p>
        </form>
      </div>
    </header>
  );
}

export default Login;

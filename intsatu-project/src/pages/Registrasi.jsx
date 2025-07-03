import React from 'react';
import { Link } from 'react-router-dom';

function Daftar() {
  return (
    <header className="head">
      <div>
        <div className="logo">
          {/* Gambar dari public/assets */}
          <img src="src/assets/Logo.png" alt="Logo" />
          <h3>DAFTAR</h3>
          <p>Selamat datang</p>
        </div>

        <form>
          <label htmlFor="username">Username</label><br />
          <input type="text" id="username" name="Username" /><br />

          <label htmlFor="password">Kata Sandi</label><br />
          <input type="password" id="password" name="password" /><br />

          <label htmlFor="password1">Konfirmasi Kata Sandi</label><br />
          <input type="password" id="password1" name="password1" /><br />

          <div className="second">
            <p>Belum punya akun?<Link to="/Homepage">Daftar</Link></p>
          </div>

          <p className="btn"><Link to="/Homepage">Masuk</Link></p>
          <p className="btn"><Link to="/Homepage">Masuk dengan googlr</Link></p>
        </form>
      </div>
    </header>
  );
}

export default Daftar;

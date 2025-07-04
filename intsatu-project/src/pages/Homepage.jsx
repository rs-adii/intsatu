import React from "react";
import { Link } from 'react-router-dom';



function Beranda() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
<img className="logo" src="src/assets/Logo.png" alt="Logo" />
        <a href=""><p>Series</p></a>
        <a href=""><p>Film</p></a>
        <a href=""><p>Data Saya</p></a>
        <div className="profil1">
          <img src="src/assets/profil.png" alt="Profil" />
          <img src="src/assets/KeyboardArrowDown.png" alt="Dropdown" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <img src="src/assets/duty-after-school.png" alt="Duty After School" className="hero-bg" />
        <div className="hero-overlay">
          <h2>Duty After School</h2>
          <p>Ketegangan dan aksi pelajar bertahan hidup dari ancaman alien misterius.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Tonton</button>
            <button className="btn-secondary">+ Daftar Tonton</button>
          </div>
        </div>
      </section>

      {/* Melanjutkan Tonton Film */}
      <section className="film-section">
        <h2>Melanjutkan Tonton Film</h2>
        <div className="film-row">
          <div className="film-card"><img src="src/assets/film1.png" alt="Film 1" /></div>
          <div className="film-card"><img src="src/assets/film2.png" alt="Film 2" /></div>
          <div className="film-card"><img src="src/assets/film3.png" alt="Film 3" /></div>
        </div>
      </section>

      {/* Top Rating */}
      <section className="film-section">
        <h2>Top Rating Film dan Series Hari ini</h2>
        <div className="film-row">
          <div className="film-card"><img src="src/assets/top1.png" alt="Top 1" /></div>
          <div className="film-card"><img src="src/assets/top2.png" alt="Top 2" /></div>
          <div className="film-card"><img src="src/assets/top3.png" alt="Top 3" /></div>
        </div>
      </section>

      {/* Film Trending */}
      <section className="film-section">
        <h2>Film Trending</h2>
        <div className="film-row">
          <div className="film-card"><img src="src/assets/trend1.png" alt="Trend 1" /></div>
          <div className="film-card"><img src="src/assets/trend2.png" alt="Trend 2" /></div>
          <div className="film-card"><img src="src/assets/trend3.png" alt="Trend 3" /></div>
        </div>
      </section>

      {/* Rilis Baru */}
      <section className="film-section">
        <h2>Rilis Baru</h2>
        <div className="film-row">
          <div className="film-card"><img src="src/assets/rilis1.png" alt="Rilis 1" /></div>
          <div className="film-card"><img src="src/assets/rilis2.png" alt="Rilis 2" /></div>
          <div className="film-card"><img src="src/assets/rilis3.png" alt="Rilis 3" /></div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div>
          <img src="src/assets/Logo.png" alt="Logo Footer" />
        </div>
        <div className="genre">
          <div>
            <h3>Genre</h3>
            <p>Aksi</p>
            <p>Anak anak</p>
            <p>Anime</p>
            <p>Britania</p>
          </div>
          <div>
            <p>Drama</p>
            <p>Fantasi Ilmiah & Fantasi</p>
            <p>Kejahatan</p>
            <p>KDrama</p>
          </div>
          <div>
            <p>Komedi</p>
            <p>Petualangan</p>
            <p>Perang</p>
            <p>Romantis</p>
          </div>
          <div>
            <p>Sains & Alam</p>
            <p>Thriller</p>
          </div>
        </div>
        <div>
          <p>Bantuan</p>
          <p>FAQ</p>
          <p>Kontak Kami</p>
          <p>Privasi</p>
          <p>Syarat & Ketentuan</p>
        </div>
      </footer>
    </>
  );
}

export default Beranda;
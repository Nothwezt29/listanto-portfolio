import "./App.css";

export default function App() {
  return (
    <div className="page">
    <div id="top"></div>
      {/* ======================= NAVBAR ======================= */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo">ML</a>

          <div className="nav-links">
            <a href="#top">Home</a>
            <a href="#about">Tentang</a>
            <a href="#edu">Pendidikan</a>
            <a href="#exp">Pengalaman</a>
            <a href="#skill">Skill</a>
            <a href="#projects">Project</a>
            <a href="#contact">Kontak</a>
          </div>
        </div>
      </nav>

      {/* ======================= HERO ======================= */}

      <div id="home"></div>   {/* titik scroll paling atas */}

      <header className="hero-section fade">
        <div className="hero-content">
          <img src="/profile.png" alt="Foto Profil" className="profile-img" />

          <h1 className="name">Muhammad Listanto</h1>

          <p className="job-title">
            Frontend Developer (Entry Level) • IT Support • Network Technician
          </p>

          <a className="download-btn" href="/Listanto_CV.pdf" download>
            Download CV
          </a>
        </div>
      </header>

      <div className="center-container">

        {/* ======================= ABOUT ======================= */}
        <section id="about" className="card fade">
          <h2 className="card-title">Tentang Saya</h2>
          <p className="card-text">
            Saya Muhammad Listanto, mahasiswa Informatika Universitas Pamulang dengan 
            latar belakang Teknik Komputer & Jaringan. Berpengalaman sebagai IT Support, 
            setting jaringan, instalasi perangkat, dan support teknis lapangan. 
            Saat ini mempelajari pemrograman web (PHP Native & MERN) sebagai langkah 
            beralih menjadi Web Developer.
          </p>
        </section>

        {/* ======================= TECH STACK ======================= */}
        <section className="card fade">
          <h2 className="card-title">Tech Stack</h2>
          <div className="skill-grid">
            <span className="skill-item">React.js</span>
            <span className="skill-item">Node.js</span>
            <span className="skill-item">Express</span>
            <span className="skill-item">MongoDB</span>
            <span className="skill-item">PHP Native</span>
            <span className="skill-item">MySQL</span>
            <span className="skill-item">GitHub</span>
            <span className="skill-item">VS Code</span>
            <span className="skill-item">XAMPP</span>
          </div>
        </section>

        {/* ======================= EDUCATION ======================= */}
        <section id="edu" className="card fade">
          <h2 className="card-title">Pendidikan</h2>

          <div className="list-item">
            <h3>2019 – 2021 | SMK YMIK Joglo</h3>
            <p>Teknik Komputer & Jaringan</p>
          </div>

          <div className="list-item">
            <h3>2023 – Sekarang | Universitas Pamulang</h3>
            <p>S1 Teknik Informatika</p>
          </div>
        </section>

        {/* ======================= EXPERIENCE ======================= */}
        <section id="exp" className="card fade">
          <h2 className="card-title">Pengalaman Kerja</h2>

          <div className="list-item">
            <h3>Admin LAB Komputer | 2019–2021 | SMK YMIK Joglo</h3>
            <ul>
              <li>Membantu guru TKJ dalam menyiapkan Lab</li>
              <li>Memastikan perangkat siap untuk praktikum</li>
            </ul>
          </div>

          <div className="list-item">
            <h3>IT Support Intern | 04/2022–07/2022 | PT Tri Telcon Utama</h3>
            <ul>
              <li>Setting AP, router, switch</li>
              <li>Pemasangan kabel LAN</li>
              <li>Penempatan di Pasar Ciroyom</li>
            </ul>
          </div>

          <div className="list-item">
            <h3>Technical Support & Pre-Sales | 08/2022–11/2025 | PT Onesia Nusantara</h3>
            <ul>
              <li>Menangani masalah teknis perangkat</li>
              <li>Menjelaskan produk ke pelanggan</li>
              <li>Rekomendasi solusi sesuai kebutuhan</li>
              <li>Instalasi tambahan (CCTV, Access Control)</li>
              <li>Laporan hasil pekerjaan</li>
            </ul>
          </div>
        </section>

        {/* ======================= SKILL ======================= */}
        <section id="skill" className="card fade">
          <h2 className="card-title">Kemampuan</h2>
          <div className="skill-grid">
            <span className="skill-item">React.js</span>
            <span className="skill-item">Node.js</span>
            <span className="skill-item">MySQL & MongoDB</span>
            <span className="skill-item">Troubleshooting IT</span>
            <span className="skill-item">Setting Jaringan</span>
            <span className="skill-item">CCTV & Access Control</span>
            <span className="skill-item">GitHub & VS Code</span>
            <span className="skill-item">Koordinasi Lapangan</span>
            <span className="skill-item">PHP Native</span>
          </div>
        </section>

        {/* ======================= PROJECTS ======================= */}
        <section id="projects" className="card fade">
          <h2 className="card-title">Project Portfolio</h2>

          <div className="project-item">
            <h3>Sistem Antrian — PHP Native + MySQL</h3>
            <p>
              Sistem antrian klinik dengan pendaftaran pasien, nomor otomatis, TV Display,
              modul dokter, dan dashboard admin. Versi lengkap bersifat private karena 
              digunakan untuk kebutuhan komersial dan deployment internal.
            </p>

            <div className="project-buttons">
              <a className="btn-demo" href="#" target="_blank">
                Demo (Pengembangan)
              </a>

              <a className="btn-git private-btn" href="javascript:void(0)">
                🔒 Source Code Private
              </a>
            </div>
          </div>

          <div className="project-item">
            <h3>Aplikasi Resep Makanan — MERN Stack</h3>
            <p>
              Live search, pagination, text-to-speech, voice recognition, 
              dark mode, caching, dan filtering cerdas.
            </p>

            <div className="project-buttons">
              <a className="btn-demo" href="https://nothwet29.github.io/mern-resep/" target="_blank">Demo</a>
              <a className="btn-git" href="https://github.com/Nothwet29/mern-resep" target="_blank">Frontend</a>
              <a className="btn-git" href="https://github.com/Nothwet29/mern-resep-backend" target="_blank">Backend</a>
            </div>
          </div>
        </section>

        {/* ======================= CONTACT ======================= */}
        <section id="contact" className="card fade">
          <h2 className="card-title">Kontak</h2>
          <p>Email: mlistanto29@gmail.com</p>
          <p>WhatsApp: 087878296464</p>
          <p>GitHub: github.com/Nothwet29</p>
        </section>

      </div>

      <footer className="footer fade">
        © 2025 Muhammad Listanto — Portfolio Web
      </footer>
    </div>
  );
}

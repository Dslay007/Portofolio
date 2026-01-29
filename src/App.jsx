import React, { useState } from 'react';
import {
  Code,
  Palette,
  Users,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Download,
  Award,
  BookOpen,
  Globe,
  Cpu,
  Calendar,
  Instagram,
  CheckCircle2,
  ArrowUpRight,
  Video,
  Image as ImageIcon,
  PenTool,
  Layout,
  TrendingUp,
  GraduationCap,
  Briefcase,
  Monitor,
  MousePointerClick
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('design');
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  // --- DATA PORTFOLIO ---
  const portfolioData = {
    design: [
      {
        id: 'social_feed',
        category: "Social Media Feed & Snaps",
        icon: <Layout size={24} />,
        color: "bg-blue-600",
        items: [
          {
            id: 'hmti_feed',
            title: "HMTI Instagram Management",
            desc: "Pengelolaan feed Instagram Himpunan Mahasiswa TI. Fokus pada 'Connected Feeds' (Carousel) dan Instagram Story (Snap) interaktif untuk 160+ konten.",
            tags: ["Instagram Feed", "Interactive Snap", "Grid Layout"],
            // Bisa isi banyak foto
            gallery: [
              "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=800"
            ]
          },
          {
            id: 'dudukbaca_feed',
            title: "DudukBaca Content Strategy",
            desc: "Strategi visual untuk komunitas literasi. Menggabungkan tipografi bold pada Feed dan desain Story harian untuk menjaga engagement audiens.",
            tags: ["Content Strategy", "Story Design", "Engagement"],
            gallery: [
              "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
            ]
          },
          {
            id: 'poljar_feed',
            title: "Polinema Mengajar Socials",
            desc: "Visualisasi kegiatan sosial mengajar. Desain feed yang ramah anak dan informatif, serta dokumentasi kegiatan via Instagram Story.",
            tags: ["Educational Content", "Documentation", "Social Campaign"],
            gallery: [
              "https://images.unsplash.com/photo-1427504746696-ea3093607dbe?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
            ]
          }
        ]
      },
      {
        id: 'event_assets',
        category: "Event Visual Assets",
        icon: <ImageIcon size={24} />,
        color: "bg-emerald-600",
        items: [
          {
            id: 'hmti_event',
            title: "HMTI Event Kit",
            desc: "Paket visual lengkap untuk event besar himpunan: Poster Seminar Nasional, X-Banner, ID Card Panitia, dan Backdrop panggung.",
            tags: ["Poster", "Merchandise", "Stage Backdrop"],
            gallery: [
              "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800"
            ]
          },
          {
            id: 'poljar_event',
            title: "Polinema Mengajar Assets",
            desc: "Visual branding untuk event 'Sobat Baca'. Mendesain aset cetak dan digital yang konsisten dengan tema sosial pendidikan.",
            tags: ["Campaign Design", "Flyer", "Banner"],
            gallery: [
              "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1599587428731-294025d2d473?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
            ]
          },
          {
            id: 'pasti_event',
            title: "UKM PASTI Campaign",
            desc: "Aset visual kampanye anti-narkoba. Poster edukasi, stiker kampanye, dan materi presentasi penyuluhan ke sekolah-sekolah.",
            tags: ["Educational Poster", "Campaign Assets", "Sticker"],
            gallery: [
              "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1626785774573-4b7993143a2d?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800"
            ]
          }
        ]
      },
      {
        id: 'rebranding',
        category: "Rebranding Project",
        icon: <PenTool size={24} />,
        color: "bg-orange-500",
        items: [
          {
            id: 'shamila',
            title: "Sambal Shamila Rebranding",
            desc: "Transformasi total identitas produk UMKM. Mendesain ulang Logo agar lebih modern, Label Kemasan (Packaging) yang premium, dan panduan warna brand.",
            tags: ["Logo Design", "Packaging", "Brand Identity"],
            gallery: [
              "https://images.unsplash.com/photo-1627483298606-1293ad1b255c?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1590845947698-8924d7409b56?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800"
            ]
          }
        ]
      },
      {
        id: 'motion_video',
        category: "Motion & Video Creative",
        icon: <Video size={24} />,
        color: "bg-purple-600",
        items: [
          {
            id: 'hmti_video',
            title: "HMTI Video Display & Company Profile",
            desc: "Produksi video profil organisasi dan video display untuk LED screen saat acara besar. Menggabungkan motion graphic dan live footage.",
            tags: ["Video Profile", "Motion Graphics", "Event Display"],
            gallery: [
              "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"
            ]
          },
          {
            id: 'dudukbaca_reels',
            title: "DudukBaca Viral Reels",
            desc: "Pembuatan konten video pendek (Reels/TikTok) bertema literasi. Menggunakan teknik transisi cepat dan storytelling visual. Views mencapai 160k+.",
            tags: ["Short Video", "Viral Content", "Trend Editing"],
            gallery: [
              "https://images.unsplash.com/photo-1574717436420-4694556e6b60?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1526657989501-8c4391e6b00b?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1518186233392-c232efea6ab4?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1535742296067-ff24a3c31b3e?auto=format&fit=crop&q=80&w=800"
            ]
          },
          {
            id: 'poljar_video',
            title: "Polinema Mengajar Documentation",
            desc: "Video dokumentasi kegiatan sosial dan teaser event. Mengabadikan momen emosional dan interaksi sosial dengan pendekatan sinematik.",
            tags: ["Cinematic Vlog", "Event Teaser", "Documentary"],
            gallery: [
              "https://images.unsplash.com/photo-1579294800821-694d95e6484e?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1516280440614-6697288d5d38?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1496360700854-46a36f8f5331?auto=format&fit=crop&q=80&w=800"
            ]
          }
        ]
      }
    ],

    web: [
      {
        id: 1,
        title: "Sistem Manajemen SDM Jurusan",
        category: "Top 10 Best App",
        role: "UI/UX & Mobile Dev",
        desc: "Aplikasi distribusi beban kerja dosen (Non-Teaching). Masuk dalam **Top 10 Best Applications 2024**. Membantu Kaprodi memantau poin keaktifan dosen.",
        features: ["Poin Beban Kerja", "Ranking Dosen", "Export Laporan"],
        tech: ["Flutter", "Laravel", "Figma", "MySQL"],
        links: { demo: "#", repo: "https://github.com/dona-dev" },
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 2,
        title: "Sistem Aset Akademik UPA PP",
        category: "Asset Management System",
        role: "Fullstack Developer",
        desc: "Sistem informasi Unit Penunjang Akademik (UPA) Perawatan. Mengelola inventaris aset lab, jadwal maintenance, dan tracking perbaikan alat.",
        features: ["Asset Tracking", "Maintenance Schedule", "QR Code Scan"],
        tech: ["PHP Native", "Bootstrap", "MySQL"],
        links: { demo: "#", repo: "https://github.com/dona-dev" },
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 3,
        title: "Track Content Creator (Gamification)",
        category: "System Analyst",
        role: "System Analyst",
        desc: "Konsep sistem manajemen konten kreator berbasis game. Kreator mendapatkan XP, Level, dan Badge berdasarkan performa konten untuk memacu produktivitas.",
        features: ["Gamification Engine", "Leaderboard", "Analytics Dashboard"],
        tech: ["React.js", "Firebase", "Node.js"],
        links: { demo: "#", repo: "#" },
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 4,
        title: "Smart Bin E-Waste Detector",
        category: "IoT Innovation",
        role: "Product Innovator",
        desc: "Tempat sampah pintar berbasis IoT yang otomatis mendeteksi jenis sampah elektronik. Terintegrasi dengan aplikasi mobile untuk sistem reward poin.",
        features: ["Object Detection", "Servo Control", "Mobile App"],
        tech: ["Arduino", "Python (AI)", "RapidMiner"],
        links: { demo: "#", repo: "#" },
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 5,
        title: "Redesign Website Pemkot Kediri",
        category: "UI/UX Competition",
        role: "UI/UX Designer",
        desc: "Proyek kompetisi desain ulang portal pemerintahan Kota Kediri. Fokus pada aksesibilitas informasi publik, modernisasi antarmuka, dan integrasi layanan smart city.",
        features: ["User-Centric Design", "Government Portal", "Accessibility"],
        tech: ["Figma", "Prototyping", "User Research"],
        links: { demo: "#", repo: "#" },
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
      }
    ],

    org: [
      {
        id: "hmti_org",
        organization: "Himpunan Mahasiswa Teknologi Informasi (HMTI)",
        totalPeriod: "2 thn 1 bln",
        description: "Organisasi eksekutif mahasiswa tingkat jurusan yang menaungi ribuan mahasiswa TI.",
        roles: [
          {
            title: "Ketua Departemen Kominfo",
            date: "Feb 2024 - Feb 2025",
            desc: "Memimpin departemen strategis. Mengelola seluruh output media, menyupervisi tim kreatif, dan memastikan keselarasan informasi.",
            highlight: "Leadership"
          },
          {
            title: "Organizing Committee",
            date: "Feb 2023 - Feb 2024",
            desc: "Koordinator Acara 'Seminar Nasional' dan Ketua Pelaksana 'Tamu Studi Banding' (2 kali).",
            highlight: "Event Management"
          },
          {
            title: "Staff Departemen Kominfo",
            date: "2022 - 2023",
            desc: "Memulai karir sebagai staf, belajar teknis desain dan publikasi media.",
            highlight: "Technical Execution"
          }
        ]
      },
      {
        id: "pasti_org",
        organization: "UKM Pasukan Anti Narkotika (PASTI)",
        totalPeriod: "1 thn 3 bln",
        description: "Unit Kegiatan Mahasiswa yang fokus pada pencegahan dan penyuluhan bahaya narkoba.",
        roles: [
          {
            title: "Ketua Pelaksana 'Penyuluhan Narkoba 2024'",
            date: "Jan 2024",
            desc: "Memimpin inisiatif edukasi ke 8 SMP se-Kota Malang. Mengatur konsep acara hingga teknis lapangan.",
            highlight: "Project Lead"
          },
          {
            title: "Speaker (Seminar Hari Narkoba)",
            date: "Jun 2023",
            desc: "Pembicara di seminar pencegahan narkoba Desa Mergosono.",
            highlight: "Public Speaking"
          }
        ]
      },
      {
        id: "poljar_org",
        organization: "Polinema Mengajar",
        totalPeriod: "Nov 2024 - Sekarang",
        description: "Organisasi sosial yang bergerak di bidang pendidikan dan pengabdian masyarakat.",
        roles: [
          {
            title: "Staff Media & Informasi",
            date: "Nov 2024 - Sekarang",
            desc: "Membuat konten edukasi seputar pembelajaran. Terlibat dalam dokumentasi kegiatan sosial dan PDD event.",
            highlight: "Social Education"
          }
        ]
      },
      {
        id: "dudukbaca_org",
        organization: "Komunitas DudukBaca Malang",
        totalPeriod: "2024 - Sekarang",
        description: "Gerakan literasi sosial yang aktif mengkampanyekan budaya membaca di ruang publik.",
        roles: [
          {
            title: "Content Creator Coordinator",
            date: "Sep 2025 - Sekarang",
            desc: "Mengawasi quality control konten dan strategi pertumbuhan akun.",
            highlight: "Team Lead"
          },
          {
            title: "Staff Content Creator",
            date: "2024 - Agt 2025",
            desc: "Bergabung sebagai kreator konten video edukasi dan dokumentasi.",
            highlight: "Content"
          }
        ]
      }
    ]
  };

  const getGradient = () => {
    switch (activeTab) {
      case 'design': return 'from-rose-50 to-orange-50';
      case 'web': return 'from-slate-50 to-blue-50';
      case 'org': return 'from-purple-50 to-indigo-50';
      default: return 'from-gray-50 to-slate-50';
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 bg-gradient-to-br ${getGradient()} font-sans text-slate-800 pb-20`}>

      {/* --- HERO SECTION --- */}
      <header className="pt-20 pb-12 px-6 max-w-6xl mx-auto text-center relative overflow-hidden">
        {/* Background Glow FX (Soft) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/40 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/60 mb-8 shadow-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600">Open for Opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900">
            Mohamad Dona Haryanto
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Mahasiswa <strong className="text-blue-600 font-semibold">Sistem Informasi Bisnis</strong> yang menjembatani <strong className="text-rose-500 font-semibold">Kreativitas Visual</strong> dan <strong className="text-purple-600 font-semibold">Analisis Teknis</strong>.
            <br className="hidden md:block" /> Spesialis dalam UI/UX, Manajemen Konten, dan Pengembangan Sistem.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <SocialButton icon={<Linkedin size={20} />} href="https://linkedin.com/in/mohamad-dona-haryanto" label="LinkedIn" />
            <SocialButton icon={<Mail size={20} />} href="mailto:donaharyanto007@gmail.com" label="Email" />
            <SocialButton icon={<Instagram size={20} />} href="https://instagram.com/m.dona.h_" label="Instagram" />
            <button className="flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full font-medium shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              <Download size={18} /> Download Full CV
            </button>
          </div>

          {/* --- CUSTOM TAB NAVIGATION --- */}
          <div className="flex flex-wrap justify-center gap-2 bg-white/60 p-1.5 rounded-2xl backdrop-blur-xl border border-white/50 shadow-sm max-w-fit mx-auto sticky top-4 z-50">
            <NavButton
              active={activeTab === 'design'}
              onClick={() => setActiveTab('design')}
              icon={<Palette size={18} />}
              label="Creative & Branding"
              activeClass="bg-rose-500 text-white shadow-rose-200"
            />
            <NavButton
              active={activeTab === 'web'}
              onClick={() => setActiveTab('web')}
              icon={<Code size={18} />}
              label="Tech & Systems"
              activeClass="bg-blue-600 text-white shadow-blue-200"
            />
            <NavButton
              active={activeTab === 'org'}
              onClick={() => setActiveTab('org')}
              icon={<Users size={18} />}
              label="Organizational Journey"
              activeClass="bg-purple-600 text-white shadow-purple-200"
            />
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="px-6 max-w-6xl mx-auto mb-20 min-h-[600px]">

        {/* === SECTION 1: CREATIVE DESIGN (Dynamic Stack Engine) === */}
        {activeTab === 'design' && (
          <div className="space-y-20 animate-fade-in-up">
            {portfolioData.design.map((section) => (
              <div key={section.id} className="relative">
                {/* Section Header (Centered) */}
                <div className="flex flex-col items-center gap-3 mb-10 text-center">
                  <div className={`p-4 rounded-2xl text-white shadow-lg ${section.color} transform rotate-3`}>
                    {section.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 tracking-tight">
                    {section.category}
                  </h3>
                  <div className="h-1 w-20 bg-slate-200 rounded-full"></div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-12">
                  {section.items.map((item, idx) => (
                    <div
                      key={item.id}
                      className="group bg-white rounded-[2.5rem] p-8 shadow-md border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer overflow-hidden relative"
                      onClick={() => toggleCard(item.id)}
                    >
                      {/* DYNAMIC STACK CONTAINER */}
                      <div className={`relative w-full mb-8 flex items-center justify-center transition-all duration-500 ${expandedCard === item.id ? 'h-auto min-h-[400px]' : 'h-[350px]'}`}>
                        {/* Hints */}
                        <div className="absolute top-0 right-0 z-50 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-slate-500 border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                          {expandedCard === item.id ? 'CLICK TO CLOSE' : `CLICK TO SEE ${item.gallery.length} PHOTOS`}
                        </div>

                        {/* STACKED VIEW (Initial State) */}
                        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${expandedCard === item.id ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                          {item.gallery.slice(0, 4).map((img, i) => {
                            // Kalkulasi rotasi & posisi acak supaya natural
                            const rotate = (i % 2 === 0 ? 1 : -1) * (i * 3 + 2);
                            const zIndex = 10 - i;
                            const scale = 1 - (i * 0.05); // Makin belakang makin kecil dikit
                            const translateY = i * 5; // Makin belakang makin turun dikit

                            return (
                              <img
                                key={i}
                                src={img}
                                alt={`Preview ${i}`}
                                className="absolute w-[70%] md:w-[60%] h-[280px] object-cover rounded-2xl shadow-xl border-4 border-white transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                                style={{
                                  transform: `rotate(${rotate}deg) translateY(${translateY}px) scale(${scale})`,
                                  zIndex: zIndex
                                }}
                              />
                            );
                          })}
                          {/* Counter Badge if many photos */}
                          {item.gallery.length > 1 && (
                            <div className="absolute bottom-4 right-[20%] bg-slate-900/80 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm z-20">
                              +{item.gallery.length - 1} More
                            </div>
                          )}
                        </div>

                        {/* EXPANDED GRID VIEW (Active State) */}
                        <div className={`w-full grid grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-500 ease-out ${expandedCard === item.id ? 'opacity-100 scale-100 relative' : 'opacity-0 scale-95 absolute pointer-events-none top-0'}`}>
                          {item.gallery.map((img, i) => (
                            <div key={i} className="rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 hover:shadow-xl transition-shadow h-48 md:h-64">
                              <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt={`Detail ${i}`} />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Project Text (Centered) */}
                      <div className="text-center max-w-3xl mx-auto relative z-10 bg-white pt-4">
                        <h4 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-rose-600 transition-colors">{item.title}</h4>
                        <p className="text-slate-500 leading-relaxed mb-6 text-base">{item.desc}</p>
                        <div className="flex flex-wrap justify-center gap-2">
                          {item.tags.map(tag => (
                            <span key={tag} className="px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wide">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* === SECTION 2: TECH & SYSTEMS === */}
        {activeTab === 'web' && (
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
            {portfolioData.web.map((item) => (
              <div key={item.id} className="bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                <div className="h-64 bg-slate-100 relative overflow-hidden group-hover:h-72 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />

                  <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <a href={item.links.repo} className="p-3 bg-white rounded-full text-slate-900 hover:bg-black hover:text-white transition-all shadow-xl flex items-center justify-center" title="View Code on GitHub">
                      <Github size={20} />
                    </a>
                  </div>

                  <div className="absolute bottom-4 left-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-sm`}>
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col relative">
                  <div className="relative z-10 flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 mb-4 flex items-center gap-2">
                      {item.role}
                    </p>
                    <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                    <div className="mb-6 space-y-2">
                      {item.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 relative z-10">
                    {item.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-slate-50 rounded-lg text-xs font-medium text-slate-600 border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* === SECTION 3: ORGANIZATIONAL JOURNEY === */}
        {activeTab === 'org' && (
          <div className="space-y-12 animate-fade-in-up">
            {portfolioData.org.map((org) => (
              <div key={org.id} className="bg-white/80 backdrop-blur rounded-[2rem] p-8 md:p-10 border border-purple-100 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-purple-400 to-purple-100"></div>
                <div className="md:pl-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-purple-50 pb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <Users className="text-purple-600" />
                        {org.organization}
                      </h3>
                      <p className="text-slate-500 mt-2 max-w-2xl">{org.description}</p>
                    </div>
                    <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-xl font-bold text-sm whitespace-nowrap">
                      Total: {org.totalPeriod}
                    </span>
                  </div>
                  <div className="space-y-8 relative">
                    <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-200"></div>
                    {org.roles.map((role, i) => (
                      <div key={i} className="relative pl-12 group">
                        <div className={`absolute left-0 top-1 w-10 h-10 rounded-full border-4 border-white flex items-center justify-center shadow-sm z-10 transition-colors ${i === 0 ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                          {i === 0 ? <ArrowUpRight size={18} /> : <div className="w-2 h-2 rounded-full bg-slate-400"></div>}
                        </div>
                        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                            <h4 className={`text-lg font-bold ${i === 0 ? 'text-purple-700' : 'text-slate-700'}`}>
                              {role.title}
                            </h4>
                            <span className="text-sm font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded">
                              {role.date}
                            </span>
                          </div>
                          <div className="mb-3">
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-purple-50 text-purple-600 mb-2">
                              {role.highlight}
                            </span>
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {role.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* --- EDUCATION & ACHIEVEMENTS & SKILLS (Pastel Soft) --- */}
      <section className="px-6 max-w-6xl mx-auto mb-12">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-600 via-purple-600 to-rose-600 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">Journey & Milestones</h2>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">

              {/* LEFT COLUMN: EDUCATION */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <GraduationCap size={24} className="text-blue-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>

                <div className="bg-white/5 backdrop-blur p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-white">Politeknik Negeri Malang</h4>
                    <span className="text-xs font-bold bg-green-500/20 text-green-300 px-3 py-1 rounded-full">Active Student</span>
                  </div>
                  <p className="text-blue-200 text-lg">D4 Sistem Informasi Bisnis</p>
                  <p className="text-slate-400 text-sm mt-1">2022 - Sekarang</p>
                  <div className="mt-4 flex gap-2">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300">System Analysis</span>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300">UI/UX Design</span>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="text-xl font-bold text-white">SMA Negeri 8 Kota Kediri</h4>
                  <p className="text-slate-300 text-lg">MIPA (Matematika & IPA)</p>
                  <p className="text-slate-400 text-sm mt-1">2018 - 2021</p>
                </div>
              </div>

              {/* RIGHT COLUMN: CERTIFICATIONS & AWARDS */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Award size={24} className="text-yellow-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Awards & Certification</h3>
                </div>

                {/* 1. TOEIC CARD */}
                <div className="bg-gradient-to-r from-blue-900/40 to-slate-900/40 backdrop-blur p-6 rounded-3xl border border-blue-500/30 flex items-center justify-between group">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Globe size={16} className="text-blue-400" />
                      <span className="text-xs font-bold text-blue-300 tracking-widest uppercase">Language Certification</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white">TOEIC Official</h4>
                    <p className="text-slate-400 text-sm">Polytechnic English Competence Test</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-5xl font-bold text-white tracking-tighter group-hover:text-blue-400 transition-colors">715</span>
                    <span className="text-xs font-medium text-blue-200 bg-blue-600/30 px-2 py-0.5 rounded">Upper Intermediate</span>
                  </div>
                </div>

                {/* 2. ACHIEVEMENTS */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Award 1 */}
                  <div className="bg-gradient-to-br from-yellow-500/10 to-orange-600/10 backdrop-blur p-5 rounded-3xl border border-yellow-500/20 text-center hover:-translate-y-1 transition-transform">
                    <div className="inline-block p-3 bg-yellow-500/20 rounded-full mb-3 text-yellow-400">
                      <Award size={20} />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">3rd</div>
                    <div className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-2">Place Winner</div>
                    <h4 className="text-sm font-bold text-white">Cipta Inovasi TIK</h4>
                    <p className="text-xs text-slate-400 mt-1">Smart Bin E-Waste IoT</p>
                  </div>

                  {/* Award 2 */}
                  <div className="bg-gradient-to-br from-rose-500/10 to-purple-600/10 backdrop-blur p-5 rounded-3xl border border-rose-500/20 text-center hover:-translate-y-1 transition-transform">
                    <div className="inline-block p-3 bg-rose-500/20 rounded-full mb-3 text-rose-400">
                      <TrendingUp size={20} />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">2nd</div>
                    <div className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">Place Winner</div>
                    <h4 className="text-sm font-bold text-white">Smart City 2025</h4>
                    <p className="text-xs text-slate-400 mt-1">Commodity Prediction AI</p>
                  </div>
                </div>

              </div>
            </div>

            {/* --- SKILLS & ARSENAL (Pastel Style) --- */}
            <div className="pt-10 border-t border-white/10">
              <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2 text-white">
                <Briefcase className="text-slate-400" size={24} /> Technical & Creative Arsenal
              </h3>

              <div className="grid md:grid-cols-3 gap-6">

                {/* 1. Creative Tools */}
                <div className="bg-white/5 backdrop-blur p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-rose-500/20 rounded-lg text-rose-400"><Palette size={20} /></div>
                    <h4 className="font-bold text-lg text-white">Creative Design</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Canva', 'Adobe Photoshop', 'Adobe Illustrator', 'Premiere Pro', 'CapCut', 'Figma', 'UI/UX'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-rose-500/10 text-rose-300 rounded-lg text-xs font-medium border border-rose-500/20 cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2. Tech Stack */}
                <div className="bg-white/5 backdrop-blur p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Code size={20} /></div>
                    <h4 className="font-bold text-lg text-white">Tech Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Flutter', 'Laravel', 'PHP', 'MySQL', 'HTML/CSS', 'RapidMiner', 'Python'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-lg text-xs font-medium border border-blue-500/20 cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. Productivity */}
                <div className="bg-white/5 backdrop-blur p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><Monitor size={20} /></div>
                    <h4 className="font-bold text-lg text-white">Productivity</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Microsoft Office', 'Google Workspace', 'Notion', 'Trello', 'Public Speaking', 'Leadership'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-lg text-xs font-medium border border-purple-500/20 cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-slate-400 text-sm pb-8">
        <p>&copy; 2026 Mohamad Dona Haryanto. Crafted with Passion.</p>
      </footer>
    </div>
  );
};

// UI Components
const NavButton = ({ active, onClick, icon, label, activeClass }) => (
  <button
    onClick={onClick}
    className={`
      flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 text-sm
      ${active
        ? `${activeClass} scale-105 shadow-lg`
        : 'bg-transparent text-slate-500 hover:bg-white hover:text-slate-900'}
    `}
  >
    {icon}
    {label}
  </button>
);

const SocialButton = ({ icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-400 hover:scale-110 hover:-translate-y-1 transition-all shadow-sm"
  >
    {icon}
  </a>
);

export default App;
import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Hammer,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wind,
  X,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Wind,
    title: "주방후드 교체",
    copy: "흡입력부터 배기 동선까지\n우리 집 주방에 맞춰 깔끔하게.",
    note: "후드 · 배관 · 역풍 점검",
    image: "/manus-storage/namdo-hood_2ef993c6.webp",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "가스레인지 교체",
    copy: "오래된 레인지를 안전하게 철거하고\n새 제품으로 정확하게 연결합니다.",
    note: "가스 연결 · 수평 · 누출 점검",
    image: "/manus-storage/namdo-gas_507fadcf.webp",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "방충망 교체",
    copy: "답답한 미세망부터 찢어진 방충망까지\n창에 꼭 맞게 새로 제작합니다.",
    note: "미세방충망 · 롤방충망 · 틀 수리",
    image: "/manus-storage/namdo-screen_a8120449.webp",
  },
];

const faqs = [
  ["출장 지역은 어디까지인가요?", "광주 전 지역과 나주, 목포, 장성, 담양, 화순 등 전남권 주요 지역을 방문합니다. 외곽 지역은 전화로 일정을 확인해 주세요."],
  ["당일 방문도 가능한가요?", "작업 일정이 비어 있다면 당일 방문이 가능합니다. 오전에 전화 주시면 가장 빠른 시간으로 안내해 드립니다."],
  ["제품을 직접 준비해야 하나요?", "직접 구매하셔도 되고, 원하시는 예산과 규격을 알려주시면 제품 상담부터 준비까지 도와드립니다."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const copyKakaoId = async () => {
    try {
      await navigator.clipboard.writeText("jskim082");
      window.alert("카카오톡 ID jskim082가 복사되었습니다. 카카오톡에서 검색해 주세요.");
    } catch {
      window.alert("카카오톡에서 ID jskim082를 검색해 주세요.");
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#f4f3ef] text-[#14201b]">
      <header className="site-header">
        <div className="container flex h-[76px] items-center justify-between">
          <button className="brand-mark" onClick={() => scrollTo("top")} aria-label="남도홈케어 홈으로 이동">
            <span className="brand-symbol">N</span>
            <span>
              <strong>남도홈케어</strong>
              <small>Gwangju · Jeonnam</small>
            </span>
          </button>

          <nav className="hidden items-center gap-9 md:flex" aria-label="주요 메뉴">
            <button onClick={() => scrollTo("services")}>서비스</button>
            <button onClick={() => scrollTo("process")}>작업 방식</button>
            <button onClick={() => scrollTo("area")}>출장 지역</button>
            <button onClick={() => scrollTo("faq")}>자주 묻는 질문</button>
          </nav>

          <a className="header-call hidden md:inline-flex" href="tel:010-3482-6164">
            <Phone size={15} /> 010-3482-6164
          </a>
          <button className="mobile-menu-button md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴 열기">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu md:hidden">
            {[["서비스", "services"], ["작업 방식", "process"], ["출장 지역", "area"], ["자주 묻는 질문", "faq"]].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)}>{label}</button>
            ))}
            <a href="tel:010-3482-6164"><Phone size={15} /> 전화 상담하기</a>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> 전남 · 광주 방문 교체 전문</div>
              <h1>집의 공기를<br /><em>새로 고치는</em> 기술.</h1>
              <p className="hero-description">주방후드, 가스레인지, 방충망까지.<br />매일 쓰는 집의 디테일을 제대로 교체합니다.</p>
              <div className="hero-actions">
                <button className="primary-button" onClick={() => scrollTo("contact")}>무료 상담전화 <Phone size={17} /></button>
                <button className="text-link" onClick={() => scrollTo("services")}>서비스 둘러보기 <span>↓</span></button>
              </div>
              <div className="trust-line">
                <div className="avatar-stack"><span>H</span><span>J</span><span>G</span></div>
                <span><strong>1,200+</strong> 가구의 선택</span>
                <span className="trust-divider" />
                <span className="rating"><Star size={13} fill="currentColor" /> 4.9</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-wrap">
                <img src="/manus-storage/namdo-hood_2ef993c6.webp" alt="남도홈케어가 교체하는 실제 주방후드" />
                <div className="hero-image-overlay" />
                <div className="image-caption"><span>01</span><b>우리 집 주방에 맞는 정확한 교체</b></div>
              </div>
              <div className="hero-badge"><span className="badge-line" /> <b>ABOUT</b><br /><span>남도홈케어</span></div>
              <div className="hero-orbit" aria-hidden="true" />
            </div>
          </div>
          <div className="scroll-indicator"><span /> scroll to explore</div>
        </section>

        <section className="statement-section">
          <div className="container statement-grid">
            <div className="section-kicker">WHY NAMDO <span>— 01</span></div>
            <div>
              <h2>작은 불편을 그냥<br /><span>넘기지 않는 사람들.</span></h2>
              <p>눈에 잘 띄지 않아도, 매일 쓰는 공간은 정확해야 하니까.<br />한 번의 작업에도 생활의 기준을 담습니다.</p>
            </div>
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="container">
            <div className="section-head">
              <div><div className="section-kicker">WHAT WE DO <span>— 02</span></div><h2>필요한 것만,<br /><span>제대로 교체합니다.</span></h2></div>
              <p>제품 상담부터 철거, 설치, 마감까지<br />한 팀이 처음부터 끝까지 책임집니다.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return <article className="service-card" key={service.number}>
                  <div className="service-image"><img src={service.image} alt={service.title} /><div className="service-image-shade" /><span className="service-number">{service.number}</span><Icon className="service-icon" size={23} /></div>
                  <div className="service-content"><h3>{service.title}</h3><p>{service.copy}</p><div className="service-note"><Check size={15} /> {service.note}</div></div>
                  <button className="service-arrow" onClick={() => scrollTo("contact")} aria-label={`${service.title} 상담하기`}><ArrowUpRight size={19} /></button>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section id="process" className="process-section">
          <div className="container process-grid">
            <div className="process-intro"><div className="section-kicker">HOW WE WORK <span>— 03</span></div><h2>복잡하지 않게,<br /><em>정확하게.</em></h2><p>상담 한 통이면 충분합니다.<br />현장 상황에 맞는 가장 좋은 방법을 함께 찾습니다.</p><a className="inline-call" href="tel:010-3482-6164"><Phone size={16} /> 010-3482-6164</a></div>
            <div className="process-list">
              {[['01', '전화 · 사진 상담', '현재 상태와 원하는 방향을 편하게 알려주세요.'], ['02', '현장 확인 · 견적', '실측과 구조 확인 후 작업 전 정확한 견적을 안내합니다.'], ['03', '안전한 교체 · 마감', '약속한 시간에 방문해 깔끔한 마감까지 책임집니다.']].map(([number, title, copy]) => <div className="process-step" key={number}><span className="process-number">{number}</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight size={17} /></div>)}
            </div>
          </div>
        </section>

        <section id="area" className="area-section">
          <div className="container area-grid">
            <div className="area-photo"><img src="/manus-storage/namdo-screen_a8120449.webp" alt="방충망 제작 및 교체 작업" /><div className="area-photo-label">FROM<br /><b>GWANGJU</b></div></div>
            <div className="area-copy"><div className="section-kicker">SERVICE AREA <span>— 04</span></div><h2>광주에서 전남까지,<br /><span>집 앞까지 갑니다.</span></h2><p>광주 전 지역을 중심으로 나주, 화순, 담양, 장성, 목포 등 전남권 주요 지역에 방문합니다.</p><div className="area-tags"><span>광주 전 지역</span><span>나주</span><span>화순</span><span>담양</span><span>장성</span><span>목포</span><span>전남권 협의</span></div><div className="area-note"><Clock3 size={18} /><div><b>평일 09:00 — 19:00</b><small>주말 및 야간은 사전 예약으로 운영합니다.</small></div></div></div>
          </div>
        </section>

        <section id="faq" className="faq-section">
          <div className="container faq-grid"><div><div className="section-kicker">FAQ <span>— 05</span></div><h2>궁금한 점이<br /><span>있으신가요?</span></h2><p>상담 전 자주 묻는 내용을<br />먼저 확인해 보세요.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'is-open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><ChevronDown size={19} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-grid"><div className="contact-copy"><div className="section-kicker">LET'S TALK <span>— 06</span></div><h2>집을 바꾸는 일,<br /><em>오늘 시작해 보세요.</em></h2><p>사진 한 장, 짧은 설명만 보내주셔도<br />가능한 작업과 예상 비용을 안내해 드립니다.</p><div className="contact-direct"><span>빠른 전화 상담</span><a href="tel:010-3482-6164">010-3482-6164 <ArrowUpRight size={17} /></a><button type="button" className="kakao-button" onClick={copyKakaoId}>카카오톡 ID 복사 · jskim082 <ArrowUpRight size={16} /></button></div></div><div className="contact-card"><div className="contact-card-icon"><Phone size={22} /></div><h3>전화 한 통으로<br />무료 상담을 받아보세요.</h3><p>주방후드, 가스레인지, 방충망 교체 상담을 빠르게 안내해 드립니다.</p><a className="primary-button" href="tel:010-3482-6164">무료 상담전화 <Phone size={17} /></a><small>사업자등록번호 415-10-63787</small></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><div className="brand-mark footer-brand"><span className="brand-symbol">N</span><span><strong>남도홈케어</strong><small>Gwangju · Jeonnam</small></span></div><p>주방후드 · 가스레인지 · 방충망 교체<br />광주 · 전남 방문 전문</p><div className="footer-meta"><span>© 2026 NAMDO HOMECARE</span><span>사업자등록번호 415-10-63787</span></div></div></footer>
      <a className="floating-call" href="tel:010-3482-6164"><Phone size={18} /><span>전화 상담</span></a>
    </div>
  );
}

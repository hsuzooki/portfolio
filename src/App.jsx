import './App.css'

const works = [
		{
				category: 'Product / UI',
				title: 'パネルン',
				text: '店舗向けパネル管理システムのUI設計・フロント実装。',
		},
		{
				category: 'Admin UI',
				title: '管理画面デザイン',
				text: 'お問い合わせ、並び替え、モーダルなど運用しやすい管理画面を制作。',
		},
		{
				category: 'App / Side Project',
				title: '令和どうぶつ占い',
				text: 'React/Viteで制作した診断アプリ。',
		},
]

function App() {
	return (
		<main className="portfolio">
			<div className="bgAnimation">
				<span className="bgCircle bgCircle01"></span>
				<span className="bgCircle bgCircle02"></span>
				<span className="bgCircle bgCircle03"></span>
			</div>

			<header className="siteHeader">
					<a href="#" className="siteLogo">
							Hiroaki Suzuki
					</a>

					<nav className="siteNav">
							<a href="#works">Works</a>
							<a href="#about">About</a>
							<a href="#skills">Skills</a>
							<a href="#contact">Contact</a>
					</nav>
			</header>

			<section className="hero fadeIn">
					<p className="hero_label">Web Portfolio</p>

					<h1 className="hero_title">
							Web Design<br />
							Frontend<br />
							UI Design
					</h1>

					<p className="hero_text">
							管理画面・Webサイト・UI設計を中心に、使いやすく伝わりやすい画面づくりを行っています。
					</p>
			</section>

			<section className="works fadeIn" id="works">
					<h2 className="section_title">Works</h2>

					<div className="work_grid">
							{works.map((work) => (
									<article className="work_card" key={work.title}>
											<div className="work_image">
													<span>{work.title}</span>
											</div>

											<div className="work_body">
													<p className="work_category">{work.category}</p>
													<h3>{work.title}</h3>
													<p>{work.text}</p>
											</div>
									</article>
							))}
					</div>
			</section>

			<section className="about fadeIn" id="about">
					<h2 className="section_title">About</h2>

					<div className="about_box">
							<p>
									Webサイト制作、管理画面UI、フロントエンド実装を中心に制作しています。
									見た目の美しさだけでなく、実際の運用で使いやすい画面設計を意識しています。
							</p>
					</div>
			</section>

			<section className="skills fadeIn" id="skills">
					<h2 className="section_title">Skills</h2>

					<div className="skill_list">
							<span>HTML</span>
							<span>CSS</span>
							<span>JavaScript</span>
							<span>React</span>
							<span>Vite</span>
							<span>PHP</span>
							<span>UI Design</span>
					</div>
			</section>

			<section className="contact fadeIn" id="contact">
					<h2 className="section_title">Contact</h2>

					<div className="contact_box">
							<p>制作のご相談・お問い合わせはこちらからお願いいたします。</p>
							<a href="mailto:sample@example.com" className="contact_btn">
									Contact Me
							</a>
					</div>
			</section>
		</main>
	)
}

export default App
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib, faCode, faGear } from '@fortawesome/free-solid-svg-icons'

const works = [
	{
		categories: ['LOGO', 'DESIGN', 'HTML/CSS'],
		title: 'MOSHIMOSHIBOOKING',
		image: '/images/works/logo_moshimoshibooking.png',
	},
	{
		categories: ['LOGO'],
		title: 'GEE STYLE',
		image: '/images/works/logo_geestyle.png',
	},
	{
		categories: ['LOGO', 'DESIGN', 'HTML/CSS'],
		title: 'CBD GARDEN',
		image: '/images/works/logo_cbdgarden.jpg',
	},
	{
		categories: ['LOGO', 'DESIGN', 'HTML/CSS'],
		title: 'VIVO',
		image: '/images/works/logo_vivo.png',
	},
]

const services = [
	{
		icon: faPenNib,
		title: 'UI / UX Design',
		label: '管理画面設計・UI改善',
		text: '管理画面や店舗向けシステムを中心に、実際の運用を想定した使いやすいUI設計を行います。',
	},
	{
		icon: faCode,
		title: 'Frontend',
		label: 'React / JavaScript / Animation',
		text: 'React、JavaScript、CSSを使用し、モーダル・並び替え・動きのあるUIなどを実装します。',
	},
	{
		icon: faGear,
		title: 'Product Design',
		label: 'サービス設計・運用改善',
		text: '見た目だけでなく、導線や更新性、運用のしやすさまで考えたプロダクト制作を行います。',
	},
]

function App() {
	return (
		<main className="portfolio">

			<header className="siteHeader">
				<a href="#" className="siteLogo">
					H//S
				</a>
				<nav className="siteNav">
					<a href="#works">Works</a>
					<a href="#about">About</a>
					<a href="#skills">Skills</a>
					<a href="#contact">Contact</a>
				</nav>
			</header>

			<section className="hero">
				<video className="heroVideo" autoPlay muted loop playsInline>
					<source src="/kv.mp4" type="video/mp4" />
				</video>
				<div className="heroOverlay"></div>
				<div className="heroContent">
					<p className="hero_label">Web Portfolio</p>
					<h1 className="hero_title">
						Web Design<br />
						Frontend<br />
						UI Design
					</h1>
					<p className="hero_text">
						管理画面・Webサイト・UI設計を中心に、
						使いやすく伝わりやすい画面づくりを行っています。
					</p>
				</div>
			</section>

			<section id="service" className="service fadeIn">
				<h2 className="section_title">Service</h2>
				<ul className="service_lists">
					{services.map((service) => (
						<li className="service_list" key={service.title}>
							<div className="service_icon">
								<FontAwesomeIcon icon={service.icon} />
							</div>
							<h3 className="service_title">{service.title}</h3>
							<p className="service_label">{service.label}</p>
							<p className="service_text">{service.text}</p>
						</li>
					))}
				</ul>
			</section>

			<section id="works" className="works fadeIn">
				<h2 className="section_title">Works</h2>
				<ul className="works_lists">
					{works.map((work) => (
						<li className="works_list" key={work.title}>
							<div className="works_thumbnail">
								<img src={work.image} className="works_image" alt={work.title} />
							</div>
							<ul className="works_category_lists">
								{work.categories.map((category) => (
									<li className="works_category_list" key={category}>
										{category}
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
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
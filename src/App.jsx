import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faPenNib,
	faCode,
	faGear,
	faLink,
} from '@fortawesome/free-solid-svg-icons'

const works = [
	{
		categories: ['LOGO'],
		title: 'MOSHIMOSHIBOOKING',
		image: '/images/works/logo_moshimoshibooking.png',
	},
	{
		categories: ['LOGO'],
		title: 'GEE STYLE',
		image: '/images/works/logo_geestyle.png',
	},
	{
		categories: ['LOGO', 'HTML･CSS', 'PHP'],
		title: 'CBD GARDEN',
		image: '/images/works/logo_cbdgarden.jpg',
		url: 'https://cbdgarden.jp',
	},
	{
		categories: ['WEB DESIGN', 'HTML･CSS', 'PHP'],
		title: 'YAMAICHIEN',
		image: '/images/works/logo_yamaichien.jpg',
		url: 'https://www.yamaichien.jp',
	},
	{
		categories: ['LOGO', 'WEB DESIGN', 'HTML･CSS', 'PHP'],
		title: 'studio ZIPPER',
		image: '/images/works/logo_studiozipper.jpg',
		url: 'https://www.studio-zipper.com',
	},
	{
		categories: ['HTML･CSS', 'PHP'],
		title: 'tonkatsu SORA',
		image: '/images/works/logo_sora.jpg',
		url: 'https://www.tonkatsu555.com',
	},
	{
		categories: ['WEB DESIGN', 'HTML･CSS'],
		title: 'tochikaihatsu',
		image: '/images/works/logo_tochikaihatsu.jpg',
		url: 'https://tochi-kaihatu.jp',
	},
	{
		categories: ['WEB DESIGN', 'HTML･CSS', 'PHP'],
		title: 'sanki',
		image: '/images/works/logo_sanki.jpg',
		url: 'https://www.sanki-ltd.com',
	},
	{
		categories: ['LOGO', 'WEB DESIGN', 'HTML･CSS'],
		title: 'LEADCOURIL',
		image: '/images/works/logo_leadcouril.jpg',
		url: 'https://www.leadcouril.net',
	},
	{
		categories: ['WEB DESIGN', 'HTML･CSS', 'PHP'],
		title: 'OZ',
		image: '/images/works/logo_oz.jpg',
		url: 'https://www.oz-web.jp',
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
	const [activeCategory, setActiveCategory] = useState('ALL')

	const categories = [
		'ALL',
		'LOGO',
		'WEB DESIGN',
		'HTML･CSS',
		'PHP',
	]

	const filteredWorks = activeCategory === 'ALL'
		? works
		: works.filter((work) =>
			work.categories.includes(activeCategory)
		)

	return (
		<main className="portfolio">

			<header className="siteHeader">
				<a href="#" className="siteLogo">
					H//S
				</a>
				<nav className="siteNav">
					<a href="#works">WORKS</a>
					<a href="#about">ABOUT</a>
					<a href="#skills">SKILLS</a>
					<a href="#contact">CONTACT</a>
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
						ロゴデザイン・WEBサイト・管理画面 等UI設計を中心に、
						使いやすく伝わりやすい画面づくりを行っています。
					</p>
				</div>
			</section>

			<section id="service" className="service fadeIn">
				<h2 className="section_title">SERVICE</h2>
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

			<section className="works fadeIn" id="works">
				<div className="works_header">
					<h2 className="section_title">WORKS</h2>

					<div className="works_filters" role="group" aria-label="制作実績の絞り込み">
						{categories.map((category) => (
							<button
								type="button"
								className={`works_filter ${
									activeCategory === category ? 'is-active' : ''
								}`}
								key={category}
								onClick={() => setActiveCategory(category)}
								aria-pressed={activeCategory === category}
							>
								{category}
							</button>
						))}
					</div>
				</div>

				<ul className="works_lists" key={activeCategory}>
					{filteredWorks.map((work, index) => (
						<li className="works_list" key={work.title} style={{ '--work-delay': `${index * 60}ms` }}>
							<div className="works_thumbnail">
								{work.categories.includes('HTML･CSS') && work.url ? (
								<a href={work.url} className="works_thumbnail works_thumbnail--link" target="_blank" rel="noopener noreferrer" aria-label={`${work.title}のサイトを別タブで開く`}>
									<img src={work.image} className="works_image" alt={work.title} loading="lazy" />
									<span className="works_external" aria-hidden="true">
										<FontAwesomeIcon icon={faLink} />
									</span>
								</a>
							) : (
								<div className="works_thumbnail">
									<img src={work.image} className="works_image" alt={work.title} loading="lazy" />
								</div>
							)}
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

				<p className="works_result" role="status">
					{filteredWorks.length === 0
						? '該当する制作実績はありません。'
						: `${filteredWorks.length}件の制作実績`}
				</p>
			</section>

			<section className="about fadeIn" id="about">
				<h2 className="section_title">ABOUT</h2>

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
						<span>WordPress</span>
						<span>Shopify</span>
						<span>CMS</span>
					</div>
			</section>

			<section className="contact fadeIn" id="contact">
					<h2 className="section_title">CONTACT</h2>

					<div className="contact_box">
						<p>制作のご相談・お問い合わせはこちらからお願いいたします。</p>
						<a href="mailto:h.suzooki@gmail.com" className="contact_btn">
							Contact Me
							<FontAwesomeIcon
								icon={faPaperPlane}
								className="contact_icon"
							/>
						</a>
					</div>
			</section>
		</main>
	)
}

export default App
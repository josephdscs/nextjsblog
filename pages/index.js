import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Layout from '../components/layout'
import * as utilStyles from '../styles/utils.module.css'

export default function Home ({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className={utilStyles.headingMd}>…</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							{title}
							<br />
							{id}
							<br />
							{date}
						</li>
					))}
				</ul>
			</section>
		</Layout>
	)
}

export async function getStaticProps () {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}
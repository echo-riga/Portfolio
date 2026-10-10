import Link from "next/link";
import styles from "./studio.module.css";

export const metadata = { title: "Studio — Live demo", description: "A working demonstration of the Studio sample project." };

export default function StudioDemo() {
  return <main className={styles.demo}>
    <div className={styles.demoBar}><span>Studio · Sample project</span><Link href="/projects">Back to portfolio ↗</Link></div>
    <div className={styles.site}>
      <header className={styles.header}><a className={styles.brand} href="#home">studio.</a><nav aria-label="Studio navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav></header>
      <section id="home" className={styles.hero}><div><h1>Good things.<br />Made together.</h1><p>An independent creative studio.</p><a className={styles.button} href="#work">Explore our work ↓</a></div><div className={styles.sculpture} aria-hidden="true"><span /><span /><span /></div></section>
      <section id="work" className={styles.section}><h2>Selected work</h2><div className={styles.work}><article><div className={styles.artOne} aria-hidden="true" /><h3>A considered identity</h3><p>Strategy / Brand design</p></article><article><div className={styles.artTwo} aria-hidden="true" /><h3>A fresh perspective</h3><p>Digital / Art direction</p></article></div></section>
      <section id="about" className={styles.section}><h2>Independent by design.</h2><p className={styles.copy}>A studio concept built around simple forms, thoughtful color, and a clear visual language. This working demo brings the portfolio’s sample project to life.</p></section>
      <section id="contact" className={styles.section}><h2>Let’s make something good.</h2><p className={styles.copy}>Explore the project’s screenshots and implementation in the portfolio.</p><Link className={styles.button} href="/projects">View the project ↗</Link></section>
      <footer className={styles.footer}>Studio demo · Illustrative work, not a real studio.</footer>
    </div>
  </main>;
}

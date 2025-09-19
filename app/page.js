import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>Welcome to My Website</h1>
      <p>This is built with Next.js 13 App Router.</p>
      <a href="/about">About</a> | <a href="/contact">Contact</a>
    </main>
  );
}

import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className={styles.grid}>
        <Link href="/blog">
          <a className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </Link>

        <Link href="/user">
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>User &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </Link>

        <Link href="/user">
          <a className={styles.card}>
            <h2>User &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </Link>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
      <Image
        src="/khabib.jpg"
        width={200}
        height={200}
        alt="Khabib Nurmagomedov"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <Image src="/logo.jpg" width={200} height={200} alt="Logo Kue" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <Image
        src="/animasi.png"
        width={200}
        height={200}
        alt="Animasi Checklist"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
        temporibus rem odit ab aperiam numquam, veniam obcaecati sequi
        veritatis, minima quis dolores impedit quasi tenetur quas totam in vel
        nam.
      </p>
    </Layout>
  );
};

export default Home;

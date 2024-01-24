import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Homepage.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Homepage}>
        <h1>Pokemon Page!</h1>
        <Image
          src="https://images.unsplash.com/photo-1605979257913-1704eb7b6246?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="pokemon"
          width="1000"
          height="600"
        />
      </div>
    </>
  );
}
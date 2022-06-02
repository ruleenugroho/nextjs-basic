import Router from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layout";

export default function Custom404() {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 2000);
  }, []);
  return (
    <Layout pageTitle="404 Page">
      <div>
        <h1>Ooopss..</h1>
        <h2>Halaman anda cari tidak ditemukan</h2>
      </div>
    </Layout>
  );
}

import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function UserDetail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout pageTitle="User Detail Page">
      <p>User Detail Page {id}</p>
    </Layout>
  );
}

import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";

interface UserProps {
  dataUsers: Array<any>;
}

export default function Users(props: UserProps) {
  const { dataUsers } = props;
  const router = useRouter();

  return (
    <Layout pageTitle="Users Page">
      <span className={styles.grid}>
        {dataUsers.map((user, index) => (
          <a
            className={styles.card}
            key={index}
            onClick={() => router.push(`/user/${user.id}`)}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </a>
        ))}
      </span>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}

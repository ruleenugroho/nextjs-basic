import Layout from "../../components/Layout";

interface UserProps {
  dataUsers: Array<any>;
}

export default function Users(props: UserProps) {
  const { dataUsers } = props;

  console.log(dataUsers);
  return (
    <Layout pageTitle="Users Page">
      {dataUsers.map((user, index) => (
        <span key={index}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </span>
      ))}
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

import type { NextPage } from "next";
import Head from "next/head";
import { Main } from "../components/Main";
import { Text } from "../components/Text";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Styling with Vanilla Extract</title>
      </Head>
      <Main>
        <Text fontSize="xl">Olá</Text>
        <Text>Olá</Text>
      </Main>
    </>
  );
};

export default Home;

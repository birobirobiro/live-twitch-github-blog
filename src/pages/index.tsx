import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { PostList } from "../components/PostList";
import { UserCard } from "../components/UserCard";
import useDebounce from "../hooks/useDebounce";
import { InputContainer, InputHeader } from "../styles/pages/home.styles";

const GITHUB_USERNAME = "birobirobiro";
const GITHUB_REPOSITORY = "birobirobiro/live-twitch-github-blog";

interface User {
  name: string;
  company: string;
  bio: string;
  followers: number;
  url: string;
  avatar: string;
  login: string;
}

interface HomeProps {
  user: User;
}

export default function Home({ user }: HomeProps) {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  async function fetchPosts(q: string) {
    const { data } = await axios.get(`https://api.github.com/search/issues`, {
      params: { q: `repo:${GITHUB_REPOSITORY} ${q}` },
    });
    return data;
  }

  const { data } = useQuery(["post", debouncedSearch], () =>
    fetchPosts(debouncedSearch)
  );

  return (
    <Layout>
      <UserCard user={user} />
      <InputContainer>
        <InputHeader>
          <h3>Publicações</h3>

          <span>{data?.total_count} publicações</span>
        </InputHeader>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
          name="search"
        />
      </InputContainer>

      <PostList posts={data?.items} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(
    `https://api.github.com/users/${GITHUB_USERNAME}`
  );

  const user = {
    name: data.name,
    company: data.company,
    bio: data.bio,
    followers: data.followers,
    url: data.html_url,
    avatar: data.avatar_url,
    login: data.login,
  };

  return {
    props: {
      user,
    },
    revalidate: 60 * 60 * 3, // 3 hours
  };
}

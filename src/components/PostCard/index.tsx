import Link from "next/link";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCalendar,
  FaComment,
  FaChevronLeft,
} from "react-icons/fa";

import {
  UserCardContainer,
  UserCardContent,
  UserCardInfo,
  UserCardNameContainer,
} from "./style";

interface PostCardProps {
  title: string;
  url: string;
  comments: number;
  date: string;
  username: string;
}

export function PostCard({
  title,
  url,
  comments,
  date,
  username,
}: PostCardProps) {
  return (
    <UserCardContainer>
      <UserCardContent>
        <UserCardNameContainer>
          <Link href="/">
            <a>
              <FaChevronLeft color="#3294F8" size="12px" />
              Voltar
            </a>
          </Link>

          <a href={url} target="_blank" rel="noopener noreferrer">
            Ver no Github
            <FaExternalLinkAlt color="#3294F8" size="12px" />
          </a>
        </UserCardNameContainer>

        <h2>{title}</h2>

        <UserCardInfo>
          <span>
            <FaGithub size="18px" color="#3A536B" />

            {username}
          </span>

          <span>
            <FaCalendar size="18px" color="#3A536B" />

            {date}
          </span>

          <span>
            <FaComment size="18px" color="#3A536B" />

            {`${comments} comentário(s)`}
          </span>
        </UserCardInfo>
      </UserCardContent>
    </UserCardContainer>
  );
}

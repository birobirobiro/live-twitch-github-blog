/* eslint-disable @next/next/no-img-element */
import { FaGithub, FaExternalLinkAlt, FaCalendar, FaComment } from 'react-icons/fa'

import { UserCardContainer, UserCardContent, UserCardInfo, UserCardNameContainer } from "./style";

interface PostCardProps {
  title: string;
  url: string;
  comments: number;
  date: string;
  username: string;
}

export function PostCard({ title, url, comments, date, username }: PostCardProps) {
  return (
    <UserCardContainer>
      <UserCardContent>
        <UserCardNameContainer>
          <h2>{title}</h2>

          <a href={url} target="_blank" rel="noopener noreferrer">Github
            <FaExternalLinkAlt color="#3294F8" size="12px" />
          </a>
        </UserCardNameContainer>

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
  )
}
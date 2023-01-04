import Link from 'next/link';
import { FC } from 'react';
import { LogoGithub, LinkSharp } from 'react-ionicons';

import { CardProps } from './model';
import { CardWrapper } from './styles';

const Card: FC<CardProps> = ({ data }) => {
  return (
    <CardWrapper>
      <div>
        <img src={data.icon} alt={data.title} />

        <div>
          <h4>{data.title}</h4>
          <p>{data.description}</p>
        </div>
      </div>

      <div>{data.techs.map(el => el)}</div>

      <div>
        <Link href={data.github} target="_blank">
          <LogoGithub />
        </Link>

        {data.href && (
          <Link href={data.href} target="_blank">
            <LinkSharp />
          </Link>
        )}
      </div>
    </CardWrapper>
  );
};

export default Card;

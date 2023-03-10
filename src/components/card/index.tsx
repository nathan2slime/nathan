import Link from 'next/link';
import { FC } from 'react';
import { LogoGithub, LinkSharp } from 'react-ionicons';

import { CardProps } from './model';
import { CardWrapper } from './styles';

const Card: FC<CardProps> = ({ data }) => {
  return (
    <CardWrapper>
      <div>
        <div>
          <img src={data.icon} alt={data.title} />

          <div>
            <h4>{data.title}</h4>

            <p>{data.type}</p>
          </div>
        </div>

        <p>{data.description}</p>
      </div>

      <div>
        {data.techs.map(el => (
          <div key={Math.random()}>{el}</div>
        ))}
      </div>

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

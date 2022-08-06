import React from 'react';
import { Character } from '../../domain/character';
import styles from './Personage.module.css';

interface IProps {
  character: Character;
}

const Personage: React.FC<IProps> = ({ character }) => {

  return (
    <>
      <h1>{character.nickname}</h1>
      <div className={styles.card}>
        <p>{character.birthday}</p>
        <p>{character.name}</p>
    </div>
    </>
  );
}

export default Personage;

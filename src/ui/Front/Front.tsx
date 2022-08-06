import { isNil } from 'lodash';
import { Character } from '../../domain/character';
import { useStore } from "../../services/store";
import Personage from '../Personage';
import styles from './Front.module.css';

const Front = () => {
  const { characters } = useStore();
  console.log('🚀 : Front : characters', characters);

  if (isNil(characters)) {
    return (
      <>
      'Ничего нет'
      </>
      );  
  }
  return (
    <main>
      <h1>This is FRONT!</h1>
      <ul className={styles.list}>
        {characters.map((character: Character) => (
          <li key={character.char_id}>
            <Personage character={character} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Front;

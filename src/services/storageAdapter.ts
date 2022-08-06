import {
  CharactersStorageService,
} from '../application/ports';
import { useStore } from './store';


export const useCharactersStorage = (): CharactersStorageService => {
  return useStore();
}

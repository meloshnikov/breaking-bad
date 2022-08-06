import { Character } from "../domain/character";

export interface CharactersStorageService {
  characters: Character[];
  updateCharacters(characters: Character[]): void;
}

// export interface AuthenticationService {
//   auth(name: UserName, email: Email): Promise<User>;
// }

// export interface NotificationService {
//   notify(message: string): void;
// }

// export interface PaymentService {
//   tryPay(amount: PriceCents): Promise<boolean>;
// }

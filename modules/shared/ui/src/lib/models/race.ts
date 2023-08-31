import { Language } from './language';
import { StartingProficiency } from './starting-proficiency';
import { Subrace } from './subrace';
import { Trait } from './trait';
import { AbilityBonus } from './ability-bonus';

export interface Race {
  index: string;
  name: string;
  url: string;
  ability_bonuses: AbilityBonus[];
  age: string;
  alignment: string;
  language_desc: string;
  languages: Language[];
  size: string;
  size_description: string;
  speed: number;
  starting_proficiencies: StartingProficiency[];
  subraces: Subrace[];
  traits: Trait[];
}

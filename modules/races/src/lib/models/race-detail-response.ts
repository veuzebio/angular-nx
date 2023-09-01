export interface RaceDetailResponse {
  index: string;
  name: string;
  url: string;
  ability_bonuses: {
    ability_score: {
      index: string;
      name: string;
      url: string;
    };
    bonus: number;
  }[];
  age: string;
  alignment: string;
  language_desc: string;
  languages: {
    index: string;
    name: string;
    url: string;
  }[];
  size: string;
  size_description: string;
  speed: number;
  starting_proficiencies: {
    index: string;
    name: string;
    url: string;
  }[];
  subraces: {
    index: string;
    name: string;
    url: string;
  }[];
  traits: {
    index: string;
    name: string;
    url: string;
  }[];
}

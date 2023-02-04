export interface Student {
  id: string;
  name: string;
  age: number;
  gender: string;
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export const genderOptions = [
  {
    value: 'male',
    label: Gender.MALE,
  },
  {
    value: 'female',
    label: Gender.FEMALE,
  },
  {
    value: 'other',
    label: Gender.OTHER,
  },
];

export enum Rank {
  RANK_A = 'RANK_A',
  RANK_S = 'RANK_S',
  RANK_S_PLUS = 'RANK_S_PLUS',
  RANK_SS = 'RANK_SS',
  RANK_SSS = 'RANK_SSS',
}
export const rankOptions = [
  {
    value: 'A',
    label: Rank.RANK_A,
  },
  {
    value: 'S',
    label: Rank.RANK_S,
  },
  {
    value: 'S+',
    label: Rank.RANK_S_PLUS,
  },
  {
    value: 'SS',
    label: Rank.RANK_SS,
  },
  {
    value: 'SSS',
    label: Rank.RANK_SSS,
  },
];

export type Skill = {
  id: string;
  skill: string;
  proficiency: number;
};
export type Achievements = {
  images: string[];
  title: string;
  year: string;
};

export type $FixType = any;
/**
 * id: string;
 * name: string;
 * nickname: string;
 * age: number;
 * gender: string;
 * rank: string;
 * desc: string;
 * level: string;
 * date_of_birth: Date;
 * images: string[];
 * weight: number;
 * height: number;
 * skills: Skill;
 * otherImage: string[];
 * achievements: Achievements[]
 */

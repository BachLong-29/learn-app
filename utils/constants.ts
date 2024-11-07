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
export const majors = {
  "Information Technology": { value: "Information Technology", label: "Information Technology", abbreviation: "IT", key: "IT" },
  "Computer Science": { value: "Computer Science", label: "Computer Science", abbreviation: "CS", key: "CS" },
  "Software Engineering": { value: "Software Engineering", label: "Software Engineering", abbreviation: "SE", key: "SE" },
  "Economics": { value: "Economics", label: "Economics", abbreviation: "ECON", key: "ECON" },
  "Business Administration": { value: "Business Administration", label: "Business Administration", abbreviation: "BA", key: "BA" },
  "Finance and Banking": { value: "Finance and Banking", label: "Finance and Banking", abbreviation: "FB", key: "FB" },
  "Marketing": { value: "Marketing", label: "Marketing", abbreviation: "MKT", key: "MKT" },
  "Accounting": { value: "Accounting", label: "Accounting", abbreviation: "ACC", key: "ACC" },
  "Medicine": { value: "Medicine", label: "Medicine", abbreviation: "MED", key: "MED" },
  "Pharmacy": { value: "Pharmacy", label: "Pharmacy", abbreviation: "PHAR", key: "PHAR" },
  "Mechanical Engineering": { value: "Mechanical Engineering", label: "Mechanical Engineering", abbreviation: "ME", key: "ME" },
  "Architecture": { value: "Architecture", label: "Architecture", abbreviation: "ARCH", key: "ARCH" },
  "Law": { value: "Law", label: "Law", abbreviation: "LAW", key: "LAW" },
  "Psychology": { value: "Psychology", label: "Psychology", abbreviation: "PSY", key: "PSY" },
  "Education Management": { value: "Education Management", label: "Education Management", abbreviation: "EM", key: "EM" },
  "Biology": { value: "Biology", label: "Biology", abbreviation: "BIO", key: "BIO" },
  "Chemistry": { value: "Chemistry", label: "Chemistry", abbreviation: "CHEM", key: "CHEM" },
  "Physics": { value: "Physics", label: "Physics", abbreviation: "PHYS", key: "PHYS" },
  "English Language": { value: "English Language", label: "English Language", abbreviation: "EL", key: "EL" },
  "Graphic Design": { value: "Graphic Design", label: "Graphic Design", abbreviation: "GD", key: "GD" }
};


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

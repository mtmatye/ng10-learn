import { Hero as Hero1 } from './types';

const Heros: Hero[] = [
  {
    id: 'hero_0',
    name: '盖伦',
  },
  {
    id: 'hero_1',
    name: '赵信',
  },
  {
    id: 'hero_2',
    name: '嘉文',
  },
  {
    id: 'hero_3',
    name: '易大师',
  },
  {
    id: 'hero_3',
    name: '泰达米尔',
  },
];

export interface Hero {
  id: string;
  name: string;
}

export const Heros1: Hero1[] = [
  {
    id: 'hero_3861592711335647',
    name: '盖伦',
    phone: 13356788776,
    gender: '0',
    genderText: '男',
    age: 30,
    job: '0',
    jobText: '战士',
    role: 'admin',
    email: '11245767788@lol.com',
    createTime: 1592711335647,
    brief: '德玛西亚之力',
  },
  {
    id: 'hero_3081592487543496',
    name: '赵信',
    phone: 15356708566,
    gender: '0',
    genderText: '男',
    age: 30,
    job: '0',
    jobText: '战士',
    role: 'user',
    email: '11245767788@lol.com',
    createTime: 1592487543496,
    brief: '菊花总管',
  },
];

export default Heros;

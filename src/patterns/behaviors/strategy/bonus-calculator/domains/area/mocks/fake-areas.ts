import { AREAS } from '../../../constants';
import { Area } from '../entities/area.entity';

export const fakeAreas = [
  {
    id: 1,
    name: AREAS.TECH,
  },
  {
    id: 2,
    name: AREAS.FINANCE,
  },
  {
    id: 3,
    name: AREAS.COMMERCIAL,
  },
] as Area[];

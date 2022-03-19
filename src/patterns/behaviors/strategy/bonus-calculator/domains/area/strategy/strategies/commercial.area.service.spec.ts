import { Test, TestingModule } from '@nestjs/testing';
import { AREAS } from '../../../../constants';
import { CommercialAreaService } from './commercial.area.service';

describe('CommercialAreaService', () => {
  let service: CommercialAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommercialAreaService],
    }).compile();

    service = module.get<CommercialAreaService>(CommercialAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getBonus', () => {
    it('should get commercial bonus area', () => {
      expect(service.getBonus()).toEqual(AREAS.COMMERCIAL.VALUE);
    });
  });
});

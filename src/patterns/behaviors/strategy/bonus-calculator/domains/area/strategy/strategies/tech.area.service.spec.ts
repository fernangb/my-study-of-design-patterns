import { Test, TestingModule } from '@nestjs/testing';
import { AREAS } from '../../../../constants';
import { TechAreaService } from './tech.area.service';

describe('TechAreaService', () => {
  let service: TechAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechAreaService],
    }).compile();

    service = module.get<TechAreaService>(TechAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getBonus', () => {
    it('should get tech bonus area', () => {
      expect(service.getBonus()).toEqual(AREAS.TECH.VALUE);
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AREAS } from '../../../../constants';
import { FinanceAreaService } from './finance.area.service';

describe('FinanceAreaService', () => {
  let service: FinanceAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinanceAreaService],
    }).compile();

    service = module.get<FinanceAreaService>(FinanceAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getBonus', () => {
    it('should get finance bonus area', () => {
      expect(service.getBonus()).toEqual(AREAS.FINANCE.VALUE);
    });
  });
});

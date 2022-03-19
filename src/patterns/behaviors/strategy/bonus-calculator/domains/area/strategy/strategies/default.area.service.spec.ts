import { Test, TestingModule } from '@nestjs/testing';
import { AREAS } from '../../../../constants';
import { DefaultAreaService } from './default.area.service';

describe('DefaultAreaService', () => {
  let service: DefaultAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefaultAreaService],
    }).compile();

    service = module.get<DefaultAreaService>(DefaultAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getBonus', () => {
    it('should get default bonus area', () => {
      expect(service.getBonus()).toEqual(AREAS.DEFAULT.VALUE);
    });
  });
});

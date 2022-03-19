import { Test, TestingModule } from '@nestjs/testing';
import { AREAS } from '../../../../constants';
import { CommercialAreaService } from '../strategies/commercial.area.service';
import { DefaultAreaService } from '../strategies/default.area.service';
import { FinanceAreaService } from '../strategies/finance.area.service';
import { TechAreaService } from '../strategies/tech.area.service';
import { AreaContextService } from './area.context.service';

describe('AreaContextService', () => {
  let service: AreaContextService;
  let techAreaService: TechAreaService;
  let commercialAreaService: CommercialAreaService;
  let financeAreaService: FinanceAreaService;
  let defaultAreaService: DefaultAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AreaContextService,
        {
          provide: TechAreaService,
          useFactory: () => ({}),
        },
        {
          provide: CommercialAreaService,
          useFactory: () => ({}),
        },
        {
          provide: FinanceAreaService,
          useFactory: () => ({}),
        },
        {
          provide: DefaultAreaService,
          useFactory: () => ({}),
        },
      ],
    }).compile();

    service = module.get<AreaContextService>(AreaContextService);
    defaultAreaService = module.get<DefaultAreaService>(DefaultAreaService);
    techAreaService = module.get<TechAreaService>(TechAreaService);
    commercialAreaService = module.get<CommercialAreaService>(
      CommercialAreaService,
    );
    financeAreaService = module.get<FinanceAreaService>(FinanceAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getContext', () => {
    it('should return tech area service if area is equal to tech', () => {
      expect(service.getContext(AREAS.TECH.NAME)).toStrictEqual(
        techAreaService,
      );
    });

    it('should return commercial area service if area is equal to commercial', () => {
      expect(service.getContext(AREAS.COMMERCIAL.NAME)).toStrictEqual(
        commercialAreaService,
      );
    });

    it('should return finance area service if area is equal to finance', () => {
      expect(service.getContext(AREAS.FINANCE.NAME)).toStrictEqual(
        financeAreaService,
      );
    });

    it('should return default area service if area is not mapped', () => {
      expect(service.getContext(AREAS.DEFAULT.NAME)).toStrictEqual(
        defaultAreaService,
      );
    });
  });
});

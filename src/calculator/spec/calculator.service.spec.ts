import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorService } from '../calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatorService],
    }).compile();

    service = module.get<CalculatorService>(CalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it(`it's should add two numbers correctly`,() =>{
    expect(service.add(2, 3)).toBe(5);
  });
    it(`should subtract two numbers correctly`,() =>{
    expect(service.subtract(5, 3)).toBe(2);
  });
});

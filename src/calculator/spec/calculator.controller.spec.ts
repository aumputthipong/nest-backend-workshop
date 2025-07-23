import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorController } from '../calculator.controller';
import { CalculatorService } from '../calculator.service';



describe('CalculatorController', () => {
  let controller: CalculatorController;
  let service: CalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculatorController],
      providers: [
        {
          provide: CalculatorService,
          useValue: {
            add: jest.fn(),
            subtract: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CalculatorController>(CalculatorController);
    service = module.get<CalculatorService>(CalculatorService);
  });

  it('should call service.add and return result', () => {
    (service.add as jest.Mock).mockReturnValue(10);

    const result = controller.addMethod(4, 6);
    expect(result).toBe(10);
    expect(service.add).toHaveBeenCalledWith(4, 6);
  });

  it('should call service.subtract and return result', () => {
    (service.subtract as jest.Mock).mockReturnValue(3);

    const result = controller.substractMethod(5, 2);
    expect(result).toBe(3);
    expect(service.subtract).toHaveBeenCalledWith(5, 2);
  });
});

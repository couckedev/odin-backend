import { Test, TestingModule } from '@nestjs/testing';
import { AppGateway } from './app.gateway';

describe('AppGateway', () => {
  let appGateway: AppGateway;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppGateway],
    }).compile();
    appGateway = app.get<AppGateway>(AppGateway);
  });

  describe('handshake', () => {
    it('should return true', () => {
      expect(appGateway.handshake()).toStrictEqual(true);
    });
  });
});

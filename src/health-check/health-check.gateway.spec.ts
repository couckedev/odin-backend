import { Test, TestingModule } from "@nestjs/testing";
import { HealthCheckGateway } from "./health-check.gateway";
import { Socket } from 'socket.io';

jest.mock('socket.io');
describe('HealthCheckGateway', () => {
    let healthCheckGateway;
    let mockClient: Partial<Socket>;

    beforeEach(async () => {
        const module: TestingModule= await Test.createTestingModule({
        providers: [HealthCheckGateway],
        }).compile();

        healthCheckGateway = module.get<HealthCheckGateway>(HealthCheckGateway);
        mockClient = {
            emit: jest.fn(),
        };
    });

    describe('handleHealthCheck', () => {
        it('should return response with ok status', () => {
            //WHEN handleHealthCheck is calld
            const handleHealthCheck = healthCheckGateway.handleHealthCheck(mockClient);
            //THEN emit method of client should be called with 'healthcheck' and { status: 'ok' }
            expect(mockClient.emit).toHaveBeenCalledWith('healthcheck', { status: 'ok' });
        })
    })
})
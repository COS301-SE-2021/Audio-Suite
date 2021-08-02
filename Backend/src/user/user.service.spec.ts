import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule} from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserModule } from './user.module';
import {JwtModule} from "@nestjs/jwt";

describe('UserService', () => {
    let service: UserService;

    const mockUserRepository = {
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService, 
                {
                    provide: getRepositoryToken(User),
                    useValue: mockUserRepository,
                },
            ],
            imports: [
                JwtModule.register({
                  secret: 'secret', // TODO change to env var
                  signOptions: {expiresIn: '1d'}
                })
              ],
        }).compile();

        service = module.get<UserService>(UserService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
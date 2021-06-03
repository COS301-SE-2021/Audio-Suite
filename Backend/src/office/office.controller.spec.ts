import { Test, TestingModule } from '@nestjs/testing';
import { OfficeController } from './office.controller';
import { OfficeService } from './office.service'

describe('OfficeController', () => {
  let controller: OfficeController;

  const mockOfficeService = {
    registerOffice: jest.fn((name, jwt) =>{
      return{
        name: name,
        jwt: jwt,
        response: "Success"
      }
    }),
    joinUserToOffice: jest.fn((officeInviteLink, jwt) => {
      return{
        officeInviteLink: officeInviteLink,
        jwt: jwt,
        response: "Success"
      }
    })

  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfficeController],
      providers: [OfficeService],
    })
    .overrideProvider(OfficeService)
    .useValue(mockOfficeService)
    .compile();

    controller = module.get<OfficeController>(OfficeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should retireve getOffice', () => {
    expect(controller.getOffice()).toStrictEqual("'Hello World, Office!'");
  })

  it('should make use of registerOffice for an office', async () => {
    const office = {
      name: 'Joe',
      jwt: 'abcdefghijklmnopqrstuvwxyz12345678910'
    }

    expect(await controller.registerOffice(office.name, office.jwt)).toStrictEqual({
      name: office.name,
      jwt: office.jwt,
      response: "Success"
    });
  });

  it('should make use of joinUserToOffice for an office', async () => {
    const office = {
      officeInviteLink: 'initeLink/forYourOffice',
      jwt: 'abcdefghijklmnopqrstuvwxyz12345678910'
    }

    expect(await controller.joinUserToOffice(office.officeInviteLink, office.jwt)).toStrictEqual({
      officeInviteLink: office.officeInviteLink,
      jwt: office.jwt,
      response: "Success"
    });
  });  

});

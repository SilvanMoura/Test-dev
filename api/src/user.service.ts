import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(UserEntity)
        private userRespository: Repository<UserEntity>,
    ){}
    findAll(): Promise<UserEntity[]>{
        return this.userRespository.find();
    }
    findOne(id): Promise<UserEntity>{
        return this.userRespository.findOne(id);
    }
    create(user:UserEntity): Promise<UserEntity>{
        return this.userRespository.save(user);
    }
}
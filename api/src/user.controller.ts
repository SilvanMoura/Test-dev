import { Body, Controller, Get, Param, Post} from "@nestjs/common";
import { UserEntity } from "./user";
import { UserService } from "./user.service";


@Controller('user')
export class UserController{
    constructor(private userService: UserService){

    }
    @Get()
    async findAll() {
        const response = await this.userService.findAll();
        return response;
    }
    @Get(':id')
    async findOne(@Param('id') id): Promise<UserEntity>{
        const response = await this.userService.findOne(id);
        return response;
    }
    @Post()
    async create(@Body() createUserDto: UserEntity){
        const response = await this.userService.create(createUserDto);
        return response;
    }
}
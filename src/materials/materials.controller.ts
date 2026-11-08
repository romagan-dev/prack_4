import { 
    Controller, 
    Get, 
    Post,
    Body, 
    Param, 
    Query, 
    NotFoundException, 
    Delete,
    HttpStatus,
    HttpCode,
    Header
} from '@nestjs/common';

import { CreateMaterialDto } from './dto/materials';
import { MaterialsService } from './materials.service';

@Controller('materials')
export class MaterialsController {

    constructor(private readonly materialsService: MaterialsService) {}

    @Get()
    @Header('X-API-VERSION', '1.0')
    @Header('X-Service-Status', 'active')

    findAll(@Query('search') search?: string, 
            @Query('limit') limit?: string) {
        return this.materialsService.findAll(search, limit);
    }
    @Get(':id') 
    findOne(@Param('id') id: string) {
        return this.materialsService.findOne(id);
    }
    @Post() 
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createDto: CreateMaterialDto) {
        return this.materialsService.create(createDto);
    }
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {
        return this.materialsService.remove(id);
        
    }

}


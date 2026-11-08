import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMaterialDto } from './dto/materials';

@Injectable()
export class MaterialsService {
    private materials = [{id: '1', title: 'Material 1', price: 100, unitOfMeasure: 'kg', weightPerUnitKg: 1, isHeavyCargo: false},
         {id: '2', title: 'Material 2', price: 200, unitOfMeasure: 'kg', weightPerUnitKg: 1, isHeavyCargo: false}]
    
   
    public findAll(search?: string, limit?: string) {
    let result = this.materials;
    if (search) {
        result = result.filter(material => 
            material.title.toLowerCase().includes(search.toLowerCase())
        );
    }
    if (limit) {
        result = result.slice(0, parseInt(limit, 10));
    }

    return result;
}
    public findOne(id: string) {
        const material = this.materials.find(material => material.id === id);
        if (!material) {
            throw new NotFoundException(`Material with ID ${id} not found`);
        }
        return material;
    }
    public create(createDto: CreateMaterialDto) {
        const newMaterial = {id: Date.now().toString(), ...createDto};
        this.materials.push(newMaterial);
        return newMaterial;
    }

    public update(id: string, updateDto: Partial<CreateMaterialDto>) {
        const material = this.findOne(id);
        Object.assign(material, updateDto);
        return material;
    }
    public remove(id: string) {
        const index = this.materials.findIndex(material => material.id === id);
        if (index === -1) {
            throw new NotFoundException(`Material with ID ${id} not found`);
        }
        this.materials.splice(index, 1);
    }
}
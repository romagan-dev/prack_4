export class CreateMaterialDto {
    readonly title: string;
    readonly price: number;
    readonly unitOfMeasure: string;
    readonly weightPerUnitKg: number;
    readonly isHeavyCargo: boolean;
   
}
export class UpdateMaterialDto {
   readonly title?: string;
    readonly price?: number
    readonly unitOfMeasure?: string;
    readonly weightPerUnitKg?: number
    readonly isHeavyCargo?: boolean;
}
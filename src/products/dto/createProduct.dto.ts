import {IsString, IsNotEmpty, IsNumber} from "class-validator";
import { isNumber } from "util";

export class CreateProductDTO{
    
    @IsString()
    @IsNotEmpty()
    product: string;

    @IsNotEmpty()
    @IsNumber({maxDecimalPlaces:2})
    price: number;

    @IsNotEmpty()
    quantity: number;
}
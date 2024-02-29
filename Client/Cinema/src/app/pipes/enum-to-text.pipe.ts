import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from '../enums/genre.enum';

@Pipe({
  name: 'enumToText',
  standalone: true
})
export class EnumToTextPipe implements PipeTransform {

  transform(value: string): string {
    return Genre[value as keyof typeof Genre]
  }

}

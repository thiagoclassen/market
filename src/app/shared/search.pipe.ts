import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, input: string) {
    return input ? value.filter(fs => new RegExp(`^${input}`, 'gi').test(fs.name)) : value;
  }
}

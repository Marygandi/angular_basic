import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName',
})
export class ShortNamePipe implements PipeTransform {
  transform(fullName:string):string{
    const parts=fullName.split(' ');
    if(parts.length<2)
      return fullName;
    const first=parts[0].charAt(0).toUpperCase();
    const last=parts[1].charAt(0).toUpperCase();
    return`${first}.${last}`;
    
    
  } 
}

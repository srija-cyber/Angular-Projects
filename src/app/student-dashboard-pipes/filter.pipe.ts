import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(students: any[], searchText: string): any[] {
    if (!students) return [];
    if (!searchText) return students;
    
    searchText = searchText.toLowerCase();
    return students.filter(student => 
      student.name.toLowerCase().includes(searchText)
    );
  }
}
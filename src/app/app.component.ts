import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sortDir = 1;
  p: number = 1;
  title = 'search-table';
  name : any;
  a:string;
  b:string;
  templist:[];
  searchText;


  displayedColumns = ['Name', 'Age', 'Date of Birth'];

  heroes = [
    { age: 11, name: 'Mr. Nice', dob: '1-2-2011' },
    { age: 12, name: 'Narco' , dob: '12-3-2011'},
    { age: 13, name: 'Bombasto' , dob: '12-4-2011'},
    { age: 14, name: 'Celeritas' , dob: '12-5-2011' },
    { age: 15, name: 'Magneta' , dob: '12-6-2011'},
    { age: 16, name: 'RubberMan' , dob: '12-7-2011'},
    { age: 17, name: 'Dynama' , dob: '12-8-2011'},
    { age: 18, name: 'Dr IQ' , dob: '12-9-2011'},
    { age: 19, name: 'Magma' , dob: '12-10-2011'},
    { age: 20, name: 'Tornado' , dob: '12-11-2011'}
  ];

constructor(){
   this.sortByCol('name');
  }
  
  onSortClick(event) {
    let target = event.currentTarget,
      classList = target.classList;

    if (classList.contains('fa-chevron-up')) {
      classList.remove('fa-chevron-up');
      classList.add('fa-chevron-down');
      this.sortDir=-1;
    } else {
      classList.add('fa-chevron-up');
      classList.remove('fa-chevron-down');
      this.sortDir=1;
    }
    this.sortByCol('name');
  }

  sortByCol(colName: string) {
    this.heroes.sort((a,b)=>{
       a = a[colName].toLowerCase();
       b= b[colName].toLowerCase();
      return  this.sortDir;
      
    });
}

}



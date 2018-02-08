import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'productfilter',
    pure: false
})
@Injectable()
export class ProductFilter implements PipeTransform{
    transform(items: any[], args: any[]): any {
        let filteredList = [];
        console.log('items', items, 'args', args);
        if(args && args.length > 0) {
            let result = [];
            for(let i =0; i < args.length; i++){
                result = items.filter(item => item.category.indexOf(args[i]) !== -1);
                for(let j=0; j < result.length;j++){
                    filteredList[filteredList.length] = result[j];
                }
            }
            console.log(filteredList);
            return filteredList;
        }else{
            return items;
        }
    }
}
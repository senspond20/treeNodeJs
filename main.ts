import {getCategorySampleData, getTree, printCategoryTree} from './modules/category';
// import { getPrettyJsonObject } from './modules/jsonUtils';

const data = getCategorySampleData();
console.log(data)

const tree = getTree(data);
const prettyJsonStr = JSON.stringify(tree,null,2);
console.log(prettyJsonStr)

console.log('=================================')
printCategoryTree(tree);




// var str = '';

// getStr(tree,str);
// console.log(str);


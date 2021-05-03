import {getCategorySampleData, getTree, getTreeHtml, printCategoryTree} from './modules/category';
// import { getPrettyJsonObject } from './modules/jsonUtils';

const data = getCategorySampleData();
console.log(data)

const tree = getTree(data);
const prettyJsonStr = JSON.stringify(tree,null,2);
console.log(prettyJsonStr)

console.log('=================================')
printCategoryTree(tree);

console.log('=================================')
for(let str of getTreeHtml(tree)){
    console.log(str)
}
// console.log()


// var str = '';

// getStr(tree,str);
// console.log(str);


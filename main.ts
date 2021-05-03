import {getCategorySampleData, getTree,getStr} from './modules/category';

const data = getCategorySampleData();
console.log(data)

const tree = getTree(data);

console.log(tree)

// console.log(getStr(data))
console.log(getStr(tree))
// var str = '';
// getStr(tree,str);
// console.log(str);


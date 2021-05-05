import {getTree, MultiTable} from './modules/MultiTable';
import MultiNode from './modules/MultiNode';


function getCategorySampleData(): Array <MultiTable<String>> {
    const array = new Array<MultiTable<String>>();
    // table.
    array.push(new MultiTable<String>( 1,0,'개발'));
    array.push(new MultiTable<String>( 2,1,'웹'));
    array.push(new MultiTable<String>(13,1,'하드웨어'));
    array.push(new MultiTable<String>(4,2, '프론트엔드'));
    array.push(new MultiTable<String>(5,2,'백엔드'));
    array.push(new MultiTable<String>(6,0,'일상'));
    array.push(new MultiTable<String>(7,6, '일기장'));
    return array;
}


const list = getCategorySampleData();
for(let item of list)
    console.log(item)

const root : MultiNode<String> = getTree(list);

root.print();


const 일상노드 = root.findChild("일상");

일상노드.add("여행")
       .add("생각의자유");

root.print();

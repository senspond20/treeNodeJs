/**
 * Category Model
 */
interface categoryItem {
    id: number,
    name:string,
    parentId: number,
    lvl : number,
    items? : categoryItem[] //items는 존재할수도 안할수도 있다
}

/**
 * Category
 * @param id 
 * @param name 
 * @param parentId 
 * @param lvl 
 */
export function Category(item : categoryItem){
    this.id = item.id;
    this.name = item.name;
    this.parentId = item.parentId;
    this.lvl = item.lvl;
};

/**
 * List를 계층 트리구조로 변환하여 반환 
 * @param list 
 * @returns categoryItem
 */
export function getTree(list : Array<categoryItem>) : categoryItem {
    const mapKey = 'treeNode';
    let map = {};
    for(var item of list){
        item.items = [];
        map[item.id] = item;
        var parent = item.parentId || mapKey
        if (!map[parent]) {
            map[parent] = {
                items: []
            };
        }
         map[parent].items.push(item);
    }
    return map[mapKey].items;
}
/**
 * 계층 트리구조를 보기좋게 출력한다.
 * @param items 
 */
export function getStr(items : categoryItem){
    if(Array.isArray(items) && items.length !=0){
        items.forEach(function(e){
            //`${'  '.repeat(e.level-1)} L ${e.name}\n`
            console.log(e.name);
            var list = e.items;
            if(list.length !=0){
                getStr(list)
            }
        })
    }
}
/**
 * 샘플데이터 
 * @returns Array<categoryItem>
 */
export function getCategorySampleData() : Array<categoryItem>{
   const array = new Array<categoryItem>();
    array.push(new Category({id: 1, name:'개발', parentId: 0, lvl : 1}));
    array.push(new Category({id: 2, name:'웹', parentId: 1, lvl : 2}));
    array.push(new Category({id: 3, name:'하드웨어', parentId: 1, lvl : 2}));
    array.push(new Category({id: 4, name:'프론트엔드', parentId: 2, lvl : 3}));
    array.push(new Category({id: 5, name:'백엔드', parentId: 2, lvl : 3}));
    array.push(new Category({id: 6, name:'일상', parentId: 0, lvl : 1}));
    array.push(new Category({id: 7, name:'일기장', parentId: 6, lvl : 2}));
    return array;
}




/**
 * sample data
 */
// export const categorySampleData = [
//     new Category(1, '개발', 0, 1),
//     new Category(2, '웹', 1, 2),
//     new Category(3, '하드웨어', 1, 2),
//     new Category(4, '프론트엔드', 2, 3),
//     new Category(5, '백엔드', 2, 3),
//     new Category(6, '일상', 0, 1),
//     new Category(7, '일기장', 6, 2)
// ];



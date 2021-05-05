
import MultiNode from './MultiNode';



export class MultiTable<T>{
    private id : number
    private parentId : number
    private data : T

    constructor(id : number, parentId: number, data : T){
        this.id = id;
        this.parentId = parentId;
        this.data = data;
    };
    
    public getId(){
        return this.id;
    }
    public getParentId(){
        return this.parentId;
    }
    public getData(){
        return this.data;
    }

    public print(){
        const str = JSON.stringify(this, function(key,value){
            if(key == 'list') return;  
            else return value;
        }, 2);
        console.log(str);
    }

}

export function getTree<T>(list: Array<MultiTable<T>> ) {
    if(list == null)
        return;
    const root = new MultiNode<T>(null);
    let map = [];
    // parentId 로 오름차순으로 정렬
    const sortList : Array<MultiTable<T>> = list.sort((o1,o2)=> (o1.getParentId() - o2.getParentId()));
    const firstId = sortList[0].getParentId();
    let first = true;
    for(let item of sortList){
        if(item.getParentId() == firstId){
            const childNode = root.addDown(item.getData());
            map[item.getId()] = childNode;
        }else{
            const nNode = map[item.getParentId()];
            if(nNode !=null){
                let nChildNode = nNode.addDown(item.getData());
                map[item.getId()] = nChildNode;
            }
        }
    }
    map = null;
    return root;
}


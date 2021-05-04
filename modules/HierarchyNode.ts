/**
 * 인터페이스 정의
 */
interface HierarchyNodeInterface<T>{
    appendToChild(data : T) : Object
}

class HierarchyNode<T> implements HierarchyNodeInterface<T>{

    private data : T
    private child : HierarchyNode<T>   // 자식노드
    private sibling : HierarchyNode<T> // 형제노드

    /**
     * 생성자
     * @param data 
     */
    constructor(data: T){
        this.data = data;
        this.child = null;
        this.sibling = null;
    }
    /**
     * Getter
     */
    public getData(){
        return this.data;
    }
    public getChild(){
        return this.child;
    }
    public getSibling(){
        return this.sibling;
    }
    /**
     * 자식노드 추가
     * @param data 
     * @returns 
     */
    public appendToChild(data : T){
        if (this.child == null) {
            this.child = new HierarchyNode<T>(data);
            return this.child;
        }
        return this.child.appendToSibling(data);
    }
    /**
     * 형제 노드추가 private
     * @param data 
     * @returns 
     */
    private appendToSibling(data : T){
        if(this.sibling == null){
            this.sibling = new HierarchyNode<T>(data);
            return this.sibling;
        }
        return this.sibling.appendToSibling(data);
    }
    /**
     * 자식들 리스트를 가져온다
     * @returns 
     */
    public getChildren() : Array<HierarchyNode<T>> {
        let children = new Array<HierarchyNode<T>>();
        if(this.child == null) return [];
        let tempChild = this.child;
        while(tempChild !=null){
            children.push(tempChild);
            tempChild = tempChild.getSibling();
        }

        return children;
    }
    /**
     * 자식노드를 찾는다.
     * @param T 
     * @param data 
     * @returns 
     */
    public findChild(data : T) : HierarchyNode<T> {
        
        return null;
    }
}
export default HierarchyNode;


/**
 * @param data 
 */
// function HierarchyNode<T>(data : T) {
//     this.data = data
//     this.child = null;
//     this.sibling = null;
    
// }


// HierarchyNode.prototype.appendToSibling = function<T>(data : T){
//     if(this.sibling == null){
//         this.sibling = new HierarchyNode<T>(data);
//         return this.sibling;
//     }
//     return this.sibling.appendToSibling(data);
// }

// HierarchyNode.prototype.appendToChild = function<T>(data : T){
//     if (this.child == null) {
//         this.child = new HierarchyNode<T>(data);
//         return this.child;
//     }
//     return this.child.appendToSibling(data);
// }

// export default HierarchyNode;

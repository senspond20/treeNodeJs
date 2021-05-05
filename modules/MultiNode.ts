const USE_DEBUG = true;

class MultiNode <T> {
    private data: T
    private parent : MultiNode<T>         // 부모노드
    private children: Array<MultiNode<T>> // 자식노드 리스트

    /**
    * 생성자
    * @param data 
    */
    constructor(data: T) {
        this.data = data;
        this.children = null;
        this.parent = null;
    }

    /**
     * getter
     */
    public getData() {
        return this.data;
    }
    public getChildren() {
        return this.children;
    }
    public getParrent(){
        return this.parent;
    }

    /**
     * setter
     */
    public setDate(data: T) {
        this.data = data;
    }
    public setChildern(children: Array<MultiNode<T>> ) {
        this.children = children;
    }
    public setParent(parent : MultiNode<T>){
        this.parent = parent;
    }

    /**
     * 직렬화 해서 JSON문자열로 예쁘게 출력
     */
    public print(){
        const str = JSON.stringify(this, function(key,value){
            if(key == 'parent') return;  // 객체의 직렬화시 parent <-> child 순환참조 에러가 나기때문에 parent 는 빼주어 정의해준다. 
            else if(key == 'children' && value == null) return; // childeren이 null일시 제외
            else return value;
        }, 2);
        console.log(str);
    }

    /**
     * 노드의 깊이를 계산해 리턴한다. ROOT까지의 거리측정
     * @param node 
     */
    public getDept() : number{
        let dept = 0;
        let node : MultiNode<T> = this;
        while(node.getParrent() != null){
            node = node.getParrent();
            dept++;
        }
        return dept;
    }

    /**
     * 자식 노드의 개수를 리턴
     * @returns 
     */
    public getDgree() : number{
        return (this.children != null) ?  this.children.length : 0;   
    }


    /**
     * 최상단 부모노드(루트)를 찾아 루트를 반환
     * @returns 
     */
    public findRoot(): MultiNode<T>{
        let node : MultiNode<T> = this;
        while(node.getParrent() != null){
            node = node.getParrent();
        }
        return node;
    }

    /**
     * 자식 노드를 추가하고 자식노드 반환
     * @param child 
     * @returns 
     */
    public addDown(data: T): MultiNode<T> {
        const childNode = new MultiNode<T> (data);
      
        if (this.children == null) {
            this.children = new Array<MultiNode<T>> ();
        }
        this.children.push(childNode);
        childNode.setParent(this);
        return childNode;
    }

    /**
     * 자식 노드를 추가하고 현재노드 반환
     * @param this 
     * @returns 
     */
    public add(data: T): MultiNode<T> {
        const childNode = new MultiNode<T>(data);
        if (this.children == null) {
            this.children = new Array <MultiNode<T>> ();
        }
        this.children.push(childNode);
        childNode.setParent(this);
        return this;
    }

    // public remove(data: T) : MultiNode<T>{
    //     const childNode = new MultiNode<T>(data);
    //     this.setParent(this);
    //     if(this.children != null){
    //         this.children.pop(childNode);
    //     }
    //     return this;
    // }
   
    /**
     * (동일한 데이터가 여러노드에 있을 경우 가장먼저 찾은 결과를 리턴한다.)
     * 하위 자식노드에서 탐색해서 노드반환 (탐색결과 없으면 null 리턴)
     * @param data 
     * @returns 
     */
    public findChild(data: T): MultiNode < T > {
        let find: MultiNode <T> ;

        const array = this.getChildren();
        if(array == null) return null;
        for (let item of array) {
            if (item.getData() == data){
                find = item;
                break;
            }
        }

        // array.filter(function(item){
        //                     count++;
        //                     if(item.getData() == data){
        //                         return true;
        //                     }
        //                  });
        return find || null
    }
    /**
     * (현재 버그발견. 추후 수정)
     * 모든 자식노드에서 탐색해서 노드반환 (재귀) (탐색결과 없으면 null 리턴)
     * @param data 
     * @returns 
     */
    public findChildAll(data: T): MultiNode < T > {
        if(this.getChildren() == null){
            return null;
        }
        return this.findChildAllRec(this.getChildren(), data, 1);
    }
    private findChildAllRec(array: Array < MultiNode < T >> , data: T, lvl: number): MultiNode < T > {
        let find: MultiNode < T > ;
        for (let item of array) {
            if (item.getData() == data){
                find = item;
                break;
            }
        }
        if (find === undefined) {
            for (let item of array) {
                const children = item.getChildren();
                if (Array.isArray(children)) {
                    return this.findChildAllRec(children, data, ++lvl);
                }
            }
        }
        if (USE_DEBUG) console.log(`${lvl}`)
        return find || null
    }

    /**
     * 자식노드 들을 제거한다
     */
    public removeChildern() {
        this.children = null;
    }

    /**
     * 노드를 찾아 제거한다
     * @param data 
     * @returns 
     */
    public deleteNode(data: T) {}
}

export default MultiNode;



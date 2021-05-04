class MultiNode<T>{
    private data : T
    private children : Array<MultiNode<T>>   // 자식노드

    // 생성자
    constructor(data : T){
        this.data = data;
        this.children = null;
    }
    /**
     * getter
     * @returns 
     */
    public getData(){
        return this.data;
    }
    public getChildren(){
        return this.children;
    }
    public setDate(data : T){
        this.data = data;
    }

    /**
     * 자식 노드를 추가한다
     * @param child 
     * @returns 
     */
    public addChildNode(child : T ) : MultiNode<T>{
        const childNode = new MultiNode<T>(child);
        if(this.children == null){
            this.children = new Array<MultiNode<T>>();
        }
         this.children.push(childNode);
         return childNode;
    }
    /**
     * 하위 자식노드에서 탐색
     * @param data 
     * @returns 
     */
    public findChild(data : T) : MultiNode<T>{
        let find : MultiNode<T>;

        const array = this.getChildren();
        for(var i =0; i < array.length; i ++){
            if(array[i].getData() == data){
                find = array[i]
            }
        }
        // array.filter(function(item){
        //                     count++;
        //                     if(item.getData() == data){
        //                         return true;
        //                     }
        //                  });
        return find;
    }
    /**
     * 모든 자식노드에서 탐색 (재귀)
     * @param data 
     * @returns 
     */
    public findChildAll(data : T){
        return this.findChildAllRec(this.getChildren(), data);
    }
    private findChildAllRec(array :Array<MultiNode<T>>, data : T){
        let finder = array.filter(item => item.getData() == data );
        if(finder.length == 0){
            for(let item of array ){
                const children = item.getChildren();
                if(Array.isArray(children)){
                    return this.findChildAllRec(children, data);
                }
            }
        }
        return finder;
    }

    
}

export default MultiNode;
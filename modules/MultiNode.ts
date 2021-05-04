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
        return (this !=null) ? this.data : null;
    }
    public getChildren(){
        return (this !=null) ? this.children : null;
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
        for(let item of array){
            if(item.getData() == data)
                find = item;
        }
            
        // array.filter(function(item){
        //                     count++;
        //                     if(item.getData() == data){
        //                         return true;
        //                     }
        //                  });
        return find || undefined
    }
    /**
     * 모든 자식노드에서 탐색 (재귀)
     * @param data 
     * @returns 
     */
    public findChildAll(data : T) : MultiNode<T>{
        return this.findChildAllRec(this.getChildren(), data, 1);
    }
    private findChildAllRec(array :Array<MultiNode<T>>, data : T, lvl:number) : MultiNode<T>{
        
        let find : MultiNode<T>;
   
        for(let item of array){
            if(item.getData() == data)
                find = item;
        }
        if( find === undefined){
            for(let item of array ){
                const children = item.getChildren();
                if(Array.isArray(children)){
                    return this.findChildAllRec(children, data,++lvl);
                }
            }
        }
        console.log(`${lvl}`)
        return find || undefined
    }

    
}

export default MultiNode;
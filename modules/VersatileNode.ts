
interface VersatileNode<T>{
    id: number,
    parentId: number,
    data : T
    items ? : VersatileNode<T>[] 
}
class VersatileNode<T> implements VersatileNode<T>{

    constructor(data:T){
        this.data = data;
    }

}
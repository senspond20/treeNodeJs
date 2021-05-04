

interface VersatileNode<T>{
    id: number,
    parentId: number,
    data : T
    items ? : VersatileNode<T>[] 
}

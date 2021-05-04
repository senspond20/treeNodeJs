
/**
 * 
 */
interface HierarchyNodeInterface<T>{
    // data : T
    appendToChild(data : T) : Object
}

/**
 * @param data 
 */
const HierarchyNode = /**@class */ (function(){

    function HierarchyNode<T>(data : T) {
        this.data = data
        this.child = null;
        this.sibling = null;  
    }
    
    HierarchyNode.prototype.appendToSibling = function<T>(data : T){
        if(this.sibling == null){
            this.sibling = new HierarchyNode<T>(data);
            return this.sibling;
        }
        return this.sibling.appendToSibling(data);
    }
    
    HierarchyNode.prototype.appendToChild = function<T>(data : T){
        if (this.child == null) {
            this.child = new HierarchyNode<T>(data);
            return this.child;
        }
        return this.child.appendToSibling(data);
    }
    
})();

export default HierarchyNode;

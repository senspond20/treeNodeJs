import MultiNode from './modules/MultiNode';
var count = 0;
const print = data =>console.log("=======================\n%d->", count++, JSON.stringify(data, null, 2))

const root = new MultiNode<String>("<루트입니다>");

const node1 = root.addDown("자식1입니다")
root.addDown("자식2입니다")
root.addDown("자식3입니다")

print(root);

const node2 = node1.addDown("자식11입니다")
node1.addDown("자식12입니다")
print(root)
print(node1);

node2.addDown("자식111입니다");
node2.addDown("자식112입니다");

console.log(root.findChild("자식1입니다") == null)
console.log(root.findChild("자식12입니다")== null)

console.log("=======================================================")
console.log(root.findChild("자식3입니다").getData() == "자식3입니다")
console.log("=======================================================")

const findNode = root.findChildAll("자식11입니다");
if(findNode!=null){
    print(findNode)
}
console.log(findNode.getData())
console.log(root.findChildAll("자식112입니다")!=null)

console.log(root.findChildAll("자식11입니다")!=null)





node1.removeChildern();

console.log(root.findChildAll("자식11입니다")!=null)
print(root)


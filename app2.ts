import MultiNode from './modules/MultiNode';
var count = 0;
const print = data =>console.log("=======================\n%d->", count++, JSON.stringify(data, null, 2))

const root = new MultiNode<String>("<루트입니다>");

const node1 = root.addChildNode("자식1입니다")
root.addChildNode("자식2입니다")
root.addChildNode("자식3입니다")

print(root);

const node2 = node1.addChildNode("자식11입니다")
node1.addChildNode("자식12입니다")
print(root)
print(node1);

node2.addChildNode("자식111입니다");
node2.addChildNode("자식112입니다");

console.log(root.findChild("자식12입니다"))

console.log("=======================================================")
console.log(root.findChild("자식3입니다").getData() == "자식3입니다")
console.log("=======================================================")

const findNode = root.findChildAll("자식11233입니다");
console.log(findNode)
console.log(findNode.getData())
console.log(root.findChildAll("자식112입니다"))

console.log(root.findChildAll("자식11입니다"))

import HierarchyNode from './modules/HierarchyNode'

var count = 0;
const print = data =>console.log("=======================\n%d->", count++, JSON.stringify(data, null, 2))


// 노드 생성
const node = new HierarchyNode<String>("루트입니다");
print(node);

const node1 = node.appendToChild("자식1입니다");
node.appendToChild("자식2입니다");
node.appendToChild("자식3입니다");
print(node);

node1.appendToChild("자식1의 자식1입니다");
node1.appendToChild("자식1의 자식2입니다");
print(node);

print(node1.getChildren());



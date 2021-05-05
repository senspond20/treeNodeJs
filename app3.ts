import MultiNode from './modules/MultiNode';

const root = new MultiNode<number>(0);

root.addDown(1).add(4)
               .add(5)
               .add(7)
    .getParrent()
    .addDown(2).add(10)
               .add(11)
               .add(12)
    .getParrent()
    .add(3);


root.print();

console.log('ROOT lvl : ' + root.getDept());
console.log('ROOT node1 : ' + root.findChild(1).getDept());
console.log('ROOT node1 : ' + root.findChild(1).findChild(5).getDept());
console.log(root.getDept() === root.findChild(1).findChild(5)
                                   .findRoot().getDept());
root.findChild(1).print();
// console.log(root.findChild(2).findChild(11).getDept());
export default class Node {
    constructor() {
        this.value = null;
        this.nextNode = null;
    }

    setValue(value) {
        this.value = value;
    }

    setNextNode(nextNode) {
        this.nextNode = nextNode;
    }

    toString() {
        return "" + this.value;
    }
}
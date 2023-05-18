import Node from "./Node.js";

export default class LinkedList {    
    constructor() {
        this.list = new Node();
    }

    append(value) {
        let currentNode = this.list;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = new Node();
        currentNode.nextNode.setValue(value);
    }

    prepend(value) {
        let newNode = new Node();
        newNode.setValue(value);
        newNode.setNextNode(this.list);
        this.list = newNode;
    }

    size() {
        let size = 0;
        let currentNode = this.list;
        while (currentNode !== null) {
            size++;
            currentNode = currentNode.nextNode;
        }
        return size;
    }

    head() {
        return this.list;
    }

    tail() {
        let currentNode = this.list;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    at(index) {
        if (index < 0) {
            console.error("at: index less than 0");
            return null;
        }

        let currentNode = this.list;
        for (let i = 0; i < index; i++) {
            if (currentNode === null) {
                return null;
            } else {
                currentNode = currentNode.nextNode;
            }
        }
        return currentNode;
    }

    pop() {
        let currentNode = this.list;
        if (currentNode.nextNode === null) {
            this.list = null;
            return;
        }

        while (currentNode.nextNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = null;
    }

    contains(value) {
        let currentNode = this.list;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        let currentNode = this.list;
        let index = 0;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return index;
            }
            index++;
            currentNode = currentNode.nextNode;
        }
        return null;
    }

    toString() {
        let returnString = "";
        let currentNode = this.list;
        while (currentNode !== null) {
            returnString += "( " + currentNode.toString() + " ) -> ";
            currentNode = currentNode.nextNode;
        }
        returnString += "null";
        return returnString;
    }

    insertAt(value, index) {
        if (index < 0) {
            console.error("insertAt: index must be greater than 0");
        }

        let currentIndex = 0;
        let currentNode = this.list;
        while (currentIndex < index && currentNode !== null) {
            currentNode = currentNode.nextNode;
            currentIndex++;
        }

        if (currentNode === null) {
            console.error("insertAt: index out of the range of this LinkedList");
        } else {
            let newNode = new Node();
            newNode.setValue(value);
            newNode.nextNode = currentNode;
            if (index > 0) {
                this.at(index - 1).nextNode = newNode;
            } else {
                this.list = newNode;
            }
        }
    }
}
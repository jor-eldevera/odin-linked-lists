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

    at(index) {
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

    toString() {
        let returnString = "";
        let currentNode = this.list;
        while (currentNode !== null) {
            returnString += currentNode.toString() + " ";
            currentNode = currentNode.nextNode;
        }

        return returnString;
    }
}
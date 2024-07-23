class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList{
    constructor() {
        this.headNode = null;
        this.tailNode = null;
        this.length = 0;
    }
    append(value){
        let newNode = new Node(value);
        if(this.headNode === null){
            this.headNode = newNode;
            this.tailNode = newNode;
        }else{
            this.tailNode.nextNode = newNode;
            this.tailNode = newNode;
        }
        this.length++;
    }
    prepend(value){
        let newNode = new Node(value);
        if(this.headNode === null){
            this.headNode = newNode;
            this.tailNode = newNode;
        }else{
            newNode.nextNode = this.headNode;
            this.headNode = newNode;
        }
        this.length++;
    }
    size(){
        return this.length;
    }
    head(){
        return this.headNode
    }
    tail(){
        return this.tailNode;
    }
    at(index){
        if(index < 0 || index >= this.length){
            return null;
        }
        let currentNode = this.headNode;
        for(let i = 0; i < index; i++){
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }
    pop(){
        if(!this.headNode) return;
        if(this.headNode === this.tailNode){
            this.headNode = null;
            this.tailNode = null;
        } else{
            let currentNode = this.headNode;
            while(currentNode.nextNode !== this.tailNode){
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = null;
            this.tailNode = currentNode;
        }
        this.length--;
    }
    contains(value){
        let currentNode = this.headNode;
        while(currentNode){
            if(currentNode.value === value){
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }
    find(value){
        let currentNode = this.headNode;
        let index = 0;
        while(currentNode){
            if(currentNode.value === value){
                return index;
            }
            currentNode = currentNode.nextNode;
            index++;
        }
        return null
    }
    toString(){
        let currentNode = this.headNode;
        let output = '';
        while(currentNode){
            output += `{ ${currentNode.value} } -> `
            currentNode = currentNode.nextNode;
        }
        output += 'NULL';
        return output;
    }

    // Extra Credit Methods
    insertAt(value, index){
        if(index < 0 || index > this.length){
            return false;
        }
        const newNode = new Node(value);
        if(index === 0){
            this.prepend(value)
        } else if(index === this.length){
            this.append(value)
        } else{
            let currentNode = this.headNode;
            for(let i = 0; i < index - 1; i++){
                currentNode = currentNode.nextNode;
            }
            newNode.nextNode = currentNode.nextNode;
            currentNode.nextNode = newNode;
            this.length++;
        }
    }
    removeAt(index){
        if(index < 0 || index >= this.length){
            return false;
        }
        if(index === 0){
            this.headNode = this.headNode.nextNode;
            if(this.length === 1){
                this.tailNode = null;
            } else{
                let currentNode = this.headNode;
                for(let i = 0; i < index - 1; i++){
                    currentNode = currentNode.nextNode;
                }
                currentNode = currentNode.newNode.nextNode;
                if(currentNode.nextNode === null){
                    this.tailNode = currentNode;
                }
            }
            }
            this.length --;
    }
}

export default LinkedList;
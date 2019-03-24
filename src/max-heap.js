const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
		
	}

	push(data, priority) {
		
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.length;
		
	}

	isEmpty() {
		if(this.length != 0) {
			return true
		}
		
		
	}

	clear() {
		
	}

	insertNode(node) {
		if(this.parentNodes.length == 0) {
			this.root = node;
		}
		
	}

	shiftNodeUp(node) {
	
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;

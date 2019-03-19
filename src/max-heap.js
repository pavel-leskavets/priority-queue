const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		
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
		return this.parentNodes.length;
		
	}

	isEmpty() {
		if(size() === 0) {
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

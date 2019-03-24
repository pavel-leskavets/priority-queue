const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize || 30;
		this.heap = new MaxHeap;
		this.length = 0;
		this.head = null;
		this.tail = null;
		this.length = 0;
		

	}

	push(data, priority) {
		

	}

	shift() {
		
	}

	size() {
		return this.length;

	}

	isEmpty() {
		return this.length === 0;
	}
}

module.exports = PriorityQueue;

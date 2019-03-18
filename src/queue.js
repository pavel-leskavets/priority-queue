const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize || 30;
		this.heap = new MaxHeap;

	}

	push(data, priority) {

	}

	shift() {

	}

	size() {
		return heap.length

	}

	isEmpty() {
		if(size() == 0) {
			return true
		}
	}
}

module.exports = PriorityQueue;

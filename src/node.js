class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null; 
		this.right = null;
	}

	appendChild(node) {
		if(this.left == null) {
			this.left = node;
		}
		else if(this.left != null && this.right == null) {
			this.right = node;
		}

	}

	removeChild(node) {
		if(this.left == node) {
			this.left = null;
		}
		else if(this.right == node) {
			this.right = null;
		}
		else if(node != this.left || node != this.right) {
			throw new Error;
		}
		


	}

	remove() {

	}

	swapWithParent() {
		
	}
}

module.exports = Node;

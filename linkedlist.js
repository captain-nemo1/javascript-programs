function LinkedList(){
	this.head = null;
	this.size = 0;
}

LinkedList.prototype.append = function(val){
	var node = {
		data: val,
		next: null
	};
	if(this.head == null){
		this.head = node;
	} else {
		var current = this.head;
		while(current.next != null){
			current = current.next;
		}
		current.next = node;
	}
	this.size++;
}

LinkedList.prototype.toString = function(){
	var result = [];
	var current = this.head;
	while(current != null){
		result.push(current.data);
		current = current.next;
	}

	return result.toString();
}

LinkedList.prototype.remove = function(index){
	if(index > 0 && index < this.size){
		var current = this.head;
		if(index === 0){
			this.head = current.next;
			this.size--;
			return current.data;
		}

		var previous = current;
		var current = previous.next;
		var i = 1;
		while(index !== i){
			previous = current;
			current = current.next;
			i++;
		}
		previous.next = current.next;
		this.size--;
		return current.data;
	} else{
		return null;
	}
}

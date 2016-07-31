function BinaryHeap(){
	this.array = [];
}

BinaryHeap.prototype.push = function(val){
	this.array.push(val);
	this.bubbleup(this.array.length-1);
}

BinaryHeap.prototype.bubbleup = function(index){
	while(index > 0){
		var parent = Math.floor((index-1)/2);
		if(this.array[parent] > this.array[index]){
			var temp = this.array[parent];
			this.array[parent] = this.array[index];
			this.array[index] = temp;
			index = parent;
		} else{
			break;
		}
	}
}

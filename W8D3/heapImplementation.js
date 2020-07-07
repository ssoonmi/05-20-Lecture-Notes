class MaxHeap {
  constructor() {
    this.array = [null];
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1)
  }

  siftUp(idx) {
    if (idx === 1) return;

    let parentIdx = Math.floor(idx / 2);
    if (this.array[idx] > this.array[parentIdx]) {
      [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];
      this.siftUp(parentIdx);
    }
  }

  deleteMax() {
    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);
    return max;
  }

  siftDown(idx) {
    let leftIdx = idx * 2; //left child
    let rightIdx = idx * 2 + 1; // right child
    let ary = this.array;
    let leftVal = ary[leftIdx];
    let rightVal = ary[rightIdx];
    let val = ary[idx]

    if (leftVal === undefined) leftVal = -Infinity;
    if (rightVal === undefined) rightVal = -Infinity;

    if (val > leftVal && val > rightVal) return;

    let swapIdx;
    if (leftVal > rightVal) {
      swapIdx = leftIdx;
    } else {
      swapIdx = rightIdx;
    }
    [ary[swapIdx], ary[idx]] = [ary[idx], ary[swapIdx]]
    this.siftDown(swapIdx);


  }
}

let heap = new MaxHeap();
heap.insert(42);
heap.insert(32);
heap.insert(24);
heap.insert(100);
heap.insert(50);
heap.insert(27);


console.log(heap.array);
console.log(heap.deleteMax());
console.log(heap.array);


class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
  get(pos) {
    if (pos > this.length || pos < 0) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }
  max() {
    if (this.length === 0) {
      emptySortedList();
    } else {
      return Math.max(...this.items);
    }
  }
  min() {
    if (this.length === 0) {
      emptySortedList();
    } else {
      return Math.min(...this.items);
    }
  }
  average() {
    if (this.length === 0) {
      emptySortedList(); } else {
        return this.sum() / this.length;
      }
    
  }
  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((ac, cu) => ac + cu);
    }
  }
}

function emptySortedList() {
  throw new Error("EmptySortedList");
}
module.exports = SortedList;

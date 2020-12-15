/**
 * 给列表的下一个位置增加一个新元素
 * @param {*} element 插入的新元素
 * @return void
 */
const append = (element) => {
  this.dataStore[this.listSize++] = element;
};

/**
 * 通过对数组对象 dataStore 进行迭代，查找给定的元素
 * @param {*} element 查找的元素
 * @returns {number} 返回该元素的下标
 */
const find = (element) => {
  for (let i = 0; i < this.dataStore.length; i++) {
    const current = this.dataStore[i];
    if (current === element) {
      return i;
    }
  }

  return -1;
};

/**
 * 删除列表中的一个元素
 * @param {*} element 删除的元素
 * @returns {boolean} 返回是否删除成功
 */
const remove = (element) => {
  const foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
};

/**
 * 返回列表中元素的个数
 * @returns {number} 返回列表元素的个数
 */
const length = () => this.listSize;

/**
 * 列表类
 * @constructor
 */
const List = () => {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.hasNext;
  this.hasPrev;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
};

export default List;

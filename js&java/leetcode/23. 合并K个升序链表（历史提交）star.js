/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  // 两种思路：优先级队列（二叉堆） 和 JS-API排序
  // 首先实现一个优先级队列的数据结构（见下文 class: primaryQueue）

  // 声明一个优先级队列
  pq = new primaryQueue()
  // 构造一个新的链表头节点(第一个节点设置为0，避免空节点等情况)
  let result = new ListNode(0)
  let p = result

  // 插入所有list的头节点
  for(list of lists){
    if(list)
      pq.insert(list)
  }
  // 将目前队列中的节点进行比较、将最小的追加在原链表后
  while(pq.getSize()>1){
    const temp = pq.pop()
    p.next = temp
    p = p.next
    // temp 表示 本轮比较中最小的头节点
    // temp.next 表示这个链表中的下一个节点
    if(temp.next)
      pq.insert(temp.next)
  }

  return result.next
};
// 实现优先级队列
class primaryQueue{
  // 定义一个“堆”，存放所有的元素
  constructor(){
    this.heap = []
    this.heap[0] = 0
  }
  // 交换任意两个节点
  swap(index1,index2){
    // 存一个别人的写法，有待研究
    // [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    let temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }
  // 返回父节点索引
  getParentIndex(node){
    return Math.floor(node/2)
  }
  // 返回左节点索引
  getLeftIndex(node){
    return node*2
  }
  // 返回右节点索引
  getRightIndex(node){
    return node*2 + 1
  }
  // 上浮
  shiftUp(node){
    // 在堆顶之前都while循环着
    while(node>1){
      let parentNode = this.getParentIndex(node)
      if(this.heap[parentNode].val > this.heap[node].val){
        this.swap(parentNode,node) // 交换值
        // 更新传入的node的索引(随着交换操作上移了)
        node = this.getParentIndex(node)
      } else
        break //堆结构已经得到保证，不需要循环到堆顶了，直接跳出循环
    }
  }
  // 下沉
  shiftDown(node){
    // 在堆底之前都循环着
    while(this.heap[this.getLeftIndex(node)]){
      let tempIndex = this.getLeftIndex(node)
      let rightIndex = this.getRightIndex(node)
      if(this.heap[rightIndex] && this.heap[tempIndex].val > this.heap[rightIndex].val){
        tempIndex = rightIndex
      }
      if(this.heap[node].val<this.heap[tempIndex].val)
        break // 如果这个节点比两个子节点都大，退出循环
      this.swap(tempIndex,node)
      node = tempIndex
    }
  }
  // 插入节点
  insert(val){
    // 把节点放到堆底，执行上浮操作，让所有节点处于正确位置
    this.heap.push(val)
    this.shiftUp(this.heap.length-1)
  }
  // 删除最小的节点
  pop(){
    // 将原来最小的节点(堆顶)和堆底的节点交换
    const top = this.heap[1]
    this.swap(1,this.heap.length-1)
    this.heap.length-- // 删除交换后的堆底节点，即原来的堆顶节点
    this.shiftDown(1) // 对交换到堆定的节点进行下沉操作，保证堆的结构正确
    return top
  }
  // 返回最大的节点
  getMin(){
    return this.heap[1]
  }
  // 获取当前堆的大小
  getSize(){
    return this.heap.length
  }
}


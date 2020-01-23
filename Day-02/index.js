const simple_list = require('./simple_list')
const list_get_size = require('./list_get_size')
const list_dump = require('./list_dump')
const list_add_elem_at_front = require('./list_add_elem_at_front')
const list_add_elem_at_back = require('./list_add_elem_at_back')
const list_add_elem_at_position = require('./list_add_elem_at_position')
const list_del_elem_at_front = require('./list_del_elem_at_front')
const list_del_elem_at_back = require('./list_del_elem_at_back')
const list_del_elem_at_position = require('./list_del_elem_at_position')
const list_get_elem_at_front = require('./list_get_elem_at_front')
const list_get_elem_at_back = require('./list_get_elem_at_back')
const list_get_elem_at_position = require('./list_get_elem_at_position')
const simple_stack = require('./simple_stack')
const stack_push = require('./stack_push')
const stack_pop = require('./stack_pop')
const simple_tree = require('./simple_tree')
const tree_is_empty = require('./tree_is_empty')
const tree_get_size = require('./tree_get_size')
const tree_get_deph = require('./tree_get_deph')
const tree_get_max_value = require('./tree_get_max_value')
const tree_get_min_value = require('./tree_get_min_value')
const tree_create_node = require('./tree_create_node')

///////////////////////////////////////////////

const data = 7
let newData = 8
let newStackData = 5
let size = 2

///////////////////////////////////////////////

let list = new simple_list(data)
list.next = new simple_list(13)
list.next.next = new simple_list(14)
list.next.next.next = new simple_list(15)

///////////////////////////////////////////////

let stack = new simple_stack(data)
stack.next = new simple_stack(21)
stack.next.next = new simple_stack(22)
stack.next.next.next = new simple_stack(23)

///////////////////////////////////////////////

let tree = new simple_tree(data) //1

tree.left = new simple_tree(8) //2
tree.left.left = new simple_tree(9) //3
tree.left.left.left = new simple_tree(10) //4

tree.right = new simple_tree(6) //5
tree.right.right = new simple_tree(5) //6

tree.right.left = new simple_tree(7) //7
tree.left.right = new simple_tree(7) //8
tree.right.left.left = new simple_tree(8) //9
tree.left.right.right = new simple_tree(6) //10

tree.right.left.right = new simple_tree(6) //11
tree.left.right.left = new simple_tree(8) //12
tree.right.left.right.left = new simple_tree(89) //13
tree.left.right.left.right = new simple_tree(1) //14

// console.log(list_get_size(list))
// list_dump(list)
// console.log(list_add_elem_at_front(list, newData))
// console.log(list_add_elem_at_back(list, newData))
// console.log(list_add_elem_at_position(list, newData, size))
// list_del_elem_at_front(list)
// console.log(list_del_elem_at_back(list))
// console.log(list_del_elem_at_position(list, size))
// console.log(list_get_elem_at_front(list))
// console.log(list_get_elem_at_back(list))
// console.log(list_get_elem_at_position(list, size))
// console.log(stack_push(stack))
// console.log(stack_pop(stack))
// console.log(tree)
// console.log(tree_is_empty(tree))
 console.log(tree_get_size(tree))
// console.log(tree_get_deph(tree))
// console.log(tree_get_max_value(tree))
// console.log(tree_get_min_value(tree))
// console.log(tree_create_node(tree, 80))
// console.log(tree_create_node(tree, 81))
// console.log(tree_create_node(tree, 82))
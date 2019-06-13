#include <iostream>
#include "binaryTree.h"

int main() {

    BinarySearchTree<int> obj;

    obj.insert(12);
    obj.insert(15);
    obj.postorder();

    return 0;
}
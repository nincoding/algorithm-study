/*

    LeetCode / Same Tree / Easy / 00:20:21
    https://leetcode.com/problems/same-tree/


    ## Pseudo Code ##
    
    - 동일한 구조이고, nodes가 같은 값이면 두 trees는 같다고 간주
    - p, q는 트리 노드
    - 각 트리의 시작 점인 p, q부터 아래로 탐색. 재귀를 사용한다.

    1. p, q가 둘 다 null이면 return true
    2. p, q 중 둘 중 하나가 null이면 return false;=
    2. p, q 의 val가 다르면 return false
    3. left, right를 재귀로 비교

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if ((p === null && q !== null) || (p !== null && q === null)) return false;
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

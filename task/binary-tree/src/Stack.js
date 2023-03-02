import React, { useState, useEffect } from "react";

import Traverse from "./Traverse";

function Stack() {
  const [tree, setTree] = useState(null);

  useEffect(() => {
    function Node(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }

    // insert function
    function insertNode(Tree, value) {
      var node = Tree,
        key;
      while (node.value !== value) {
        key = value < node.value ? "left" : "right";
        if (!node[key]) {
          node[key] = new Node(value);
          break;
        }
        node = node[key];
      }
      return Tree;
    }
    // traverse function
    function traverse(node) {
      console.log("value:" + node.value);
      if (node.left) {
        console.groupCollapsed("left:");
        traverse(node.left);
        console.groupEnd();
      } else {
        console.log("left:" + null);
      }

      if (node.right) {
        console.groupCollapsed("right:");
        traverse(node.right);
        console.groupEnd();
      } else {
        console.log("right:" + null);
      }
    }
    // driver methods
    var array = [1, 2, 3, 7, 4, 5, -3, -6, -2];
    var Tree = array.reduce(
      (t, v) => (t ? insertNode(t, v) : new Node(v)),
      null
    );
    setTree(Tree);
    console.group("R00T");
    // traverse(Tree);
    console.log(Tree);
    console.groupEnd();
  }, []);

  return (
    <div>
      <Traverse node={tree} />
    </div>
  );
}

export default Stack;

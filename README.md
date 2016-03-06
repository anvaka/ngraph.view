# ngraph.view

Similar to SQL table view creates [ngraph](https://github.com/anvaka/ngraph.graph)
view for given nodes.

The view will contain nodes from original graph; Edges in the view exist if and
only if they also exist in the original graph.

# usage

``` js
// Let's say we have a simple source graph:
srcGraph.addLink(1, 2);
srcGraph.addLink(1, 3);
srcGraph.addLink(2, 3);

// And we want to make a "view" into this graph, that contains only
// two nodes of the original graph (with ids 1 and 2):
var view = createView(srcGraph, [1, 2]);

// Now the following assertions are correct:
assert.equal(view.getNodesCount(), 2, 'There are only two nodes in the view');
assert.equal(view.getLinksCount(), 1, 'And there is just one link');
assert(view.hasLink(1, 2), 'The view has link between 1 and 2');
```

# license

MIT

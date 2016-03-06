var createGraph = require('ngraph.graph');

module.exports = createView;

function createView(graph, nodes) {
  var view = createGraph();
  nodes.forEach(addToView);
  nodes.forEach(addEdges);

  return view;

  function addToView(nodeId) {
    var node = graph.getNode(nodeId);

    if (!node) return; // TODO: Warn?
    view.addNode(node.id, node.data);
  }

  function addEdges(nodeId) {
    var node = graph.getNode(nodeId);

    if (!node) return; // TODO: Warn?
    graph.forEachLinkedNode(nodeId, addEdgeIfNecessary, true);

    function addEdgeIfNecessary(otherNode, link) {
      if (view.getNode(otherNode.id)) {
        view.addLink(link.fromId, link.toId, link.data)
      }
    }
  }
}

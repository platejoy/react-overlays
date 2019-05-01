var BLACKLIST = ['template', 'script', 'style'];

var isHidable = function isHidable(_ref) {
  var nodeType = _ref.nodeType,
      tagName = _ref.tagName;
  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
};

var siblings = function siblings(container, exclude, cb) {
  exclude = [].concat(exclude);
  [].forEach.call(container.children, function (node) {
    if (exclude.indexOf(node) === -1 && isHidable(node)) {
      cb(node);
    }
  });
};

export function ariaHidden(show, node) {
  if (!node) return;

  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}
export function hideSiblings(container, _ref2) {// siblings(container, [root, backdrop], node => ariaHidden(true, node))

  var root = _ref2.root,
      backdrop = _ref2.backdrop;
}
export function showSiblings(container, _ref3) {// siblings(container, [root, backdrop], node => ariaHidden(false, node))

  var root = _ref3.root,
      backdrop = _ref3.backdrop;
}
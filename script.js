function createDom(root) {
    // If the root is a string, return a text node
    if (typeof root === 'string') {
        return document.createTextNode(root);
    }

    // Create a DOM element based on the 'type' property of the root object
    const element = document.createElement(root.type);

    // If the root has attributes, add them to the created element
    if (root.attributes) {
        for (const [key, value] of Object.entries(root.attributes)) {
            element.setAttribute(key, value);
        }
    }

    // If the root has children, recursively append them to the element
    if (root.children) {
        root.children.forEach(child => {
            element.appendChild(createDom(child));
        });
    }

    return element;
}

module.exports = createDom;

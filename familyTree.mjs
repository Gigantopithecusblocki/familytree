
class FamilyMember {
    constructor(name) {
        this.name = name;
        this.children = [];
        console.log(`Created family member: ${this.name}`);
    }

    addChild(child) {
        if (child instanceof FamilyMember) {
            this.children.push(child);
            console.log(`Added child: ${child.name} to parent: ${this.name}`);
        } else {
            throw new Error("Child must be an instance of FamilyMember");
        }
    }

    findMember(name) {
        console.log(`Searching for member: ${name}`);
        if (this.name === name) {
            console.log(`Found member: ${this.name}`);
            return this;
        }
        for (let child of this.children) {
            let found = child.findMember(name);
            if (found) return found;
        }
        return null;
    }

    printTree(level = 0) {
        console.log(" ".repeat(level * 2) + "- " + this.name);
        this.children.forEach(child => child.printTree(level + 1));
    }

    countMembers() {
        const count = 1 + this.children.reduce((total, child) => total + child.countMembers(), 0);
        console.log(`Counted ${count} members under ${this.name}`);
        return count;
    }
}

class FamilyTree {
    constructor(rootName) {
        this.root = new FamilyMember(rootName);
        console.log(`Created family tree with root: ${rootName}`);
    }

    addMember(parentName, childName) {
        console.log(`Adding member: ${childName} under parent: ${parentName}`);
        const parent = this.root.findMember(parentName);
        if (parent) {
            parent.addChild(new FamilyMember(childName));
        } else {
            console.error(`Parent not found: ${parentName}`);
            throw new Error("Parent not found");
        }
    }

    displayTree() {
        console.log("Displaying family tree:");
        this.root.printTree();
    }

    getTotalMembers() {
        console.log("Getting total number of family members");
        return this.root.countMembers();
    }
}

// Declare and initialize the tree properly
const tree = new FamilyTree("Grandparent");
tree.addMember("Grandparent", "Parent");
tree.addMember("Parent", "Child");
tree.displayTree();
console.log(`Total Members: ${tree.getTotalMembers()}`);

export { FamilyMember, FamilyTree };

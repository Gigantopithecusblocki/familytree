// Unit testing using Mocha and Chai
import { expect } from 'chai';  // Use ESM import for Chai
import { FamilyMember, FamilyTree } from './familyTree.mjs';

describe('FamilyTree', function() {
    let tree;
    
    beforeEach(function() {
        tree = new FamilyTree('Grandparent');
    });
    
    it('should create a family tree with a root member', function() {
        expect(tree.root.name).to.equal('Grandparent');
    });
    
    it('should add a member correctly', function() {
        tree.addMember('Grandparent', 'Parent');
        expect(tree.root.findMember('Parent')).to.not.be.null;
    });
    
    it('should throw an error if the parent is not found', function() {
        expect(() => tree.addMember('Unknown', 'Child')).to.throw("Parent not found");
    });

    it('should find an existing member', function() {
        tree.addMember('Grandparent', 'Parent');
        tree.addMember('Parent', 'Child');
        expect(tree.root.findMember('Child').name).to.equal('Child');
    });

    it('should count total family members correctly', function() {
        tree.addMember('Grandparent', 'Parent');
        tree.addMember('Parent', 'Child');
        tree.addMember('Parent', 'Sibling');
        expect(tree.getTotalMembers()).to.equal(4);
    });
});

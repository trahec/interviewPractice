#!/bin/python3

#https://www.hackerrank.com/challenges/30-binary-search-trees

class Node:
    def __init__(self,data):
        self.right=self.left=None
        self.data = data
class Solution:
    def insert(self,root,data):
        if root==None:
            return Node(data)
        else:
            if data<=root.data:
                cur=self.insert(root.left,data)
                root.left=cur
            else:
                cur=self.insert(root.right,data)
                root.right=cur
        return root
		
		def getHeight(self,root):
        #Write your code here       
        if root.right==None and root.left==None:
            return 0
        elif root.right==None:
            return 1 + self.getHeight(root.left)
        elif root.left==None:
            return 1 + self.getHeight(root.right)
        else:
            return 1 + max(self.getHeight(root.left),self.getHeight(root.right))
		
		#End my code
			
T=int(input())
myTree=Solution()
root=None
for i in range(T):
    data=int(input())
    root=myTree.insert(root,data)
height=myTree.getHeight(root)
print(height)       
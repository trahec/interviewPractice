#!/bin/python3
"""
https://www.hackerrank.com/contests/w31/challenges/accurate-sorting
"""

import sys

def isSortable(list):
    for i in range(0, len(list)-1):
        e = list[i]
        next_e = list[i+1]
        if e <= next_e:
            continue
        elif e-next_e==1:
            list[i], list[i+1] = list[i+1], list[i]
        else:
            return "No"
    return "Yes"

q = int(input().strip())
for a0 in range(q):
    n = int(input().strip())
    a = list(map(int, input().strip().split(' ')))
    # Write Your Code Here

    print(isSortable(a))
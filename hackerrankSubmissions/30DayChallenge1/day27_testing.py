"""https://www.hackerrank.com/challenges/30-testing"""

import unittest

class Tests(unittest.TestCase):

    def test_above_absentee_limit(self):
        #class should be cancelled
        numberOfStudents = 4
        studentThreshold = 3 
        timeArray = [-1, -3, 4, 2]
        result = Professor().getAttendance(numberOfStudents, studentThreshold, timeArray)
        self.assertEqual(result, "YES")

    def test_below_absentee_limit(self):
        #class should not be cancelled
        numberOfStudents = 5
        studentThreshold = 2 
        timeArray = [0, -1, 2, 1, 4]
        result = Professor().getAttendance(numberOfStudents, studentThreshold, timeArray)
        self.assertEqual(result, "NO")

class Professor:

    def __init__(self):
        pass

    def getAttendance(self, numberOfStudents, studentThreshold, timeArray):
        totalAbsent = 0

        for index in range(0, len(timeArray)-1):
            currentTime = timeArray[index]
            if currentTime>0:
                totalAbsent+=1

        if totalAbsent<studentThreshold:
            return "YES" #class cancelled
        else:
            return "NO" #class not cancelled

if __name__ == '__main__':
    unittest.main()
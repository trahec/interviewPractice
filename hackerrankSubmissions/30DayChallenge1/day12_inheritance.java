/*
* https://www.hackerrank.com/challenges/30-inheritance
*/

import java.util.*;

class Person {
	protected String firstName;
	protected String lastName;
	protected int idNumber;
	
	// Constructor
	Person(String firstName, String lastName, int identification){
		this.firstName = firstName;
		this.lastName = lastName;
		this.idNumber = identification;
	}
	
	// Print person data
	public void printPerson(){
		 System.out.println(
				"Name: " + lastName + ", " + firstName 
			+ 	"\nID: " + idNumber); 
	} 
}

//trahec start code
class Student extends Person{
	private final int[] testScores;
        
    public Student(String firstName, String lastName, int id, int[] testScores){
        super(firstName, lastName, id);
        this.testScores = testScores;    
    }
    
    public char calculate(){
        return Scoring.score(testScores);//static call       
    }
}

class Scoring{  
    //define ranges as static member vars, new object per range
    //add each range object to a static member map gradingScale, with grade char values 
    //static method score takes int[] scores as parameter 
    //calcuale avg of scores
    //loop through gradingScale map, Range.contains(avg), if true return grade value 
    
    private static final HashMap<Range, Character> gradingScale = new HashMap<Range, Character>() {{
            put(new Range(0,40), new Character('T'));
            put(new Range(40,55), new Character('D'));
            put(new Range(55,70), new Character('P'));
            put(new Range(70,80), new Character('A'));
            put(new Range(80,90), new Character('E'));
            put(new Range(90,101), new Character('O'));
        }};
      
    public static char score(int[] scores){
        final double average = getAverage(scores);
        return getGrade(average);
    }
         
    private static double getAverage(int[] scores){
        double sum = 0;
        for(int x=0; x<scores.length; x++){
            sum += scores[x];
        }
        return sum / scores.length;
    }
    
    private static char getGrade(double average){
        Set<Range> keySet = gradingScale.keySet();
        for(Range gradeRange: keySet){
            if(gradeRange.contains(average)){
                return (gradingScale.get(gradeRange)).charValue();
            }
        }
        return 'x';
    }
}

class Range{
    private final int lowerBound;
    private final int upperBound;
    
    public Range(int lowerBound, int upperBound){
        this.lowerBound = lowerBound;
        this.upperBound = upperBound;
    }
    
    public boolean contains(double n){
        return n>=lowerBound && n<upperBound;   
    }
}
//trahec end code

class Solution {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String firstName = scan.next();
		String lastName = scan.next();
		int id = scan.nextInt();
		int numScores = scan.nextInt();
		int[] testScores = new int[numScores];
		for(int i = 0; i < numScores; i++){
			testScores[i] = scan.nextInt();
		}
		scan.close();
		
		Student s = new Student(firstName, lastName, id, testScores);
		s.printPerson();
		System.out.println("Grade: " + s.calculate());
	}
}
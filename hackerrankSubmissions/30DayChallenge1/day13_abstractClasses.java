/*
* https://www.hackerrank.com/challenges/30-abstract-classes
*/

import java.util.*;

abstract class Book {
    String title;
    String author;
    
    Book(String title, String author) {
        this.title = title;
        this.author = author;
    }
    
    abstract void display();
}

// Start custom code
class MyBook extends Book{
    private final int price;
  
    public MyBook(String title, String author, int price){
        super(title, author);//always call super(); to initialise, when extending a class 
        this.price = price; 
    }
  
    public void display(){
        System.out.println("Title: " + super.title 
                          + "\nAuthor: " + super.author
                          + "\nPrice: " + price);
    }
}
// End custom code

public class Solution {
   
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String title = scanner.nextLine();
        String author = scanner.nextLine();
        int price = scanner.nextInt();
        scanner.close();

        Book book = new MyBook(title, author, price);
        book.display();
    }
}
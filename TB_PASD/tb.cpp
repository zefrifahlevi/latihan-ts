#include <iostream>
#include <string>
#include <stack>
#include <queue>

using namespace std;

// Fungsi untuk proses bisnis stack (misalnya manajemen buku perpustakaan)
void stackBusiness()
{
    stack<string> bookStack;

    int choice;
    string bookTitle;

    do
    {
        cout << "\nStack Business\n";
        cout << "1. Push Book\n";
        cout << "2. Pop Book\n";
        cout << "0. Logout\n";
        cout << "Choice: ";
        cin >> choice;

        switch (choice)
        {
            case 1:
                cout << "Enter book title: ";
                cin >> bookTitle;
                bookStack.push(bookTitle);
                cout << "Book pushed.\n";
                break;
            case 2:
                if (!bookStack.empty())
                {
                    bookStack.pop();
                    cout << "Book popped.\n";
                }
                else
                {
                    cout << "No books in the stack.\n";
                }
                break;
            case 0:
                cout << "Logging out from stack interface...\n";
                break;
            default:
                cout << "Invalid choice.\n";
                break;
        }
    } while (choice != 0);
}

// Fungsi untuk proses bisnis queue (misalnya antrian pemesanan tiket)
void queueBusiness()
{
    queue<int> ticketQueue;

    int choice, ticketNumber;

    do
    {
        cout << "\nQueue Business\n";
        cout << "1. Enqueue Ticket\n";
        cout << "2. Dequeue Ticket\n";
        cout << "0. Logout\n";
        cout << "Choice: ";
        cin >> choice;

        switch (choice)
        {
            case 1:
                cout << "Enter ticket number: ";
                cin >> ticketNumber;
                ticketQueue.push(ticketNumber);
                cout << "Ticket enqueued.\n";
                break;
            case 2:
                if (!ticketQueue.empty())
                {
                    ticketQueue.pop();
                    cout << "Ticket dequeued.\n";
                }
                else
                {
                    cout << "No tickets in the queue.\n";
                }
                break;
            case 0:
                cout << "Logging out from queue interface...\n";
                break;
            default:
                cout << "Invalid choice.\n";
                break;
        }
    } while (choice != 0);
}

int main(){
    string username, password;

    // Loop login
    while (true) {
    	cout << "Selamat Datang di Program Penampungan Barang";
    	cout << "Silahkan untuk Melakukan Login";
    	cout << "Username: ";
        cin >> username;
        cout << "Password: ";
        cin >> password;

        if (username == "admin" && password == "admin123"){
            // Admin interface
            cout << "\nWelcome, Admin!\n";
            // Implement admin interface functionality
            break;
        }
        else if (username == "stack" && password == "stack123"){
            // Stack user interface
            cout << "\nWelcome, Stack User!\n";
            stackBusiness();
            break;
        }
        else if (username == "queue" && password == "queue123")
        {
            // Queue user interface
            cout << "\nWelcome, Queue User!\n";
            queueBusiness();
            break;
        }
        else{
            cout << "Invalid username or password. Please try again";
		}
	}
}
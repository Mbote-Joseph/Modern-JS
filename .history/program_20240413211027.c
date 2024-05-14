#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>

// Global variables to store the sums
int sum_even_numbers = 0;
int sum_odd_numbers = 0;

// Function to sum even numbers
void* sum_even(void* arg) {
    int x = *(int*)arg;
    printf("Child Thread 1 ID: %ld\n", pthread_self());
    for (int i = 2; i <= x; i += 2) {
        sum_even_numbers += i;
    }
    pthread_exit(NULL);
}

// Function to sum odd numbers
void* sum_odd(void* arg) {
    int y = *(int*)arg;
    printf("Child Thread 2 ID: %d\n", pthread_self());
    for (int i = 1; i <= y; i += 2) {
        sum_odd_numbers += i;
    }
    pthread_exit(NULL);
}

int main(int argc, char *argv[]) {
    if (argc != 3) {
        fprintf(stderr, "Usage: %s <x> <y>\n", argv[0]);
        return 1;
    }

    int x = atoi(argv[1]);
    int y = atoi(argv[2]);

    printf("Parent/Main Thread ID: %d\n", pthread_self());

    pthread_t thread1, thread2;

    // Creating threads
    pthread_create(&thread1, NULL, sum_even, &x);
    pthread_create(&thread2, NULL, sum_odd, &y);

    // Waiting for threads to complete
    pthread_join(thread1, NULL);
    pthread_join(thread2, NULL);

    // Displaying the results
    printf("Sum of all even numbers: %d\n", sum_even_numbers);
    printf("Sum of all odd numbers: %d\n", sum_odd_numbers);

    // Calculating the ratio
    double ratio = (double)sum_even_numbers / sum_odd_numbers;
    printf("Result of the calculation: %.2f\n", ratio);

    return 0;
}

#include <iostream>
#include <stdlib.h>
#include <time.h>
#include <stdio.h>
#include <vector>
#include <chrono>
#include <algorithm>

using namespace std;

int main() {

  srand(time(NULL));

  int arraySize = 10000000;

  auto start = chrono::high_resolution_clock::now();
  vector<int> arr(arraySize);
  for(int i = 0; i < arraySize; i++) {
    arr[i] =rand() % arraySize;
  }
  auto end = chrono::high_resolution_clock::now();
  auto duration = chrono::duration_cast<chrono::milliseconds>(end - start).count();
  cout << "Array generated in " << duration << "ms" << endl;

  start = chrono::high_resolution_clock::now();
  sort(arr.begin(), arr.end());
  end = chrono::high_resolution_clock::now();
  duration = chrono::duration_cast<chrono::milliseconds>(end - start).count();
  cout << "Array sorted in " << duration << "ms" << endl;

}

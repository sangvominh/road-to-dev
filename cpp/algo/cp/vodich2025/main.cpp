#include <bits/stdc++.h>
using namespace std;

long long recursion(long long n){
    if(n == 1) return 1;
    return n * recursion(n-1);
}

int main(){
    cout << recursion(6);
    return 0;
}

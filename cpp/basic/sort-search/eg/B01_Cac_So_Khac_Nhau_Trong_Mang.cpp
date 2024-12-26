#include <bits/stdc++.h>
using namespace std;



int main() {
    ios_base::sync_with_stdio(false); cin.tie(nullptr); cout.tie(nullptr);
    
 	int n; cin>>n;
 	int a[n];
 	for(int i=0; i<n; i++) cin>>a[i];
 	sort(a, a+n);
 	int cnt = 1; // cái khác đầu tiên hoạc cuối có hai cái lận
 	for(int i=0; i<n-1; i++){
 		if(a[i] != a[i+1])
 			cnt++;
 	}   
 	cout<<cnt;

    return 0;
}
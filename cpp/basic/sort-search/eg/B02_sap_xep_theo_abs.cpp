// #include <bits/stdc++.h>
// using namespace std;

// bool cmp(int a, int b) {
// 	return abs(a) < abs(b);
// }

// int main() {
// 	ios_base::sync_with_stdio(false); cin.tie(nullptr); cout.tie(nullptr);

// 	int n; cin >> n;
// 	int a[n];
// 	for (int &x : a) cin >> x;
// 	stable_sort(a, a + n, cmp);
// 	for (int &x : a) cout << x << " ";

// 	return 0;
// }


//Khong dung stable_sort
#include <bits/stdc++.h>
using namespace std;
struct ele{
	int value;
	int idx;
};

bool cmp(ele a, ele b){
	if(abs(a.value) == abs(b.value))
		return a.idx < b.idx;
	else
		return abs(a.value) < abs(b.value);
}

int main() {
    ios_base::sync_with_stdio(false); cin.tie(nullptr); cout.tie(nullptr);
    
 	int n; cin>>n;
 	ele a[n]; 
 	for(int i=0; i<n; i++){
 		cin>>a[i].value;
 		a[i].idx = i;
 	}
 	sort(a, a+n, cmp);

 	for(auto &x : a) cout<<x.value<<" ";   

    return 0;
}


// Phương pháp sinh
// số tiếp theo là số nhỏ nhất lớn hơn số hiện tại
// b1: tìm số a[i] < a[i+1], nghĩa là phải tồn tại cặp số sao cho số đứng trước nhỏ hơn số đứng sau 
// để có ít nhất swap hai số này vẫn còn tồn tại cấu hình lớn hơn cấu hình hiện tại
// b2: tìm số lớn hơn a[i] nhưng mà là nhỏ nhất phía sau nó, rồi hoán vị hai số đó (đi từ cuối lên gặp số đầu tiến thì là nó)
// b3: sắp xếp i+1 cho đến cuối thành tăng dần (chỉ cần lật ngược vì vốn dĩ đã giảm dần)

#include <bits/stdc++.h>
using namespace std;

int a[1000], n, check = 1;

void khoiTao(int n){
	for(int i=1; i<=n ;i++){
		a[i] = i;
	}
}

void sinh(){
	// tìm a[i] < a[i+1]
	int i = n-1;
	while(i >= 0 && a[i] > a[i+1]){
		i--;
	}
	//đến đây: 1 là cấu hình cuối 2 là cấu hình kế tiếp
	//cau hinh cuoi cung
	if(i == 0){
		check = 0;
	} else {
		// cấu hình kế tiếp
		int j = n-1;
		while(a[j] < a[i]){
			j--;
		}
		swap(a[i], a[j]);

		//reverse(a + i + 1, a + n + 1);
		// hai con tro:
		int l = i + 1, r = n;
		while(l < r){
			swap(a[l], a[r]);
			l++; r--;
		}
	}
}

int main() {
    ios_base::sync_with_stdio(false); cin.tie(nullptr); cout.tie(nullptr);
    
    cin>>n;
    khoiTao(n);

    while(check){
    	for(int i=1; i<=n; i++){
    		cout<<a[i]<<" ";
    	}
    	cout<<endl;
    	sinh();
    }

    return 0;
}
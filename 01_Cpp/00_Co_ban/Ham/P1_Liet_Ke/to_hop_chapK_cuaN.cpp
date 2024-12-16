// phương pháp sinh: sinh tập con k phần tử từ n phân tử
// giới hạn lớn nhất tại mỗi vị trí trong tổ hợp tương ứng với giá trị tại tổ hợp cuối cùng
// vd: tổ hợp cuối cùng: 6 7 8 9 thì điều kiện là i1 max là 6, i2 max là 7 ... công thức: maxI = n - k + i;
// b1: tìm số đầu tiên chưa max tăng nó lên 1 đơn vị
// b2: sau khi tăng thì các số phía sau nó sẽ tăng lên 1 từ chính nó
// vd: 1 2 3 9 -> 1 2 4 5

#include <bits/stdc++.h>
using namespace std;

int n, k, a[100], check = 1;

// chu y: khoi tao den k thoi
void khoiTao(){
	for(int i = 1; i<=k; i++){
		a[i] = i;
	}
}

void sinh(){
	// tim so dau tien chua max tu phai sang trai
	int i = k;
	while(i > 0 && a[i] == n - k + i){
		i--;
	}

	if(i == 0){
		check = 0;
	} else {
		// tăng hiện tại và tăng các số sau đó lên 1 khởi đầu từ số hiện tại
		a[i]++;
		for(int j = i + 1; j<=k; j++){
			a[j] = a[i] + 1;
		}
	}
}

int main() {
    ios_base::sync_with_stdio(false); cin.tie(nullptr); cout.tie(nullptr);
    
    cin>>n>>k;
    khoiTao();

    while(check){
    	for(int i = 1; i<=k; i++){
    		cout<<a[i]<<" ";
    	}
    	cout<<endl;
    	sinh();
    }

    return 0;
}
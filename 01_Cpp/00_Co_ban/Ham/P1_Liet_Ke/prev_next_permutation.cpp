#include <bits/stdc++.h>
using namespace std;

// hàm này trả về false nếu cấu hình hiện tại là cấu hình cuối cùng

int main() {
	ios_base::sync_with_stdio(false); cin.tie(nullptr); cout.tie(nullptr);

	int n; cin >> n;
	int a[n + 1];
	for (int i = 0; i < n; i++) {
		a[i] = i + 1;
		//prev: a[i] = n - i;
	}

	do {
		for (int i = 0; i < n; i++) {
			cout << a[i] << " ";
		}
		cout << "\n";
	} while (next_permutation(a, a + n));

	return 0;
}
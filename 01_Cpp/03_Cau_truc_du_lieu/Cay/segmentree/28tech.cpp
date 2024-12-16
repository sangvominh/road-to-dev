#include <bits/stdc++.h>
using namespace std;

const int maxn = 200005;

int a[maxn], n;
int t[4 * maxn];

/*
t[v]: tong a[l]->a[r]

t[1] = 0->n-1;
t[2] = 0->mid
t[3] = mid+1 -> n-1;
*/
void build(int v, int l, int r) {
	if (l == r) {
		t[v] = a[l]; // leaf t[v] = a[r]
	}
	else {
		int m = (l + r) / 2;
		build(2 * v, l, m);
		build(2 * v + 1, m + 1, r);
		t[v] = t[2 * v] + t[2 * v + 1];
	}
}

//query (logN), sum l->r
long sum(int v, int tl, int tr, int l, int r) {
	if (l > r) return 0;
	if (tl == l && tr == r) return t[v];
	else {
		int tm = (tl + tr) / 2;
		return sum(2 * v, tl, tm, l, min(tm, r)) + sum(2 * v + 1, tm + 1, tr, max(tm + 1, l), r);
	}
}

void update(int v, int l, int r, int pos, int val) {
	if (l == r) t[v] = val;
	else {
		int m = (l + r) / 2;
		if (pos < m) update(2 * v, l, m, pos, val);
		else update(2 * v + 1, m + 1, r, pos, val);
		t[v] = t[2 * v] + t[2 * v + 1];
	}
}

int main() {
	ios_base::sync_with_stdio(false); cin.tie(nullptr); cout.tie(nullptr);

	cin >> n;
	for (int i = 0; i < n; i++) {
		cin >> a[i];
	}

	build(1, 0, n - 1);
	for (int i = 1; i < 4; i++) {
		cout << t[i] << " ";
	}
	cout << endl;
	int l, r; cin >> l >> r;
	cout << sum(1, 1, n - 1, l, r);
	cout << endl;
	update(1, 0, n - 1, 3, 9999);
	for (int i = 1; i < 8 * 4; i++) {
		cout << t[i] << " ";
	}
	return 0;
}
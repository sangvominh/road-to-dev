n, q = map(int, input().split())
nums = list(map(int, input().split()))

f = [0] * len(nums)
f[0] = nums[0]
for i in range(1, len(nums)):
    f[i] = f[i-1] + nums[i]

for _ in range(q):
    l, r = map(int, input().split())
    if l == 0:
        print(f[r])
    else:
        print(f[r] - f[l-1])
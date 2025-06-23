function solution(n, costs) {
    var answer = 0;
    // 1. 모든 간선을 비용 순으로 정렬
    costs.sort((a, b) => a[2] - b[2]);

    // 2. 비용이 가장 낮은 간선부터 선택
    const parent = Array(n).fill(0).map((_, index) => index);

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x])
        }
        return parent[x]
    }

    function union (a, b) {
        const rootA = find(a);
        const rootB = find(b);

        if(rootA !== rootB) {
            parent[rootB] = rootA;
            return true;
        }
        return false;
    }

    let totalCost = 0;
    for(const [a, b, cost] of costs) {
        if (union(a,b)){
            totalCost += cost;
        }
    }

    return totalCost;
}
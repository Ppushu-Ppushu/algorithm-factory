function solution(n, wires) {
    let minDiff = Infinity;

    const buildGraph = (n, wires, skipIdx) => {
        const graph = Array.from({ length: n + 1 }, () => []);
        wires.forEach(([a, b], idx) => {
            if (idx === skipIdx) return;
            graph[a].push(b);
            graph[b].push(a);
        });
        return graph;
    };

    const bfsCount = (start, graph, visited) => {
        let queue = [start];
        visited[start] = true;
        let count = 1;

        while (queue.length) {
            const node = queue.shift();
            for (const neighbor of graph[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                    count++;
                }
            }
        }
        return count;
    };

    for (let i = 0; i < wires.length; i++) {
        const graph = buildGraph(n, wires, i);
        const visited = Array(n + 1).fill(false);
        const count = bfsCount(1, graph, visited);
        const other = n - count;
        const diff = Math.abs(count - other);
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
}

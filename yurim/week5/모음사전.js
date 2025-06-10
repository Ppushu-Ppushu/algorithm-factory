function solution(word) {
    const chars = ['A', 'E', 'I', 'O', 'U'];
    const dict = [];

    const dfs = (current) => {
        if (current.length > 5) return;
        if (current.length > 0) dict.push(current);
        for (const ch of chars) {
            dfs(current + ch);
        }
    };

    dfs('');

    return dict.indexOf(word) + 1;
}
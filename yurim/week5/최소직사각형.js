function solution(sizes) {
    var answer = 0;

    const arrangedSizes = sizes.map((size) => {
        if(size[0] < size[1]) {
            let temp = size[0]
            size[0] = size[1];
            size[1] = temp;
            return size;
        }
        return size;
    })

    const width = [];
    const height = [];
    arrangedSizes.forEach((size) => {
        width.push(size[0]);
        height.push(size[1]);
    })

    const maxWidth=width.reduce((a,b)=>Math.max(a,b), -Infinity);
    const maxheight=height.reduce((a,b)=>Math.max(a,b), -Infinity)

    return maxWidth *maxheight;
}
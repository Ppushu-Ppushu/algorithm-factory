function solution(routes) {
    routes.sort((a,b) => a[1] - b[1]);

    let cameraPosition = -31000;
    let camera = 0;

    for (const [start, end] of routes) {
        if (start > cameraPosition) {
            camera ++;
            cameraPosition = end;
        }
    }
    return camera;
}
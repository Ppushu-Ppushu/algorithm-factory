function solution(bridge_length, weight, truck_weights) {
    var time = 0;
    var onBridgeWeight = 0;

    const queue = new Array(bridge_length).fill(0);
    const truckLength = truck_weights.length;

    while (truck_weights.length > 0 || onBridgeWeight > 0) {
        time ++;

        if (queue.length > 0) {
            onBridgeWeight -= queue.shift()
        };

        if (truck_weights[0] + onBridgeWeight <= weight){
            const nextTruck = truck_weights.shift();
            queue.push(nextTruck);
            onBridgeWeight += nextTruck;
        } else {
            queue.push(0)
        }
    }

    return time;
}
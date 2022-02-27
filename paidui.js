/**
import { func } from './webpack_exam/node_modules/@webassemblyjs/ast/esm/nodes';
 * 实现批量请求数据，
 * 并控制请求并发数量，最后所有请求结束之后，执行callback回调函数
 */

const allRequest = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function sendRequest(urls, max, callback) {
    const blockQueue = []; // 等待排队的那个队列
    let currentReqNumber = 0; // 现在请求的数量是
    let numberOfRequestsDone = 0; // 已经请求完毕的数量是
    const results = new Array(urls.length).fill(false); // 所有请求的返回结果，先初始化上

    // 先排队
    async function init() {
        for (let i = 0; i < allRequest.length; i++) {
            request(i, urls[i])
        }
    }

    // 请求
    async function request(index, url) {
        if (currentReqNumber >= max) {
            await new Promise(resolve => blockQueue.push(resolve))
        }
        currentReqNumber++;
        try {
            const res = await fetch(url);
            results[index] = res;
        } catch (error) {
            results[index] = error;
        } finally {
            currentReqNumber--;
            numberOfRequestsDone++;
        }
        if (blockQueue.length) {
            // 每完成一个就从阻塞队列里剔除一个
            const resolveFunc = blockQueue.shift();
            resolveFunc();
            // blockQueue[0](); // 将最先进入阻塞队列的 Promise 从 Pending 变为 Fulfilled，
            // // 也就是执行resolve函数了，后面不就能继续进行了嘛
            // blockQueue.shift();
        }
        if (numberOfRequestsDone === urls.length) {
            callbackFunc(results);
        }
    }
    init()
}
sendRequest(allRequest, 3, result => console.log(result))